import React, { lazy, Suspense } from "react";
import Hero from "../components/Hero";

// Below-fold sections: lazy-loaded to reduce initial JS parse time (INP fix)
const PracticeAreas = lazy(() => import("../components/home/PracticeAreas"));
const TrustedBy = lazy(() => import("../components/home/TrustedBy"));
const Awards = lazy(() => import("../components/home/Awards"));
const FeaturedIn = lazy(() => import("../components/home/FeaturedIn"));
const MeetOurTeam = lazy(() => import("../components/home/MeetOurTeam"));
const Testimonials = lazy(() => import("../components/home/Testimonials"));
const NewsAndResources = lazy(
  () => import("../components/home/NewsAndResources"),
);
const Consultation = lazy(() => import("../components/home/Consultation"));
const Achievements = lazy(() => import("../components/home/Achievements"));

const Home = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <PracticeAreas />
          <Awards />
          <FeaturedIn />
          <NewsAndResources />
          <MeetOurTeam />
          <TrustedBy />
          <Testimonials />
          <Consultation />
          <Achievements />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
