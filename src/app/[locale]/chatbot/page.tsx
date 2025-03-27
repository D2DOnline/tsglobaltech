"use client";

import { Chatbot } from "@/app/_components/chatbot/chatbot";
import { PageHeader } from "@/app/_components/page-header/page-header";
import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";
import { GuideInfoBox } from "./GuideInfoBox";

const InfoCard = (
  <GuideInfoBox>
    <ul>
      <li>
        <span className="ml-1">
          This is an AI chatbot,
          developed by TS GLOBAL TECH.
        </span>
      </li>
      <li>
        <span className="ml-1">
          It uses OpenAI's LLM "gpt-4o-mini" to generate answer.
        </span>
      </li>
    </ul>
  </GuideInfoBox>
);

export default function ChatbotPage() {
  const t = useTranslations();
  return (
    <>
      <PageHeader heading={"AI chatbot"} />
      <Chatbot
        endpoint={"/api/chat"}
        emoji="favicon.ico"
        placeholder="Who are you?"
        emptyStateComponent={InfoCard}
      />
    </>
  );
}