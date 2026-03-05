// raster imports - moved to public folder
const utd_department_cs = "/sponsors/utd_department_cs.png";
const toyota = "/sponsors/toyota.png";
const eog = "/sponsors/eog.png";
const sg = "/sponsors/sg.png";
const cbre = "/sponsors/CBRE.png";
const rc = "/sponsors/rc.png";
const axxess = "/sponsors/axxess.png";
const cognizant = "/sponsors/cognizant.png";
const scale = "/sponsors/scale.png";
const nvidia = "/sponsors/nvidia.png";
const nmc2 = "/sponsors/nmc2.png";
// SVG imports
// for further context, the reason these are in separate locations is because I didn't want to work on configuring
// an SVG loader for webpack for the default import; this could be a potential future improvement
const SVG_LOC = "/svg/sponsors";
const google = `${SVG_LOC}/google.svg`;
const statefarm = `${SVG_LOC}/statefarm.svg`;
const mlh = `${SVG_LOC}/mlh.svg`;
const capital_one = `${SVG_LOC}/capital_one.svg`;
const goldman_sachs = `${SVG_LOC}/goldman_sachs.svg`;
const facebook = `${SVG_LOC}/facebook.svg`;
const jpmorgan = `${SVG_LOC}/jpmorgan_chase.svg`;
const sticker_mule = `${SVG_LOC}/sticker_mule.svg`;
const standout_stickers = `${SVG_LOC}/standout_stickers.svg`;
const ti = `${SVG_LOC}/ti.svg`;
const l3 = `${SVG_LOC}/l3.svg`;
const veolia = `${SVG_LOC}/veolia.png`;
const CoreLogic = `${SVG_LOC}/CoreLogic.png`;
const FannieMae = `${SVG_LOC}/FannieMae.png`;
const Fidelity = `${SVG_LOC}/Fidelity.png`;
const Frontier = `${SVG_LOC}/Frontier.png`;
const Geico = `${SVG_LOC}/Geico.png`;
const Incogni = `${SVG_LOC}/Incogni.png`;
const MME = `${SVG_LOC}/MME.jpeg`;
const NordPass = `${SVG_LOC}/NordPass.png`;
const NordVPN = `${SVG_LOC}/NordVPN.png`;
const PRHI = `${SVG_LOC}/PRHI.png`;
const PNC = `${SVG_LOC}/PNC.png`;
const benq = `${SVG_LOC}/benq.png`;
const SNAP_AR = `${SVG_LOC}/SnapAR.png`;
const SNAP_GHOST = `${SVG_LOC}/SnapGhost.png`;
const INFOSYS = `${SVG_LOC}/Infosys.png`;
const PINATA = `${SVG_LOC}/pinata.png`;
const tmobile = `${SVG_LOC}/tmobile.svg`;

