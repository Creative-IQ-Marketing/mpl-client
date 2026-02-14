import React from "react";
import Hero from "../components/Hero";
import PracticeAreas from "../components/home/PracticeAreas";
import Awards from "../components/home/Awards";
import MeetOurTeam from "../components/home/MeetOurTeam";
import Testimonials from "../components/home/Testimonials";
import NewsAndResources from "../components/home/NewsAndResources";
import Consultation from "../components/home/Consultation";

const Home = () => {
  return (
    <div>
      <Hero />
      <PracticeAreas />
      <Awards />
      <MeetOurTeam />
      <Testimonials />
      <NewsAndResources />
      <Consultation />
    </div>
  );
};

export default Home;
