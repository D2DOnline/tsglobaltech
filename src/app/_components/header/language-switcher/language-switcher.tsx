import { usePathname, useRouter } from "next/navigation";
import { Dropdown } from "../../commom/dropdown/dropdown";
import { dropdownItem } from "../../commom/dropdown/interface";

import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";

import { FaLanguage } from "react-icons/fa";

const languages: dropdownItem[] = [
  { text: "English(en)", value: "en" },
  { text: "Hindi(hi)", value: "hi" },
];

export const LanguageSwitcher = () => {
  const t = useTranslations();

  const router = useRouter();
  const pathname = usePathname();

  const onLanguageChange = (selectedLanguage: dropdownItem) => {
    router.push(`/${selectedLanguage.value}`);
  };

  return (
    <>
      <Dropdown
        label={{ text: t(lc.common_language), icon: <FaLanguage /> }}
        dropdownItems={languages}
        onSelectedItem={onLanguageChange}
      />
    </>
  );
};
