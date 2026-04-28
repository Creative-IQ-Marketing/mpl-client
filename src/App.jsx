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
    "Morales Padia Law, San Antonio family law attorney, divorce lawyer San Antonio TX, child custody attorney San Antonio, child support attorney Bexar County, spousal maintenance attorney San Antonio, SAPCR attorney Texas, adoption attorney San Antonio, protective order lawyer San Antonio, estate planning attorney San Antonio TX, wills and trusts attorney San Antonio, power of attorney lawyer Texas, probate attorney San Antonio TX, probate lawyer Bexar County, criminal defense attorney San Antonio TX, DWI attorney San Antonio, domestic violence defense lawyer, expungement attorney San Antonio, record sealing Texas, New Braunfels attorney, Boerne TX attorney, Converse TX lawyer, Schertz TX attorney, women-led law firm San Antonio, award-winning attorney San Antonio, Trisha Morales Padia attorney";

  const seoByPath = {
    // ─── HOME ───────────────────────────────────────────────────────────
    "/": {
      title:
        "Morales Padia Law | San Antonio Family Law, Estate Planning & Criminal Defense Attorney",
      description:
        "Award-winning San Antonio attorneys for family law (divorce, child custody, child support), estate planning (wills, trusts, power of attorney), probate, and criminal defense (DWI). Serving Bexar County, New Braunfels, Boerne & surrounding areas. Call (726) 204-4044.",
      keywords: baseKeywords,
    },

    // ─── ABOUT ──────────────────────────────────────────────────────────
    "/firm-overview": {
      title:
        "Firm Overview | Award-Winning San Antonio Law Firm | Morales Padia Law",
      description:
        "Learn about Morales Padia Law — a women-led, award-winning San Antonio law firm. Top-rated attorneys for family law, estate planning, probate, and criminal defense in Bexar County.",
      keywords:
        "Morales Padia Law firm overview, San Antonio law firm, women-led law firm San Antonio, award-winning attorney San Antonio TX, Trisha Morales Padia attorney, best law firm San Antonio, Bexar County attorney, top-rated family law firm San Antonio",
    },
    "/about": {
      title: "About Morales Padia Law | San Antonio TX Attorney",
      description:
        "Discover Morales Padia Law — a client-centered, award-winning law firm in San Antonio TX serving families, estates, and those facing criminal charges. 98%+ client satisfaction.",
      keywords:
        "about Morales Padia Law, San Antonio attorney, Bexar County law firm, family law firm San Antonio, award-winning law firm Texas, women attorney San Antonio TX",
    },
    "/testimonials": {
      title: "Client Reviews & Testimonials | Morales Padia Law San Antonio",
      description:
        "Read verified client testimonials and 5-star reviews for Morales Padia Law. See why San Antonio families choose us for divorce, custody, estate planning, and criminal defense.",
      keywords:
        "Morales Padia Law reviews, client testimonials San Antonio attorney, best divorce lawyer reviews San Antonio, law firm reviews Bexar County, 5-star attorney San Antonio",
    },

    // ─── FAMILY LAW ─────────────────────────────────────────────────────
    "/family-law": {
      title: "Family Law Attorney San Antonio TX | Morales Padia Law",
      description:
        "Experienced San Antonio family law attorney for divorce, child custody, child support, modifications, spousal maintenance, adoption, and protective orders. Serving Bexar County, New Braunfels & Boerne. Call (726) 204-4044.",
      keywords:
        "family law attorney San Antonio TX, family lawyer San Antonio, divorce attorney San Antonio TX, child custody lawyer San Antonio, child support attorney Bexar County, SAPCR attorney Texas, spousal maintenance lawyer San Antonio, modification attorney San Antonio, protective order lawyer San Antonio, adoption attorney San Antonio, family court Bexar County, Texas family law, best family lawyer San Antonio",
    },
    "/child-custody": {
      title: "Child Custody Attorney San Antonio TX | Morales Padia Law",
      description:
        "Dedicated San Antonio child custody attorney fighting for your parental rights. Contested custody, SAPCR, joint custody, sole managing conservatorship, and parenting plans in Bexar County. Call (726) 204-4044.",
      keywords:
        "child custody attorney San Antonio TX, child custody lawyer San Antonio, custody attorney Bexar County, SAPCR attorney San Antonio, joint custody attorney Texas, sole managing conservatorship attorney, possessory conservatorship San Antonio, parenting plan attorney Texas, child visitation attorney San Antonio, contested custody attorney, emergency custody San Antonio, best child custody lawyer San Antonio TX, how to get child custody in Texas",
    },
    "/child-support": {
      title: "Child Support Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio child support attorney helping you establish, modify, or enforce child support orders. Texas child support calculations, arrears, and enforcement in Bexar County. Call (726) 204-4044.",
      keywords:
        "child support attorney San Antonio TX, child support lawyer San Antonio, establish child support Texas, modify child support San Antonio, enforce child support Bexar County, child support arrears attorney Texas, child support calculation Texas, child support enforcement San Antonio, how much is child support in Texas, Texas child support guidelines",
    },
    "/child-visitation-possession": {
      title:
        "Child Visitation & Possession Attorney San Antonio | Morales Padia Law",
      description:
        "San Antonio attorney for child visitation, possession schedules, and parenting time disputes. Standard possession orders, expanded schedules, and enforcement in Bexar County.",
      keywords:
        "child visitation attorney San Antonio TX, possession order attorney Texas, standard possession order San Antonio, expanded possession order Texas, parenting time attorney San Antonio, visitation rights lawyer Bexar County, enforce visitation order Texas, child possession schedule attorney",
    },
    "/uncontested-divorce": {
      title: "Uncontested Divorce Lawyer San Antonio TX | Morales Padia Law",
      description:
        "Affordable uncontested divorce lawyer in San Antonio TX. We handle agreed divorces, paperwork, and court filings quickly and efficiently in Bexar County. Call for a flat-fee consultation.",
      keywords:
        "uncontested divorce lawyer San Antonio TX, agreed divorce attorney San Antonio, cheap divorce San Antonio TX, affordable divorce attorney Bexar County, no-fault divorce Texas, uncontested divorce paperwork San Antonio, quick divorce San Antonio TX, divorce without fighting San Antonio, agreed final decree divorce Texas",
    },
    "/contested-divorce": {
      title: "Contested Divorce Attorney San Antonio TX | Morales Padia Law",
      description:
        "Aggressive contested divorce attorney in San Antonio TX. We protect your rights in high-conflict divorces involving property division, child custody, and spousal support disputes in Bexar County.",
      keywords:
        "contested divorce attorney San Antonio TX, contested divorce lawyer Bexar County, high-conflict divorce attorney San Antonio, divorce lawyer San Antonio TX, property division divorce attorney, custody dispute divorce lawyer San Antonio, divorce trial attorney Texas, best divorce attorney San Antonio, divorce litigation attorney Texas, marital property dispute lawyer",
    },
    "/flat-fee-divorce": {
      title:
        "Flat Fee Divorce Lawyer San Antonio | Affordable Divorce | Morales Padia Law",
      description:
        "Flat fee divorce attorney in San Antonio TX — clear, upfront pricing for uncontested divorces. No hidden costs. Serving couples in Bexar County who want a smooth, cost-effective divorce.",
      keywords:
        "flat fee divorce San Antonio, affordable divorce lawyer San Antonio TX, low cost divorce attorney Bexar County, cheap divorce attorney San Antonio, fixed price divorce Texas, no-fault divorce flat fee, uncontested divorce flat fee San Antonio, how much does a divorce cost in Texas",
    },
    "/mediation-collaborative-divorce": {
      title: "Divorce Mediation Attorney San Antonio TX | Morales Padia Law",
      description:
        "Collaborative divorce and mediation attorney in San Antonio TX. Resolve divorce disputes without court through mediation, saving time and money. Serving Bexar County and surrounding areas.",
      keywords:
        "divorce mediation attorney San Antonio TX, collaborative divorce lawyer San Antonio, divorce mediator Bexar County, mediated divorce Texas, alternative dispute resolution divorce San Antonio, amicable divorce attorney Texas, divorce mediation cost Texas, collaborative law attorney San Antonio",
    },
    "/adoption": {
      title: "Adoption Attorney San Antonio TX | Morales Padia Law",
      description:
        "Compassionate adoption attorney in San Antonio TX. We handle stepparent adoption, private adoption, and family adoption cases in Bexar County. Turn your family dream into reality.",
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
      title:
        "Modify Custody or Support Orders San Antonio TX | Morales Padia Law",
      description:
        "San Antonio modification attorney for changing child custody, visitation, or child support orders. When circumstances change, we help you update your court orders in Bexar County.",
      keywords:
        "modification attorney San Antonio TX, modify custody order Texas, modify child support San Antonio, modification of SAPCR order, custody modification lawyer Bexar County, change child support order Texas, modification of visitation order San Antonio, material change in circumstances Texas, how to modify a court order in Texas",
    },
    "/enforcement": {
      title:
        "Enforcement of Court Orders Attorney San Antonio | Morales Padia Law",
      description:
        "San Antonio enforcement attorney when the other party violates court orders for child support, custody, or visitation. We pursue contempt and enforcement actions in Bexar County.",
      keywords:
        "enforcement attorney San Antonio TX, enforce child support order Texas, enforce custody order San Antonio, enforce visitation order Bexar County, contempt of court family law Texas, motion to enforce San Antonio, child support contempt attorney Texas, violation of court order attorney San Antonio",
    },
    "/property-division": {
      title: "Property Division in Divorce San Antonio TX | Morales Padia Law",
      description:
        "San Antonio property division attorney ensuring fair division of marital assets in divorce. Texas community property law, hidden assets, business valuation, and retirement accounts.",
      keywords:
        "property division attorney San Antonio TX, community property divorce Texas, divorce property division lawyer Bexar County, marital property division San Antonio, divide house in divorce Texas, retirement account division divorce, hidden assets divorce attorney San Antonio, business valuation divorce Texas, community property vs separate property Texas",
    },
    "/spousal-maintenance": {
      title: "Spousal Maintenance Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio spousal maintenance attorney handling alimony, spousal support, and maintenance orders in divorce. We fight for fair outcomes in Bexar County family court.",
      keywords:
        "spousal maintenance attorney San Antonio TX, alimony attorney Texas, spousal support lawyer San Antonio, spousal maintenance Texas law, how long does spousal maintenance last in Texas, contractual alimony Texas, divorce alimony San Antonio, spousal maintenance modification attorney Texas",
    },
    "/prenuptial-agreement": {
      title: "Prenuptial Agreement Lawyer San Antonio TX | Morales Padia Law",
      description:
        "San Antonio prenuptial agreement lawyer drafting and reviewing premarital agreements to protect your assets before marriage. Serving Bexar County couples.",
      keywords:
        "prenuptial agreement lawyer San Antonio TX, prenup attorney Texas, premarital agreement San Antonio, how to get a prenup in Texas, prenuptial agreement cost Texas, prenup before marriage San Antonio, protect assets with prenup Texas, valid prenuptial agreement Texas requirements",
    },
    "/postnuptial-agreement": {
      title: "Postnuptial Agreement Lawyer San Antonio TX | Morales Padia Law",
      description:
        "San Antonio postnuptial agreement attorney drafting marital property agreements after marriage. Protect your financial future with a legally binding postnup in Texas.",
      keywords:
        "postnuptial agreement lawyer San Antonio TX, postnup attorney Texas, marital agreement after marriage San Antonio, postmarital agreement lawyer Bexar County, marital property agreement Texas, protect assets in marriage Texas, postnuptial agreement validity Texas",
    },
    "/paternity-fathers-rights": {
      title:
        "Paternity & Father's Rights Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio paternity and father's rights attorney. We fight for fathers' rights to custody, visitation, and meaningful relationships with their children in Bexar County.",
      keywords:
        "paternity attorney San Antonio TX, father's rights attorney San Antonio, fathers rights lawyer Texas, establish paternity Texas, paternity test attorney San Antonio, unmarried father rights Texas, fathers custody rights San Antonio, paternity suit Texas, DNA paternity attorney Bexar County",
    },
    "/grandparents-rights": {
      title: "Grandparents' Rights Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio grandparents' rights attorney fighting for court-ordered visitation and custody rights for grandparents in Texas. Bexar County family court representation.",
      keywords:
        "grandparents rights attorney San Antonio TX, grandparent visitation rights Texas, grandparent custody attorney San Antonio, can grandparents get custody in Texas, grandparent visitation order Bexar County, grandparents rights lawyer Texas, third-party custody Texas",
    },
    "/emergency-custody-orders": {
      title:
        "Emergency Custody Order Attorney San Antonio TX | Morales Padia Law",
      description:
        "Urgent emergency custody attorney in San Antonio TX. We file emergency SAPCR orders, temporary restraining orders, and ex parte motions when children are at risk in Bexar County.",
      keywords:
        "emergency custody attorney San Antonio TX, emergency child custody order Texas, emergency SAPCR attorney San Antonio, emergency TRO family law Texas, ex parte custody order San Antonio, child in danger custody attorney, urgent custody lawyer Bexar County, same day custody filing Texas",
    },
    "/protective-orders": {
      title: "Protective Order Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio protective order attorney for victims of family violence and those fighting false protective order allegations. We handle emergency orders, hearings, and enforcement in Bexar County.",
      keywords:
        "protective order attorney San Antonio TX, protective order lawyer Texas, restraining order attorney San Antonio, family violence protective order Bexar County, emergency protective order Texas, how to get a protective order in Texas, fight false protective order Texas, EPO attorney San Antonio, temporary protective order Texas",
    },

    // ─── CRIMINAL LAW ────────────────────────────────────────────────────
    "/criminal-defense": {
      title: "Criminal Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "Experienced criminal defense attorney in San Antonio TX. We fight DWI, drug charges, domestic violence, assault, felony, and misdemeanor cases in Bexar County. Call (726) 204-4044 — available 24/7.",
      keywords:
        "criminal defense attorney San Antonio TX, criminal lawyer San Antonio, best criminal defense attorney Bexar County, criminal defense lawyer Texas, felony attorney San Antonio, misdemeanor attorney San Antonio TX, DWI defense lawyer San Antonio, drug charges defense attorney Texas, assault defense attorney San Antonio, how to beat criminal charges in Texas",
    },
    "/dwi": {
      title:
        "DWI Attorney San Antonio TX | Aggressive DWI Defense | Morales Padia Law",
      description:
        "Aggressive San Antonio DWI attorney with a proven track record. First offense DWI, felony DWI, license suspension, ALR hearings, and sobriety test challenges in Bexar County. Call now.",
      keywords:
        "DWI attorney San Antonio TX, DWI lawyer San Antonio, drunk driving defense attorney Texas, DUI attorney San Antonio, first offense DWI San Antonio, DWI felony defense Texas, ALR hearing attorney San Antonio, DWI license suspension Texas, field sobriety test challenge, breathalyzer attorney Texas, intoxication assault defense, intoxication manslaughter attorney San Antonio, best DWI lawyer San Antonio TX",
    },
    "/domestic-violence": {
      title:
        "Domestic Violence Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "Skilled domestic violence defense attorney in San Antonio TX. Fight domestic assault charges, family violence allegations, and protective order violations in Bexar County. Protect your rights.",
      keywords:
        "domestic violence defense attorney San Antonio TX, domestic assault attorney San Antonio, family violence defense lawyer Texas, assault family violence Bexar County, fight domestic violence charges Texas, domestic violence false accusation attorney San Antonio, domestic violence protective order defense, continuous violence against family Texas, domestic violence first offense Texas",
    },
    "/assault-family-violence": {
      title:
        "Assault & Family Violence Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio assault and family violence defense attorney. We challenge assault charges, affirmative findings, and family violence enhancements in Bexar County courts.",
      keywords:
        "assault family violence attorney San Antonio TX, assault defense lawyer Texas, family violence charge San Antonio, assault with bodily injury Texas, aggravated assault attorney San Antonio, family violence affirmative finding Texas, continuous family violence attorney, assault charge defense Bexar County",
    },
    "/drug-charges": {
      title: "Drug Charges Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "Experienced drug charges defense attorney in San Antonio TX. We fight drug possession, delivery, manufacturing, and trafficking charges in Bexar County. Call (726) 204-4044.",
      keywords:
        "drug charges attorney San Antonio TX, drug possession defense lawyer Texas, drug delivery defense attorney San Antonio, controlled substance defense Bexar County, marijuana charges defense Texas, cocaine possession attorney San Antonio, methamphetamine charges lawyer Texas, drug trafficking attorney San Antonio TX, drug paraphernalia charges Texas, first-time drug offense Texas attorney",
    },
    "/expungement-record-sealing": {
      title:
        "Expungement & Record Sealing Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio expungement and record sealing attorney. Clear your criminal record with an expunction or order of nondisclosure in Texas. Regain employment, housing, and freedom. Call (726) 204-4044.",
      keywords:
        "expungement attorney San Antonio TX, record sealing attorney Texas, order of nondisclosure San Antonio, expunction attorney Bexar County, clear criminal record Texas, expunge arrest record San Antonio, nondisclosure petition Texas, how to expunge a record in Texas, am I eligible for expungement Texas, criminal record clearing lawyer San Antonio",
    },
    "/felony-charges-defense": {
      title: "Felony Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "Aggressive felony defense attorney in San Antonio TX. We defend first, second, and third-degree felony charges in Bexar County. Your freedom and future demand strong representation.",
      keywords:
        "felony defense attorney San Antonio TX, felony lawyer San Antonio, felony charges defense Bexar County, first degree felony attorney Texas, second degree felony defense San Antonio, third degree felony attorney Texas, state jail felony defense San Antonio, felony trial attorney Texas, felony record consequences Texas",
    },
    "/misdemeanor-defense": {
      title: "Misdemeanor Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio misdemeanor defense attorney for Class A, B, and C misdemeanor charges. Protect your record and avoid a conviction in Bexar County. Call (726) 204-4044.",
      keywords:
        "misdemeanor defense attorney San Antonio TX, misdemeanor lawyer Bexar County, Class A misdemeanor attorney Texas, Class B misdemeanor defense San Antonio, misdemeanor charges defense Texas, criminal misdemeanor attorney San Antonio, avoid misdemeanor conviction Texas",
    },
    "/probation-violations": {
      title: "Probation Violation Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio probation violation attorney fighting revocation motions and helping clients avoid jail. We defend probation violations in Bexar County courts.",
      keywords:
        "probation violation attorney San Antonio TX, probation revocation lawyer Texas, motion to revoke probation defense San Antonio, probation violation hearing attorney Bexar County, MTR attorney San Antonio, felony probation violation Texas, avoid probation revocation attorney, community supervision violation attorney",
    },
    "/theft-property-crimes": {
      title:
        "Theft & Property Crimes Defense San Antonio TX | Morales Padia Law",
      description:
        "San Antonio theft and property crimes defense attorney. We fight shoplifting, theft, burglary, robbery, and fraud charges in Bexar County. Protect your record.",
      keywords:
        "theft attorney San Antonio TX, property crimes defense lawyer Texas, shoplifting attorney San Antonio, burglary defense attorney Bexar County, robbery defense lawyer Texas, theft by check San Antonio, organized retail theft attorney, fraud charges defense San Antonio TX, theft felony defense Texas",
    },
    "/under-investigation": {
      title:
        "Under Investigation? Pre-Charge Defense Attorney San Antonio | Morales Padia Law",
      description:
        "If you're under criminal investigation in San Antonio TX, call us before charges are filed. Pre-charge defense can prevent an arrest. Representing targets of state and federal investigations in Texas.",
      keywords:
        "under investigation attorney San Antonio TX, pre-charge defense lawyer Texas, criminal investigation defense San Antonio, target of investigation attorney Bexar County, federal investigation defense Texas, grand jury target attorney San Antonio, what to do if under investigation Texas, criminal investigation lawyer",
    },
    "/warrants-arrest": {
      title:
        "Warrant & Arrest Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio warrant attorney helping you address outstanding arrest warrants before you're taken into custody. We file motions to quash and negotiate bond in Bexar County.",
      keywords:
        "warrant attorney San Antonio TX, arrest warrant defense lawyer Texas, outstanding warrant attorney Bexar County, quash warrant attorney San Antonio, turn yourself in attorney Texas, bail bond attorney San Antonio, bench warrant defense lawyer, capias attorney Texas",
    },
    "/weapons-charges": {
      title:
        "Weapons Charges Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio weapons charges defense attorney. We fight unlawful carrying, prohibited weapons, felon in possession, and deadly conduct charges in Bexar County.",
      keywords:
        "weapons charges attorney San Antonio TX, unlawful carrying weapon defense Texas, gun charges lawyer San Antonio, felon in possession firearms attorney Bexar County, deadly conduct attorney Texas, prohibited weapon defense San Antonio, illegal firearms attorney Texas, UCW attorney San Antonio",
    },
    "/juvenile-defense": {
      title: "Juvenile Defense Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio juvenile defense attorney protecting minors facing criminal charges in Texas. We fight for diversion, deferred adjudication, and sealing of juvenile records in Bexar County.",
      keywords:
        "juvenile defense attorney San Antonio TX, juvenile lawyer Texas, juvenile criminal charges San Antonio, minor arrested Bexar County attorney, juvenile court defense Texas, juvenile delinquency attorney San Antonio, seal juvenile record Texas, juvenile probation defense attorney",
    },

    // ─── ESTATE PLANNING ─────────────────────────────────────────────────
    "/estate-planning": {
      title:
        "Estate Planning Attorney San Antonio TX | Wills, Trusts & More | Morales Padia Law",
      description:
        "Award-winning San Antonio estate planning attorney for wills, trusts, power of attorney, advance directives, and asset protection. Protect your family and legacy in Bexar County. Call (726) 204-4044.",
      keywords:
        "estate planning attorney San Antonio TX, estate planning lawyer Texas, wills and trusts attorney San Antonio, will attorney Bexar County, trust lawyer San Antonio TX, power of attorney attorney Texas, estate plan San Antonio, living trust attorney San Antonio, legacy planning lawyer Texas, estate planning near me San Antonio, best estate planning attorney San Antonio",
    },
    "/will": {
      title:
        "Will Attorney San Antonio TX | Last Will & Testament | Morales Padia Law",
      description:
        "San Antonio will attorney drafting legally valid last wills and testaments. Protect your assets, appoint guardians for children, and direct your estate with a proper Texas will.",
      keywords:
        "will attorney San Antonio TX, last will and testament lawyer Texas, will preparation attorney San Antonio, simple will attorney Bexar County, Texas will requirements, guardian nomination will Texas, how to make a will in Texas, will drafting attorney San Antonio, testamentary will Texas attorney, how much does a will cost in Texas",
    },
    "/trust": {
      title:
        "Trust Attorney San Antonio TX | Living Trust & More | Morales Padia Law",
      description:
        "San Antonio trust attorney setting up revocable living trusts, irrevocable trusts, special needs trusts, and testamentary trusts. Avoid probate and protect your family in Bexar County.",
      keywords:
        "trust attorney San Antonio TX, living trust lawyer Texas, revocable living trust attorney San Antonio, irrevocable trust attorney Bexar County, special needs trust attorney Texas, testamentary trust lawyer San Antonio, avoid probate with trust Texas, trust vs will Texas, how to set up a trust in Texas, family trust attorney San Antonio",
    },
    "/power-of-attorney": {
      title: "Power of Attorney Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio power of attorney attorney drafting durable, medical, and financial POA documents. Ensure your wishes are honored if you become incapacitated. Serving Bexar County.",
      keywords:
        "power of attorney attorney San Antonio TX, durable power of attorney Texas, medical power of attorney San Antonio, financial power of attorney Bexar County, POA attorney Texas, healthcare power of attorney San Antonio, springing power of attorney Texas, how to get power of attorney in Texas, power of attorney for elderly parent Texas",
    },
    "/advance-directives": {
      title:
        "Advance Directives Attorney San Antonio TX | Living Will | Morales Padia Law",
      description:
        "San Antonio advance directives attorney helping you prepare living wills, medical directives, and POLST forms. Make your healthcare decisions known in Texas before a crisis.",
      keywords:
        "advance directives attorney San Antonio TX, living will attorney Texas, medical directive lawyer San Antonio, healthcare directive Bexar County, POLST form Texas attorney, directive to physicians Texas, do not resuscitate order attorney, advance healthcare directive San Antonio, end of life planning attorney Texas",
    },
    "/asset-protection": {
      title: "Asset Protection Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio asset protection attorney using trusts, LLCs, and legal strategies to shield your wealth from creditors, lawsuits, and judgment creditors in Texas.",
      keywords:
        "asset protection attorney San Antonio TX, asset protection planning Texas, protect assets from creditors Texas, LLC asset protection San Antonio, trust-based asset protection Bexar County, homestead exemption Texas attorney, offshore trust attorney Texas, how to protect assets in Texas, wealth protection lawyer San Antonio",
    },
    "/estate-affidavits": {
      title: "Estate Affidavits Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio estate affidavit attorney helping families use small estate affidavits and affidavits of heirship to transfer assets without full probate in Texas.",
      keywords:
        "estate affidavit attorney San Antonio TX, small estate affidavit Texas attorney, affidavit of heirship lawyer Bexar County, transfer assets without probate Texas, estate affidavit attorney San Antonio, probate alternative affidavit Texas, heirship affidavit attorney",
    },

    // ─── PROBATE LAW ─────────────────────────────────────────────────────
    "/probate-law": {
      title:
        "Probate Attorney San Antonio TX | Bexar County Probate Court | Morales Padia Law",
      description:
        "Experienced San Antonio probate attorney navigating Bexar County probate court. Estate administration, executor guidance, heirship, muniment of title, and probate litigation. Call (726) 204-4044.",
      keywords:
        "probate attorney San Antonio TX, probate lawyer Bexar County, probate court San Antonio, estate attorney San Antonio TX, probate administration attorney Texas, executor attorney San Antonio, probate process Texas, probate without attorney Texas, how long does probate take in Texas, best probate attorney San Antonio",
    },
    "/do-i-need-probate": {
      title:
        "Do I Need Probate in Texas? | San Antonio Probate Attorney | Morales Padia Law",
      description:
        "Not sure if your estate needs probate in Texas? San Antonio probate attorney explains when probate is required, when it can be avoided, and what alternatives exist in Bexar County.",
      keywords:
        "do I need probate in Texas, Texas probate requirements, when is probate required Texas, avoid probate Texas, probate alternatives Texas, assets that avoid probate Texas, small estate affidavit vs probate Texas, probate attorney San Antonio, is probate required in Texas",
    },
    "/how-to-start-probate": {
      title:
        "How to Start Probate in Texas | San Antonio Probate Guide | Morales Padia Law",
      description:
        "Step-by-step guide on how to start probate in Texas from a San Antonio probate attorney. Learn the filing requirements, timeline, and how Bexar County probate court works.",
      keywords:
        "how to start probate in Texas, probate process San Antonio TX, filing for probate Texas, probate court Bexar County, probate timeline Texas, Texas probate steps, open an estate in Texas, independent administration Texas probate, probate attorney San Antonio TX",
    },
    "/probating-a-will": {
      title:
        "Probating a Will in Texas | San Antonio Attorney | Morales Padia Law",
      description:
        "San Antonio probate attorney explaining the process of probating a will in Texas. Admitting a will to probate in Bexar County, executor duties, and estate distribution.",
      keywords:
        "probating a will Texas, how to probate a will in Texas, will probate attorney San Antonio, admit will to probate Bexar County, executor of estate attorney Texas, Texas probate court will, independent executor Texas, filing will for probate San Antonio",
    },
    "/probate-without-will": {
      title:
        "No Will? Probate Options in Texas | San Antonio Attorney | Morales Padia Law",
      description:
        "Died without a will in Texas? San Antonio probate attorney explains intestate succession, heirship proceedings, and alternative estate settlement options in Bexar County.",
      keywords:
        "probate without will Texas, intestate succession Texas, died without will San Antonio, no will estate attorney Bexar County, intestate estate attorney Texas, who inherits without will Texas, probate no will attorney San Antonio, determination of heirship Texas attorney",
    },
    "/small-estate-affidavit": {
      title:
        "Small Estate Affidavit Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio small estate affidavit attorney helping families collect assets under $75,000 without probate in Texas. Fast, cost-effective estate settlement in Bexar County.",
      keywords:
        "small estate affidavit attorney San Antonio TX, small estate affidavit Texas, estate under 75000 Texas, avoid probate small estate Texas, small estate affidavit Bexar County, Texas small estate affidavit requirements, small estate affidavit bank accounts Texas, how to file small estate affidavit Texas",
    },
    "/affidavit-of-heirship": {
      title:
        "Affidavit of Heirship Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio affidavit of heirship attorney establishing heirs and transferring property title in Texas without full probate. Serving Bexar County and surrounding areas.",
      keywords:
        "affidavit of heirship attorney San Antonio TX, affidavit of heirship Texas, heirship affidavit Bexar County, transfer property with heirship affidavit Texas, affidavit of heirship real property Texas, how to file affidavit of heirship Texas, title company affidavit of heirship Texas",
    },
    "/transferring-property-after-death": {
      title:
        "Transferring Property After Death in Texas | San Antonio Attorney | Morales Padia Law",
      description:
        "San Antonio attorney explaining all methods to transfer property after death in Texas — probate, trusts, affidavits of heirship, muniment of title, and beneficiary designations.",
      keywords:
        "transferring property after death Texas, how to transfer property after death in Texas, property title transfer death San Antonio, transfer home after death Texas, estate settlement property transfer Bexar County, inherit property Texas attorney, transfer real estate after death Texas",
    },
    "/probate-disputes-litigation": {
      title:
        "Probate Disputes & Litigation Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio probate litigation attorney handling will contests, executor misconduct, undue influence claims, and estate disputes in Bexar County probate court.",
      keywords:
        "probate litigation attorney San Antonio TX, will contest attorney Texas, probate dispute lawyer Bexar County, contest a will Texas, executor misconduct attorney San Antonio, undue influence will contest Texas, breach of fiduciary duty estate attorney, estate dispute attorney San Antonio TX",
    },
    "/heirship-proceedings": {
      title: "Heirship Proceedings Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio heirship proceedings attorney determining legal heirs in Bexar County probate court. Used when someone dies without a will or when title to real property must be established.",
      keywords:
        "heirship proceedings attorney San Antonio TX, determination of heirship Texas, heirship proceeding Bexar County probate, legal heirs Texas attorney, property heirship attorney San Antonio, died without will heirship Texas, intestate heirship determination attorney",
    },
    "/muniment-of-title": {
      title: "Muniment of Title Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio muniment of title attorney for simplified property transfer when there's a valid will and no debts. A fast, cost-effective alternative to full probate in Texas.",
      keywords:
        "muniment of title attorney San Antonio TX, muniment of title Texas, simplified probate Texas, transfer property by will muniment, muniment of title Bexar County, probate alternative Texas muniment, how to use muniment of title in Texas, muniment of title requirements Texas",
    },
    "/probate-litigation": {
      title: "Probate Litigation Attorney San Antonio TX | Morales Padia Law",
      description:
        "San Antonio probate litigation attorney representing heirs, beneficiaries, and executors in contested estate matters. Will contests, trust disputes, and fiduciary litigation in Bexar County.",
      keywords:
        "probate litigation attorney San Antonio TX, estate litigation lawyer Texas, trust dispute attorney San Antonio, will contest attorney Bexar County, beneficiary rights attorney Texas, trustee misconduct attorney San Antonio, fiduciary litigation Texas, inheritance dispute lawyer San Antonio TX",
    },

    // ─── RESOURCES & OTHER ───────────────────────────────────────────────
    "/resources/blog": {
      title:
        "Legal Blog | Family Law, Estate Planning & Probate Tips | Morales Padia Law",
      description:
        "Free legal insights from San Antonio attorneys on family law, estate planning, probate, and criminal defense. Learn how Texas law affects your life and family.",
      keywords:
        "family law blog San Antonio, estate planning blog Texas, probate law blog, Texas legal tips, divorce advice Texas, how to make a will Texas, child custody tips Texas, DWI advice Texas, San Antonio attorney blog, Texas law articles",
    },
    "/resources/books": {
      title:
        "Free Legal Books by Morales Padia Law | San Antonio Attorney Resources",
      description:
        "Download free legal guides by Morales Padia Law on divorce, estate planning, and family law in Texas. Written by award-winning San Antonio attorneys.",
      keywords:
        "free legal book Texas attorney, divorce guide Texas, family law book San Antonio, estate planning guide Texas, legal resources San Antonio, free attorney guide Texas",
    },
    "/resources/faq": {
      title:
        "Legal FAQ | Common Questions Answered | Morales Padia Law San Antonio",
      description:
        "Answers to frequently asked legal questions about divorce, child custody, estate planning, probate, and criminal defense in Texas. From San Antonio attorneys at Morales Padia Law.",
      keywords:
        "family law FAQ Texas, divorce questions San Antonio, child custody FAQ Texas, estate planning FAQ, probate FAQ Texas, criminal defense FAQ San Antonio, Texas law questions answered, common legal questions Texas",
    },
    "/contact": {
      title:
        "Contact a San Antonio Attorney | Free Consultation | Morales Padia Law",
      description:
        "Contact Morales Padia Law in San Antonio TX to schedule your consultation. Family law, estate planning, probate, and criminal defense attorneys. Call (726) 204-4044 or fill out our form.",
      keywords:
        "contact San Antonio attorney, schedule consultation family law Texas, free consultation divorce attorney San Antonio, lawyer consultation Bexar County, attorney near me San Antonio TX, law firm contact San Antonio, estate planning consultation Texas, criminal defense consultation San Antonio",
    },
    "/services": {
      title:
        "Legal Services San Antonio TX | Family Law, Estate Planning & Criminal Defense | Morales Padia Law",
      description:
        "Full-service San Antonio law firm offering family law, estate planning, probate law, and criminal defense. Award-winning attorneys serving Bexar County, New Braunfels, and Boerne.",
      keywords:
        "legal services San Antonio TX, family law services, estate planning services Texas, probate law services San Antonio, criminal defense services Bexar County, San Antonio attorney services, full service law firm Texas",
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
