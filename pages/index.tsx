import HeroComponents from "@/components/HeroComponents";
import SectionTwo from "@/components/SectionTwo";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen font-mc flex-col font-[600] items-center justify-between font-switzer p-24`}
    >
      <HeroComponents/>
      <SectionTwo/>
    </main>
  );
}
