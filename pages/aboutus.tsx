import AboutUsHeader from "@/components/AboutUsHeader";
import Footer from "@/components/Footer";
import GrowYourWealth from "@/components/GrowYourWealth";
import NavBar from "@/components/NavBar";
import SetUsApart from "@/components/SetUsApart";
import SimpleCTA from "@/components/SimpleCTA";
import SmartInvesting from "@/components/SmartInvesting";
import StartYourJourney from "@/components/StartYourJourney";
import StoryAndMission from "@/components/StoryAndMission";
import TheFounder from "@/components/TheFounder";
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#262626] px-10 w-full">
      <NavBar style={{
          color: "#262626"
      }} />
      <AboutUsHeader />
      <StoryAndMission />
      <SetUsApart />
      <TheFounder />
      <StartYourJourney />
    </div>
  );
}
