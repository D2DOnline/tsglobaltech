import { Banner } from "../_components/banner/banner";
import { Capabilities_Cards } from "../_components/capabilities-cards/capabilities-cards";
import { Slider } from "../_components/commom/slider/slider";

export default function Home() {
  return (
    <main className="">
      <Banner>
        <Slider />
      </Banner>
      <Capabilities_Cards/>
    </main>
  );
}
