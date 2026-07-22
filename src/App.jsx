import React, { Suspense, useEffect, useRef, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import SEO from "./components/SEO";
import StructuredData from "./components/StructuredData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import StickyMobileCTA from "./components/StickyMobileCTA";
import Breadcrumb from "./components/Breadcrumb";
import { normalizePath, toCanonicalUrl } from "./data/siteConfig";

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const FirmOverview = lazy(() => import("./pages/FirmOverview"));
const FamilyLaw = lazy(() => import("./pages/FamilyLaw"));
const CriminalDefense = lazy(() => import("./pages/CriminalDefense"));
const DWI = lazy(() => import("./pages/DWI"));
const DomesticViolence = lazy(() => import("./pages/DomesticViolence"));
const ProtectiveOrders = lazy(() => import("./pages/ProtectiveOrders"));
const TheftPropertyCrimes = lazy(() => import("./pages/TheftPropertyCrimes"));
const ExpungementRecordSealing = lazy(
  () => import("./pages/ExpungementRecordSealing"),
);
const DrugCharges = lazy(() => import("./pages/DrugCharges"));
const AssaultFamilyViolence = lazy(
  () => import("./pages/AssaultFamilyViolence"),
);
const ProbationViolations = lazy(() => import("./pages/ProbationViolations"));
const WarrantsArrest = lazy(() => import("./pages/WarrantsArrest"));
const UnderInvestigation = lazy(() => import("./pages/UnderInvestigation"));
const WeaponsCharges = lazy(() => import("./pages/WeaponsCharges"));
const FelonyChargesDefense = lazy(() => import("./pages/FelonyChargesDefense"));
const MisdemeanorDefense = lazy(() => import("./pages/MisdemeanorDefense"));
const UncontestedDivorce = lazy(() => import("./pages/UncontestedDivorce"));
const ContestedDivorce = lazy(() => import("./pages/ContestedDivorce"));
const ChildCustody = lazy(() => import("./pages/ChildCustody"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));
const ChildSupport = lazy(() => import("./pages/ChildSupport"));
const Adoption = lazy(() => import("./pages/Adoption"));
const NameChange = lazy(() => import("./pages/NameChange"));
const ModificationOfPreviousOrder = lazy(
  () => import("./pages/ModificationOfPreviousOrder"),
);
const PropertyDivision = lazy(() => import("./pages/PropertyDivision"));
const Enforcement = lazy(() => import("./pages/Enforcement"));
const SpousalMaintenance = lazy(() => import("./pages/SpousalMaintenance"));
const PrenuptialAgreement = lazy(() => import("./pages/PrenuptialAgreement"));
const PostnuptialAgreement = lazy(() => import("./pages/PostnuptialAgreement"));
const PaternityFathersRights = lazy(
  () => import("./pages/PaternityFathersRights"),
);
const GrandparentsRights = lazy(() => import("./pages/GrandparentsRights"));
const FlatFeeDivorce = lazy(() => import("./pages/FlatFeeDivorce"));
const ChildVisitationPossession = lazy(
  () => import("./pages/ChildVisitationPossession"),
);
const MediationCollaborativeDivorce = lazy(
  () => import("./pages/MediationCollaborativeDivorce"),
);
const EmergencyCustodyOrders = lazy(
  () => import("./pages/EmergencyCustodyOrders"),
);
const EstatePlanning = lazy(() => import("./pages/EstatePlanning"));
const PowerOfAttorney = lazy(() => import("./pages/PowerOfAttorney"));
const AdvanceDirectives = lazy(() => import("./pages/AdvanceDirectives"));
const AssetProtection = lazy(() => import("./pages/AssetProtection"));
const Trust = lazy(() => import("./pages/Trust"));
const Will = lazy(() => import("./pages/Will"));
const ProbateLaw = lazy(() => import("./pages/ProbateLaw"));
const DoINeedProbate = lazy(() => import("./pages/DoINeedProbate"));
const HowToStartProbate = lazy(() => import("./pages/HowToStartProbate"));
const ProbatingAWill = lazy(() => import("./pages/ProbatingAWill"));
const ProbateWithoutWill = lazy(() => import("./pages/ProbateWithoutWill"));
const SmallEstateAffidavit = lazy(() => import("./pages/SmallEstateAffidavit"));
const AffidavitOfHeirship = lazy(() => import("./pages/AffidavitOfHeirship"));
const TransferringPropertyAfterDeath = lazy(
  () => import("./pages/TransferringPropertyAfterDeath"),
);
const ProbateDisputesLitigation = lazy(
  () => import("./pages/ProbateDisputesLitigation"),
);
const HeirshipProceedings = lazy(() => import("./pages/HeirshipProceedings"));
const MunimentOfTitle = lazy(() => import("./pages/MunimentOfTitle"));
const ProbateLitigation = lazy(() => import("./pages/ProbateLitigation"));
const EstateAffidavits = lazy(() => import("./pages/EstateAffidavits"));
const TeamMember = lazy(() => import("./pages/TeamMember"));
const StyleGuide = lazy(() => import("./pages/StyleGuide"));
const Books = lazy(() => import("./pages/Books"));
const BookFamilyBlindsided = lazy(() => import("./pages/BookFamilyBlindsided"));
const BookDivorceGuide = lazy(() => import("./pages/BookDivorceGuide"));
const Blog = lazy(() => import("./pages/Blog"));
const Partners = lazy(() => import("./pages/Partners"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NewsletterUnsubscribe = lazy(
  () => import("./pages/NewsletterUnsubscribe"),
);
const VisualEnhancer = lazy(() => import("./components/VisualEnhancer"));
const FloatingBubbles = lazy(() => import("./components/home/FloatingBubbles"));
const ChatWidget = lazy(() => import("./components/ChatWidget"));
const JuvenileDefense = lazy(() => import("./pages/JuvenileDefense"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const ServiceArea = lazy(() => import("./pages/ServiceArea"));
const NotFound = lazy(() => import("./pages/NotFound"));

const BLOG_ORIGIN = "https://blog.moralespadialaw.com";
const BLOG_FRESH_WINDOW_MS = 2 * 60 * 1000;

function getBlogFreshUrl() {
  const freshnessBucket = Math.floor(Date.now() / BLOG_FRESH_WINDOW_MS);
  return `${BLOG_ORIGIN}?v=${freshnessBucket}`;
}

function RouteSEO() {
  const { pathname } = useLocation();
  const path = normalizePath(pathname);

  const baseKeywords =
    "Morales Padia Law, San Antonio attorney, family law, divorce, child custody, estate planning, probate, criminal defense, DWI, adoption, award-winning";

  const seoByPath = {
    // ─── HOME ───────────────────────────────────────────────────────────
    "/": {
      title: "San Antonio Family Law Attorney | Morales Padia Law",
      description:
        "Award-winning San Antonio attorneys for family law, estate planning, probate & criminal defense. Serving Bexar, Comal, Kendall & surrounding counties.",
      keywords:
        baseKeywords +
        ", Bexar County attorney, Comal County attorney, Kendall County attorney, Atascosa County attorney, Wilson County attorney, Medina County attorney, Alamo Heights attorney, Helotes attorney, New Braunfels attorney, Boerne attorney, Converse attorney, Live Oak attorney, Schertz attorney, Universal City attorney",
    },

    // ─── ABOUT ──────────────────────────────────────────────────────────
    "/firm-overview": {
      title: "San Antonio Law Firm Overview | Morales Padia Law",
      description:
        "Learn about Morales Padia Law — a women-led, award-winning San Antonio law firm. Top-rated attorneys for family law, estate planning, and criminal defense.",
      keywords:
        "Morales Padia Law firm overview, San Antonio law firm, women-led law firm San Antonio, award-winning attorney San Antonio TX, Trisha Morales Padia attorney, best law firm San Antonio, Bexar County attorney, top-rated family law firm San Antonio",
    },
    "/about": {
      title: "About Morales Padia Law | San Antonio TX Attorney",
      description:
        "Discover Morales Padia Law — a client-centered, award-winning law firm in San Antonio TX serving families, estates, and those facing criminal charges.",
      keywords:
        "about Morales Padia Law, San Antonio attorney, Bexar County law firm, family law firm San Antonio, award-winning law firm Texas, women attorney San Antonio TX",
    },
    "/testimonials": {
      title: "Client Reviews & Testimonials | Morales Padia Law San Antonio",
      description:
        "Read verified client testimonials and 5-star reviews for Morales Padia Law. See why San Antonio families trust us for legal help.",
      keywords:
        "Morales Padia Law reviews, client testimonials San Antonio attorney, best divorce lawyer reviews San Antonio, law firm reviews Bexar County, 5-star attorney San Antonio",
    },

    // ─── FAMILY LAW ─────────────────────────────────────────────────────
    "/family-law": {
      title: "Family Law Attorney San Antonio TX | Morales Padia Law",
      description:
        "Experienced family law attorneys in San Antonio TX. Divorce, child custody, child support, modifications, and more for Bexar, Comal & Kendall Counties.",
      keywords:
        "family law attorney San Antonio TX, family lawyer San Antonio, divorce attorney San Antonio TX, child custody lawyer San Antonio, child support attorney Bexar County, SAPCR attorney Texas, spousal maintenance lawyer San Antonio, family law attorney Alamo Heights TX, family law attorney Helotes TX, family lawyer New Braunfels TX, divorce attorney Boerne TX, child custody attorney Converse TX, family law attorney Live Oak TX, family law attorney Schertz TX, family lawyer Universal City TX, attorney Floresville TX, family law Kendall County, family law Comal County",
    },
    "/child-custody": {
      title: "Child Custody Attorney San Antonio TX | Morales Padia Law",
      description:
        "Dedicated San Antonio child custody attorney fighting for your parental rights. Contested custody, SAPCR, joint custody, and sole managing conservatorship.",
      keywords:
        "child custody attorney San Antonio TX, child custody lawyer San Antonio, custody attorney Bexar County, SAPCR attorney San Antonio, joint custody attorney Texas, sole managing conservatorship attorney, possessory conservatorship San Antonio, parenting plan attorney Texas, child visitation attorney San Antonio, contested custody attorney, emergency custody San Antonio, best child custody lawyer San Antonio TX, how to get child custody in Texas",
    },
    "/child-support": {
      title: "Child Support Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio child support attorney helping you establish, modify, or enforce child support orders. Texas child support calculations and arrears.",
      keywords:
        "child support attorney San Antonio TX, child support lawyer San Antonio, establish child support Texas, modify child support San Antonio, enforce child support Bexar County, child support arrears attorney Texas, child support calculation Texas, child support enforcement San Antonio, how much is child support in Texas, Texas child support guidelines",
    },
    "/child-visitation-possession": {
      title: "Child Visitation Attorney San Antonio | Morales Padia Law",
      description:
        "San Antonio attorney for child visitation, possession schedules, and parenting time disputes. Standard possession orders and expanded schedules.",
      keywords:
        "child visitation attorney San Antonio TX, possession order attorney Texas, standard possession order San Antonio, expanded possession order Texas, parenting time attorney San Antonio, visitation rights lawyer Bexar County, enforce visitation order Texas, child possession schedule attorney",
    },
    "/uncontested-divorce": {
      title: "Uncontested Divorce Lawyer San Antonio TX | Morales Padia Law",
      description:
        "Affordable uncontested divorce lawyer in San Antonio TX. We handle agreed divorces, paperwork, and court filings quickly and efficiently in Bexar County.",
      keywords:
        "uncontested divorce lawyer San Antonio TX, agreed divorce attorney San Antonio, cheap divorce San Antonio TX, affordable divorce attorney Bexar County, no-fault divorce Texas, uncontested divorce paperwork San Antonio, quick divorce San Antonio TX, divorce without fighting San Antonio, agreed final decree divorce Texas",
    },
    "/contested-divorce": {
      title: "Contested Divorce Attorney San Antonio TX | Morales Padia Law",
      description:
        "Aggressive contested divorce attorney in San Antonio TX. Expert representation in high-conflict property, custody, and support disputes in Bexar County.",
      keywords:
        "contested divorce attorney San Antonio TX, contested divorce lawyer Bexar County, high-conflict divorce attorney San Antonio, divorce lawyer San Antonio TX, property division divorce attorney, custody dispute divorce lawyer San Antonio, divorce trial attorney Texas, best divorce attorney San Antonio, divorce litigation attorney Texas, marital property dispute lawyer",
    },
    "/flat-fee-divorce": {
      title: "Flat Fee Divorce Lawyer San Antonio TX | Morales Padia Law",
      description:
        "Flat fee divorce attorney in San Antonio TX with clear upfront pricing. Uncontested divorces, no hidden costs. Serving Bexar County couples.",
      keywords:
        "flat fee divorce San Antonio, affordable divorce lawyer San Antonio TX, low cost divorce attorney Bexar County, cheap divorce attorney San Antonio, fixed price divorce Texas, no-fault divorce flat fee, uncontested divorce flat fee San Antonio, how much does a divorce cost in Texas",
    },
    "/mediation-collaborative-divorce": {
      title: "Divorce Mediation Attorney San Antonio TX | Morales Padia Law",
      description:
        "Collaborative divorce and mediation attorney in San Antonio TX. Resolve divorce disputes without court through mediation, saving time and money.",
      keywords:
        "divorce mediation attorney San Antonio TX, collaborative divorce lawyer San Antonio, divorce mediator Bexar County, mediated divorce Texas, alternative dispute resolution divorce San Antonio, amicable divorce attorney Texas, divorce mediation cost Texas, collaborative law attorney San Antonio",
    },
    "/adoption": {
      title: "Adoption Attorney San Antonio TX | Morales Padia Law",
      description:
        "Compassionate adoption attorney in San Antonio TX. We handle stepparent adoption, private adoption, and family adoption cases in Bexar County.",
      keywords:
        "adoption attorney San Antonio TX, adoption lawyer San Antonio, stepparent adoption attorney Texas, foster care adoption attorney San Antonio, private adoption lawyer Bexar County, Texas adoption process attorney, infant adoption attorney San Antonio, how to adopt in Texas, family adoption lawyer San Antonio TX",
    },
    "/name-change": {
      title: "Legal Name Change Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio name change attorney helping individuals and families with legal name changes in Texas. Quick, efficient court filings in Bexar County.",
      keywords:
        "name change attorney San Antonio TX, legal name change lawyer Texas, name change petition Bexar County, how to change your name in Texas, name change after divorce Texas, name change after marriage Texas, adult name change attorney San Antonio, child name change lawyer Texas",
    },
    "/modification-of-previous-order": {
      title: "Modify Custody or Support Orders San Antonio | Morales Padia Law",
      description:
        "San Antonio modification attorney for updating child custody, visitation, and support orders. Expert guidance when circumstances change in Bexar County.",
      keywords:
        "modification attorney San Antonio TX, modify custody order Texas, modify child support San Antonio, modification of SAPCR order, custody modification lawyer Bexar County, change child support order Texas, modification of visitation order San Antonio, material change in circumstances Texas, how to modify a court order in Texas",
    },
    "/enforcement": {
      title: "Enforce Court Orders Attorney San Antonio | Morales Padia Law",
      description:
        "San Antonio enforcement attorney when orders are violated. Contempt and enforcement actions for child support, custody, and visitation in Bexar County.",
      keywords:
        "enforcement attorney San Antonio TX, enforce child support order Texas, enforce custody order San Antonio, enforce visitation order Bexar County, contempt of court family law Texas, motion to enforce San Antonio, child support contempt attorney Texas, violation of court order attorney San Antonio",
    },
    "/property-division": {
      title: "Property Division in Divorce San Antonio | Morales Padia Law",
      description:
        "San Antonio property division attorney for fair marital asset division. Texas community property law, business valuation, retirement accounts handled.",
      keywords:
        "property division attorney San Antonio TX, community property divorce Texas, divorce property division lawyer Bexar County, marital property division San Antonio, divide house in divorce Texas, retirement account division divorce, hidden assets divorce attorney San Antonio, business valuation divorce Texas, community property vs separate property Texas",
    },
    "/spousal-maintenance": {
      title: "Spousal Maintenance Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio spousal maintenance and alimony attorney. Expert representation for fair outcomes in Bexar County family court divorce cases.",
      keywords:
        "spousal maintenance attorney San Antonio TX, alimony attorney Texas, spousal support lawyer San Antonio, spousal maintenance Texas law, how long does spousal maintenance last in Texas, contractual alimony Texas, divorce alimony San Antonio, spousal maintenance modification attorney Texas",
    },
    "/prenuptial-agreement": {
      title: "Prenuptial Agreement Lawyer San Antonio TX | Morales Padia Law",
      description:
        "San Antonio prenup attorney drafting and reviewing premarital agreements to protect your assets. Serving Bexar County couples.",
      keywords:
        "prenuptial agreement lawyer San Antonio TX, prenup attorney Texas, premarital agreement San Antonio, how to get a prenup in Texas, prenuptial agreement cost Texas, prenup before marriage San Antonio, protect assets with prenup Texas, valid prenuptial agreement Texas requirements",
    },
    "/postnuptial-agreement": {
      title: "Postnuptial Agreement Lawyer San Antonio TX | Morales Padia Law",
      description:
        "San Antonio postnup attorney drafting marital property agreements. Protect your financial future with legally binding agreements in Texas.",
      keywords:
        "postnuptial agreement lawyer San Antonio TX, postnup attorney Texas, marital agreement after marriage San Antonio, postmarital agreement lawyer Bexar County, marital property agreement Texas, protect assets in marriage Texas, postnuptial agreement validity Texas",
    },
    "/paternity-fathers-rights": {
      title: "Paternity Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio paternity and father's rights attorney. We fight for fathers' rights to custody, visitation, and meaningful relationships with their children.",
      keywords:
        "paternity attorney San Antonio TX, father's rights attorney San Antonio, fathers rights lawyer Texas, establish paternity Texas, paternity test attorney San Antonio, unmarried father rights Texas, fathers custody rights San Antonio, paternity suit Texas, DNA paternity attorney Bexar County",
    },
    "/grandparents-rights": {
      title: "Grandparents' Rights Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio grandparents' rights attorney fighting for court-ordered visitation and custody rights for grandparents in Texas.",
      keywords:
        "grandparents rights attorney San Antonio TX, grandparent visitation rights Texas, grandparent custody attorney San Antonio, can grandparents get custody in Texas, grandparent visitation order Bexar County, grandparents rights lawyer Texas, third-party custody Texas",
    },
    "/emergency-custody-orders": {
      title: "Emergency Custody Attorney San Antonio | Morales Padia Law",
      description:
        "Urgent emergency custody attorney in San Antonio TX. We file emergency SAPCR orders, temporary restraining orders, and ex parte motions.",
      keywords:
        "emergency custody attorney San Antonio TX, emergency child custody order Texas, emergency SAPCR attorney San Antonio, emergency TRO family law Texas, ex parte custody order San Antonio, child in danger custody attorney, urgent custody lawyer Bexar County, same day custody filing Texas",
    },
    "/protective-orders": {
      title: "Protective Order Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio protective order attorney for victims of family violence and those fighting false protective order allegations.",
      keywords:
        "protective order attorney San Antonio TX, protective order lawyer Texas, restraining order attorney San Antonio, family violence protective order Bexar County, emergency protective order Texas, how to get a protective order in Texas, fight false protective order Texas, EPO attorney San Antonio, temporary protective order Texas",
    },

    // ─── CRIMINAL LAW ────────────────────────────────────────────────────
    "/criminal-defense": {
      title: "Criminal Defense Attorney San Antonio | Morales Padia Law",
      description:
        "Experienced criminal defense attorneys in San Antonio TX defending DWI, drug charges, domestic violence, assault, felony & misdemeanor cases in Bexar County.",
      keywords:
        "criminal defense attorney San Antonio TX, criminal lawyer San Antonio, best criminal defense attorney Bexar County, criminal defense lawyer Texas, felony attorney San Antonio, misdemeanor attorney San Antonio TX, DWI defense lawyer San Antonio, drug charges defense attorney Texas, assault defense attorney San Antonio, criminal attorney Converse TX, criminal lawyer Live Oak TX, criminal defense Universal City TX, criminal attorney Schertz TX, DWI attorney New Braunfels TX, criminal defense Boerne TX, how to beat criminal charges in Texas",
    },
    "/dwi": {
      title: "DWI Attorney San Antonio TX | Morales Padia Law",
      description:
        "Aggressive San Antonio DWI attorney with a proven track record. First offense DWI, felony DWI, license suspension and ALR hearings in Bexar County.",
      keywords:
        "DWI attorney San Antonio TX, DWI lawyer San Antonio, drunk driving defense attorney Texas, DUI attorney San Antonio, first offense DWI San Antonio, DWI felony defense Texas, ALR hearing attorney San Antonio, DWI license suspension Texas, field sobriety test challenge, breathalyzer attorney Texas, intoxication assault defense, intoxication manslaughter attorney San Antonio, best DWI lawyer San Antonio TX",
    },
    "/domestic-violence": {
      title: "Domestic Violence Defense San Antonio | Morales Padia Law",
      description:
        "Skilled domestic violence defense attorney in San Antonio TX. Fight domestic assault charges, family violence allegations, and protective order violations.",
      keywords:
        "domestic violence defense attorney San Antonio TX, domestic assault attorney San Antonio, family violence defense lawyer Texas, assault family violence Bexar County, fight domestic violence charges Texas, domestic violence false accusation attorney San Antonio, domestic violence protective order defense, continuous violence against family Texas, domestic violence first offense Texas",
    },
    "/assault-family-violence": {
      title: "Assault & Family Violence San Antonio TX | Morales Padia Law",
      description:
        "San Antonio assault and family violence defense attorney. We challenge assault charges, affirmative findings, and family violence enhancements.",
      keywords:
        "assault family violence attorney San Antonio TX, assault defense lawyer Texas, family violence charge San Antonio, assault with bodily injury Texas, aggravated assault attorney San Antonio, family violence affirmative finding Texas, continuous family violence attorney, assault charge defense Bexar County",
    },
    "/drug-charges": {
      title: "Drug Charges Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "Experienced drug charges defense attorney in San Antonio TX. We fight drug possession, delivery, manufacturing, and trafficking charges in Bexar County.",
      keywords:
        "drug charges attorney San Antonio TX, drug possession defense lawyer Texas, drug delivery defense attorney San Antonio, controlled substance defense Bexar County, marijuana charges defense Texas, cocaine possession attorney San Antonio, methamphetamine charges lawyer Texas, drug trafficking attorney San Antonio TX, drug paraphernalia charges Texas, first-time drug offense Texas attorney",
    },
    "/expungement-record-sealing": {
      title: "Expungement Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio expungement and record sealing attorney. Clear your criminal record with an expunction or order of nondisclosure in Texas.",
      keywords:
        "expungement attorney San Antonio TX, record sealing attorney Texas, order of nondisclosure San Antonio, expunction attorney Bexar County, clear criminal record Texas, expunge arrest record San Antonio, nondisclosure petition Texas, how to expunge a record in Texas, am I eligible for expungement Texas, criminal record clearing lawyer San Antonio",
    },
    "/felony-charges-defense": {
      title: "Felony Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "Aggressive felony defense attorney in San Antonio TX. We defend first, second, and third-degree felony charges in Bexar County.",
      keywords:
        "felony defense attorney San Antonio TX, felony lawyer San Antonio, felony charges defense Bexar County, first degree felony attorney Texas, second degree felony defense San Antonio, third degree felony attorney Texas, state jail felony defense San Antonio, felony trial attorney Texas, felony record consequences Texas",
    },
    "/misdemeanor-defense": {
      title: "Misdemeanor Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio misdemeanor defense attorney for Class A, B, and C misdemeanor charges. Protect your record and avoid a conviction in Bexar County.",
      keywords:
        "misdemeanor defense attorney San Antonio TX, misdemeanor lawyer Bexar County, Class A misdemeanor attorney Texas, Class B misdemeanor defense San Antonio, misdemeanor charges defense Texas, criminal misdemeanor attorney San Antonio, avoid misdemeanor conviction Texas",
    },
    "/probation-violations": {
      title: "Probation Violation Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio probation violation attorney fighting revocation motions and helping clients avoid jail. We defend probation violations in Bexar County.",
      keywords:
        "probation violation attorney San Antonio TX, probation revocation lawyer Texas, motion to revoke probation defense San Antonio, probation violation hearing attorney Bexar County, MTR attorney San Antonio, felony probation violation Texas, avoid probation revocation attorney, community supervision violation attorney",
    },
    "/theft-property-crimes": {
      title: "Theft Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio theft and property crimes defense attorney. We fight shoplifting, theft, burglary, robbery, and fraud charges in Bexar County.",
      keywords:
        "theft attorney San Antonio TX, property crimes defense lawyer Texas, shoplifting attorney San Antonio, burglary defense attorney Bexar County, robbery defense lawyer Texas, theft by check San Antonio, organized retail theft attorney, fraud charges defense San Antonio TX, theft felony defense Texas",
    },
    "/under-investigation": {
      title: "Under Investigation Attorney San Antonio | Morales Padia Law",
      description:
        "If you're under criminal investigation in San Antonio TX, call us before charges are filed. Pre-charge defense can prevent an arrest.",
      keywords:
        "under investigation attorney San Antonio TX, pre-charge defense lawyer Texas, criminal investigation defense San Antonio, target of investigation attorney Bexar County, federal investigation defense Texas, grand jury target attorney San Antonio, what to do if under investigation Texas, criminal investigation lawyer",
    },
    "/warrants-arrest": {
      title: "Warrant & Arrest Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio warrant attorney helping you address outstanding arrest warrants before you're taken into custody. We file motions to quash and negotiate bond.",
      keywords:
        "warrant attorney San Antonio TX, arrest warrant defense lawyer Texas, outstanding warrant attorney Bexar County, quash warrant attorney San Antonio, turn yourself in attorney Texas, bail bond attorney San Antonio, bench warrant defense lawyer, capias attorney Texas",
    },
    "/weapons-charges": {
      title: "Weapons Charges Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio weapons charges defense attorney. We fight unlawful carrying, prohibited weapons, felon in possession, and deadly conduct charges.",
      keywords:
        "weapons charges attorney San Antonio TX, unlawful carrying weapon defense Texas, gun charges lawyer San Antonio, felon in possession firearms attorney Bexar County, deadly conduct attorney Texas, prohibited weapon defense San Antonio, illegal firearms attorney Texas, UCW attorney San Antonio",
    },
    "/juvenile-defense": {
      title: "Juvenile Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio juvenile defense attorney protecting minors facing criminal charges in Texas. We fight for diversion, deferred adjudication, and record sealing.",
      keywords:
        "juvenile defense attorney San Antonio TX, juvenile lawyer Texas, juvenile criminal charges San Antonio, minor arrested Bexar County attorney, juvenile court defense Texas, juvenile delinquency attorney San Antonio, seal juvenile record Texas, juvenile probation defense attorney",
    },

    // ─── ESTATE PLANNING ─────────────────────────────────────────────────
    "/estate-planning": {
      title: "Estate Planning Attorney San Antonio | Morales Padia Law",
      description:
        "Award-winning estate planning attorneys in San Antonio TX. Wills, trusts, power of attorney, advance directives & asset protection for Bexar County families.",
      keywords:
        "estate planning attorney San Antonio TX, estate planning lawyer Texas, wills and trusts attorney San Antonio, will attorney Bexar County, trust lawyer San Antonio TX, estate planning attorney Boerne TX, estate planning attorney Helotes TX, estate planning Alamo Heights TX, estate planning New Braunfels TX, estate attorney Floresville TX, will attorney Kendall County, trust attorney Comal County, estate planning Wilson County, legacy planning lawyer Texas, estate planning near me San Antonio, best estate planning attorney San Antonio",
    },
    "/will": {
      title: "Will Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio will attorney drafting legally valid last wills and testaments. Protect your assets, appoint guardians for children, and direct your estate.",
      keywords:
        "will attorney San Antonio TX, last will and testament lawyer Texas, will preparation attorney San Antonio, simple will attorney Bexar County, Texas will requirements, guardian nomination will Texas, how to make a will in Texas, will drafting attorney San Antonio, testamentary will Texas attorney, how much does a will cost in Texas",
    },
    "/trust": {
      title: "Trust Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio trust attorney setting up revocable living trusts, irrevocable trusts, special needs trusts, and testamentary trusts.",
      keywords:
        "trust attorney San Antonio TX, living trust lawyer Texas, revocable living trust attorney San Antonio, irrevocable trust attorney Bexar County, special needs trust attorney Texas, testamentary trust lawyer San Antonio, avoid probate with trust Texas, trust vs will Texas, how to set up a trust in Texas, family trust attorney San Antonio",
    },
    "/power-of-attorney": {
      title: "Power of Attorney Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio power of attorney attorney drafting durable, medical, and financial POA documents. Ensure your wishes are honored if you become incapacitated.",
      keywords:
        "power of attorney attorney San Antonio TX, durable power of attorney Texas, medical power of attorney San Antonio, financial power of attorney Bexar County, POA attorney Texas, healthcare power of attorney San Antonio, springing power of attorney Texas, how to get power of attorney in Texas, power of attorney for elderly parent Texas",
    },
    "/advance-directives": {
      title: "Advance Directives Attorney San Antonio | Morales Padia Law",
      description:
        "San Antonio advance directives attorney helping you prepare living wills, medical directives, and POLST forms.",
      keywords:
        "advance directives attorney San Antonio TX, living will attorney Texas, medical directive lawyer San Antonio, healthcare directive Bexar County, POLST form Texas attorney, directive to physicians Texas, do not resuscitate order attorney, advance healthcare directive San Antonio, end of life planning attorney Texas",
    },
    "/asset-protection": {
      title: "Asset Protection Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio asset protection attorney using trusts, LLCs, and legal strategies to shield your wealth from creditors, lawsuits, and judgment creditors.",
      keywords:
        "asset protection attorney San Antonio TX, asset protection planning Texas, protect assets from creditors Texas, LLC asset protection San Antonio, trust-based asset protection Bexar County, homestead exemption Texas attorney, offshore trust attorney Texas, how to protect assets in Texas, wealth protection lawyer San Antonio",
    },
    "/estate-affidavits": {
      title: "Estate Affidavits Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio estate affidavit attorney helping families use small estate affidavits and affidavits of heirship to transfer assets without full probate.",
      keywords:
        "estate affidavit attorney San Antonio TX, small estate affidavit Texas attorney, affidavit of heirship lawyer Bexar County, transfer assets without probate Texas, estate affidavit attorney San Antonio, probate alternative affidavit Texas, heirship affidavit attorney",
    },

    // ─── PROBATE LAW ─────────────────────────────────────────────────────
    "/probate-law": {
      title: "Probate Attorney San Antonio TX | Morales Padia Law",
      description:
        "Experienced probate attorneys in San Antonio TX. Estate administration, executor guidance, heirship proceedings, and probate litigation in Bexar County.",
      keywords:
        "probate attorney San Antonio TX, probate lawyer Bexar County, probate court San Antonio, estate attorney San Antonio TX, probate attorney Boerne TX, probate lawyer New Braunfels TX, probate attorney Floresville TX, probate Kendall County, probate Comal County, probate Wilson County, probate Atascosa County, probate administration attorney Texas, executor attorney San Antonio, probate process Texas, best probate attorney San Antonio",
    },
    "/do-i-need-probate": {
      title: "Do I Need Probate in Texas? | Morales Padia Law",
      description:
        "Not sure if your estate needs probate in Texas? San Antonio probate attorney explains when probate is required, when it can be avoided, and alternatives.",
      keywords:
        "do I need probate in Texas, Texas probate requirements, when is probate required Texas, avoid probate Texas, probate alternatives Texas, assets that avoid probate Texas, small estate affidavit vs probate Texas, probate attorney San Antonio, is probate required in Texas",
    },
    "/how-to-start-probate": {
      title: "How to Start Probate in Texas | Morales Padia Law",
      description:
        "Step-by-step guide on how to start probate in Texas from a San Antonio probate attorney. Learn the filing requirements and probate court timeline.",
      keywords:
        "how to start probate in Texas, probate process San Antonio TX, filing for probate Texas, probate court Bexar County, probate timeline Texas, Texas probate steps, open an estate in Texas, independent administration Texas probate, probate attorney San Antonio TX",
    },
    "/probating-a-will": {
      title: "Probating a Will in Texas | Morales Padia Law",
      description:
        "San Antonio probate attorney explaining the process of probating a will in Texas. Admitting a will to probate, executor duties, and estate distribution.",
      keywords:
        "probating a will Texas, how to probate a will in Texas, will probate attorney San Antonio, admit will to probate Bexar County, executor of estate attorney Texas, Texas probate court will, independent executor Texas, filing will for probate San Antonio",
    },
    "/probate-without-will": {
      title: "No Will? Probate Options Texas | Morales Padia Law",
      description:
        "Died without a will in Texas? San Antonio probate attorney explains intestate succession, heirship proceedings, and alternative estate settlement options.",
      keywords:
        "probate without will Texas, intestate succession Texas, died without will San Antonio, no will estate attorney Bexar County, intestate estate attorney Texas, who inherits without will Texas, probate no will attorney San Antonio, determination of heirship Texas attorney",
    },
    "/small-estate-affidavit": {
      title: "Small Estate Affidavit San Antonio TX | Morales Padia Law",
      description:
        "San Antonio small estate affidavit attorney helping families collect assets under $75,000 without probate in Texas. Fast, cost-effective estate settlement.",
      keywords:
        "small estate affidavit attorney San Antonio TX, small estate affidavit Texas, estate under 75000 Texas, avoid probate small estate Texas, small estate affidavit Bexar County, Texas small estate affidavit requirements, small estate affidavit bank accounts Texas, how to file small estate affidavit Texas",
    },
    "/affidavit-of-heirship": {
      title: "Affidavit of Heirship San Antonio TX | Morales Padia Law",
      description:
        "San Antonio affidavit of heirship attorney establishing heirs and transferring property title in Texas without full probate.",
      keywords:
        "affidavit of heirship attorney San Antonio TX, affidavit of heirship Texas, heirship affidavit Bexar County, transfer property with heirship affidavit Texas, affidavit of heirship real property Texas, how to file affidavit of heirship Texas, title company affidavit of heirship Texas",
    },
    "/transferring-property-after-death": {
      title: "Transferring Property After Death | Morales Padia Law",
      description:
        "San Antonio attorney explaining all methods to transfer property after death in Texas — probate, trusts, affidavits of heirship, and muniment of title.",
      keywords:
        "transferring property after death Texas, how to transfer property after death in Texas, property title transfer death San Antonio, transfer home after death Texas, estate settlement property transfer Bexar County, inherit property Texas attorney, transfer real estate after death Texas",
    },
    "/probate-disputes-litigation": {
      title: "Probate Disputes Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio probate litigation attorney handling will contests, executor misconduct, undue influence claims, and estate disputes.",
      keywords:
        "probate litigation attorney San Antonio TX, will contest attorney Texas, probate dispute lawyer Bexar County, contest a will Texas, executor misconduct attorney San Antonio, undue influence will contest Texas, breach of fiduciary duty estate attorney, estate dispute attorney San Antonio TX",
    },
    "/heirship-proceedings": {
      title: "Heirship Proceedings Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio heirship proceedings attorney determining legal heirs in Bexar County probate court. Used when someone dies without a will.",
      keywords:
        "heirship proceedings attorney San Antonio TX, determination of heirship Texas, heirship proceeding Bexar County probate, legal heirs Texas attorney, property heirship attorney San Antonio, died without will heirship Texas, intestate heirship determination attorney",
    },
    "/muniment-of-title": {
      title: "Muniment of Title Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio muniment of title attorney for simplified property transfer when there's a valid will and no debts.",
      keywords:
        "muniment of title attorney San Antonio TX, muniment of title Texas, simplified probate Texas, transfer property by will muniment, muniment of title Bexar County, probate alternative Texas muniment, how to use muniment of title in Texas, muniment of title requirements Texas",
    },
    "/probate-litigation": {
      title: "Probate Litigation Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio probate litigation attorney representing heirs, beneficiaries, and executors in contested estate matters. Will contests and trust disputes.",
      keywords:
        "probate litigation attorney San Antonio TX, estate litigation lawyer Texas, trust dispute attorney San Antonio, will contest attorney Bexar County, beneficiary rights attorney Texas, trustee misconduct attorney San Antonio, fiduciary litigation Texas, inheritance dispute lawyer San Antonio TX",
    },

    // ─── RESOURCES & OTHER ───────────────────────────────────────────────
    "/resources/blog": {
      title: "San Antonio Legal Blog | Morales Padia Law",
      description:
        "Free legal insights from San Antonio attorneys on family law, estate planning, probate, and criminal defense. Learn how Texas law affects your family.",
      keywords:
        "family law blog San Antonio, estate planning blog Texas, probate law blog, Texas legal tips, divorce advice Texas, how to make a will Texas, child custody tips Texas, DWI advice Texas, San Antonio attorney blog, Texas law articles",
    },
    "/resources/books": {
      title: "Free Legal Books | San Antonio Attorney | Morales Padia Law",
      description:
        "Download free legal guides by Morales Padia Law on divorce, estate planning, and family law in Texas. Written by award-winning San Antonio attorneys.",
      keywords:
        "free legal book Texas attorney, divorce guide Texas, family law book San Antonio, estate planning guide Texas, legal resources San Antonio, free attorney guide Texas",
    },
    "/resources/faq": {
      title: "Legal FAQ | Common Questions | Morales Padia Law",
      description:
        "Answers to frequently asked legal questions about divorce, child custody, estate planning, probate, and criminal defense in Texas.",
      keywords:
        "family law FAQ Texas, divorce questions San Antonio, child custody FAQ Texas, estate planning FAQ, probate FAQ Texas, criminal defense FAQ San Antonio, Texas law questions answered, common legal questions Texas",
    },
    "/contact": {
      title: "Contact San Antonio Attorney | Morales Padia Law",
      description:
        "Contact Morales Padia Law to schedule your consultation. Serving San Antonio and all Bexar, Comal, Kendall, Atascosa, Wilson & Medina Counties.",
      keywords:
        "contact San Antonio attorney, schedule consultation family law Texas, free consultation divorce attorney San Antonio, lawyer consultation Bexar County, attorney near me San Antonio TX, attorney near me New Braunfels TX, attorney near me Boerne TX, attorney near me Converse TX, attorney near me Live Oak TX, attorney near me Schertz TX, law firm contact San Antonio, estate planning consultation Texas, criminal defense consultation San Antonio",
    },
    "/services": {
      title: "Legal Services San Antonio TX | Morales Padia Law",
      description:
        "Full-service San Antonio law firm for family law, estate planning, probate & criminal defense. Serving Bexar, Comal, Kendall & surrounding counties.",
      keywords:
        "legal services San Antonio TX, family law services, estate planning services Texas, probate law services San Antonio, criminal defense services Bexar County, attorney New Braunfels TX, attorney Boerne TX, attorney Converse TX, attorney Live Oak TX, attorney Schertz TX, attorney Floresville TX, attorney Pleasanton TX, attorney Castroville TX, San Antonio attorney services, full service law firm Texas",
    },
    "/service-area": {
      title: "Service Area | San Antonio TX | Morales Padia Law",
      description:
        "Morales Padia Law serves clients across Bexar, Comal, Kendall, Atascosa, Wilson & Medina Counties — including San Antonio, New Braunfels, Boerne and more.",
      keywords:
        "Morales Padia Law service area, attorney near me San Antonio TX, attorney Bexar County, attorney Comal County, attorney Kendall County, attorney Atascosa County, attorney Wilson County, attorney Medina County, family law attorney Alamo Heights, estate planning attorney Boerne, criminal defense attorney New Braunfels, attorney near Converse TX, attorney near Live Oak TX, attorney Schertz TX, attorney Floresville TX, attorney Pleasanton TX",
    },
    "/resources/books/family-blindsided": {
      title: "Family Blindsided Book | Morales Padia Law",
      description:
        "Download Family Blindsided by Trisha Morales Padia — a free guide for families navigating divorce and family law in Texas.",
      keywords:
        "Family Blindsided book, free divorce guide Texas, Trisha Morales Padia book, San Antonio family law guide",
    },
    "/resources/books/divorce-guide": {
      title: "Texas Divorce Playbook | Morales Padia Law",
      description:
        "Download Truth Before the Split — a free Texas divorce playbook by Trisha Morales Padia covering property, custody, and strategy.",
      keywords:
        "Texas divorce guide, free divorce book San Antonio, divorce playbook Texas, Morales Padia Law book",
    },
    "/partners": {
      title: "Credentials & Partnerships | Morales Padia Law",
      description:
        "Morales Padia Law — recognized partnerships, media features, and professional credentials. Member of Chamber of Commerce, featured in SA Living and Daytime.",
      keywords:
        "Morales Padia Law credentials, partnerships, media features, San Antonio law firm awards",
    },
  };

  const current = seoByPath[path];
  const noindexPaths = new Set([
    "/privacy-policy",
    "/terms-of-service",
    "/style-guide",
    "/newsletter/unsubscribe",
  ]);

  if (!current) {
    if (path.startsWith("/team/")) {
      return (
        <SEO
          title="Our Team | Morales Padia Law"
          description="Meet the Morales Padia Law team — San Antonio attorneys and staff serving families across Bexar County and South Texas."
          keywords={baseKeywords + ", Morales Padia Law team, San Antonio attorneys"}
          canonical={toCanonicalUrl(path)}
        />
      );
    }

    return (
      <SEO
        title="Page not found | Morales Padia Law"
        description="The page you’re looking for doesn’t exist. Return to Morales Padia Law for family law, estate planning, probate, and criminal defense in San Antonio."
        keywords={baseKeywords}
        canonical={toCanonicalUrl(path)}
        noindex
      />
    );
  }

  return (
    <SEO
      {...current}
      canonical={toCanonicalUrl(path)}
      noindex={noindexPaths.has(path)}
    />
  );
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
      const id = window.requestIdleCallback(start, { timeout: 8000 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = window.setTimeout(start, 5000);
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
        <StickyMobileCTA />
        <Header />
        <main className="flex-grow pt-20 relative z-10">
          <Breadcrumb />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service-area" element={<ServiceArea />} />
              <Route
                path="/about"
                element={<Navigate to="/firm-overview" replace />}
              />
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
              <Route path="/juvenile-defense" element={<JuvenileDefense />} />
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
              <Route
                path="/advance-directives"
                element={<AdvanceDirectives />}
              />
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
              <Route
                path="/probate-litigation"
                element={<ProbateLitigation />}
              />
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
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
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
