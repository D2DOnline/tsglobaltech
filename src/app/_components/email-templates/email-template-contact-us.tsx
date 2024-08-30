import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";

type props = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};
export const EmailTemplateContactUs = ({
  fullName,
  email,
  phone,
  message,
}: props) => {
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
      <Preview>{"Contact Us Message - tsglobaltech.com"}</Preview>
      <Body style={{ fontFamily: "sans-serif", background: "#fff" }}>
        <Container style={containerStyle}>
          <Hr style={hrStyle} />
          <Text style={textStyle.base}>
            From: <i>{"Contact us section - tsglobaltech.com"}</i>,
          </Text>
          <Text style={textStyle.base}>{`Name: ${fullName}`}</Text>
          <Text style={textStyle.base}>{`Email: ${email}`}</Text>
          <Text style={textStyle.base}>{`Phone: ${phone}`}</Text>
          <Text style={textStyle.base}>{`Message: ${message}`}</Text>
          <Hr style={hrStyle} />
        </Container>
      </Body>
    </Html>
  );
};
