import { FormEvent, ReactNode, useState } from "react";
import { TSGT_Button } from "../commom/button/button";
import { Message, useChat } from "ai/react";
import { useSnackbar } from "@/context/snackbar-context";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";
import { cn } from "@/app/utils/cn";
import { IntermediateStep } from "./IntermediateStep";
import { ChatMessageBubble } from "./ChatMessageBubble";
import { Button } from "@/app/ui/button";
import { ArrowDown, Paperclip } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/app/ui/dialog";
import { Checkbox } from "@/app/ui/checkbox";

function ChatInput(props: {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading?: boolean;
    placeholder?: string;
    children?: ReactNode;
    className?: string;
  }) {
    return (
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          e.preventDefault();
          props.onSubmit(e);
        }}
        className={"flex w-full mb-8"}
      >
        <div className="border border-input bg-white rounded-lg flex justify-between gap-2 max-w-[768px] w-full mx-auto">
          <input
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            className="border-none outline-none bg-transparent p-4 w-full"
          />
  
          <div className="flex justify-right ml-4">
            <div className="flex gap-3">{props.children}</div>
  
            <TSGT_Button
            text={"Send"}
            type={"submit"}
            link={undefined}
          />
           
          </div>
        </div>
      </form>
    );
  }

  
  function StickyToBottomContent(props: {
    content: ReactNode;
    footer?: ReactNode;
    className?: string;
    contentClassName?: string;
  }) {
    const context = useStickToBottomContext();
  
    // scrollRef will also switch between overflow: unset to overflow: auto
    return (
      <div
        ref={context.scrollRef}
        style={{ width: "100%", height: "400px" }}
        className={cn("grid grid-rows-[1fr,auto]", props.className)}
      >
        <div ref={context.contentRef} className={props.contentClassName}>
          {props.content}
        </div>
  
        {props.footer}
      </div>
    );
  }

  function ChatMessages(props: {
    messages: Message[];
    emptyStateComponent: ReactNode;
    sourcesForMessages: Record<string, any>;
    aiEmoji?: string;
    className?: string;
  }) {
    return (
      <div className="flex flex-col max-w-[768px] mx-auto pb-12 w-full">
        {props.messages.map((m, i) => {
          if (m.role === "system") {
            return <IntermediateStep key={m.id} message={m} />;
          }
  
          const sourceKey = (props.messages.length - 1 - i).toString();
          return (
            <ChatMessageBubble
              key={m.id}
              message={m}
              aiEmoji={props.aiEmoji}
              sources={props.sourcesForMessages[sourceKey]}
            />
          );
        })}
      </div>
    );
  }
   
  function ScrollToBottom(props: { className?: string }) {
    const { isAtBottom, scrollToBottom } = useStickToBottomContext();
  
    if (isAtBottom) return null;
    return (
      <Button
        variant="outline"
        className={props.className}
        onClick={() => scrollToBottom()}
      >
        <ArrowDown className="w-4 h-4" />
        <span>Scroll to bottom</span>
      </Button>
    );
  }
  
