import AssetManagement from "@/components/AssetManagement";
import EmpoweringKnowledge from "@/components/EmpoweringKnowledge";
import SectionTwo from "@/components/SectionTwo";
import TailoredSavings from "@/components/TailoredSavings";
import ExpertManaged from "@/components/ExpertManaged";
import FinancialFuture from "@/components/FinancialFuture";
import HeroComponents from "@/components/HeroComponents";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main
      className={`max-w-screen-xl px-10 min-h-screen font-[600] items-center justify-between font-switzer mx-auto`}
    >
      <NavBar />
      
      <HeroComponents/>
      
      <SectionTwo />
      
      <TailoredSavings/>

      <EmpoweringKnowledge/>

      <AssetManagement/>

      <ExpertManaged />

      <FinancialFuture />

      <Testimonials />

    </main>
  );
}
