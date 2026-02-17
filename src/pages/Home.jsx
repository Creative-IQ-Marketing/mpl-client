import React from "react";
import Hero from "../components/Hero";
import PracticeAreas from "../components/home/PracticeAreas";
import TrustedBy from "../components/home/TrustedBy";
import Awards from "../components/home/Awards";
import MeetOurTeam from "../components/home/MeetOurTeam";
import Testimonials from "../components/home/Testimonials";
import NewsAndResources from "../components/home/NewsAndResources";
import Consultation from "../components/home/Consultation";
import FloatingBubbles from "../components/home/FloatingBubbles";
import Achievements from "../components/home/Achievements";

const Home = () => {
  return (
    <div className="relative">
      <FloatingBubbles />
      <div className="relative z-10">
        <Hero />
        <PracticeAreas />
        <Awards />
        <MeetOurTeam />
        <TrustedBy />
        <Testimonials />
        <NewsAndResources />
        <Consultation />
        <Achievements />
      </div>
    </div>
  );
};

export default Home;
