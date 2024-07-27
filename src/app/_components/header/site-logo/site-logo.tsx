
import { TSGT_Link } from "../../generic/Link/link";
import { TSGT_Image } from "../../generic/image/image";

export const SiteLogo = () => {
  const basepath="";//"/t2s";
  return (
    <>
      <TSGT_Link url="/">
        <TSGT_Image src={`${basepath}/assests/images/site-logo.svg`} alt="TSGT Loggo" cssClass="h-16 md:h-24 -mt-[20px]"/>
      </TSGT_Link>
    </>
  );
};
