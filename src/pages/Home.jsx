import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import SocialProof from "@/components/landing/SocialProof";
import SocialMedia from "@/components/landing/SocialMedia";
import ContentStrategy from "@/components/landing/ContentStrategy";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import ConsultationForm from "@/components/landing/ConsultationForm";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SocialProof />
      <SocialMedia />
      <ContentStrategy />
      <Pricing />
      <FAQ />
      <ConsultationForm />
      <Footer />
    </div>
  );
}