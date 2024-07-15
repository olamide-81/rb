import Footer from "@/components/Footer";
import GrowYourWealth from "@/components/GrowYourWealth";
import NavBar from "@/components/NavBar";
import SimpleCTA from "@/components/SimpleCTA";
import SmartInvesting from "@/components/SmartInvesting";
import React from "react";

export default function investment() {
  return (
    <div className="h-screen max-w-screen-xl mx-auto px-10 w-full">
      <NavBar />
      <SmartInvesting />
      <GrowYourWealth />
      <SimpleCTA />
      <Footer />
    </div>
  );
}
