import { Card } from "@/components/Card";
import { Charity } from "@/components/Charity";
import EmblaCarousel from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <EmblaCarousel />
      <Card />
      <Charity />
      <Testimonials />
    </>
  );
}