const SPONSORS = {
  // MARK: - Added for HackUTD IX Sponsors
  PNC: {
    name: "PNC Bank",
    img: PNC,
    link: "https://www.pnc.com/",
  },
  PINATA: {
    name: "Pinata",
    img: PINATA,
    link: "https://pinata.cloud/",
  },
  SNAP_AR: {
    name: "Snap AR",
    img: SNAP_AR,
    link: "https://ar.snap.com/?lang=en-US",
  },
  SNAP_GHOST: {
    name: "Snap Ghost",
    img: SNAP_GHOST,
    link: "https://ar.snap.com/?lang=en-US",
  },
  BENQ: {
    name: "BenQ",
    img: benq,
    link: "https://www.benq.com/en-us/index.html",
  },
  EOG: {
    name: "EOG Resources",
    img: eog,
    link: "https://www.eogresources.com/",
  },
  TI: {
    name: "Texas Instruments",
    img: ti,
    link: "https://www.ti.com/",
  },
  STUDENT_GOV: {
    name: "UTD Student Government",
    img: sg,
    link: "https://sg.utdallas.edu/",
  },
  CBRE: {
    name: "CBRE",
    img: cbre,
    link: "https://www.cbre.com/",
  },
  RING_CENTRAL: {
    name: "Ring Central",
    img: rc,
    link: "https://www.ringcentral.com/",
  },
  L3_HARRIS: {
    name: "L3 Harris",
    img: l3,
    link: "https://www.l3harris.com/",
  },
  AXXESS: {
    name: "Axxess",
    img: axxess,
    link: "https://www.axxess.com/",
  },
  GOOGLE: {
    name: "Google",
    img: google,
  },
  STATEFARM: {
    name: "StateFarm",
    img: statefarm,
    link: "https://www.statefarm.com/",
  },
  MLH: {
    name: "MLH",
    img: mlh,
    needs_white_bg: true,
  },
  CAPITAL_ONE: {
    name: "Capital One",
    img: capital_one,
    needs_white_bg: true,
    link: "http://campus.capitalone.com/",
  },
  GOLDMAN_SACHS: {
    name: "Goldman Sachs",
    img: goldman_sachs,
    link: "http://www.goldmansachs.com/",
  },
  FACEBOOK: {
    name: "Facebook",
    img: facebook,
  },
  UTD_DPT_CS: {
    name: "UTD Department of Computer Science",
    img: utd_department_cs,
  },
  JPMORGAN_CHASE: {
    name: "JP Morgan Chase & Co.",
    img: jpmorgan,
    needs_white_bg: true,
  },
  STICKER_MULE: {
    name: "Sticker Mule",
    img: sticker_mule,
    link: "https://mule.to/p33e", // note: link is custom for sponsorship purposes
    needs_white_bg: true,
  },
  TOYOTA: {
    name: "Toyota",
    img: toyota,
    link: "https://www.toyota.com/",
  },
  STANDOUT_STICKERS: {
    name: "Standout Stickers",
    img: standout_stickers,
    link: "http://hackp.ac/mlh-StandOutStickers-hackathons",
  },
  VEOLIA: {
    name: "Veolia",
    img: veolia,
    link: "https://www.veolianorthamerica.com/",
  },
  CORE_LOGIC: {
    name: "Core Logic",
    img: CoreLogic,
    link: "https://www.corelogic.com/culture/",
  },
  FANNIE_MAE: {
    name: "Fannie Mae",
    img: FannieMae,
    link: "https://www.fanniemae.com/careers",
  },
  FIDELITY: {
    name: "Fidelity",
    img: Fidelity,
    link: "https://leap.fidelitycareers.com",
  },
  FRONTIER: {
    name: "Frontier",
    img: Frontier,
    link: "https://frontier-careers.com/",
  },
  GEICO: {
    name: "Geico",
    img: Geico,
    link: "https://geico.wd1.myworkdayjobs.com/External",
  },
  INCOGNI: {
    name: "Incogni",
    img: Incogni,
    link: "https://incogni.com/",
  },
  MME: {
    name: "Modern Market Eatery",
    img: MME,
    link: "https://modernmarket.com/",
  },
  NORDPASS: {
    name: "Nord Pass",
    link: "https://nordpass.com/",
    img: NordPass,
  },
  NORDVPN: {
    name: "Nord VPN",
    link: "https://nordvpn.com/",
    img: NordVPN,
  },
  PRHI: {
    name: "PRHI",
    img: PRHI,
    link: "http://patientsafetytech.com/",
  },
  INFOSYS: {
    name: "Infosys",
    img: INFOSYS,
    link: "https://www.infosys.com/",
  },
  COGNIZANT: {
    name: "Cognizant",
    img: cognizant,
    link: "https://www.cognizant.com/",
  },
  SCALE: {
    name: "Scale AI",
    img: scale,
    link: "https://scale.com/",
  },
  NVIDIA: {
    name: "NVIDIA",
    img: nvidia,
    link: "https://www.nvidia.com/",
  },
  NMC2: {
    name: "NMC2",
    img: nmc2,
    link: "https://www.nmc2.com/",
  },
  T_MOBILE: {
    name: "T-Mobile",
    img: tmobile,
    link: "https://www.t-mobile.com/",
  },
};

export default SPONSORS;
