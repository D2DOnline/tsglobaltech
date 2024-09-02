import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import { EmailSignature } from "./email-signature";

type props = {
  fullName: string;
  email: string;
};
export const EmailTemplateContactUsThankyou = ({ fullName, email }: props) => {
  const containerStyle = {
    margin: "0 auto",
    padding: "0 1.25rem",
    marginTop: "1.25rem",
    marginBottom: "3rem",
  };

  const hrStyle = {
    marginTop: "0.625rem",
    marginBottom: "1.875rem",
    border: "1px solid #ccc",
  };

  const textStyle = {
    base: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "0.625rem",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>{"Thankyou to Contact TS GLOBAL TECH"}</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Text style={textStyle.base}>{`Dear ${fullName},`}</Text>
          <Text
            style={textStyle.base}
          >{`Thankyou to contact TS GLOBAL TECH, Our team will response your query/message shortly.`}</Text>

          <Text></Text>
          <EmailSignature/>
        </Container>
      </Body>
    </Html>
  );
};
