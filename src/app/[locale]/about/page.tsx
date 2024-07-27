import { AboutUs } from "@/app/_components/about-us/about-us";
import { PageHeader } from "@/app/_components/page-header/page-header";
import { WhyUs } from "@/app/_components/why-us/why-us";

export default function AboutPage() {
  return (
    <>
      <PageHeader heading="Who we are"/>
      <AboutUs />
      <WhyUs/>
    </>
  );
}