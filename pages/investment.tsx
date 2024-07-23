import Footer from "@/components/Footer";
import GrowYourWealth from "@/components/GrowYourWealth";
import NavBar from "@/components/NavBar";
import SimpleCTA from "@/components/SimpleCTA";
import SmartInvesting from "@/components/SmartInvesting";
import Head from "next/head";
import React from "react";

export default function investment() {
  return (
    <div className="h-screen max-w-screen-xl mx-auto px-10 w-full">
      <Head>
        <title>Investment | RAF</title>
        <meta
          name="description"
          content="We handle all the complexities of investing for you. Our team of experts manages your investment, making informed decisions to maximize your returns while minimizing risk. You don't need to worry about trading or market analysis we do it all for you."
        />
      </Head>
      <NavBar />
      <SmartInvesting />
      <GrowYourWealth />
      <SimpleCTA />
      <Footer />
    </div>
  )
}
