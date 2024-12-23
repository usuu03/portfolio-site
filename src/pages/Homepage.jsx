import React from "react";
import Hero from "../components/hero";
import InfoSection from "../components/infoSection";

export default function Homepage() {
  return (
    <div className="flex-col">
      <Hero />
      <InfoSection />
    </div>
  );
}