export const Chatbot = (props: {
  emptyStateComponent: ReactNode;
  placeholder?: string;
  emoji?: string;
  showIngestForm?: boolean;
  showIntermediateStepsToggle?: boolean;
    endpoint: string;
}) => {
    const showSnackbar = useSnackbar();
    
  const [sourcesForMessages, setSourcesForMessages] = useState<
    Record<string, any>
  >({});
  const [intermediateStepsLoading, setIntermediateStepsLoading] =
  useState(false);
  const [showIntermediateSteps, setShowIntermediateSteps] = useState(
    !!props.showIntermediateStepsToggle,
  );

  const chat = useChat({
    api: props.endpoint,
    onResponse(response) {
      const sourcesHeader = response.headers.get("x-sources");
      const sources = sourcesHeader
        ? JSON.parse(Buffer.from(sourcesHeader, "base64").toString("utf8"))
        : [];

      const messageIndexHeader = response.headers.get("x-message-index");
      if (sources.length && messageIndexHeader !== null) {
        setSourcesForMessages({
          ...sourcesForMessages,
          [messageIndexHeader]: sources,
        });
        alert(sourcesForMessages)
      }
    },
    streamMode : "text",
    onError: (e) =>{
        showSnackbar(`Error while processing your request`,"error");
        console.log(e.message);
    }
   });

  async function sendMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (chat.isLoading || intermediateStepsLoading) return;

    if (!showIntermediateSteps) {
      chat.handleSubmit(e);
      return;
    }

    // Some extra work to show intermediate steps properly
    setIntermediateStepsLoading(true);

    chat.setInput("");
    // const {messages, setMessages}=chat;
    const messagesWithUserReply = chat.messages.concat({
      id: chat.messages.length.toString(),
      content: chat.input,
      role: "user",
    });
    
    chat.setMessages(messagesWithUserReply);

    const response = await fetch(props.endpoint, {
      method: "POST",
      body: JSON.stringify({
        messages: messagesWithUserReply,
        show_intermediate_steps: true,
      }),
    });

    const json = await response.json();
    setIntermediateStepsLoading(false);

    if (!response.ok) {
        showSnackbar(`Error while processing your request`,"error");
        console.error(json.error);
      };
      return;
    

    const responseMessages: Message[] = json.messages;

    // Represent intermediate steps as system messages for display purposes
    // TODO: Add proper support for tool messages
    const toolCallMessages = responseMessages.filter(
      (responseMessage: Message) => {
        return (
          (responseMessage.role === "assistant" &&
            !!responseMessage.tool_calls?.length) ||
          responseMessage.role === "tool"
        );
      },
    );

    const intermediateStepMessages = [];
    for (let i = 0; i < toolCallMessages.length; i += 2) {
      const aiMessage = toolCallMessages[i];
      const toolMessage = toolCallMessages[i + 1];
      intermediateStepMessages.push({
        id: (messagesWithUserReply.length + i / 2).toString(),
        role: "system" as const,
        content: JSON.stringify({
          action: aiMessage.tool_calls?.[0],
          observation: toolMessage.content,
        }),
      });
    }
    const newMessages = messagesWithUserReply;
    for (const message of intermediateStepMessages) {
      newMessages.push(message);
      chat.setMessages([...newMessages]);
      await new Promise((resolve) =>
        setTimeout(resolve, 1000 + Math.random() * 1000),
      );
    }

    chat.setMessages([
      ...newMessages,
      {
        id: newMessages.length.toString(),
        content: responseMessages[responseMessages.length - 1].content,
        role: "assistant",
      },
    ]);
  } 
    return(
      <StickToBottom>
      <StickyToBottomContent
        className=""
        contentClassName="py-8 px-2"
        content={
          chat.messages.length === 0 ? (
            <div>{props.emptyStateComponent}</div>
          ) : (
            <ChatMessages
              aiEmoji={props.emoji}
              messages={chat.messages}
              emptyStateComponent={props.emptyStateComponent}
              sourcesForMessages={sourcesForMessages}
            />
          )
        }
        footer={
          <div className="sticky bottom-0 px-2 bg-white">
            <ScrollToBottom className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-white" />
            <ChatInput
              value={chat.input}
              onChange={chat.handleInputChange}
              onSubmit={sendMessage}
              loading={chat.isLoading || intermediateStepsLoading}
              placeholder={
                props.placeholder ?? "How can TS GLOBAL TECH. help you?"
              }
            >
              {props.showIngestForm && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="pl-2 pr-3 -ml-2"
                      disabled={chat.messages.length !== 0}
                    >
                      <Paperclip className="size-4" />
                      <span>Upload document</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Upload document</DialogTitle>
                      <DialogDescription>
                        Upload a document to use for the chat.
                      </DialogDescription>
                    </DialogHeader>
                    {/* <UploadDocumentsForm /> */}
                  </DialogContent>
                </Dialog>
              )}

              {props.showIntermediateStepsToggle && (
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="show_intermediate_steps"
                    name="show_intermediate_steps"
                    checked={showIntermediateSteps}
                    disabled={chat.isLoading || intermediateStepsLoading}
                    onCheckedChange={(e) => setShowIntermediateSteps(!!e)}
                  />
                  <label htmlFor="show_intermediate_steps" className="text-sm">
                    Show intermediate steps
                  </label>
                </div>
              )}
            </ChatInput>
          </div>
        }
      ></StickyToBottomContent>
    </StickToBottom>
    )
}


