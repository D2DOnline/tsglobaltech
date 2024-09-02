import { Column, Img, Link, Row, Section, Text } from "@react-email/components";

export const EmailSignature = () => {
  return (
    <>
      {/* <Text style={{margin:0, padding:0}}>{`Thanks & Best Regards,`}</Text>
      <Text>{`TS GLOBAL TECH`}</Text>
      <Text>{`+91 935 551 0301`}</Text>
      <Text>{`team@tsglobaltech.com`}</Text> */}
      <Section style={{ textAlign: "left" }}>
        <table style={{ width: "100%" }}>
         
          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 8,
                  marginBottom: 2,
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {`Thanks & Best Regards,`}
              </Text>
            </td>
          </tr>

          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 6,
                  marginBottom: 2,
                  fontSize: 16,
                  lineHeight: "16px",
                  fontWeight: 600,
                  color:"rgba(14, 165, 233, 1)"
                }}
              >
                {`TEAM - TS GLOBAL TECH`}
              </Text>
            </td>
          </tr>

          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  fontSize: 14,
                  lineHeight: "14px",
                  fontWeight: 600,
                }}
              >
                {`+91 935 551 0301`}
              </Text>
            </td>
          </tr>

          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  fontSize: 16,
                  lineHeight: "16px",
                  fontWeight: 600,
                }}
              >
                {`team@tsglobaltech.com`}
              </Text>
            </td>
          </tr>
          <tr style={{ width: "100%" }}>
            <td align="left">
              <Text
                style={{
                  marginTop: 2,
                  marginBottom: 2,
                  fontSize: 16,
                  lineHeight: "16px",
                  fontWeight: 600,
                }}
              >
                {`www.tsglobaltech.com`}
              </Text>
            </td>
          </tr>
        </table>
      </Section>
    </>
  );
};
