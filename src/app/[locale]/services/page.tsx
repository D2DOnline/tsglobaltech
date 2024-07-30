import { useTranslations } from "next-intl";
import { Services } from "../../_components/services/services";
import { PageHeader } from "@/app/_components/page-header/page-header";
import { lc } from "@/app/language-content/iLanguageContent";

export default function ServicePage() {
  const t = useTranslations();
  return (
    <>
      <PageHeader heading={t(lc.services_page_heading)}/>
      <Services />
    </>
  );
}
