import { Link } from "@/navigation";

type props = {
  url: string;
  children:React.ReactNode;
};

export const TSGT_Link = ({ url,children }: props) => {
  return (
    <>
      <Link href={url} className="cursor-pointer">{children}</Link>
    </>
  );
};
