import React from "react";
import Hero from "../components/hero";
import InfoSection from "../components/infoSection";
import Services from "../components/services";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="flex-col">
      <Hero />
      <InfoSection />
      <Services />
      <Footer />
    </div>
  );
}
