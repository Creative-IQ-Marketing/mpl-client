import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import ExpungementRecordSealing from "./pages/ExpungementRecordSealing";
import DrugCharges from "./pages/DrugCharges";
import AssaultFamilyViolence from "./pages/AssaultFamilyViolence";
import ProbationViolations from "./pages/ProbationViolations";
import WarrantsArrest from "./pages/WarrantsArrest";
import UnderInvestigation from "./pages/UnderInvestigation";
import WeaponsCharges from "./pages/WeaponsCharges";
import FelonyChargesDefense from "./pages/FelonyChargesDefense";
import MisdemeanorDefense from "./pages/MisdemeanorDefense";
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
import PaternityFathersRights from "./pages/PaternityFathersRights";
import GrandparentsRights from "./pages/GrandparentsRights";
import FlatFeeDivorce from "./pages/FlatFeeDivorce";
import ChildVisitationPossession from "./pages/ChildVisitationPossession";
import MediationCollaborativeDivorce from "./pages/MediationCollaborativeDivorce";
import EmergencyCustodyOrders from "./pages/EmergencyCustodyOrders";
import EstatePlanning from "./pages/EstatePlanning";
import PowerOfAttorney from "./pages/PowerOfAttorney";
import AdvanceDirectives from "./pages/AdvanceDirectives";
import AssetProtection from "./pages/AssetProtection";
import Trust from "./pages/Trust";
import Will from "./pages/Will";
import ProbateLaw from "./pages/ProbateLaw";
import DoINeedProbate from "./pages/DoINeedProbate";
import HowToStartProbate from "./pages/HowToStartProbate";
import ProbatingAWill from "./pages/ProbatingAWill";
import ProbateWithoutWill from "./pages/ProbateWithoutWill";
import SmallEstateAffidavit from "./pages/SmallEstateAffidavit";
import AffidavitOfHeirship from "./pages/AffidavitOfHeirship";
import TransferringPropertyAfterDeath from "./pages/TransferringPropertyAfterDeath";
import ProbateDisputesLitigation from "./pages/ProbateDisputesLitigation";
import HeirshipProceedings from "./pages/HeirshipProceedings";
import MunimentOfTitle from "./pages/MunimentOfTitle";
import ProbateLitigation from "./pages/ProbateLitigation";
import EstateAffidavits from "./pages/EstateAffidavits";
import TeamMember from "./pages/TeamMember";
import StyleGuide from "./pages/StyleGuide";
import Books from "./pages/Books";
import BookFamilyBlindsided from "./pages/BookFamilyBlindsided";
import BookDivorceGuide from "./pages/BookDivorceGuide";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";
import FAQ from "./pages/FAQ";
import NewsletterUnsubscribe from "./pages/NewsletterUnsubscribe";
import VisualEnhancer from "./components/VisualEnhancer";
import ChatWidget from "./components/ChatWidget";

const BLOG_ORIGIN = "https://blog.moralespadialaw.com";
const BLOG_FRESH_WINDOW_MS = 2 * 60 * 1000;

function getBlogFreshUrl() {
  const freshnessBucket = Math.floor(Date.now() / BLOG_FRESH_WINDOW_MS);
  return `${BLOG_ORIGIN}?v=${freshnessBucket}`;
}

