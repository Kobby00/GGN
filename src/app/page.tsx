import { Card } from "@/components/Card";
import { Charity } from "@/components/Charity";
import Donation from "@/components/Donation";
import EmblaCarousel from "@/components/Hero";
import Quotes from "@/components/Quotes";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <Quotes />
      <Card />
      <Charity />
      <Donation />

      <Testimonials />
    </>
  );
}
