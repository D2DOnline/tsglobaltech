import { AboutUs } from "../_components/about-us/about-us";
import { Banner } from "../_components/banner/banner";
import { Slider } from "../_components/commom/slider/slider";
import { Services } from "../_components/services/services";
import { WhyUs } from "../_components/why-us/why-us";

export default function Home() {
  return (
    <main className="">
      <Banner>
        <Slider />
      </Banner>
      <Services />
      <AboutUs />
      <WhyUs />
    </main>
  );
}
