import HeroSection from "@/components/ui/hero-section";
import { Story } from "@/components/sections/story";
import { Menu } from "@/components/sections/menu";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { SiteFooter } from "@/components/sections/site-footer";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <Story />
      <Menu />
      <Gallery />
      <Testimonials />
      <Location />
      <SiteFooter />
    </main>
  );
}