function RouteSEO() {
  const { pathname } = useLocation();

  const baseKeywords =
    "San Antonio family law attorney, divorce lawyer San Antonio, child custody attorney, child support attorney, spousal maintenance, SAPCR, adoption attorney, protective orders, estate planning attorney San Antonio, wills, trusts, power of attorney, probate lawyer San Antonio, criminal defense attorney San Antonio, DWI lawyer, domestic violence defense, expungement, record sealing";

  const seoByPath = {
    "/": {
      title:
        "Morales Padia Law | Family Law, Estate Planning & Criminal Defense",
      description:
        "Attorneys for family law (divorce, custody, child support), estate planning (wills, trusts, power of attorney), probate, and criminal defense (DWI).",
      keywords: baseKeywords,
    },
    "/family-law": {
      title: "Family Law Attorney | Morales Padia Law",
      description:
        "Family law representation for divorce, child custody, child support, modifications, enforcement, and protective orders.",
      keywords:
        "family law attorney, divorce lawyer, child custody attorney, child support attorney, SAPCR, modification of orders, enforcement, protective orders",
    },
    "/child-custody": {
      title: "Child Custody Attorney | Morales Padia Law",
      description:
        "Help with child custody and parenting plans. Representation in SAPCR cases and custody disputes.",
      keywords:
        "child custody attorney, custody lawyer, SAPCR attorney, parenting plan, visitation, conservatorship",
    },
    "/child-support": {
      title: "Child Support Attorney | Morales Padia Law",
      description:
        "Establish, modify, or enforce child support. Guidance on support calculations and court orders.",
      keywords:
        "child support attorney, modify child support, enforce child support, support calculation, arrears",
    },
    "/uncontested-divorce": {
      title: "Uncontested Divorce Lawyer | Morales Padia Law",
      description:
        "Uncontested divorce guidance, including paperwork, agreements, and court filings.",
      keywords:
        "uncontested divorce, divorce lawyer, agreed divorce, divorce paperwork, divorce filing",
    },
    "/contested-divorce": {
      title: "Contested Divorce Attorney | Morales Padia Law",
      description:
        "Representation for contested divorce, including property division, custody, and support disputes.",
      keywords:
        "contested divorce attorney, divorce litigation, property division, custody dispute, spousal maintenance",
    },
    "/adoption": {
      title: "Adoption Attorney | Morales Padia Law",
      description:
        "Adoption legal help, including stepparent adoption and family-related adoption matters.",
      keywords:
        "adoption attorney, stepparent adoption, adoption lawyer, adoption process Texas",
    },
    "/name-change": {
      title: "Name Change Lawyer | Morales Padia Law",
      description:
        "Assistance with legal name changes, including related family law filings.",
      keywords:
        "name change lawyer, legal name change Texas, name change petition",
    },
    "/modification-of-previous-order": {
      title: "Modify Custody/Support Orders | Morales Padia Law",
      description:
        "Request modifications to custody, visitation, or support orders when circumstances change.",
      keywords:
        "modify custody order, modify child support, modification of order, SAPCR modification",
    },
    "/enforcement": {
      title: "Enforcement of Family Court Orders | Morales Padia Law",
      description:
        "Enforce custody, visitation, and child support orders when the other party is not complying.",
      keywords:
        "enforcement attorney, enforce child support, enforce visitation, enforce custody order, contempt",
    },
    "/property-division": {
      title: "Property Division in Divorce | Morales Padia Law",
      description:
        "Guidance on property division in divorce cases, including community property considerations.",
      keywords:
        "property division, community property Texas, divorce property division, asset division",
    },
    "/spousal-maintenance": {
      title: "Spousal Maintenance Attorney | Morales Padia Law",
      description:
        "Help with spousal maintenance (spousal support) issues in divorce cases.",
      keywords:
        "spousal maintenance attorney, spousal support Texas, alimony Texas, support orders",
    },
    "/prenuptial-agreement": {
      title: "Prenuptial Agreement Lawyer | Morales Padia Law",
      description:
        "Drafting and review of prenuptial agreements to protect assets and clarify expectations.",
      keywords:
        "prenuptial agreement lawyer, prenup attorney, premarital agreement Texas",
    },
    "/postnuptial-agreement": {
      title: "Postnuptial Agreement Lawyer | Morales Padia Law",
      description:
        "Drafting and review of postnuptial agreements to address property and financial planning.",
      keywords:
        "postnuptial agreement lawyer, postnup attorney, marital property agreement Texas",
    },
    "/estate-planning": {
      title: "Estate Planning Attorney | Morales Padia Law",
      description:
        "Estate planning services for wills, trusts, powers of attorney, and advance directives to protect your family and legacy.",
      keywords:
        "estate planning attorney, wills and trusts, power of attorney, advance directives, legacy planning",
    },
    "/power-of-attorney": {
      title: "Power of Attorney Lawyer | Morales Padia Law",
      description:
        "Create a durable, medical, or limited power of attorney with guidance tailored to your goals.",
      keywords:
        "power of attorney, durable power of attorney, medical power of attorney, financial power of attorney",
    },
    "/advance-directives": {
      title: "Advance Directives | Morales Padia Law",
      description:
        "Prepare advance directives, including living wills and medical decision documents.",
      keywords:
        "advance directives, living will, medical directive, healthcare directive, end of life planning",
    },
    "/asset-protection": {
      title: "Asset Protection Planning | Morales Padia Law",
      description:
        "Build asset protection strategies using trusts, entity planning, and risk-aware legal structures.",
      keywords:
        "asset protection attorney, asset protection planning, trust structures, liability planning",
    },
    "/trust": {
      title: "Trust Planning Attorney | Morales Padia Law",
      description:
        "Trust planning, including revocable, irrevocable, and testamentary trusts tailored to your estate goals.",
      keywords:
        "trust attorney, revocable living trust, irrevocable trust, testamentary trust, estate trust planning",
    },
    "/will": {
      title: "Will Preparation Attorney | Morales Padia Law",
      description:
        "Prepare a legally sound will to direct assets, appoint guardians, and protect your family.",
      keywords:
        "will attorney, will preparation, estate planning will, guardianship nomination, probate planning",
    },
    "/probate-law": {
      title: "Probate Attorney | Morales Padia Law",
      description:
        "Probate legal services including administration, heirship support, executor guidance, and court representation.",
      keywords:
        "probate attorney, probate administration, executor support, heirship proceedings, estate distribution",
    },
    "/do-i-need-probate": {
      title: "Do I Need Probate in Texas? | Morales Padia Law",
      description:
        "Understand whether your estate needs to go through probate in Texas. Learn about probate requirements, exceptions, and alternatives.",
      keywords:
        "probate in Texas, do I need probate, probate requirements, estate planning",
    },
    "/how-to-start-probate": {
      title: "How to Start Probate in Texas | Morales Padia Law",
      description:
        "Step-by-step guide to starting the probate process in Texas. Learn about filing requirements, court procedures, and how we can guide you.",
      keywords:
        "start probate in Texas, probate process, filing for probate, probate court",
    },
    "/probating-a-will": {
      title: "Probating a Will in Texas | Morales Padia Law",
      description:
        "Complete guide to probating a will in Texas. Learn the process, requirements, and how our attorneys can help execute the estate.",
      keywords:
        "probating a will, will probate, Texas will probate, execute will",
    },
    "/probate-without-will": {
      title: "No Will? Probate Options in Texas | Morales Padia Law",
      description:
        "Learn about probate options when there's no will in Texas. Explore intestate succession, small estate affidavits, and heirship proceedings.",
      keywords:
        "no will probate, intestate succession, probate without will, Texas intestacy",
    },
    "/small-estate-affidavit": {
      title: "Small Estate Affidavit in Texas | Morales Padia Law",
      description:
        "Understand how a Small Estate Affidavit can help avoid probate for estates under $75,000 in Texas. Learn the requirements and process.",
      keywords: "small estate affidavit, small estate Texas, avoid probate",
    },
    "/affidavit-of-heirship": {
      title: "Affidavit of Heirship in Texas | Morales Padia Law",
      description:
        "Learn about Affidavit of Heirship in Texas - a legal document establishing heirs' rights to property transfer after death without full probate.",
      keywords:
        "affidavit of heirship, heirship proceedings, probate alternative Texas",
    },
    "/transferring-property-after-death": {
      title: "Transferring Property After Death in Texas | Morales Padia Law",
      description:
        "Learn about methods to transfer property after death in Texas, including probate, trusts, and other estate planning alternatives.",
      keywords:
        "transfer property after death, property transfer Texas, estate settlement",
    },
    "/probate-disputes-litigation": {
      title: "Probate Disputes & Litigation | Morales Padia Law",
      description:
        "Experienced representation for probate disputes, will contests, and estate litigation in Texas. Protect your interests with skilled attorneys.",
      keywords:
        "probate litigation, will contests, estate disputes, probate attorney",
    },
    "/heirship-proceedings": {
      title: "Heirship Proceedings | Morales Padia Law",
      description:
        "Establish legal heirs and ownership rights through heirship proceedings in probate court.",
      keywords:
        "heirship proceedings, determination of heirship, probate heirs, inherited property rights",
    },
    "/muniment-of-title": {
      title: "Muniment of Title | Morales Padia Law",
      description:
        "Use muniment of title in qualifying cases to transfer property with a streamlined probate process.",
      keywords:
        "muniment of title, simplified probate, transfer property by will, probate alternatives",
    },
    "/probate-litigation": {
      title: "Probate Litigation Attorney | Morales Padia Law",
      description:
        "Probate litigation representation for will contests, fiduciary disputes, and estate conflict resolution.",
      keywords:
        "probate litigation, will contest attorney, executor misconduct, inheritance disputes, trust disputes",
    },
    "/estate-affidavits": {
      title: "Estate Affidavits | Morales Padia Law",
      description:
        "Determine whether estate affidavits can simplify asset transfer, including small estate affidavits and related filings.",
      keywords:
        "estate affidavits, small estate affidavit, affidavit of heirship, transfer assets without probate",
    },
    "/criminal-defense": {
      title: "Criminal Defense Attorney | Morales Padia Law",
      description:
        "Criminal defense representation for DWI, domestic violence allegations, drug charges, and more.",
      keywords:
        "criminal defense attorney, DWI lawyer, domestic violence defense, drug charges defense, theft defense",
    },
    "/dwi": {
      title: "DWI Lawyer | Morales Padia Law",
      description:
        "Defense for DWI charges. Help protecting your license and building a strong defense strategy.",
      keywords:
        "DWI lawyer, DUI attorney, drunk driving defense, license suspension",
    },
    "/domestic-violence": {
      title: "Domestic Violence Defense | Morales Padia Law",
      description:
        "Defense representation for domestic violence allegations and related charges.",
      keywords:
        "domestic violence defense, assault family violence attorney, protective orders, criminal defense",
    },
    "/drug-charges": {
      title: "Drug Charges Defense | Morales Padia Law",
      description:
        "Criminal defense for drug charges, including possession and related offenses.",
      keywords:
        "drug charges attorney, possession defense, controlled substance defense, criminal defense",
    },
    "/juvenile-defense": {
      title: "Juvenile Defense Attorney | Morales Padia Law",
      description:
        "Juvenile defense representation for minors facing criminal allegations.",
      keywords:
        "juvenile defense attorney, juvenile lawyer, minor charges defense",
    },
    "/theft-property-crimes": {
      title: "Theft & Property Crimes Defense | Morales Padia Law",
      description:
        "Defense for theft and property crime charges, including shoplifting and related accusations.",
      keywords:
        "theft attorney, property crimes defense, shoplifting lawyer, criminal defense",
    },
    "/protective-orders": {
      title: "Protective Orders | Morales Padia Law",
      description:
        "Guidance and representation for protective order matters, including hearings and enforcement.",
      keywords:
        "protective orders, restraining order Texas, protective order lawyer, family violence protective order",
    },
    "/expungement-record-sealing": {
      title: "Expungement & Record Sealing | Morales Padia Law",
      description:
        "Help with expungement and record sealing options. Learn eligibility and next steps.",
      keywords:
        "expungement lawyer, record sealing Texas, nondisclosure attorney, clear criminal record",
    },
    "/services": {
      title: "Legal Services | Morales Padia Law",
      description:
        "Explore our legal services: family law, estate planning (wills and trusts), probate, and criminal defense.",
      keywords:
        "legal services, family law, estate planning, wills, trusts, probate, criminal defense, DWI",
    },
    "/contact": {
      title: "Contact Morales Padia Law | Attorneys",
      description:
        "Contact Morales Padia Law to schedule a consultation for family law, estate planning, probate, or criminal defense.",
      keywords:
        "contact attorney, schedule consultation, family law consultation, estate planning consultation, criminal defense consultation",
    },
    "/testimonials": {
      title: "Client Testimonials | Morales Padia Law",
      description:
        "Read client testimonials and success stories from Morales Padia Law.",
      keywords:
        "Morales Padia Law reviews, client testimonials, law firm testimonials",
    },
    "/resources/blog": {
      title: "Estate Planning Blog | Morales Padia Law",
      description:
        "Read estate planning and probate insights from Morales Padia Law, including wills, trusts, and directive guidance.",
      keywords:
        "estate planning blog, probate blog, wills and trusts guidance, power of attorney blog",
    },
    "/firm-overview": {
      title: "Firm Overview | Morales Padia Law",
      description:
        "Learn about Morales Padia Law and our approach to family law, estate planning, probate, and criminal defense.",
      keywords: baseKeywords,
    },
    "/about": {
      title: "Firm Overview | Morales Padia Law",
      description:
        "Learn about Morales Padia Law and our approach to family law, estate planning, probate, and criminal defense.",
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

function BlogWarmup() {
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const existing = document.querySelector('iframe[data-preload="mpl-blog"]');
    if (existing) return;

    const start = () => {
      const iframe = document.createElement("iframe");
      iframe.src = getBlogFreshUrl();
      iframe.setAttribute("data-preload", "mpl-blog");
      iframe.setAttribute("aria-hidden", "true");
      iframe.tabIndex = -1;
      iframe.loading = "eager";
      iframe.style.position = "absolute";
      iframe.style.left = "-9999px";
      iframe.style.top = "0";
      iframe.style.width = "1px";
      iframe.style.height = "1px";
      iframe.style.opacity = "0";
      iframe.style.pointerEvents = "none";
      document.body.appendChild(iframe);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(start, 2000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return null;
}

function BlogRouteGate() {
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    const preload = document.createElement("iframe");
    preload.src = getBlogFreshUrl();
    preload.setAttribute("aria-hidden", "true");
    preload.tabIndex = -1;
    preload.style.position = "absolute";
    preload.style.left = "-9999px";
    preload.style.top = "0";
    preload.style.width = "1px";
    preload.style.height = "1px";
    preload.style.opacity = "0";
    preload.style.pointerEvents = "none";
    document.body.appendChild(preload);

    const timeoutId = window.setTimeout(() => setReady(true), 700);
    preload.onload = () => {
      window.clearTimeout(timeoutId);
      setReady(true);
    };

    return () => {
      window.clearTimeout(timeoutId);
      if (document.body.contains(preload)) {
        document.body.removeChild(preload);
      }
    };
  }, []);

  if (!ready) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center text-mpl-navy">
        <span className="text-sm tracking-wide uppercase">
          Loading latest posts...
        </span>
      </div>
    );
  }

  return <Blog />;
}

function AppShell() {
  return (
    <>
      <RouteSEO />
      <StructuredData />
      <div className="flex flex-col min-h-screen relative">
        <BlogWarmup />
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
            <Route
              path="/expungement-record-sealing"
              element={<ExpungementRecordSealing />}
            />
            <Route path="/drug-charges" element={<DrugCharges />} />
            <Route
              path="/assault-family-violence"
              element={<AssaultFamilyViolence />}
            />
            <Route
              path="/probation-violations"
              element={<ProbationViolations />}
            />
            <Route path="/warrants-arrest" element={<WarrantsArrest />} />
            <Route
              path="/under-investigation"
              element={<UnderInvestigation />}
            />
            <Route path="/weapons-charges" element={<WeaponsCharges />} />
            <Route
              path="/felony-charges-defense"
              element={<FelonyChargesDefense />}
            />
            <Route
              path="/misdemeanor-defense"
              element={<MisdemeanorDefense />}
            />
            <Route
              path="/uncontested-divorce"
              element={<UncontestedDivorce />}
            />
            <Route path="/flat-fee-divorce" element={<FlatFeeDivorce />} />
            <Route path="/contested-divorce" element={<ContestedDivorce />} />
            <Route
              path="/child-visitation-possession"
              element={<ChildVisitationPossession />}
            />
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
            <Route
              path="/paternity-fathers-rights"
              element={<PaternityFathersRights />}
            />
            <Route
              path="/grandparents-rights"
              element={<GrandparentsRights />}
            />
            <Route
              path="/mediation-collaborative-divorce"
              element={<MediationCollaborativeDivorce />}
            />
            <Route
              path="/emergency-custody-orders"
              element={<EmergencyCustodyOrders />}
            />
            <Route path="/estate-planning" element={<EstatePlanning />} />
            <Route path="/power-of-attorney" element={<PowerOfAttorney />} />
            <Route path="/advance-directives" element={<AdvanceDirectives />} />
            <Route path="/asset-protection" element={<AssetProtection />} />
            <Route path="/trust" element={<Trust />} />
            <Route path="/will" element={<Will />} />
            <Route path="/probate-law" element={<ProbateLaw />} />
            <Route path="/do-i-need-probate" element={<DoINeedProbate />} />
            <Route
              path="/how-to-start-probate"
              element={<HowToStartProbate />}
            />
            <Route path="/probating-a-will" element={<ProbatingAWill />} />
            <Route
              path="/probate-without-will"
              element={<ProbateWithoutWill />}
            />
            <Route
              path="/small-estate-affidavit"
              element={<SmallEstateAffidavit />}
            />
            <Route
              path="/affidavit-of-heirship"
              element={<AffidavitOfHeirship />}
            />
            <Route
              path="/transferring-property-after-death"
              element={<TransferringPropertyAfterDeath />}
            />
            <Route
              path="/probate-disputes-litigation"
              element={<ProbateDisputesLitigation />}
            />
            <Route
              path="/heirship-proceedings"
              element={<HeirshipProceedings />}
            />
            <Route path="/muniment-of-title" element={<MunimentOfTitle />} />
            <Route path="/probate-litigation" element={<ProbateLitigation />} />
            <Route path="/estate-affidavits" element={<EstateAffidavits />} />
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
            <Route path="/resources/blog" element={<BlogRouteGate />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/resources/faq" element={<FAQ />} />
            <Route
              path="/newsletter/unsubscribe"
              element={<NewsletterUnsubscribe />}
            />
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
