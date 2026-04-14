import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
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
import Books from "./pages/Books";
import BookFamilyBlindsided from "./pages/BookFamilyBlindsided";
import BookDivorceGuide from "./pages/BookDivorceGuide";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import VisualEnhancer from "./components/VisualEnhancer";
import ChatWidget from "./components/ChatWidget";

function RouteSEO() {
  const { pathname } = useLocation();

  const baseKeywords =
    "San Antonio family law attorney, divorce lawyer San Antonio, child custody attorney, child support attorney, spousal maintenance, SAPCR, adoption attorney, protective orders, estate planning attorney San Antonio, wills, trusts, power of attorney, probate lawyer San Antonio, criminal defense attorney San Antonio, DWI lawyer, domestic violence defense, expungement, record sealing";

  const seoByPath = {
    "/": {
      title:
        "Morales Padia Law | San Antonio Family Law, Estate Planning & Criminal Defense",
      description:
        "San Antonio attorneys for family law (divorce, custody, child support), estate planning (wills, trusts, power of attorney), probate, and criminal defense (DWI).",
      keywords: baseKeywords,
    },
    "/family-law": {
      title: "Family Law Attorney in San Antonio | Morales Padia Law",
      description:
        "Family law representation in San Antonio for divorce, child custody, child support, modifications, enforcement, and protective orders.",
      keywords:
        "family law attorney San Antonio, divorce lawyer San Antonio, child custody attorney, child support attorney, SAPCR, modification of orders, enforcement, protective orders",
    },
    "/child-custody": {
      title: "Child Custody Attorney in San Antonio | Morales Padia Law",
      description:
        "Help with child custody and parenting plans in San Antonio. Representation in SAPCR cases and custody disputes.",
      keywords:
        "child custody attorney San Antonio, custody lawyer San Antonio, SAPCR attorney, parenting plan, visitation, conservatorship",
    },
    "/child-support": {
      title: "Child Support Attorney in San Antonio | Morales Padia Law",
      description:
        "Establish, modify, or enforce child support in San Antonio. Guidance on support calculations and court orders.",
      keywords:
        "child support attorney San Antonio, modify child support, enforce child support, support calculation, arrears",
    },
    "/uncontested-divorce": {
      title: "Uncontested Divorce Lawyer in San Antonio | Morales Padia Law",
      description:
        "Uncontested divorce guidance in San Antonio, including paperwork, agreements, and court filings.",
      keywords:
        "uncontested divorce San Antonio, divorce lawyer San Antonio, agreed divorce, divorce paperwork, divorce filing",
    },
    "/contested-divorce": {
      title: "Contested Divorce Attorney in San Antonio | Morales Padia Law",
      description:
        "Representation for contested divorce in San Antonio, including property division, custody, and support disputes.",
      keywords:
        "contested divorce attorney San Antonio, divorce litigation, property division, custody dispute, spousal maintenance",
    },
    "/adoption": {
      title: "Adoption Attorney in San Antonio | Morales Padia Law",
      description:
        "Adoption legal help in San Antonio, including stepparent adoption and family-related adoption matters.",
      keywords:
        "adoption attorney San Antonio, stepparent adoption, adoption lawyer, adoption process Texas",
    },
    "/name-change": {
      title: "Name Change Lawyer in San Antonio | Morales Padia Law",
      description:
        "Assistance with legal name changes in San Antonio, including related family law filings.",
      keywords: "name change lawyer San Antonio, legal name change Texas, name change petition",
    },
    "/modification-of-previous-order": {
      title: "Modify Custody/Support Orders in San Antonio | Morales Padia Law",
      description:
        "Request modifications to custody, visitation, or support orders in San Antonio when circumstances change.",
      keywords:
        "modify custody order San Antonio, modify child support, modification of order, SAPCR modification",
    },
    "/enforcement": {
      title: "Enforcement of Family Court Orders in San Antonio | Morales Padia Law",
      description:
        "Enforce custody, visitation, and child support orders in San Antonio when the other party is not complying.",
      keywords:
        "enforcement attorney San Antonio, enforce child support, enforce visitation, enforce custody order, contempt",
    },
    "/property-division": {
      title: "Property Division in Divorce (San Antonio) | Morales Padia Law",
      description:
        "Guidance on property division in San Antonio divorce cases, including community property considerations.",
      keywords:
        "property division San Antonio, community property Texas, divorce property division, asset division",
    },
    "/spousal-maintenance": {
      title: "Spousal Maintenance Attorney in San Antonio | Morales Padia Law",
      description:
        "Help with spousal maintenance (spousal support) issues in San Antonio divorce cases.",
      keywords:
        "spousal maintenance attorney San Antonio, spousal support Texas, alimony Texas, support orders",
    },
    "/prenuptial-agreement": {
      title: "Prenuptial Agreement Lawyer in San Antonio | Morales Padia Law",
      description:
        "Drafting and review of prenuptial agreements in San Antonio to protect assets and clarify expectations.",
      keywords:
        "prenuptial agreement lawyer San Antonio, prenup attorney, premarital agreement Texas",
    },
    "/postnuptial-agreement": {
      title: "Postnuptial Agreement Lawyer in San Antonio | Morales Padia Law",
      description:
        "Drafting and review of postnuptial agreements in San Antonio to address property and financial planning.",
      keywords:
        "postnuptial agreement lawyer San Antonio, postnup attorney, marital property agreement Texas",
    },
    "/criminal-defense": {
      title: "Criminal Defense Attorney in San Antonio | Morales Padia Law",
      description:
        "Criminal defense representation in San Antonio for DWI, domestic violence allegations, drug charges, and more.",
      keywords:
        "criminal defense attorney San Antonio, DWI lawyer San Antonio, domestic violence defense, drug charges defense, theft defense",
    },
    "/dwi": {
      title: "DWI Lawyer in San Antonio | Morales Padia Law",
      description:
        "Defense for DWI charges in San Antonio. Help protecting your license and building a strong defense strategy.",
      keywords: "DWI lawyer San Antonio, DUI attorney San Antonio, drunk driving defense, license suspension",
    },
    "/domestic-violence": {
      title: "Domestic Violence Defense in San Antonio | Morales Padia Law",
      description:
        "Defense representation in San Antonio for domestic violence allegations and related charges.",
      keywords:
        "domestic violence defense San Antonio, assault family violence attorney, protective orders, criminal defense",
    },
    "/drug-charges": {
      title: "Drug Charges Defense in San Antonio | Morales Padia Law",
      description:
        "Criminal defense for drug charges in San Antonio, including possession and related offenses.",
      keywords:
        "drug charges attorney San Antonio, possession defense, controlled substance defense, criminal defense San Antonio",
    },
    "/juvenile-defense": {
      title: "Juvenile Defense Attorney in San Antonio | Morales Padia Law",
      description:
        "Juvenile defense representation in San Antonio for minors facing criminal allegations.",
      keywords:
        "juvenile defense attorney San Antonio, juvenile lawyer San Antonio, minor charges defense",
    },
    "/theft-property-crimes": {
      title: "Theft & Property Crimes Defense in San Antonio | Morales Padia Law",
      description:
        "Defense for theft and property crime charges in San Antonio, including shoplifting and related accusations.",
      keywords:
        "theft attorney San Antonio, property crimes defense, shoplifting lawyer, criminal defense San Antonio",
    },
    "/protective-orders": {
      title: "Protective Orders in San Antonio | Morales Padia Law",
      description:
        "Guidance and representation for protective order matters in San Antonio, including hearings and enforcement.",
      keywords:
        "protective orders San Antonio, restraining order Texas, protective order lawyer, family violence protective order",
    },
    "/expungement-record-sealing": {
      title: "Expungement & Record Sealing in San Antonio | Morales Padia Law",
      description:
        "Help with expungement and record sealing options in San Antonio. Learn eligibility and next steps.",
      keywords:
        "expungement lawyer San Antonio, record sealing Texas, nondisclosure attorney San Antonio, clear criminal record",
    },
    "/services": {
      title: "Legal Services in San Antonio | Morales Padia Law",
      description:
        "Explore our legal services in San Antonio: family law, estate planning (wills and trusts), probate, and criminal defense.",
      keywords:
        "San Antonio legal services, family law, estate planning, wills, trusts, probate, criminal defense, DWI",
    },
    "/contact": {
      title: "Contact Morales Padia Law | San Antonio Attorneys",
      description:
        "Contact Morales Padia Law in San Antonio to schedule a consultation for family law, estate planning, probate, or criminal defense.",
      keywords:
        "contact San Antonio attorney, schedule consultation, family law consultation, estate planning consultation, criminal defense consultation",
    },
    "/testimonials": {
      title: "Client Testimonials | Morales Padia Law",
      description:
        "Read client testimonials and success stories from Morales Padia Law in San Antonio.",
      keywords: "Morales Padia Law reviews, client testimonials, San Antonio law firm testimonials",
    },
    "/firm-overview": {
      title: "Firm Overview | Morales Padia Law",
      description:
        "Learn about Morales Padia Law in San Antonio and our approach to family law, estate planning, probate, and criminal defense.",
      keywords: baseKeywords,
    },
    "/about": {
      title: "Firm Overview | Morales Padia Law",
      description:
        "Learn about Morales Padia Law in San Antonio and our approach to family law, estate planning, probate, and criminal defense.",
      keywords: baseKeywords,
    },
  };

  const current = seoByPath[pathname] || {
    title:
      "Morales Padia Law | San Antonio Family Law, Estate Planning & Criminal Defense",
    description:
      "San Antonio attorneys for family law, estate planning, probate, and criminal defense.",
    keywords: baseKeywords,
  };

  return <SEO {...current} />;
}

function AppShell() {
  return (
    <>
      <RouteSEO />
      <StructuredData />
      <div className="flex flex-col min-h-screen relative">
        <ChatWidget />
        <FloatingBubbles />
        <VisualEnhancer />
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
            <Route path="/resources/books" element={<Books />} />
            <Route
              path="/resources/books/family-blindsided"
              element={<BookFamilyBlindsided />}
            />
            <Route
              path="/resources/books/divorce-guide"
              element={<BookDivorceGuide />}
            />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

export default App;
