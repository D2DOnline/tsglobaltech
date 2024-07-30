"use client";
import { AboutUs } from "@/app/_components/about-us/about-us";
import { PageHeader } from "@/app/_components/page-header/page-header";
import { WhyUs } from "@/app/_components/why-us/why-us";
import { lc } from "@/app/language-content/iLanguageContent";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations();
  return (
    <>
      <PageHeader heading={t(lc.about_page_heading)} />
      <AboutUs />
      <WhyUs />
    </>
  );
}
