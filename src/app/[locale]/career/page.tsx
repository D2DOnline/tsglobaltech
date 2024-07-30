import { Career } from "@/app/_components/career/career";
import { PageHeader } from "@/app/_components/page-header/page-header";
import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();
  return (
    <>
      <PageHeader heading={t(lc.career_page_heading)}/>
      <Career/>
    </>
  );
}