import AssetManagement from "@/components/AssetManagement";
import EmpoweringKnowledge from "@/components/EmpoweringKnowledge";
import HeroComponents from "@/components/HeroComponents";
import SectionTwo from "@/components/SectionTwo";
import TailoredSavings from "@/components/TailoredSavings";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen font-mc flex-col font-[600] items-center justify-between font-switzer py-24`}
    >
      <HeroComponents/>
      <SectionTwo/>
      <TailoredSavings/>
      <EmpoweringKnowledge/>
      <AssetManagement/>
    </main>
  );
}
