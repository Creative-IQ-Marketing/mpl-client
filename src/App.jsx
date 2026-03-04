import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingBubbles from "./components/home/FloatingBubbles";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import FirmOverview from "./pages/FirmOverview";
import FamilyLaw from "./pages/FamilyLaw";
import CriminalDefense from "./pages/CriminalDefense";
import DWI from "./pages/DWI";
import DomesticViolence from "./pages/DomesticViolence";
import ProtectiveOrders from "./pages/ProtectiveOrders";
import TheftPropertyCrimes from "./pages/TheftPropertyCrimes";
import JuvenileDefense from "./pages/JuvenileDefense";
import ExpungementRecordSealing from "./pages/ExpungementRecordSealing";
import DrugCharges from "./pages/DrugCharges";
import UncontestedDivorce from "./pages/UncontestedDivorce";
import ContestedDivorce from "./pages/ContestedDivorce";
import ChildCustody from "./pages/ChildCustody";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ChildSupport from "./pages/ChildSupport";
import Adoption from "./pages/Adoption";
import NameChange from "./pages/NameChange";
import ModificationOfPreviousOrder from "./pages/ModificationOfPreviousOrder";
import PropertyDivision from "./pages/PropertyDivision";
import Enforcement from "./pages/Enforcement";
import SpousalMaintenance from "./pages/SpousalMaintenance";
import PrenuptialAgreement from "./pages/PrenuptialAgreement";
import PostnuptialAgreement from "./pages/PostnuptialAgreement";
import TeamMember from "./pages/TeamMember";
import StyleGuide from "./pages/StyleGuide";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <FloatingBubbles />
        <Header />
        <main className="flex-grow pt-20 relative z-10">
          {" "}
          {/* pt-20 to account for fixed header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<FirmOverview />} />
            <Route path="/firm-overview" element={<FirmOverview />} />
            <Route path="/family-law" element={<FamilyLaw />} />
            <Route path="/criminal-defense" element={<CriminalDefense />} />
            <Route path="/dwi" element={<DWI />} />
            <Route path="/domestic-violence" element={<DomesticViolence />} />
            <Route path="/protective-orders" element={<ProtectiveOrders />} />
            <Route
              path="/theft-property-crimes"
              element={<TheftPropertyCrimes />}
            />
            <Route path="/juvenile-defense" element={<JuvenileDefense />} />
            <Route
              path="/expungement-record-sealing"
              element={<ExpungementRecordSealing />}
            />
            <Route path="/drug-charges" element={<DrugCharges />} />
            <Route
              path="/uncontested-divorce"
              element={<UncontestedDivorce />}
            />
            <Route path="/contested-divorce" element={<ContestedDivorce />} />
            <Route path="/child-custody" element={<ChildCustody />} />
            <Route path="/child-support" element={<ChildSupport />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/name-change" element={<NameChange />} />
            <Route
              path="/modification-of-previous-order"
              element={<ModificationOfPreviousOrder />}
            />
            <Route path="/property-division" element={<PropertyDivision />} />
            <Route path="/enforcement" element={<Enforcement />} />
            <Route
              path="/spousal-maintenance"
              element={<SpousalMaintenance />}
            />
            <Route
              path="/prenuptial-agreement"
              element={<PrenuptialAgreement />}
            />
            <Route
              path="/postnuptial-agreement"
              element={<PostnuptialAgreement />}
            />
            <Route path="/team/:id" element={<TeamMember />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/style-guide" element={<StyleGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
