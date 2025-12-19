import { Hero } from "@/components/home/Hero";
import { EventDetails } from "@/components/home/EventDetails";
import { SessionMaterials } from "@/components/home/SessionMaterials";
import { Rundown } from "@/components/home/Rundown";
import { Resources } from "@/components/home/Resources";
import { Certificate } from "@/components/home/Certificate";
import { Location } from "@/components/home/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <EventDetails />
      <SessionMaterials />
      <Rundown />
      <Resources />
      <Certificate />
      <Location />
    </>
  );
}
