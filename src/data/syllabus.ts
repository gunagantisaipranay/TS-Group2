export interface Topic {
  name: string;
  subtopics: string[];
  weightage: "High" | "Medium" | "Low";
  pyqFrequency: number;
  roi: "High" | "Medium" | "Low";
}

export interface Subject {
  id: string;
  name: string;
  paper: string;
  color: string;
  icon: string;
  totalMarks: number;
  topics: Topic[];
  strategy: string;
}

export const subjects: Subject[] = [
  {
    id: "polity",
    name: "Indian Polity & Governance",
    paper: "Paper-II",
    color: "blue",
    icon: "⚖️",
    totalMarks: 30,
    strategy: "HIGH ROI subject. Constitutional bodies, Federalism, Amendments appear every year. Focus on TSPSC-specific governance questions.",
    topics: [
      {
        name: "Constitution - Fundamental Rights & Duties",
        subtopics: ["Articles 12-35 (FRs)", "Article 51A (FDs)", "Writs", "Reasonable restrictions", "Amendment of FRs"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Directive Principles of State Policy (DPSP)",
        subtopics: ["Articles 36-51", "Socialist DPs", "Gandhian DPs", "Liberal DPs", "Relationship with FRs"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "High"
      },
      {
        name: "Constitutional Bodies",
        subtopics: ["Election Commission", "CAG", "UPSC/TSPSC", "Attorney General", "Finance Commission"],
        weightage: "High",
        pyqFrequency: 5,
        roi: "High"
      },
      {
        name: "Parliament & State Legislature",
        subtopics: ["Lok Sabha vs Rajya Sabha", "Legislative process", "Joint sitting", "Anti-defection", "Parliamentary committees"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Executive - President, PM, Governor",
        subtopics: ["President's powers", "PM role", "Council of Ministers", "Governor's discretion", "Article 356"],
        weightage: "Medium",
        pyqFrequency: 3,
        roi: "Medium"
      },
      {
        name: "Federalism & Centre-State Relations",
        subtopics: ["Division of powers (Lists)", "Inter-state disputes", "Special category states", "Article 370/371", "Cooperative federalism"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Judiciary",
        subtopics: ["Supreme Court", "High Courts", "PIL", "Judicial review", "Independence of judiciary"],
        weightage: "Medium",
        pyqFrequency: 3,
        roi: "Medium"
      },
      {
        name: "Local Self Governance",
        subtopics: ["73rd & 74th Amendments", "Panchayati Raj in Telangana", "Urban Local Bodies", "PESA Act"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Constitutional Amendments",
        subtopics: ["Key amendments (42nd, 44th, 52nd, 61st, 73rd, 74th, 86th, 101st)", "Amendment procedure"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      }
    ]
  },
  {
    id: "economy",
    name: "Indian & Telangana Economy",
    paper: "Paper-III",
    color: "green",
    icon: "📊",
    totalMarks: 35,
    strategy: "HIGHEST MARK POTENTIAL. Budget, Inflation, Agriculture, Telangana schemes are repeated frequently. Master basic economic concepts first.",
    topics: [
      {
        name: "National Income & GDP",
        subtopics: ["GDP, GNP, NNP", "Base year revision", "GDP deflator", "Per capita income", "HDI"],
        weightage: "High",
        pyqFrequency: 3,
        roi: "High"
      },
      {
        name: "Monetary Policy & Banking",
        subtopics: ["RBI functions", "CRR, SLR, Repo rate", "Inflation types", "NPA", "Financial inclusion"],
        weightage: "High",
        pyqFrequency: 5,
        roi: "High"
      },
      {
        name: "Fiscal Policy & Budget",
        subtopics: ["Types of budget", "Fiscal deficit", "Revenue vs Capital expenditure", "FRBM Act", "Disinvestment"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Agriculture & Food Security",
        subtopics: ["Green Revolution", "Agricultural reforms", "MSP", "PDS", "Food Security Act 2013"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Planning & Development",
        subtopics: ["5-year plans", "NITI Aayog", "SDGs", "Human development", "Inclusive growth"],
        weightage: "Medium",
        pyqFrequency: 3,
        roi: "Medium"
      },
      {
        name: "Telangana Economy & Schemes",
        subtopics: ["Rythu Bandhu", "Kalyana Lakshmi/Shaadi Mubarak", "Mission Bhagiratha", "Mission Kakatiya", "Telangana budget", "IT sector"],
        weightage: "High",
        pyqFrequency: 6,
        roi: "High"
      },
      {
        name: "Industries & Trade",
        subtopics: ["Industrial policy", "Make in India", "FDI/FII", "Export-Import", "WTO"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      },
      {
        name: "Infrastructure",
        subtopics: ["PPP model", "National highways", "Power sector", "TSPSC infrastructure projects"],
        weightage: "Low",
        pyqFrequency: 2,
        roi: "Low"
      }
    ]
  },
  {
    id: "history",
    name: "Indian & Telangana History",
    paper: "Paper-II",
    color: "orange",
    icon: "🏛️",
    totalMarks: 30,
    strategy: "Focus on Modern History (1857-1947) and Telangana-specific history. Ancient/Medieval has LOW ROI. Don't waste time on Mughal genealogy.",
    topics: [
      {
        name: "Ancient India (Overview)",
        subtopics: ["Indus Valley Civilization", "Vedic period basics", "Mauryan Empire", "Gupta Empire"],
        weightage: "Low",
        pyqFrequency: 2,
        roi: "Low"
      },
      {
        name: "Medieval India (Overview)",
        subtopics: ["Delhi Sultanate", "Mughal administration", "Vijayanagara Empire", "Bahmani Kingdom"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Low"
      },
      {
        name: "British Rule & Colonial Economy",
        subtopics: ["Drain theory (Naoroji)", "Land revenue systems", "Deindustrialization", "Railways impact"],
        weightage: "High",
        pyqFrequency: 3,
        roi: "High"
      },
      {
        name: "Freedom Struggle",
        subtopics: ["1857 Revolt", "Congress formation", "Partition of Bengal", "Swadeshi", "Non-Cooperation", "Civil Disobedience", "Quit India"],
        weightage: "High",
        pyqFrequency: 5,
        roi: "High"
      },
      {
        name: "Social Reform Movements",
        subtopics: ["Raja Ram Mohan Roy", "Vivekananda", "Dayananda Saraswati", "Phule", "Ambedkar"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      },
      {
        name: "Telangana History",
        subtopics: ["Kakatiyas", "Nizams of Hyderabad", "Hyderabad state & Police Action 1948", "Linguistic reorganization 1956", "Telangana movement milestones"],
        weightage: "High",
        pyqFrequency: 6,
        roi: "High"
      }
    ]
  },
  {
    id: "geography",
    name: "Indian & Telangana Geography",
    paper: "Paper-II",
    color: "teal",
    icon: "🗺️",
    totalMarks: 25,
    strategy: "Rivers, Soils, Climate of Telangana are high ROI. Indian geography focus on physical features and agriculture maps.",
    topics: [
      {
        name: "Physical Geography of India",
        subtopics: ["Himalayas formation", "Northern plains", "Deccan plateau", "Coastal plains", "Islands"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      },
      {
        name: "Rivers of India & Telangana",
        subtopics: ["Krishna, Godavari, Tungabhadra", "River interlinking", "Irrigation projects in Telangana", "Kaleshwaram project"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Climate",
        subtopics: ["Monsoon mechanism", "Rainfall distribution", "Telangana climate zones", "Droughts"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      },
      {
        name: "Soils & Agriculture",
        subtopics: ["Soil types (Black soil/Regur)", "Telangana soil distribution", "Crop patterns", "Irrigation"],
        weightage: "High",
        pyqFrequency: 3,
        roi: "High"
      },
      {
        name: "Telangana Geography",
        subtopics: ["Districts (33)", "Boundaries", "Nagarjunasagar", "Forest cover", "Mineral resources"],
        weightage: "High",
        pyqFrequency: 5,
        roi: "High"
      },
      {
        name: "Economic Geography",
        subtopics: ["Industries location", "Special Economic Zones", "Transport networks"],
        weightage: "Low",
        pyqFrequency: 1,
        roi: "Low"
      }
    ]
  },
  {
    id: "science",
    name: "Science & Technology",
    paper: "Paper-I",
    color: "purple",
    icon: "🔬",
    totalMarks: 25,
    strategy: "Space technology, biotechnology, and current science affairs are HIGH ROI. Don't study textbook science theory - focus on applications and current events.",
    topics: [
      {
        name: "Space Technology",
        subtopics: ["ISRO missions (Chandrayaan, Mangalyaan, Gaganyaan)", "PSLV, GSLV", "NAVIC", "Remote sensing"],
        weightage: "High",
        pyqFrequency: 4,
        roi: "High"
      },
      {
        name: "Defence & Missiles",
        subtopics: ["DRDO", "Agni, Prithvi, BrahMos", "INS ships", "HAL aircrafts"],
        weightage: "Medium",
        pyqFrequency: 3,
        roi: "High"
      },
      {
        name: "Biotechnology & Health",
        subtopics: ["GM crops", "Vaccines", "DNA fingerprinting", "Stem cells", "Covid-19 response"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      },
      {
        name: "IT & Cybersecurity",
        subtopics: ["Hyderabad IT industry", "Digital India", "Blockchain", "AI/ML basics", "Data protection"],
        weightage: "High",
        pyqFrequency: 3,
        roi: "High"
      },
      {
        name: "Environment & Ecology",
        subtopics: ["Climate change", "Biodiversity", "National parks in Telangana", "Pollution acts"],
        weightage: "High",
        pyqFrequency: 3,
        roi: "High"
      },
      {
        name: "Energy",
        subtopics: ["Renewable energy", "Nuclear power plants", "Solar mission", "Telangana power sector"],
        weightage: "Medium",
        pyqFrequency: 2,
        roi: "Medium"
      }
    ]
  },
  {
    id: "telangana",
    name: "Telangana Movement & State",
    paper: "Paper-IV",
    color: "red",
    icon: "🏴",
    totalMarks: 150,
    strategy: "ENTIRE PAPER dedicated to Telangana. This is where you WIN or LOSE the exam. Master every detail of Telangana movement, culture, and administration.",
    topics: [
      {
        name: "Telangana Movement History",
        subtopics: ["1969 agitation", "Jai Telangana movement", "2001 TRS formation", "Srikrishna Committee", "Sakala Janula Samme 2011", "Bifurcation 2014"],
        weightage: "High",
        pyqFrequency: 15,
        roi: "High"
      },
      {
        name: "AP Reorganisation Act 2014",
        subtopics: ["Key provisions", "Asset division", "Hyderabad as shared capital (10 years)", "Central institutions", "Special status"],
        weightage: "High",
        pyqFrequency: 8,
        roi: "High"
      },
      {
        name: "Telangana Culture & Heritage",
        subtopics: ["Bathukamma", "Bonalu", "Perini dance", "Kakatiya heritage", "Charminar", "Ramappa Temple (UNESCO)"],
        weightage: "High",
        pyqFrequency: 6,
        roi: "High"
      },
      {
        name: "Telangana Administration",
        subtopics: ["Districts reorganization", "Revenue divisions", "Mandals", "GHMC", "TSRTC", "HMDA"],
        weightage: "High",
        pyqFrequency: 8,
        roi: "High"
      },
      {
        name: "Telangana Government Schemes",
        subtopics: ["Rythu Bandhu (₹10,000/acre)", "Rythu Bima", "KCR Kit", "Aasara Pensions", "Mission Bhagiratha", "Mission Kakatiya", "T-Fiber"],
        weightage: "High",
        pyqFrequency: 10,
        roi: "High"
      },
      {
        name: "Nizam Period & Integration",
        subtopics: ["Nizam administration", "Razakars", "Police Action (Operation Polo) 1948", "MK Vellodi", "JN Chaudhuri"],
        weightage: "High",
        pyqFrequency: 7,
        roi: "High"
      },
      {
        name: "Telangana Socio-economic Profile",
        subtopics: ["GSDP", "Agriculture", "IT sector (Hyderabad)", "Irrigation projects", "Population (Census 2011)"],
        weightage: "Medium",
        pyqFrequency: 5,
        roi: "High"
      }
    ]
  }
];
