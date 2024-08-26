import { AboutUs } from "../_components/about-us/about-us";
import { Banner } from "../_components/banner/banner";
import { Capabilities_Cards } from "../_components/capabilities-cards/capabilities-cards";
import { Card } from "../_components/commom/card/card";
import { Slider } from "../_components/commom/slider/slider";
import { Services } from "../_components/services/services";
import { WhyUs } from "../_components/why-us/why-us";

export default function Home() {
  return (
    <main className="">
      <Banner>
        <Slider />
      </Banner>
      <Capabilities_Cards/>
      {/* <Services /> */}
      {/* <WhyUs/> */}
      {/* <AboutUs /> */}
    </main>
  );
}
