import AssetManagement from "@/components/AssetManagement";
import EmpoweringKnowledge from "@/components/EmpoweringKnowledge";
import SectionTwo from "@/components/SectionTwo";
import TailoredSavings from "@/components/TailoredSavings";
import ExpertManaged from "@/components/ExpertManaged";
import FinancialFuture from "@/components/FinancialFuture";
import HeroComponents from "@/components/HeroComponents";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import RealTimeProgress from "@/components/RealTimeProgress";
import AchieveMore from "@/components/AchieveMore";
import SecureFuture from "@/components/SecureFuture";
import FinancialGoals from "@/components/FinancialGoal";

export default function Home() {
  return (
    <main className="bg-[#F9FAFB] min-h-screen font-[600] flex flex-col items-center font-switzer">
      <div className="home-bg-hero w-full items-center justify-center flex flex-col">
        <NavBar />
        <HeroComponents />
      </div>
      <SectionTwo />
      <RealTimeProgress />
      <AchieveMore />
      <SecureFuture />
      <AssetManagement />
      <FinancialFuture />
      <Testimonials />
      <FAQ />
      <FinancialGoals />
      <Footer />
    </main>
  );
}
