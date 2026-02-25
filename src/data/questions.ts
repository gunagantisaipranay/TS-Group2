export interface Question {
  id: number;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
  year?: string;
}

export const questions: Question[] = [
  // POLITY (1-10)
  {
    id: 1, subject: "polity", topic: "Fundamental Rights",
    question: "Which Article of the Indian Constitution abolishes untouchability?",
    options: ["Article 14", "Article 17", "Article 19", "Article 21"],
    correct: 1, difficulty: "easy", year: "2018",
    explanation: "Article 17 abolishes untouchability and its practice in any form is forbidden. This is directly enforceable against both State and private individuals."
  },
  {
    id: 2, subject: "polity", topic: "Constitutional Bodies",
    question: "The Finance Commission is constituted under which Article of the Constitution?",
    options: ["Article 270", "Article 280", "Article 282", "Article 275"],
    correct: 1, difficulty: "medium", year: "2019",
    explanation: "Article 280 provides for the Finance Commission. It recommends distribution of tax revenues between Centre and States. 15th Finance Commission (2021-26) was headed by N.K. Singh."
  },
  {
    id: 3, subject: "polity", topic: "Parliament",
    question: "Which schedule of the Constitution deals with the anti-defection law?",
    options: ["8th Schedule", "9th Schedule", "10th Schedule", "11th Schedule"],
    correct: 2, difficulty: "medium", year: "2017",
    explanation: "The 10th Schedule (added by 52nd Amendment, 1985) contains the anti-defection provisions. It disqualifies members who voluntarily give up party membership or vote against party whip."
  },
  {
    id: 4, subject: "polity", topic: "Federalism",
    question: "The Concurrent List in the 7th Schedule contains subjects on which:",
    options: ["Only Parliament can legislate", "Only State Legislatures can legislate", "Both Parliament and State Legislatures can legislate", "Neither Parliament nor State can legislate"],
    correct: 2, difficulty: "easy", year: "2020",
    explanation: "In case of conflict on Concurrent List subjects, Central law prevails over State law (Article 254). Education, Forests, Marriage are in Concurrent List."
  },
  {
    id: 5, subject: "polity", topic: "Local Governance",
    question: "The 73rd Constitutional Amendment is related to:",
    options: ["Urban Local Bodies", "Panchayati Raj Institutions", "Cooperative Societies", "Scheduled Tribes"],
    correct: 1, difficulty: "easy", year: "2016",
    explanation: "73rd Amendment (1992) gave constitutional status to Panchayati Raj. It added Part-IX and 11th Schedule (29 subjects) to the Constitution."
  },
  {
    id: 6, subject: "polity", topic: "Fundamental Rights",
    question: "Right to Education (Article 21A) was inserted by which Constitutional Amendment?",
    options: ["82nd Amendment", "86th Amendment", "91st Amendment", "93rd Amendment"],
    correct: 1, difficulty: "medium", year: "2021",
    explanation: "86th Amendment Act 2002 inserted Article 21A making free and compulsory education for children aged 6-14 a Fundamental Right."
  },
  {
    id: 7, subject: "polity", topic: "President",
    question: "In which case can the President exercise discretionary power in appointment?",
    options: ["Appointment of CJI", "Appointment of CAG", "Appointment of PM when no majority", "Appointment of Governors"],
    correct: 2, difficulty: "hard", year: "2019",
    explanation: "The President's most significant discretionary power is appointing a PM when no single party has a clear majority in Lok Sabha."
  },
  {
    id: 8, subject: "polity", topic: "Constitutional Bodies",
    question: "The Comptroller and Auditor General (CAG) of India is appointed by:",
    options: ["Prime Minister", "President", "Parliament", "Finance Minister"],
    correct: 1, difficulty: "easy", year: "2018",
    explanation: "CAG is appointed by the President under Article 148. CAG audits accounts of Union and State governments and submits reports to Parliament/State Legislature."
  },
  {
    id: 9, subject: "polity", topic: "Judiciary",
    question: "Writ of Mandamus is issued to:",
    options: ["Release a detained person", "Direct a public authority to perform its duty", "Transfer a case to higher court", "Enquire authority under which person is detained"],
    correct: 1, difficulty: "medium", year: "2020",
    explanation: "Mandamus means 'we command'. It is issued to command a public official, authority, corporation, or tribunal to perform a duty imposed by law."
  },
  {
    id: 10, subject: "polity", topic: "Constitutional Amendments",
    question: "The 101st Constitutional Amendment Act 2016 is related to:",
    options: ["Right to Education", "Goods and Services Tax", "OBC Reservation", "Anti-defection"],
    correct: 1, difficulty: "easy", year: "2021",
    explanation: "101st Amendment (2016) introduced GST (Goods and Services Tax) by inserting Article 246A, creating concurrent power for GST legislation."
  },
  // ECONOMY (11-20)
  {
    id: 11, subject: "economy", topic: "National Income",
    question: "GDP is calculated at factor cost when:",
    options: ["Indirect taxes are added to NVA", "Subsidies are deducted from NVA", "Indirect taxes are deducted and subsidies added to market prices", "Market price equals factor cost"],
    correct: 2, difficulty: "hard", year: "2019",
    explanation: "GDP at Factor Cost = GDP at Market Price - Indirect Taxes + Subsidies. India switched to GDP at Market Price as the primary measure in 2015."
  },
  {
    id: 12, subject: "economy", topic: "Banking",
    question: "Cash Reserve Ratio (CRR) is the percentage of deposits that banks must maintain:",
    options: ["In their own vaults", "With RBI in cash", "In government securities", "In gold reserves"],
    correct: 1, difficulty: "easy", year: "2018",
    explanation: "CRR is maintained with RBI as cash. When RBI increases CRR, banks have less money to lend, reducing money supply and controlling inflation."
  },
  {
    id: 13, subject: "economy", topic: "Telangana Schemes",
    question: "Rythu Bandhu scheme provides investment support of how much per acre per year?",
    options: ["₹5,000", "₹8,000", "₹10,000", "₹12,000"],
    correct: 2, difficulty: "easy", year: "2022",
    explanation: "Rythu Bandhu provides ₹10,000 per acre per year (₹5,000 per season) as direct investment support to farmers for purchasing seeds, fertilizers, and other inputs."
  },
  {
    id: 14, subject: "economy", topic: "Fiscal Policy",
    question: "The FRBM Act was enacted in which year?",
    options: ["1999", "2001", "2003", "2005"],
    correct: 2, difficulty: "medium", year: "2017",
    explanation: "FRBM (Fiscal Responsibility and Budget Management) Act was enacted in 2003. It mandates elimination of revenue deficit and targets for fiscal deficit reduction."
  },
  {
    id: 15, subject: "economy", topic: "Agriculture",
    question: "Minimum Support Price (MSP) is recommended by which body?",
    options: ["RBI", "NITI Aayog", "CACP", "Agriculture Ministry"],
    correct: 2, difficulty: "medium", year: "2020",
    explanation: "Commission for Agricultural Costs and Prices (CACP) recommends MSP to the Government of India. It covers 23 crops including cereals, pulses, and oilseeds."
  },
  {
    id: 16, subject: "economy", topic: "Monetary Policy",
    question: "Repo rate is the rate at which:",
    options: ["Banks lend to customers", "RBI lends to commercial banks", "Commercial banks lend to RBI", "Government borrows from RBI"],
    correct: 1, difficulty: "easy", year: "2016",
    explanation: "Repo (Repurchase) rate is the rate at which RBI lends short-term funds to commercial banks against securities. Higher repo rate → higher borrowing cost → reduced money supply."
  },
  {
    id: 17, subject: "economy", topic: "Planning",
    question: "NITI Aayog replaced the Planning Commission in:",
    options: ["January 2014", "January 2015", "March 2015", "June 2015"],
    correct: 1, difficulty: "easy", year: "2017",
    explanation: "NITI (National Institution for Transforming India) Aayog replaced the Planning Commission on January 1, 2015. The PM is its ex-officio chairman."
  },
  {
    id: 18, subject: "economy", topic: "Telangana Schemes",
    question: "Mission Bhagiratha was launched to provide:",
    options: ["Irrigation to every village", "Safe drinking water to every household", "Employment to unemployed youth", "Housing to poor families"],
    correct: 1, difficulty: "easy", year: "2021",
    explanation: "Mission Bhagiratha provides safe drinking water (tap water) to every household in Telangana. It covers all rural and urban areas of the state."
  },
  {
    id: 19, subject: "economy", topic: "Development",
    question: "Human Development Index (HDI) was developed by:",
    options: ["World Bank", "IMF", "UNDP", "WHO"],
    correct: 2, difficulty: "easy", year: "2018",
    explanation: "HDI was created by Pakistani economist Mahbub ul Haq and Indian economist Amartya Sen in 1990 for UNDP. It measures longevity, education, and living standards."
  },
  {
    id: 20, subject: "economy", topic: "Trade",
    question: "GST in India is a _____ tax.",
    options: ["Direct, single-stage", "Indirect, multi-stage, destination-based", "Direct, multi-stage", "Indirect, origin-based"],
    correct: 1, difficulty: "medium", year: "2019",
    explanation: "GST is an indirect, multi-stage, destination-based tax. It replaced multiple central and state taxes. Implemented from July 1, 2017."
  },
  // HISTORY (21-30)
  {
    id: 21, subject: "history", topic: "Freedom Struggle",
    question: "The Non-Cooperation Movement was launched by Gandhi in:",
    options: ["1919", "1920", "1921", "1922"],
    correct: 1, difficulty: "easy", year: "2017",
    explanation: "Non-Cooperation Movement was launched in September 1920. Gandhi called for boycott of British goods, courts, schools, and titles. It was withdrawn after Chauri Chaura incident (1922)."
  },
  {
    id: 22, subject: "history", topic: "Telangana History",
    question: "Operation Polo (Police Action) to liberate Hyderabad from Nizam was conducted in:",
    options: ["September 1947", "September 1948", "January 1950", "November 1949"],
    correct: 1, difficulty: "medium", year: "2020",
    explanation: "Operation Polo was conducted from September 13-17, 1948 under General J.N. Chaudhuri. It ended Nizam's rule and Hyderabad was integrated into India."
  },
  {
    id: 23, subject: "history", topic: "Freedom Struggle",
    question: "The famous Dandi March (Salt Satyagraha) was started from:",
    options: ["Sabarmati Ashram", "Wardha", "Porbandar", "Ahmedabad (Gujrat)"],
    correct: 0, difficulty: "easy", year: "2016",
    explanation: "Gandhi started the Dandi March from Sabarmati Ashram (Ahmedabad) on March 12, 1930, covering 240 miles to Dandi in 24 days to protest salt tax."
  },
  {
    id: 24, subject: "history", topic: "Telangana History",
    question: "Telangana Rashtra Samithi (TRS) was founded by K. Chandrashekar Rao in:",
    options: ["1999", "2001", "2003", "2004"],
    correct: 1, difficulty: "easy", year: "2022",
    explanation: "TRS (now BRS - Bharat Rashtra Samithi) was founded on April 27, 2001 by K. Chandrashekar Rao with the sole objective of achieving separate Telangana state."
  },
  {
    id: 25, subject: "history", topic: "British Rule",
    question: "The theory of 'Drain of Wealth' was propounded by:",
    options: ["Gopal Krishna Gokhale", "Bal Gangadhar Tilak", "Dadabhai Naoroji", "Surendranath Banerjee"],
    correct: 2, difficulty: "easy", year: "2018",
    explanation: "Dadabhai Naoroji (Grand Old Man of India) propounded the Drain of Wealth theory in his book 'Poverty and Un-British Rule in India' (1901)."
  },
  {
    id: 26, subject: "history", topic: "Freedom Struggle",
    question: "The Quit India Movement was launched in:",
    options: ["1940", "1941", "1942", "1943"],
    correct: 2, difficulty: "easy", year: "2017",
    explanation: "Quit India Movement was launched on August 8, 1942 at Gowalia Tank, Bombay. Gandhi gave the slogan 'Do or Die'. Almost entire Congress leadership was arrested."
  },
  {
    id: 27, subject: "history", topic: "Social Reform",
    question: "Who founded the Brahmo Samaj?",
    options: ["Swami Vivekananda", "Raja Ram Mohan Roy", "Dayananda Saraswati", "Ishwar Chandra Vidyasagar"],
    correct: 1, difficulty: "easy", year: "2016",
    explanation: "Brahmo Samaj was founded by Raja Ram Mohan Roy in 1828 in Calcutta. It opposed idol worship, caste system, sati, and promoted monotheism and social reforms."
  },
  {
    id: 28, subject: "history", topic: "Telangana History",
    question: "Srikrishna Committee was set up to examine the demand for separate Telangana state in:",
    options: ["2009", "2010", "2011", "2012"],
    correct: 1, difficulty: "medium", year: "2021",
    explanation: "Srikrishna Committee was set up in February 2010 under Justice B.N. Srikrishna. It submitted its report in December 2010, presenting 6 options including a separate Telangana."
  },
  {
    id: 29, subject: "history", topic: "Freedom Struggle",
    question: "The Indian National Congress was founded in 1885 by:",
    options: ["A.O. Hume", "Gokhale", "Dadabhai Naoroji", "Surendranath Banerjee"],
    correct: 0, difficulty: "easy", year: "2019",
    explanation: "Allan Octavian Hume (a retired British civil servant) founded the Indian National Congress in 1885 in Bombay. First session was held at Gokuldas Tejpal Sanskrit College."
  },
  {
    id: 30, subject: "history", topic: "Telangana History",
    question: "The Nizam's Dominions were merged with India after Police Action in:",
    options: ["1947", "1948", "1950", "1956"],
    correct: 1, difficulty: "medium", year: "2020",
    explanation: "After Police Action (Operation Polo) in September 1948, Hyderabad was merged into the Indian Union. M.K. Vellodi became the first Civil Governor."
  },
  // GEOGRAPHY (31-40)
  {
    id: 31, subject: "geography", topic: "Rivers",
    question: "The Godavari river originates from:",
    options: ["Sahyadri hills, Maharashtra", "Satpura ranges, MP", "Amarkantak plateau", "Nilgiri hills"],
    correct: 0, difficulty: "easy", year: "2018",
    explanation: "Godavari (Dakshin Ganga) originates from Trimbakeshwar near Nasik, Maharashtra in the Sahyadri (Western Ghats). It flows through Maharashtra, Telangana, and AP."
  },
  {
    id: 32, subject: "geography", topic: "Telangana Geography",
    question: "How many districts does Telangana have after the 2016 reorganization?",
    options: ["23", "31", "33", "36"],
    correct: 2, difficulty: "easy", year: "2022",
    explanation: "Telangana was reorganized into 33 districts on October 11, 2016. Earlier it had 10 districts. Now it has increased to more, but the most tested number is 33."
  },
  {
    id: 33, subject: "geography", topic: "Soils",
    question: "Black cotton soil (Regur) is predominantly found in which region of Telangana?",
    options: ["Northern Telangana", "Eastern Telangana", "Southern Telangana", "Western Telangana"],
    correct: 0, difficulty: "medium", year: "2019",
    explanation: "Black cotton soil (Regur) is found predominantly in northern and central Telangana including Nizamabad, Karimnagar, and Nalgonda districts. It retains moisture well and is ideal for cotton."
  },
  {
    id: 34, subject: "geography", topic: "Irrigation",
    question: "Kaleshwaram Lift Irrigation Project is built across which river?",
    options: ["Krishna", "Godavari", "Manjira", "Tungabhadra"],
    correct: 1, difficulty: "easy", year: "2021",
    explanation: "Kaleshwaram Lift Irrigation Project (KLIP) is built on the Godavari river. It is one of the world's largest multi-stage lift irrigation projects, completed in 2019."
  },
  {
    id: 35, subject: "geography", topic: "Physical Geography",
    question: "Nagarjunasagar Dam is located on which river?",
    options: ["Godavari", "Krishna", "Tungabhadra", "Bhima"],
    correct: 1, difficulty: "easy", year: "2017",
    explanation: "Nagarjunasagar Dam is on the Krishna River, located between Telangana (Nalgonda) and Andhra Pradesh (Guntur). It was completed in 1969."
  },
  {
    id: 36, subject: "geography", topic: "Climate",
    question: "The Southwest Monsoon enters India first through:",
    options: ["Gujarat coast", "Kerala coast", "Tamil Nadu coast", "Odisha coast"],
    correct: 1, difficulty: "easy", year: "2016",
    explanation: "Southwest Monsoon enters India through Kerala coast around June 1. Then it splits into Bay of Bengal branch and Arabian Sea branch."
  },
  {
    id: 37, subject: "geography", topic: "Telangana Geography",
    question: "Ramappa Temple (UNESCO World Heritage Site) is located in which district?",
    options: ["Warangal", "Mulugu", "Karimnagar", "Khammam"],
    correct: 1, difficulty: "medium", year: "2022",
    explanation: "Ramappa Temple (Rudreshwara Temple, 13th century CE, built by Kakatiya rulers) is in Palampet, Mulugu district. It received UNESCO World Heritage status in July 2021."
  },
  {
    id: 38, subject: "geography", topic: "Minerals",
    question: "Telangana is the largest producer of which mineral in India?",
    options: ["Iron ore", "Coal", "Fluorite", "Barytes"],
    correct: 3, difficulty: "hard", year: "2020",
    explanation: "Telangana accounts for about 95% of India's Barytes production. Major deposits are in Cuddapah basin areas. Telangana is also significant for coal, limestone, and granite."
  },
  {
    id: 39, subject: "geography", topic: "Forests",
    question: "Nagarjunasagar-Srisailam Tiger Reserve spans across:",
    options: ["Telangana only", "AP only", "Both Telangana and AP", "Telangana, AP, and Karnataka"],
    correct: 2, difficulty: "medium", year: "2019",
    explanation: "Nagarjunasagar-Srisailam Tiger Reserve (3,728 sq km) spans across both Telangana and Andhra Pradesh. It is the largest tiger reserve in India by area."
  },
  {
    id: 40, subject: "geography", topic: "Telangana Geography",
    question: "Pakhal Lake, a wildlife sanctuary, is located in which district of Telangana?",
    options: ["Adilabad", "Warangal", "Khammam", "Mahbubnagar"],
    correct: 1, difficulty: "medium", year: "2018",
    explanation: "Pakhal Lake Wildlife Sanctuary is in Warangal (now Mulugu/Warangal) district. The lake was built by Kakatiyas in the 13th century."
  },
  // SCIENCE & TECHNOLOGY (41-50)
  {
    id: 41, subject: "science", topic: "Space Technology",
    question: "Chandrayaan-3 successfully landed on the Moon's south pole in:",
    options: ["June 2023", "July 2023", "August 2023", "September 2023"],
    correct: 2, difficulty: "easy", year: "2023",
    explanation: "Chandrayaan-3's lander Vikram successfully landed near the Moon's south pole on August 23, 2023, making India the 4th country to land on Moon and 1st on the lunar south pole."
  },
  {
    id: 42, subject: "science", topic: "Space Technology",
    question: "NAVIC (Navigation with Indian Constellation) uses how many satellites?",
    options: ["5", "7", "9", "12"],
    correct: 1, difficulty: "medium", year: "2021",
    explanation: "NAVIC uses 7 satellites (3 in geostationary + 4 in geosynchronous orbits) and covers India and 1500 km beyond its borders. It is comparable to GPS."
  },
  {
    id: 43, subject: "science", topic: "IT",
    question: "HITEC City in Hyderabad was developed as part of which initiative?",
    options: ["Digital India", "APSFC initiative", "Chandrababu Naidu's Vision 2020", "Rajiv Gandhi IT Mission"],
    correct: 2, difficulty: "medium", year: "2019",
    explanation: "HITEC City was developed under Chandrababu Naidu's 'Vision 2020' initiative in the 1990s. It became the IT hub of Hyderabad, housing Google, Microsoft, Facebook, and others."
  },
  {
    id: 44, subject: "science", topic: "Environment",
    question: "The Paris Agreement on Climate Change aims to limit global warming to:",
    options: ["1°C above pre-industrial levels", "1.5°C to 2°C above pre-industrial levels", "2.5°C above pre-industrial levels", "3°C above pre-industrial levels"],
    correct: 1, difficulty: "easy", year: "2020",
    explanation: "The Paris Agreement (2015, entered force 2016) aims to limit global temperature rise to well below 2°C, preferably 1.5°C above pre-industrial levels. India ratified it in 2016."
  },
  {
    id: 45, subject: "science", topic: "Defence",
    question: "BrahMos missile is a joint venture between India and:",
    options: ["USA", "France", "Russia", "Israel"],
    correct: 2, difficulty: "easy", year: "2018",
    explanation: "BrahMos is a joint venture between India (DRDO) and Russia (NPO Mashinostroyeniya). Named after Brahmaputra and Moskva rivers. It is the world's fastest supersonic cruise missile."
  },
  {
    id: 46, subject: "science", topic: "Biotechnology",
    question: "The first genetically modified (GM) crop approved for commercial cultivation in India was:",
    options: ["Golden Rice", "Bt Cotton", "Bt Brinjal", "Herbicide-resistant soybean"],
    correct: 1, difficulty: "medium", year: "2019",
    explanation: "Bt Cotton was approved for commercial cultivation in India in 2002 by GEAC. It incorporates the Bacillus thuringiensis gene that produces insecticidal proteins."
  },
  {
    id: 47, subject: "science", topic: "Energy",
    question: "India's first nuclear power plant was established at:",
    options: ["Kudankulam", "Kaiga", "Narora", "Tarapur"],
    correct: 3, difficulty: "easy", year: "2017",
    explanation: "Tarapur Atomic Power Station (TAPS) was India's first nuclear power plant, set up in 1969 with American assistance. It is located in Maharashtra."
  },
  {
    id: 48, subject: "science", topic: "Space Technology",
    question: "India's Mars Orbiter Mission (Mangalyaan) was launched in:",
    options: ["2011", "2013", "2016", "2018"],
    correct: 1, difficulty: "medium", year: "2019",
    explanation: "Mangalyaan (MOM) was launched on November 5, 2013 by PSLV-C25. It successfully entered Mars orbit on September 24, 2014, making India the first Asian nation to reach Mars orbit."
  },
  {
    id: 49, subject: "science", topic: "IT",
    question: "Which of the following is NOT a function of CERT-In?",
    options: ["Incident response", "Security audits", "Issuing digital certificates", "Vulnerability management"],
    correct: 2, difficulty: "hard", year: "2020",
    explanation: "CERT-In handles cybersecurity incidents, vulnerability management, and security audits. Issuing digital certificates is done by Controller of Certifying Authorities (CCA) under IT Act."
  },
  {
    id: 50, subject: "science", topic: "Environment",
    question: "Pocharam Wildlife Sanctuary in Telangana is known for protecting:",
    options: ["Tigers", "Deer and gaur", "Crocodiles", "Elephants"],
    correct: 1, difficulty: "medium", year: "2018",
    explanation: "Pocharam Wildlife Sanctuary (Nizamabad district, Telangana) is known for Indian deer (spotted deer/chital), gaur (Indian bison), and various bird species."
  },
  // TELANGANA (51-60)
  {
    id: 51, subject: "telangana", topic: "Telangana Movement",
    question: "The 'Sakala Janula Samme' (Strike of All People) was observed in Telangana in:",
    options: ["2009", "2011", "2012", "2013"],
    correct: 1, difficulty: "medium", year: "2021",
    explanation: "Sakala Janula Samme was observed from September 13 - October 2, 2011 (42 days) as an indefinite strike demanding Telangana state. It paralyzed normal life in Telangana."
  },
  {
    id: 52, subject: "telangana", topic: "AP Reorganisation Act",
    question: "Under the AP Reorganisation Act 2014, Hyderabad will serve as joint capital for how many years?",
    options: ["5 years", "10 years", "15 years", "Indefinitely"],
    correct: 1, difficulty: "easy", year: "2022",
    explanation: "Under AP Reorganisation Act 2014, Hyderabad was designated as the common capital of both Telangana and Andhra Pradesh for a period of 10 years (till 2024)."
  },
  {
    id: 53, subject: "telangana", topic: "Telangana Culture",
    question: "Bathukamma is a floral festival celebrated in Telangana. It falls during which Hindu month?",
    options: ["Shravan", "Ashwin", "Kartik", "Chaitra"],
    correct: 1, difficulty: "medium", year: "2019",
    explanation: "Bathukamma falls in Ashwin (Bhadrapada Amavasya to Durgashtami). It is a 9-day floral festival celebrated by women. 'Bathukamma' means 'come alive mother goddess'."
  },
  {
    id: 54, subject: "telangana", topic: "Telangana Schemes",
    question: "KCR Kit scheme in Telangana provides support to:",
    options: ["Farmers for purchasing seeds", "Newly delivered mothers and newborns", "Poor students for education", "Youth for employment"],
    correct: 1, difficulty: "easy", year: "2021",
    explanation: "KCR Kit provides institutional delivery support - kit containing essential items for newborns and mothers, plus ₹12,000 to mother after institutional delivery."
  },
  {
    id: 55, subject: "telangana", topic: "Telangana Administration",
    question: "The first Chief Minister of Telangana state was:",
    options: ["T. Harish Rao", "K. Chandrashekar Rao", "K. T. Rama Rao", "Bandaru Dattatreya"],
    correct: 1, difficulty: "easy", year: "2018",
    explanation: "K. Chandrashekar Rao (KCR) was the first Chief Minister of Telangana state when it was formed on June 2, 2014. He founded TRS and led the Telangana movement."
  },
  {
    id: 56, subject: "telangana", topic: "Telangana Movement",
    question: "The 1969 Telangana agitation was triggered by violation of which agreement?",
    options: ["Gentlemen's Agreement 1956", "Mulki Rules", "Both Gentlemen's Agreement and Mulki Rules", "Faziabad Agreement"],
    correct: 2, difficulty: "hard", year: "2020",
    explanation: "The 1969 agitation was triggered by both: violations of Mulki Rules (preferential employment for locals) and the Gentlemen's Agreement of 1956 promising fair representation to Telangana."
  },
  {
    id: 57, subject: "telangana", topic: "Nizam Period",
    question: "The Razakars who opposed Hyderabad's integration with India were led by:",
    options: ["Osman Ali Khan", "Qasim Razvi", "Vicar-ul-Umra", "Mir Laik Ali"],
    correct: 1, difficulty: "medium", year: "2019",
    explanation: "Qasim Razvi led the Razakars (Majlis-e-Ittehadul Muslimeen's paramilitary wing) who opposed Hyderabad's integration with India. After Police Action, he was arrested and later exiled to Pakistan."
  },
  {
    id: 58, subject: "telangana", topic: "Telangana Culture",
    question: "Perini Sivatandavam is a classical dance form that originated during:",
    options: ["Nizamabad region", "Kakatiya period (Warangal)", "Hyderabad Nizam era", "British colonial period"],
    correct: 1, difficulty: "medium", year: "2020",
    explanation: "Perini Sivatandavam (warrior dance) originated in Warangal during the Kakatiya period (12th-14th century CE). It was revived by Dr. Nataraja Ramakrishna in the 20th century."
  },
  {
    id: 59, subject: "telangana", topic: "Telangana Schemes",
    question: "Mission Kakatiya scheme is aimed at:",
    options: ["Drinking water supply", "Restoring minor irrigation tanks", "Building new major dams", "Agricultural loan waivers"],
    correct: 1, difficulty: "easy", year: "2022",
    explanation: "Mission Kakatiya aims to restore and rejuvenate the minor irrigation tanks (Cheruvu) in Telangana that were built by the Kakatiyas. It covers over 46,000 tanks across the state."
  },
  {
    id: 60, subject: "telangana", topic: "Telangana Movement",
    question: "Telangana officially became India's 29th state on:",
    options: ["June 2, 2013", "June 2, 2014", "August 15, 2014", "January 26, 2015"],
    correct: 1, difficulty: "easy", year: "2016",
    explanation: "Telangana officially became India's 29th state on June 2, 2014. K. Chandrashekar Rao took oath as first Chief Minister. Later, J&K was bifurcated making Telangana the 28th state."
  },
  // BONUS QUESTIONS (61-65)
  {
    id: 61, subject: "polity", topic: "Fundamental Rights",
    question: "Which Article of the Constitution provides the Right to Constitutional Remedies?",
    options: ["Article 30", "Article 32", "Article 35", "Article 226"],
    correct: 1, difficulty: "easy", year: "2016",
    explanation: "Article 32 provides the Right to Constitutional Remedies - the right to move the Supreme Court for enforcement of Fundamental Rights. Ambedkar called it the 'heart and soul' of the Constitution."
  },
  {
    id: 62, subject: "economy", topic: "Banking",
    question: "Statutory Liquidity Ratio (SLR) requires banks to maintain a percentage of their deposits in:",
    options: ["Cash with RBI", "Liquid assets (cash, gold, approved securities)", "Foreign exchange reserves", "Fixed deposits"],
    correct: 1, difficulty: "medium", year: "2020",
    explanation: "SLR requires commercial banks to maintain a minimum percentage of their Net Demand and Time Liabilities (NDTL) in liquid assets like cash, gold, and approved government securities."
  },
  {
    id: 63, subject: "history", topic: "Freedom Struggle",
    question: "The Partition of Bengal was annulled in which year?",
    options: ["1907", "1909", "1911", "1919"],
    correct: 2, difficulty: "medium", year: "2018",
    explanation: "The Partition of Bengal (1905) was annulled in 1911 when King George V announced its reversal at the Delhi Durbar. This was seen as a victory for the Swadeshi movement."
  },
  {
    id: 64, subject: "telangana", topic: "Telangana Administration",
    question: "Telangana state was formed on June 2, 2014 by bifurcating which state?",
    options: ["Hyderabad State", "Andhra Pradesh", "Andhra State", "Madras State"],
    correct: 1, difficulty: "easy", year: "2015",
    explanation: "Telangana was carved out of Andhra Pradesh (AP) under the Andhra Pradesh Reorganisation Act, 2014. Andhra Pradesh was itself formed in 1956 by merging Andhra State and Hyderabad State."
  },
  {
    id: 65, subject: "science", topic: "Space Technology",
    question: "Gaganyaan is India's first human spaceflight programme. The mission is being developed by:",
    options: ["DRDO", "ISRO", "HAL", "ISRO with DRDO support"],
    correct: 1, difficulty: "easy", year: "2022",
    explanation: "Gaganyaan is being developed by ISRO (Indian Space Research Organisation). The mission aims to send a 3-member crew to a 400 km orbit for 3 days, making India the 4th nation to have human spaceflight capability."
  }
];
