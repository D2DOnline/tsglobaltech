import Image from "next/image";

type props = {
  src: string;
  alt:string;
  cssClass:string;
};

export const TSGT_Image = ({ src, alt, cssClass }: props) => {
    const basePath="";
  return (
    <>
      <Image
          src={basePath+ src}//""}
          alt={alt}
          className={cssClass}//""
          width={100}
          height={100}
        />
    </>
  );
};
