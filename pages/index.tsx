import ExpertManaged from "@/components/ExpertManaged";
import HeroComponents from "@/components/HeroComponents";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main
      className={`max-w-screen-xl px-10 min-h-screen font-[600] items-center justify-between font-switzer mx-auto`}
    >
      <NavBar />
      <HeroComponents/>

      <ExpertManaged />
    </main>
  );
}
