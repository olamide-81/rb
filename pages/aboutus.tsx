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
import Head from "next/head";
import React from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#262626] px-10 w-full">
      <Head>
        <title>About Us | RAF</title>
        <meta
          name="description"
          content="Rich Aunty Finance was born from a simple yet powerful idea: everyone deserves access to smart, goal-oriented savings solutions that actually work. Founded in 2020 by a team of finance experts and tech innovators, we set out to revolutionize the way people save and achieve their financial dreams."
        />
      </Head>
      <NavBar
        style={{
          color: '#262626',
        }}
      />
      <AboutUsHeader />
      <StoryAndMission />
      <SetUsApart />
      <TheFounder />
      <StartYourJourney />
      <Footer />
    </div>
  )
}
