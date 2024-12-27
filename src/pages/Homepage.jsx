import React from "react";
import Hero from "../components/homepage/hero";
import InfoSection from "../components/homepage/infoSection";
import Services from "../components/homepage/services";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="flex-col">
      <Hero />
      <InfoSection />
      <Services />
    </div>
  );
}
