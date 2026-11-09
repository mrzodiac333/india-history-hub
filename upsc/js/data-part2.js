/* ==========================================================================
   UPSC Topic Explorer — data part 2 of 2
   Categories: Technology, Economics, Environment, Art & Culture,
   International Relations
   ========================================================================== */

window.addTopics([
  /* ==================== TECHNOLOGY ==================== */
  {
    id: "technology-internet",
    category: "technology",
    title: "The Internet and the Web",
    hook: "The network of networks, and the pages we browse on it.",
    intro: "The Internet is a global network of connected computers. The World Wide Web is one service that runs on it, letting us open websites through browsers.",
    facts: [
      "The Internet grew out of ARPANET, a US defence research network started in 1969. It became a global system of interconnected networks.",
      "The World Wide Web was invented by Tim Berners-Lee at CERN between 1989 and 1991. It introduced HTTP, HTML and URLs.",
      "Computers use IP addresses to find each other, and DNS translates names like example.com into those addresses. TCP/IP is the core protocol suite.",
      "Most international data traffic travels through undersea fibre-optic cables. Internet service providers connect homes and businesses to this backbone.",
      "India has built large digital public infrastructure, including Aadhaar, UPI and BharatNet broadband. HTTPS encryption protects most web traffic today."
    ],
    why: "Digital infrastructure, cybersecurity and the internet economy are increasingly important in UPSC governance and economy questions.",
    tags: ["internet", "world wide web", "http", "dns", "bharatnet", "digital india"],
    sources: [
      wikiSource("Internet"),
      officialSource("Internet Society", "https://www.internetsociety.org")
    ]
  },
  {
    id: "technology-ai",
    category: "technology",
    title: "Artificial Intelligence",
    hook: "Machines that learn patterns, and the promises and risks that follow.",
    intro: "Artificial intelligence is the field of building computer systems that perform tasks normally needing human intelligence, such as understanding language, recognising images and making decisions.",
    facts: [
      "Machine learning trains a program on data so it can find patterns. Deep learning uses layered neural networks and powers modern image and speech systems.",
      "Generative AI, including large language models, is trained on huge amounts of text and can produce essays, code and images. The transformer architecture, introduced in 2017, enabled much of this progress.",
      "AI today is mostly narrow: it is good at specific tasks but does not have general human-like understanding.",
      "Risks include bias in training data, hallucinations (confident but false outputs), deepfakes, privacy loss and job disruption.",
      "India's National AI Strategy was prepared by NITI Aayog in 2018, and the IndiaAI Mission was approved in 2024 to build compute, datasets and skills."
    ],
    why: "AI governance, ethics and the digital economy are frequent current-affairs themes, and AI links to science and technology questions.",
    tags: ["artificial intelligence", "machine learning", "generative ai", "llm", "indiaai", "ethics"],
    sources: [
      wikiSource("Artificial intelligence"),
      officialSource("NITI Aayog", "https://www.niti.gov.in")
    ]
  },
  {
    id: "technology-semiconductors",
    category: "technology",
    title: "Semiconductor Chips",
    hook: "The tiny switches inside every phone, car and satellite.",
    intro: "Semiconductors are materials, usually silicon, whose ability to conduct electricity sits between conductors and insulators. They are the base of modern electronics.",
    facts: [
      "A transistor is a tiny semiconductor switch. Integrated circuits pack billions of transistors on a single chip.",
      "Chip-making has stages: design, fabrication in foundries, assembly, packaging and testing. Very few companies can build the most advanced fabrication plants.",
      "Moore's law, the observation that transistor counts doubled about every two years, has slowed as chips approach physical limits.",
      "Semiconductors are strategically important for phones, cars, defence and AI. Global supply chains are concentrated in a few regions, especially Taiwan, South Korea and the United States.",
      "India launched the India Semiconductor Mission in 2021 with incentives for fabrication and packaging plants, and several projects are now coming up."
    ],
    why: "The semiconductor supply chain is a major example of strategic technology policy and industrial policy questions.",
    tags: ["semiconductors", "chips", "transistor", "foundry", "moore's law", "india semiconductor mission"],
    sources: [
      wikiSource("Semiconductor"),
      officialSource("Ministry of Electronics and IT", "https://www.meity.gov.in")
    ]
  },
  {
    id: "technology-space-isro",
    category: "technology",
    title: "Satellites and ISRO",
    hook: "From Aryabhata to the Moon's south pole.",
    intro: "India's space programme uses satellites for communication, weather, navigation and remote sensing, and has earned a reputation for low-cost, high-value missions.",
    facts: [
      "ISRO was founded in 1969. India's first satellite, Aryabhata, was launched in 1975, and Rakesh Sharma became the first Indian in space in 1984.",
      "India's launch vehicles include the reliable PSLV, the GSLV and the heavier LVM3.",
      "Chandrayaan-3 achieved a soft landing near the Moon's south pole on 23 August 2023. Mangalyaan reached Mars orbit in 2014, and Aditya-L1 studies the Sun.",
      "Satellites operate in low Earth orbit, medium Earth orbit or geostationary orbit. India uses INSAT for communication, IRS for remote sensing and NavIC for regional navigation.",
      "Gaganyaan is India's human spaceflight programme. Reforms have also opened the sector to private companies, with IN-SPACe as the regulator and promoter."
    ],
    why: "Space missions are a regular current-affairs topic and connect science, technology, security and international cooperation.",
    tags: ["isro", "satellite", "chandrayaan", "mangalyaan", "gaganyaan", "navic"],
    sources: [
      wikiSource("Indian Space Research Organisation"),
      officialSource("ISRO", "https://www.isro.gov.in")
    ]
  },
  {
    id: "technology-renewable-energy",
    category: "technology",
    title: "Renewable Energy",
    hook: "Sun, wind and water instead of coal.",
    intro: "Renewable energy comes from sources that are naturally replenished, such as sunlight, wind, flowing water and biomass. It is central to reducing greenhouse gas emissions.",
    facts: [
      "Solar photovoltaic panels convert sunlight directly into electricity. Wind turbines convert the kinetic energy of wind into power.",
      "Hydropower uses flowing water, while biomass and biogas use organic matter. Geothermal and tidal energy are smaller but growing options.",
      "India has set a target of 500 GW of non-fossil fuel capacity by 2030 and aims for net zero emissions by 2070.",
      "Challenges include the intermittent nature of solar and wind, the need for battery or pumped storage, land availability and grid integration.",
      "Major Indian programmes include the National Solar Mission, solar parks, PM Surya Ghar rooftop solar and green energy corridors."
    ],
    why: "Energy transition is central to environment, economy and foreign policy questions, and India's targets are often in the news.",
    tags: ["renewable energy", "solar", "wind", "500 gw", "net zero", "energy transition"],
    sources: [
      wikiSource("Renewable energy"),
      officialSource("Ministry of New and Renewable Energy", "https://mnre.gov.in")
    ]
  },
  {
    id: "technology-ev-batteries",
    category: "technology",
    title: "Electric Vehicles and Batteries",
    hook: "The shift from petrol pumps to charging points.",
    intro: "Electric vehicles use electric motors powered by batteries instead of petrol or diesel engines. They are a key route to cutting transport emissions.",
    facts: [
      "Battery electric vehicles run only on batteries. Plug-in hybrids combine a battery with an engine, and conventional hybrids charge the battery from the engine and braking.",
      "Lithium-ion batteries use a cathode, an anode, an electrolyte and a separator. Common chemistries include NMC and LFP.",
      "Challenges include charging infrastructure, vehicle range, battery costs, recycling and the environmental impact of mining lithium, cobalt and nickel.",
      "India has supported EVs through the FAME schemes and the PM E-DRIVE scheme, along with PLI incentives for advanced battery manufacturing.",
      "Life-cycle emissions depend on how electricity is generated, so EVs become cleaner as the grid shifts to renewables."
    ],
    why: "EVs connect technology, energy security and climate policy, and make frequent appearances in economy and environment questions.",
    tags: ["electric vehicles", "batteries", "lithium ion", "fame", "pm e-drive", "charging"],
    sources: [
      wikiSource("Electric vehicle"),
      officialSource("NITI Aayog", "https://www.niti.gov.in")
    ]
  },
  {
    id: "technology-blockchain",
    category: "technology",
    title: "Blockchain",
    hook: "A shared ledger that no single person controls.",
    intro: "A blockchain is a distributed ledger: a record of transactions maintained by many computers instead of one central authority. Each block is linked to the previous one by cryptography.",
    facts: [
      "Each block contains transactions and a cryptographic hash of the previous block, which makes tampering difficult.",
      "Bitcoin, launched in 2009 by the pseudonymous Satoshi Nakamoto, was the first major blockchain application.",
      "Consensus mechanisms vary. Proof of work is secure but energy-intensive; proof of stake uses less energy.",
      "Ethereum introduced smart contracts, which are programs that execute automatically when conditions are met. Blockchains also support tokens and NFTs.",
      "Risks include volatility, fraud, money laundering and unclear regulation. India taxes virtual digital assets at 30% with TDS, and the RBI is piloting a digital rupee."
    ],
    why: "Blockchain is a standard example in questions on digital economy, financial regulation and cybersecurity.",
    tags: ["blockchain", "bitcoin", "distributed ledger", "smart contracts", "cbdc", "crypto"],
    sources: [
      wikiSource("Blockchain"),
      officialSource("Reserve Bank of India", "https://www.rbi.org.in")
    ]
  },
  {
    id: "technology-5g",
    category: "technology",
    title: "5G Networks",
    hook: "Fast, low-latency mobile networks built for machines too.",
    intro: "5G is the fifth generation of mobile network technology. It offers much higher speeds, lower latency and the ability to connect many more devices than 4G.",
    facts: [
      "5G uses a mix of low, mid and high frequency bands, including millimetre wave, along with massive MIMO antennas and network slicing.",
      "Peak speeds can reach multiple gigabits per second, and latency can fall to a few milliseconds.",
      "Applications go beyond faster phones: smart factories, telemedicine, autonomous vehicles, precision agriculture and the Internet of Things.",
      "India launched 5G services in October 2022 after a large spectrum auction, and coverage has expanded rapidly.",
      "Research on 6G has begun internationally, with targets around 2030. India has set up the Bharat 6G Alliance."
    ],
    why: "Telecom policy, digital infrastructure and spectrum allocation are recurring UPSC topics.",
    tags: ["5g", "telecom", "spectrum", "latency", "iot", "6g"],
    sources: [
      wikiSource("5G"),
      officialSource("Department of Telecommunications", "https://dot.gov.in")
    ]
  },
  {
    id: "technology-crispr",
    category: "technology",
    title: "CRISPR Gene Editing",
    hook: "Molecular scissors that can rewrite DNA.",
    intro: "CRISPR is a gene-editing tool that allows scientists to change DNA precisely. It was adapted from a natural defence system used by bacteria against viruses.",
    facts: [
      "Jennifer Doudna and Emmanuelle Charpentier won the 2020 Nobel Prize in Chemistry for developing CRISPR-Cas9 as a gene-editing tool.",
      "A guide RNA directs the Cas9 enzyme to a specific DNA sequence, where it cuts the DNA. The cell then repairs the break, allowing a gene to be disabled or changed.",
      "Applications include crop improvement, disease research and gene therapy. The first CRISPR-based therapy for sickle cell disease was approved in 2023.",
      "Ethical concerns include germline editing that could be inherited by future generations, off-target effects and unequal access to therapies.",
      "India is developing gene-editing research and has guidelines for safe laboratory work, while regulation of genetically modified crops remains a sensitive topic."
    ],
    why: "CRISPR combines science, ethics and regulation, making it a strong biotechnology question for Prelims and Mains.",
    tags: ["crispr", "gene editing", "cas9", "biotechnology", "gene therapy", "ethics"],
    sources: [
      wikiSource("CRISPR"),
      officialSource("Nobel Prize", "https://www.nobelprize.org")
    ]
  },
  {
    id: "technology-quantum-computing",
    category: "technology",
    title: "Quantum Computing",
    hook: "Computers that use quantum physics to solve some problems faster.",
    intro: "Quantum computers use the principles of quantum mechanics, such as superposition and entanglement, to process information in ways classical computers cannot.",
    facts: [
      "Classical computers use bits that are 0 or 1. Quantum computers use qubits, which can exist in a combination of states and can be entangled with each other.",
      "Some problems, such as simulating molecules or factoring large numbers, could be solved dramatically faster on a sufficiently large quantum computer.",
      "Building useful quantum computers is hard because qubits are fragile and need extreme isolation and, for many designs, very low temperatures.",
      "A large quantum computer could break widely used public-key encryption, so governments are developing post-quantum cryptography standards.",
      "India approved the National Quantum Mission in 2023 with a budget of about Rs 6,000 crore to develop quantum computing, communication, sensing and materials."
    ],
    why: "Quantum technology is a frontier area in science and technology questions and has implications for cybersecurity and defence.",
    tags: ["quantum computing", "qubit", "entanglement", "post-quantum cryptography", "national quantum mission"],
    sources: [
      wikiSource("Quantum computing"),
      officialSource("NIST", "https://www.nist.gov")
    ]
  },

  /* ==================== ECONOMICS ==================== */
  {
    id: "economics-gdp",
    category: "economics",
    title: "Gross Domestic Product",
    hook: "The single number used to measure an economy's size.",
    intro: "Gross Domestic Product is the total market value of final goods and services produced within a country during a period, usually a year.",
    facts: [
      "GDP can be measured by the expenditure method (consumption + investment + government spending + net exports), the income method or the production method.",
      "Nominal GDP is measured at current prices. Real GDP adjusts for inflation and shows actual growth.",
      "Gross Value Added (GVA) equals GDP minus net taxes on products. It is often used to study sector-wise performance.",
      "India periodically revises the base year for national accounts. The base year matters because it changes the weights and comparisons.",
      "GDP has limits: it ignores unpaid work, inequality, environmental damage and well-being. That is why measures such as the Human Development Index exist."
    ],
    why: "GDP growth, sector shares and base-year revisions are standard economy questions and appear in almost every current-affairs cycle.",
    tags: ["gdp", "gva", "real gdp", "nominal gdp", "base year", "national income"],
    sources: [
      wikiSource("Gross domestic product"),
      officialSource("Ministry of Statistics", "https://www.mospi.gov.in")
    ]
  },
  {
    id: "economics-inflation",
    category: "economics",
    title: "Inflation",
    hook: "Why your money buys less over time.",
    intro: "Inflation is a sustained rise in the general price level of goods and services. It reduces the purchasing power of money.",
    facts: [
      "Demand-pull inflation occurs when demand outstrips supply. Cost-push inflation occurs when input costs, such as fuel or wages, rise.",
      "India tracks retail inflation through the Consumer Price Index and wholesale prices through the Wholesale Price Index. CPI is the headline measure for policy.",
      "The RBI's flexible inflation targeting framework aims at 4% CPI inflation, with a tolerance band of 2% to 6%.",
      "The main policy response is monetary: raising the repo rate reduces demand. Supply-side measures and fiscal policy also play a role.",
      "Inflation hurts people on fixed incomes and lenders, while borrowers may benefit if their interest rates are fixed. Very high inflation, or hyperinflation, can damage the economy badly."
    ],
    why: "Inflation targeting, CPI and the repo rate are among the most frequently asked economy concepts in UPSC.",
    tags: ["inflation", "cpi", "wpi", "repo rate", "inflation targeting", "purchasing power"],
    sources: [
      wikiSource("Inflation"),
      officialSource("Reserve Bank of India", "https://www.rbi.org.in")
    ]
  },
  {
    id: "economics-rbi",
    category: "economics",
    title: "RBI and Monetary Policy",
    hook: "India's central bank and the levers it uses to manage money.",
    intro: "The Reserve Bank of India is the country's central bank. It manages currency, monetary policy, banking regulation and foreign exchange, and acts as banker to the government.",
    facts: [
      "The RBI was established on 1 April 1935 under the RBI Act 1934 and was nationalised in 1949. Its headquarters are in Mumbai.",
      "The Monetary Policy Committee has six members: three from the RBI and three appointed by the central government. It sets the policy repo rate.",
      "Key tools include the repo rate, the Standing Deposit Facility, the Marginal Standing Facility, Cash Reserve Ratio and Statutory Liquidity Ratio.",
      "The RBI issues currency, regulates banks and non-banking financial companies, manages foreign exchange reserves and acts as lender of last resort.",
      "India adopted flexible inflation targeting in 2016. The RBI is also running pilots for a central bank digital currency, the digital rupee."
    ],
    why: "Monetary policy is a core economy topic, and the RBI's decisions are regularly in the news.",
    tags: ["rbi", "monetary policy", "repo rate", "mcp", "crr", "slr"],
    sources: [
      wikiSource("Reserve Bank of India"),
      officialSource("Reserve Bank of India", "https://www.rbi.org.in")
    ]
  },
  {
    id: "economics-budget-fiscal-policy",
    category: "economics",
    title: "Union Budget and Fiscal Policy",
    hook: "Where the government gets money and where it spends it.",
    intro: "The Union Budget is the government's annual statement of receipts and expenditure. Fiscal policy uses taxation and spending to influence the economy.",
    facts: [
      "The Union Budget is presented under Article 112 as the Annual Financial Statement. Since 2017 it has been presented on 1 February.",
      "Receipts are revenue receipts (tax and non-tax) and capital receipts (borrowings, disinvestment). Expenditure is revenue expenditure and capital expenditure.",
      "The fiscal deficit is total expenditure minus total receipts other than borrowings. It shows how much the government needs to borrow.",
      "The FRBM Act 2003 set rules for fiscal discipline, and governments have used escape clauses during shocks such as the pandemic.",
      "Fiscal policy can be expansionary (more spending, lower taxes) or contractionary. It works alongside monetary policy to stabilise the economy."
    ],
    why: "Budget terms, deficits and fiscal consolidation are regular Prelims and Mains topics, especially around February.",
    tags: ["union budget", "fiscal policy", "fiscal deficit", "frbm", "article 112", "revenue expenditure"],
    sources: [
      wikiSource("Union budget of India"),
      officialSource("Union Budget", "https://www.indiabudget.gov.in")
    ]
  },
  {
    id: "economics-gst",
    category: "economics",
    title: "Goods and Services Tax",
    hook: "One indirect tax across India, replacing a maze of older taxes.",
    intro: "The Goods and Services Tax is a single indirect tax on the supply of goods and services across India. It replaced many earlier taxes and aims to create one common market.",
    facts: [
      "GST was launched on 1 July 2017 through the 101st Constitutional Amendment, which introduced Article 279A and the GST Council.",
      "The GST Council is chaired by the Union Finance Minister and includes state finance ministers. It recommends tax rates and rules.",
      "GST is levied as CGST by the Centre and SGST by states on intra-state supplies, and as IGST on inter-state supplies.",
      "Input tax credit allows businesses to offset tax paid on inputs against tax on output, reducing cascading of taxes.",
      "Petroleum crude, alcohol for human consumption, stamp duty and electricity are outside GST. The rate structure was simplified in 2025, with most goods moving to two main slabs and a higher rate for demerit goods."
    ],
    why: "GST is a favourite example of cooperative federalism and indirect tax reform in economy questions.",
    tags: ["gst", "gst council", "igst", "indirect tax", "input tax credit", "cooperative federalism"],
    sources: [
      wikiSource("Goods and Services Tax (India)"),
      officialSource("GST Portal", "https://www.gst.gov.in")
    ]
  },
  {
    id: "economics-demand-supply",
    category: "economics",
    title: "Demand and Supply",
    hook: "The two curves that decide prices in a market.",
    intro: "Demand is how much consumers are willing and able to buy at different prices. Supply is how much producers are willing to sell. Their interaction sets market prices.",
    facts: [
      "The law of demand says that, other things equal, quantity demanded falls as price rises. The law of supply says quantity supplied rises as price rises.",
      "Market equilibrium occurs where demand equals supply. A shortage pushes prices up, while a surplus pushes them down.",
      "Elasticity measures how much quantity responds to a change in price, income or the price of related goods. Essential goods tend to be inelastic.",
      "Government interventions such as price ceilings, minimum support prices and taxes shift market outcomes and can create shortages or surpluses.",
      "Understanding demand and supply helps explain inflation, wage levels, fuel prices and the effects of subsidies."
    ],
    why: "These are the foundational concepts behind almost every economy question, from MSP to inflation.",
    tags: ["demand", "supply", "equilibrium", "elasticity", "msp", "price controls"],
    sources: [
      wikiSource("Supply and demand"),
      wikiSource("Elasticity (economics)")
    ]
  },
  {
    id: "economics-banking",
    category: "economics",
    title: "Banking and NBFCs",
    hook: "How banks create credit, and why regulation matters.",
    intro: "Banks accept deposits and lend money, and in doing so they create credit in the economy. Non-banking financial companies also lend but operate under different rules.",
    facts: [
      "Banks earn from the difference between the interest they pay depositors and the interest they charge borrowers.",
      "Bank types in India include public sector banks, private banks, foreign banks, regional rural banks, small finance banks, payments banks and cooperative banks.",
      "The RBI regulates banks and NBFCs. CRR and SLR require banks to hold a portion of deposits as cash or approved securities.",
      "Non-performing assets are loans where repayment is overdue. High NPAs reduce a bank's ability to lend and require provisioning.",
      "NBFCs cannot accept demand deposits like banks, though some can accept term deposits. Deposit insurance by DICGC covers up to Rs 5 lakh per depositor per bank."
    ],
    why: "Banking regulation, NPAs and financial inclusion are recurring economy and governance topics.",
    tags: ["banking", "nbfc", "npa", "crr", "slr", "financial inclusion"],
    sources: [
      wikiSource("Banking in India"),
      officialSource("Reserve Bank of India", "https://www.rbi.org.in")
    ]
  },
  {
    id: "economics-stock-market",
    category: "economics",
    title: "The Stock Market",
    hook: "How companies raise money and investors buy a share of them.",
    intro: "The stock market is where shares of companies are issued and traded. It allows companies to raise capital and investors to own a part of a business.",
    facts: [
      "In the primary market, companies raise money through initial public offerings. In the secondary market, investors trade existing shares.",
      "The BSE, established in 1875, is Asia's oldest stock exchange. The NSE was set up in 1992 and introduced electronic trading in India.",
      "The Sensex tracks 30 major companies on the BSE, while the Nifty 50 tracks 50 major companies on the NSE.",
      "SEBI, established in 1988 and given statutory powers in 1992, regulates the securities market and protects investors.",
      "Stock prices respond to earnings, interest rates, global events and sentiment. Investors can also use mutual funds and derivatives, which carry their own risks."
    ],
    why: "SEBI, IPOs and market regulation appear in economy questions, and the market is a useful example of capital allocation.",
    tags: ["stock market", "bse", "nse", "sebi", "ipo", "sensex", "nifty"],
    sources: [
      wikiSource("Stock market"),
      officialSource("SEBI", "https://www.sebi.gov.in")
    ]
  },
  {
    id: "economics-international-trade",
    category: "economics",
    title: "International Trade and the WTO",
    hook: "Why countries trade, and the rules that govern it.",
    intro: "International trade is the exchange of goods and services between countries. It allows countries to specialise and access products they cannot produce efficiently.",
    facts: [
      "The balance of trade is the difference between exports and imports. A trade deficit means imports are larger than exports.",
      "Comparative advantage explains why countries benefit from specialising in what they produce at lower opportunity cost.",
      "The World Trade Organization was established in 1995 as the successor to GATT, which began in 1948. It sets rules and settles trade disputes.",
      "India's major exports include petroleum products, gems and jewellery, pharmaceuticals and agricultural goods. Its major imports include crude oil, electronics and gold.",
      "India has signed free trade agreements and partnerships, such as with the UAE and Australia, while also using tariffs to protect some domestic sectors."
    ],
    why: "Trade policy, FTAs and WTO disputes are regular economy and international relations topics.",
    tags: ["international trade", "wto", "gatt", "balance of trade", "fta", "tariffs"],
    sources: [
      wikiSource("World Trade Organization"),
      officialSource("World Trade Organization", "https://www.wto.org")
    ]
  },
  {
    id: "economics-hdi",
    category: "economics",
    title: "Human Development Index",
    hook: "Measuring development by people, not just income.",
    intro: "The Human Development Index is a measure of development that combines health, education and income. It was created to show that economic growth alone does not capture human well-being.",
    facts: [
      "The HDI was introduced by the United Nations Development Programme in 1990, shaped by economist Mahbub ul Haq and Nobel laureate Amartya Sen.",
      "It combines life expectancy at birth, expected years of schooling, mean years of schooling and gross national income per capita.",
      "The index ranges from 0 to 1, and countries are grouped as very high, high, medium and low human development.",
      "India ranks in the 130s among roughly 190 countries in recent Human Development Reports.",
      "Related measures include the Inequality-adjusted HDI, the Gender Inequality Index and the Multidimensional Poverty Index."
    ],
    why: "HDI is a standard way to discuss development, inequality and welfare, and is often compared with GDP in UPSC answers.",
    tags: ["human development index", "undp", "amartya sen", "development", "hdi", "welfare"],
    sources: [
      wikiSource("Human Development Index"),
      officialSource("UNDP Human Development Reports", "https://hdr.undp.org")
    ]
  },

  /* ==================== ENVIRONMENT & ECOLOGY ==================== */
  {
    id: "environment-ecosystem",
    category: "environment",
    title: "Ecosystems",
    hook: "A community of life plus the place it lives in.",
    intro: "An ecosystem is a community of living organisms interacting with each other and with their physical environment. It can be as small as a pond or as large as a forest.",
    facts: [
      "The term was coined by British ecologist Arthur Tansley in 1935. Ecosystems have biotic components (plants, animals, microbes) and abiotic components (water, soil, light, temperature).",
      "Producers, such as plants, make food. Consumers eat other organisms, and decomposers break down dead matter and return nutrients to the soil.",
      "Ecosystems can be terrestrial (forests, grasslands, deserts) or aquatic (freshwater, marine, wetlands).",
      "Energy flows in one direction, from the sun to producers and then to consumers. Nutrients, unlike energy, are recycled.",
      "Ecosystem services include food, clean water, pollination, climate regulation and flood control. India's ecosystems face pressure from land-use change and pollution."
    ],
    why: "Ecology basics are the foundation for environment questions, from food chains to conservation.",
    tags: ["ecosystem", "producers", "consumers", "decomposers", "ecosystem services", "ecology"],
    sources: [
      wikiSource("Ecosystem"),
      officialSource("Ministry of Environment", "https://moef.gov.in")
    ]
  },
  {
    id: "environment-food-chain",
    category: "environment",
    title: "Food Chains and Food Webs",
    hook: "Who eats whom, and why only ten percent of energy moves up.",
    intro: "A food chain shows the path of energy from one organism to another. A food web connects many food chains and better describes real ecosystems.",
    facts: [
      "The main trophic levels are producers, primary consumers (herbivores), secondary consumers (carnivores) and tertiary consumers (top predators).",
      "Only about 10% of the energy at one trophic level is passed to the next. This is why food chains usually have only four or five levels.",
      "Food webs are more stable than simple chains because organisms have alternative food sources when one species declines.",
      "Keystone species have an outsized effect on their ecosystem. Apex predators help regulate prey populations and can shape vegetation.",
      "Pollutants such as DDT and mercury can accumulate in organisms (bioaccumulation) and become more concentrated at higher trophic levels (biomagnification)."
    ],
    why: "Energy flow and biomagnification are frequently tested concepts in environment and ecology.",
    tags: ["food chain", "food web", "trophic levels", "ten percent law", "keystone species", "biomagnification"],
    sources: [
      wikiSource("Food chain"),
      officialSource("WWF", "https://wwf.org")
    ]
  },
  {
    id: "environment-biodiversity-hotspots",
    category: "environment",
    title: "Biodiversity Hotspots",
    hook: "The richest, most threatened places on Earth.",
    intro: "A biodiversity hotspot is a region with a very high number of species found nowhere else, combined with severe habitat loss. These regions are priorities for conservation.",
    facts: [
      "The concept was developed by ecologist Norman Myers. There are 36 recognised global biodiversity hotspots.",
      "To qualify, a region must have at least 1,500 endemic vascular plant species and must have lost at least 70% of its original primary vegetation.",
      "Four hotspots extend into India: the Himalaya, Indo-Burma, the Western Ghats-Sri Lanka region and Sundaland, which includes the Nicobar Islands.",
      "India is one of the world's 17 mega-diverse countries, with about 8% of global species on roughly 2.4% of the world's land area.",
      "Threats include deforestation, agriculture, invasive species and climate change. Protected areas, community reserves and corridor conservation are key responses."
    ],
    why: "Hotspot names and locations are common Prelims facts, and biodiversity conservation is a regular Mains theme.",
    tags: ["biodiversity", "hotspots", "western ghats", "himalaya", "endemic species", "mega-diverse"],
    sources: [
      wikiSource("Biodiversity hotspot"),
      officialSource("Conservation International", "https://www.conservation.org")
    ]
  },
  {
    id: "environment-greenhouse-climate",
    category: "environment",
    title: "Greenhouse Effect and Climate Change",
    hook: "The warming blanket that keeps Earth liveable, now too thick.",
    intro: "The greenhouse effect is the trapping of heat by gases in the atmosphere. It keeps Earth warm enough for life, but human emissions have strengthened it and are causing climate change.",
    facts: [
      "Greenhouse gases include carbon dioxide, methane, nitrous oxide, water vapour and fluorinated gases. The natural greenhouse effect keeps Earth about 33 degrees Celsius warmer than it would otherwise be.",
      "Burning fossil fuels, deforestation, agriculture and industry have raised atmospheric carbon dioxide above 420 parts per million, the highest level in millions of years.",
      "Global average temperatures are now more than 1 degree Celsius above pre-industrial levels, and recent years have been the warmest on record.",
      "Impacts include sea-level rise, heatwaves, floods, droughts, glacier retreat, coral bleaching and shifts in agriculture. India is highly vulnerable.",
      "The Paris Agreement (2015) aims to keep warming well below 2 degrees Celsius and pursue 1.5 degrees. India has pledged net zero emissions by 2070."
    ],
    why: "Climate change is one of the most important UPSC themes, linking environment, economy, agriculture and international relations.",
    tags: ["greenhouse effect", "climate change", "paris agreement", "net zero", "global warming", "emissions"],
    sources: [
      wikiSource("Greenhouse effect"),
      officialSource("IPCC", "https://www.ipcc.ch")
    ]
  },
  {
    id: "environment-ozone",
    category: "environment",
    title: "Ozone Depletion",
    hook: "The hole in the sky that the world actually managed to fix.",
    intro: "The ozone layer is a band of ozone gas in the stratosphere that absorbs harmful ultraviolet radiation from the Sun. Human-made chemicals thinned it, creating the ozone hole.",
    facts: [
      "Ozone (O3) shields life from most of the Sun's ultraviolet-B and ultraviolet-C radiation. It is different from ground-level ozone, which is a pollutant.",
      "Chlorofluorocarbons, halons and other ozone-depleting substances release chlorine and bromine in the stratosphere, which break down ozone.",
      "The ozone hole over Antarctica was discovered in 1985. The Montreal Protocol, signed in 1987, phased out the main ozone-depleting substances.",
      "The Kigali Amendment (2016) extended the treaty to phase down hydrofluorocarbons, which are greenhouse gases but do not deplete ozone.",
      "India phased out CFC production by 2010 and is reducing HCFC use. The Montreal Protocol is often cited as the most successful global environmental agreement."
    ],
    why: "Ozone and the Montreal Protocol are classic environment questions and a model for global cooperation.",
    tags: ["ozone", "montreal protocol", "cfc", "kigali amendment", "ultraviolet", "ozone hole"],
    sources: [
      wikiSource("Ozone depletion"),
      officialSource("UN Environment Programme", "https://www.unep.org")
    ]
  },
  {
    id: "environment-carbon-cycle",
    category: "environment",
    title: "The Carbon Cycle",
    hook: "How carbon moves between air, land, water and life.",
    intro: "The carbon cycle is the movement of carbon among the atmosphere, oceans, soil, rocks and living organisms. It regulates Earth's climate and supports life.",
    facts: [
      "Photosynthesis removes carbon dioxide from the atmosphere and stores carbon in plants. Respiration, decomposition and combustion release it back.",
      "The oceans absorb a large share of human carbon emissions, which causes ocean acidification and harms coral and shellfish.",
      "Fossil fuels contain carbon stored over millions of years. Burning them releases this carbon quickly and disrupts the natural balance.",
      "Forests, soils and oceans act as carbon sinks. Protecting and restoring them is a key climate strategy.",
      "India has pledged to create an additional carbon sink of 2.5 to 3 billion tonnes of carbon dioxide equivalent through forest and tree cover by 2030."
    ],
    why: "The carbon cycle connects photosynthesis, climate change and India's climate commitments, and is frequently asked.",
    tags: ["carbon cycle", "carbon sink", "photosynthesis", "ocean acidification", "fossil fuels", "net zero"],
    sources: [
      wikiSource("Carbon cycle"),
      officialSource("NASA Climate", "https://climate.nasa.gov")
    ]
  },
  {
    id: "environment-wetlands",
    category: "environment",
    title: "Wetlands",
    hook: "Kidneys of the landscape, and the Ramsar convention that protects them.",
    intro: "Wetlands are areas where land is saturated or covered by water for at least part of the year. They include marshes, swamps, bogs, mangroves, lakes and even rice paddies.",
    facts: [
      "Wetlands filter pollutants, recharge groundwater, store carbon and buffer floods and storms.",
      "They are among the most productive ecosystems and support birds, fish, amphibians and plants. Many migratory birds depend on them.",
      "The Ramsar Convention, signed in 1971 in Iran, is the global treaty for wetland conservation. World Wetlands Day is observed on 2 February.",
      "India has more than 80 Ramsar sites, including Chilika Lake, Keoladeo National Park, Sundarbans and Loktak Lake.",
      "Threats include drainage for construction and agriculture, pollution, encroachment and climate change. Wetlands are often lost because their value is not visible."
    ],
    why: "Ramsar sites and wetland ecology are common Prelims facts, while wetland conservation links to disaster management and climate adaptation.",
    tags: ["wetlands", "ramsar", "chilika", "keoladeo", "flood buffer", "world wetlands day"],
    sources: [
      wikiSource("Wetland"),
      officialSource("Ramsar Convention", "https://www.ramsar.org")
    ]
  },
  {
    id: "environment-mangroves",
    category: "environment",
    title: "Mangroves",
    hook: "Salt-tolerant forests that guard the coast.",
    intro: "Mangroves are trees and shrubs that grow in salty, tidal coastal areas. They are specially adapted to survive in waterlogged soil and salt water.",
    facts: [
      "Mangroves have stilt roots and breathing roots called pneumatophores. Many species give birth to live seedlings, called vivipary, to survive harsh conditions.",
      "They protect coasts from cyclones, storm surges and erosion, and act as nurseries for fish and prawns.",
      "Mangroves store large amounts of carbon in their soil and biomass, known as blue carbon.",
      "India has about 5,000 square kilometres of mangroves. The Sundarbans is the largest, followed by Bhitarkanika and sites in Gujarat and Tamil Nadu.",
      "Threats include aquaculture, deforestation, pollution and sea-level rise. The MISHTI scheme, launched in 2023, supports mangrove plantation and restoration."
    ],
    why: "Mangroves connect coastal ecology, disaster risk reduction and climate mitigation, all frequent UPSC themes.",
    tags: ["mangroves", "sundarbans", "blue carbon", "coastal protection", "mishti", "bhitarkanika"],
    sources: [
      wikiSource("Mangrove"),
      officialSource("Ministry of Environment", "https://moef.gov.in")
    ]
  },
  {
    id: "environment-air-pollution",
    category: "environment",
    title: "Air Pollution",
    hook: "The invisible threat that shortens millions of lives.",
    intro: "Air pollution is the presence of harmful substances in the air. It affects health, crops, visibility and the climate, and is one of India's biggest environmental challenges.",
    facts: [
      "Key pollutants include fine particulate matter (PM2.5 and PM10), nitrogen oxides, sulphur dioxide, carbon monoxide, ozone and volatile organic compounds.",
      "Sources include vehicles, industry, construction dust, brick kilns, biomass burning, stubble burning and, in winter, temperature inversion that traps pollutants near the ground.",
      "Air pollution causes respiratory and cardiovascular disease and is linked to millions of premature deaths worldwide. Children and the elderly are most vulnerable.",
      "India's National Clean Air Programme, launched in 2019, supports city action plans to reduce particulate pollution. Delhi-NCR uses the Graded Response Action Plan during severe episodes.",
      "Solutions include cleaner fuels, public transport, electric vehicles, renewable power, improved cookstoves and better urban planning."
    ],
    why: "Air quality is a recurring current-affairs and environment topic, especially in winter when Delhi's pollution peaks.",
    tags: ["air pollution", "pm2.5", "ncpr", "grap", "delhi", "stubble burning"],
    sources: [
      wikiSource("Air pollution"),
      officialSource("Central Pollution Control Board", "https://cpcb.nic.in")
    ]
  },
  {
    id: "environment-protected-areas",
    category: "environment",
    title: "Protected Areas",
    hook: "National parks, sanctuaries and the laws that guard wildlife.",
    intro: "Protected areas are regions set aside by law for wildlife and habitat conservation. India's network includes national parks, wildlife sanctuaries, conservation reserves and community reserves.",
    facts: [
      "National parks are the most strictly protected. Wildlife sanctuaries allow some regulated human activity. Conservation and community reserves act as buffer zones.",
      "India has more than 100 national parks and over 550 wildlife sanctuaries, plus 18 biosphere reserves.",
      "The Wildlife (Protection) Act 1972 provides the legal framework. Project Tiger was launched in 1973 and Project Elephant in 1992.",
      "Biosphere reserves have core, buffer and transition zones. The Nilgiri Biosphere Reserve was India's first, established in 1986.",
      "Eco-sensitive zones around protected areas balance conservation with local livelihoods. Tribal rights under the Forest Rights Act 2006 add another layer of complexity."
    ],
    why: "Protected areas, tiger reserves and conservation laws are standard environment and governance topics.",
    tags: ["protected areas", "national parks", "wildlife sanctuaries", "project tiger", "biosphere reserve", "wildlife protection act"],
    sources: [
      wikiSource("Protected areas of India"),
      officialSource("Wildlife Institute of India", "https://wii.gov.in")
    ]
  },

  /* ==================== ART & CULTURE ==================== */
  {
    id: "culture-classical-dances",
    category: "culture",
    title: "Classical Dances of India",
    hook: "Eight dance traditions rooted in temples, courts and storytelling.",
    intro: "India recognises eight classical dance forms. They combine rhythm, expressive gestures, music and storytelling, and most have roots in temple and court traditions.",
    facts: [
      "The eight forms recognised by the Sangeet Natak Akademi are Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam and Sattriya.",
      "Bharatanatyam comes from Tamil Nadu and grew out of temple dance. It is usually a solo form known for precise geometry and expressive abhinaya.",
      "Kathak comes from northern India and is known for storytelling, spins and footwork. The Lucknow and Jaipur gharanas are major styles.",
      "Kathakali from Kerala is a dance-drama with elaborate makeup and mime. Mohiniyattam, also from Kerala, is a softer, feminine form.",
      "The Natya Shastra, attributed to Bharata, is the foundational text for Indian performing arts. The guru-shishya tradition remains central to training."
    ],
    why: "Dance forms, their states and key features are common Prelims questions and useful in culture answers.",
    tags: ["classical dance", "bharatanatyam", "kathak", "odissi", "kathakali", "natya shastra"],
    sources: [
      wikiSource("Indian classical dance"),
      wikiSource("Sangeet Natak Akademi")
    ]
  },
  {
    id: "culture-music",
    category: "culture",
    title: "Indian Classical Music",
    hook: "Ragas, talas and two great traditions: Hindustani and Carnatic.",
    intro: "India has two major classical music traditions: Hindustani in the north and Carnatic in the south. Both use ragas and talas and rely heavily on improvisation.",
    facts: [
      "A raga is a melodic framework with characteristic notes and moods. A tala is a rhythmic cycle that keeps time.",
      "Hindustani music includes forms such as dhrupad, khayal and thumri. Instruments include the sitar, sarod, tabla and shehnai.",
      "Carnatic music is built around compositions called kritis. The trinity of Carnatic music is Tyagaraja, Muthuswami Dikshitar and Syama Sastri.",
      "The veena, mridangam and flute are important Carnatic instruments. Ragas are associated with particular times of day and seasons.",
      "Tansen was a celebrated musician in Akbar's court, and the Senia tradition traces itself to him. The Sangeet Natak Akademi supports both traditions."
    ],
    why: "Raga, tala and the two traditions are frequently asked, along with famous composers and instruments.",
    tags: ["hindustani music", "carnatic music", "raga", "tala", "tansen", "tyagaraja"],
    sources: [
      wikiSource("Indian classical music"),
      wikiSource("Sangeet Natak Akademi")
    ]
  },
  {
    id: "culture-temple-architecture",
    category: "culture",
    title: "Temple Architecture",
    hook: "Nagara, Dravida and Vesara: how temples were built.",
    intro: "Indian temple architecture developed distinct regional styles over centuries. The main styles are Nagara in the north, Dravida in the south and Vesara in the Deccan.",
    facts: [
      "Nagara temples have a curvilinear tower called the shikhara, a sanctum called the garbhagriha and a hall for worshippers called the mandapa.",
      "Dravida temples have a pyramidal tower called the vimana and large gateway towers called gopurams. Temple tanks are common.",
      "Examples of Nagara architecture include the Khajuraho temples, the Konark Sun Temple and the Dashavatara temple at Deogarh.",
      "Examples of Dravida architecture include the Brihadeeswarar Temple at Thanjavur, the Meenakshi Temple at Madurai and the shore temples of Mahabalipuram.",
      "Rock-cut architecture includes the Ajanta caves, the Ellora caves and the Kailasa temple at Ellora. The Chola bronzes are celebrated for their craftsmanship."
    ],
    why: "Temple styles, their parts and examples are a standard art and culture topic in Prelims.",
    tags: ["temple architecture", "nagara", "dravida", "vesara", "khajuraho", "thanjavur"],
    sources: [
      wikiSource("Hindu temple architecture"),
      officialSource("Archaeological Survey of India", "https://asi.nic.in")
    ]
  },
  {
    id: "culture-miniature-painting",
    category: "culture",
    title: "Miniature Painting",
    hook: "Tiny court paintings packed with detail, colour and stories.",
    intro: "Miniature paintings are small, highly detailed works produced for royal courts and manuscripts. Mughal, Rajput, Pahari and Deccan schools are the best known.",
    facts: [
      "Mughal miniature painting flourished under Akbar, Jahangir and Shah Jahan. Artists illustrated epics such as the Hamzanama.",
      "Jahangir encouraged naturalism and portraiture. Famous painters included Basawan and Abul Hasan.",
      "Rajput painting developed in Rajputana courts, often with bold colours and themes from Krishna's life.",
      "Pahari painting, especially the Kangra school, is known for lyrical landscapes and delicate figures.",
      "Paintings used paper, mineral pigments and gold. The tradition declined under colonial rule and was later revived by the Bengal School."
    ],
    why: "Schools, patrons and themes of miniature painting are asked in art and culture questions.",
    tags: ["miniature painting", "mughal painting", "rajput painting", "kangra", "hamzanama", "bengal school"],
    sources: [
      wikiSource("Indian painting"),
      wikiSource("National Museum, New Delhi")
    ]
  },
  {
    id: "culture-unesco-sites",
    category: "culture",
    title: "UNESCO World Heritage Sites in India",
    hook: "Monuments and landscapes India has pledged to protect for humanity.",
    intro: "UNESCO World Heritage Sites are places of outstanding cultural or natural value. India has more than 40 such sites, ranging from ancient caves to wildlife parks.",
    facts: [
      "Cultural sites include the Taj Mahal, Qutub Minar, Hampi, Ajanta and Ellora, Khajuraho, the Red Fort and the Hill Forts of Rajasthan.",
      "Natural sites include Kaziranga, Manas and Sundarbans national parks, the Western Ghats and the Nanda Devi Biosphere Reserve.",
      "Khangchendzonga National Park became India's first mixed cultural and natural World Heritage Site in 2016.",
      "Sites are nominated from a country's tentative list and evaluated by advisory bodies such as ICOMOS and IUCN.",
      "Conservation challenges include pollution, tourism pressure, encroachment and inadequate planning. Management involves the ASI, state governments and local communities."
    ],
    why: "UNESCO listings are regular current-affairs facts, and conservation debates make good culture and environment answers.",
    tags: ["unesco", "world heritage", "taj mahal", "hampi", "khangchendzonga", "conservation"],
    sources: [
      wikiSource("List of World Heritage Sites in India"),
      officialSource("UNESCO World Heritage Centre", "https://whc.unesco.org")
    ]
  },
  {
    id: "culture-folk-theatre",
    category: "culture",
    title: "Folk Theatre",
    hook: "Village stages where epics, satire and music come together.",
    intro: "Folk theatre combines dance, music, mime and storytelling and is performed in local languages. It varies widely across India and often carries social commentary.",
    facts: [
      "Yakshagana comes from Karnataka and combines dance, music and dialogue, usually performed at night.",
      "Koodiyattam from Kerala is one of the oldest surviving Sanskrit theatre traditions and is recognised by UNESCO as intangible cultural heritage.",
      "Chhau is a masked dance-drama from Odisha, Jharkhand and West Bengal. Bhavai comes from Gujarat, and Tamasha from Maharashtra.",
      "Nautanki is popular in north India, Jatra in Bengal, Therukoothu in Tamil Nadu and Ankia Naat in Assam.",
      "Folk theatre is transmitted orally and relies on community patronage. Urbanisation and lack of funding are major threats."
    ],
    why: "Folk forms, their states and UNESCO recognition are common culture questions.",
    tags: ["folk theatre", "yakshagana", "koodiyattam", "chhau", "bhavai", "jatra"],
    sources: [
      wikiSource("Theatre in India"),
      wikiSource("Sangeet Natak Akademi")
    ]
  },
  {
    id: "culture-festivals",
    category: "culture",
    title: "Festivals of India",
    hook: "A calendar of harvests, faith and community life.",
    intro: "India's festivals reflect its religious, regional and agricultural diversity. They follow lunar and solar calendars and often mark harvests or seasonal change.",
    facts: [
      "Major Hindu festivals include Diwali, Holi, Durga Puja, Ganesh Chaturthi, Onam and Pongal. Their dates follow lunar or solar calendars.",
      "Eid-ul-Fitr and Eid-ul-Adha are major Muslim festivals. Christmas and Easter are celebrated by Christians, while Baisakhi and Guru Purab are important Sikh festivals.",
      "Many festivals are harvest festivals: Makar Sankranti, Bihu, Pongal and Onam celebrate agricultural cycles.",
      "Festivals support local crafts, food, music and tourism, but also raise concerns about pollution, fireworks and the environment.",
      "National days such as Republic Day and Independence Day are celebrated across communities, along with Gandhi Jayanti."
    ],
    why: "Festivals often appear in culture and current-affairs questions, especially when linked to tourism and the environment.",
    tags: ["festivals", "diwali", "onam", "pongal", "bihu", "harvest festivals"],
    sources: [
      wikiSource("Festivals in India"),
      officialSource("Incredible India", "https://www.incredibleindia.org")
    ]
  },
  {
    id: "culture-gi-tags",
    category: "culture",
    title: "GI Tags and Handicrafts",
    hook: "How a place's name becomes a product's protection.",
    intro: "A Geographical Indication tag identifies a product that comes from a particular region and has qualities linked to that origin. It protects local producers and traditional knowledge.",
    facts: [
      "GI tags in India are governed by the Geographical Indications of Goods (Registration and Protection) Act, 1999, and administered by the GI Registry in Chennai.",
      "Darjeeling tea was India's first registered GI, in 2004-05.",
      "Examples include Basmati rice, Kancheepuram silk, Banarasi saree, Mysore sandalwood soap and Kashmir saffron.",
      "A GI tag can be held by producer associations or government bodies and helps in branding, exports and tourism.",
      "India has more than 600 GI tags. Challenges include enforcement, low awareness and weak post-tag marketing."
    ],
    why: "GI tags link culture, agriculture and intellectual property, and new GI registrations are regular current affairs.",
    tags: ["gi tag", "darjeeling tea", "handicrafts", "geographical indication", "kancheepuram", "basmati"],
    sources: [
      wikiSource("Geographical indication"),
      officialSource("IP India", "https://ipindia.gov.in")
    ]
  },
  {
    id: "culture-languages",
    category: "culture",
    title: "Languages of India",
    hook: "Twenty-two scheduled languages and hundreds of mother tongues.",
    intro: "India is one of the world's most linguistically diverse countries. The Eighth Schedule lists 22 scheduled languages, while the 2011 Census recorded 121 languages and hundreds of mother tongues.",
    facts: [
      "Hindi and English are the official languages of the Union. The Eighth Schedule contains 22 languages.",
      "India's languages belong to several families: Indo-Aryan, Dravidian, Austroasiatic, Tibeto-Burman and Andamanese.",
      "Tamil was the first language to be given classical language status in 2004. Sanskrit, Telugu, Kannada, Malayalam and Odia were added later, and more languages were added in 2024.",
      "According to the 2011 Census, Hindi has the largest number of speakers, followed by Bengali and Marathi.",
      "The three-language formula has shaped school education, while language identity remains a sensitive political issue in several states."
    ],
    why: "Language policy, the Eighth Schedule and classical languages are recurring culture and polity questions.",
    tags: ["languages", "eighth schedule", "classical languages", "hindi", "tamil", "census"],
    sources: [
      wikiSource("Languages of India"),
      officialSource("Census of India", "https://censusindia.gov.in/census.website/")
    ]
  },
  {
    id: "culture-cinema",
    category: "culture",
    title: "Indian Cinema",
    hook: "From silent films to the world's largest film industry.",
    intro: "Indian cinema began in the early 20th century and grew into one of the world's largest film industries. It includes Bollywood and major regional industries.",
    facts: [
      "India's first feature film, Raja Harishchandra, was made by Dadasaheb Phalke in 1913.",
      "Alam Ara in 1931 was India's first talkie. Music became a central part of Indian films, unlike many Western cinema traditions.",
      "Satyajit Ray's Pather Panchali (1955) brought Indian cinema global recognition. Guru Dutt and other filmmakers shaped the parallel cinema movement.",
      "Bollywood is the Hindi film industry, while Tamil, Telugu, Malayalam, Bengali and other regional industries are equally important.",
      "The Dadasaheb Phalke Award is India's highest film honour. Film institutes and OTT platforms have changed production and distribution."
    ],
    why: "Cinema touches culture, economy and soft power, and questions often cover firsts and award names.",
    tags: ["cinema", "bollywood", "raja harishchandra", "alam ara", "satyajit ray", "dadasaheb phalke"],
    sources: [
      wikiSource("Cinema of India"),
      wikiSource("Dadasaheb Phalke Award")
    ]
  },

  /* ==================== INTERNATIONAL RELATIONS ==================== */
  {
    id: "ir-united-nations",
    category: "ir",
    title: "The United Nations",
    hook: "The world's main forum for peace, development and cooperation.",
    intro: "The United Nations is the largest international organisation, founded in 1945 after World War II. It works on peace and security, development, human rights and international law.",
    facts: [
      "The UN was founded on 24 October 1945, now observed as UN Day. It has 193 member states and is headquartered in New York.",
      "Its six principal organs are the General Assembly, Security Council, Economic and Social Council, Trusteeship Council, International Court of Justice and Secretariat.",
      "The Security Council has five permanent members (China, France, Russia, the United Kingdom and the United States) with veto power, plus ten elected members.",
      "Specialised agencies include the WHO, UNESCO, ILO, IMF and World Bank. The Sustainable Development Goals were adopted in 2015.",
      "India was a founding member and is a major troop contributor to UN peacekeeping. India has long sought a permanent Security Council seat."
    ],
    why: "The UN system, Security Council reform and peacekeeping are core international relations topics.",
    tags: ["united nations", "security council", "veto", "peacekeeping", "sdgs", "un reform"],
    sources: [
      wikiSource("United Nations"),
      officialSource("United Nations", "https://www.un.org")
    ]
  },
  {
    id: "ir-brics",
    category: "ir",
    title: "BRICS",
    hook: "A bloc of major emerging economies, now expanding.",
    intro: "BRICS brings together major emerging economies to coordinate on economic and political issues and to push for reform of global governance.",
    facts: [
      "The acronym was coined by economist Jim O'Neill in 2001 for Brazil, Russia, India and China. The first BRIC summit was held in 2009, and South Africa joined in 2010.",
      "The group has expanded, with new members joining from 2024 onwards, including Egypt, Ethiopia, Iran, the UAE and Indonesia.",
      "BRICS created the New Development Bank in 2014, headquartered in Shanghai, and a Contingent Reserve Arrangement for financial support.",
      "Members aim to reform institutions such as the IMF and World Bank, increase trade in local currencies and reduce dependence on the dollar.",
      "India is a founding member but balances its participation with concerns about China's dominance and the group's anti-Western direction."
    ],
    why: "BRICS expansion and de-dollarisation debates are regular current-affairs and international relations themes.",
    tags: ["brics", "new development bank", "emerging economies", "de-dollarisation", "global south"],
    sources: [
      wikiSource("BRICS"),
      officialSource("New Development Bank", "https://www.ndb.int")
    ]
  },
  {
    id: "ir-g20",
    category: "ir",
    title: "The G20",
    hook: "The forum that coordinates the world's biggest economies.",
    intro: "The G20 is a forum of the world's major economies. It focuses on financial stability, economic growth, climate, trade and development.",
    facts: [
      "The G20 includes 19 major economies plus the European Union. The African Union joined as a member in 2023.",
      "It began in 1999 as a meeting of finance ministers and central bank governors. Leaders' summits started in 2008 during the global financial crisis.",
      "India hosted the 2023 G20 summit in New Delhi with the theme 'Vasudhaiva Kutumbakam', meaning the world is one family.",
      "The presidency rotates annually, and a troika of past, present and future presidencies helps maintain continuity.",
      "G20 decisions are not legally binding; they work through consensus and peer pressure. Engagement groups include business, civil society and youth."
    ],
    why: "India's G20 presidency and the group's role in global economic governance are common current-affairs questions.",
    tags: ["g20", "india presidency", "african union", "global economy", "vasudhaiva kutumbakam"],
    sources: [
      wikiSource("G20"),
      officialSource("G20", "https://g20.org")
    ]
  },
  {
    id: "ir-nato",
    category: "ir",
    title: "NATO",
    hook: "A military alliance built on the promise of collective defence.",
    intro: "The North Atlantic Treaty Organisation is a military alliance of North American and European countries. Its core principle is collective defence.",
    facts: [
      "NATO was founded in 1949 with 12 members and is headquartered in Brussels. It now has 32 members after Sweden joined in 2024.",
      "Article 5 states that an armed attack on one member is an attack on all. It has been invoked only once, after the 9/11 attacks on the United States.",
      "NATO was formed during the Cold War against the Soviet-led Warsaw Pact, which dissolved in 1991.",
      "After the Cold War, NATO expanded eastwards and took part in missions in the Balkans and Afghanistan.",
      "India is not a member and follows strategic autonomy, though it cooperates with NATO members on defence and technology."
    ],
    why: "NATO expansion and the Ukraine war make this a key international relations topic.",
    tags: ["nato", "article 5", "collective defence", "cold war", "expansion", "ukraine"],
    sources: [
      wikiSource("NATO"),
      officialSource("NATO", "https://www.nato.int")
    ]
  },
  {
    id: "ir-saarc",
    category: "ir",
    title: "SAARC",
    hook: "South Asia's regional forum, stalled by politics.",
    intro: "The South Asian Association for Regional Cooperation brings together eight South Asian countries to promote regional cooperation and development.",
    facts: [
      "SAARC was founded in 1985 in Dhaka. Its secretariat is in Kathmandu.",
      "Its eight members are Afghanistan, Bangladesh, Bhutan, India, the Maldives, Nepal, Pakistan and Sri Lanka. Afghanistan joined in 2007.",
      "The South Asian Free Trade Area was signed in 2004 and came into force in 2006, but intra-regional trade remains low.",
      "Summits have been stalled since 2014 because of India-Pakistan tensions. The 2016 Islamabad summit was cancelled.",
      "India has increasingly focused on alternatives such as BIMSTEC and the BBIN initiative for regional connectivity."
    ],
    why: "SAARC's dysfunction and India's regional strategy are regular international relations questions.",
    tags: ["saarc", "south asia", "safta", "bimstec", "regional cooperation", "kathmandu"],
    sources: [
      wikiSource("South Asian Association for Regional Cooperation"),
      officialSource("SAARC Secretariat", "https://saarc-sec.org")
    ]
  },
  {
    id: "ir-asean",
    category: "ir",
    title: "ASEAN",
    hook: "Southeast Asia's ten-nation bloc and India's Act East partner.",
    intro: "The Association of Southeast Asian Nations is a regional organisation of ten Southeast Asian countries. It promotes economic integration and regional stability.",
    facts: [
      "ASEAN was founded in 1967 through the Bangkok Declaration. Its secretariat is in Jakarta.",
      "Its ten members are Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, the Philippines, Singapore, Thailand and Vietnam.",
      "ASEAN follows the 'ASEAN Way': consensus, non-interference in internal affairs and informal diplomacy.",
      "India became a sectoral dialogue partner in 1992 and a full dialogue partner in 1995. The Act East Policy, launched in 2014, deepened engagement.",
      "ASEAN leads forums such as the East Asia Summit and the ASEAN Regional Forum. The India-ASEAN goods FTA came into force in 2010."
    ],
    why: "India's Act East policy, connectivity projects and Indo-Pacific strategy make ASEAN a frequently asked topic.",
    tags: ["asean", "act east", "southeast asia", "east asia summit", "fta", "indo-pacific"],
    sources: [
      wikiSource("ASEAN"),
      officialSource("ASEAN", "https://asean.org")
    ]
  },
  {
    id: "ir-nam",
    category: "ir",
    title: "The Non-Aligned Movement",
    hook: "India's Cold War choice: not with either superpower.",
    intro: "The Non-Aligned Movement is a group of countries that chose not to formally align with either the Western or Soviet bloc during the Cold War.",
    facts: [
      "The movement's first summit was held in Belgrade in 1961. Its founding leaders included Jawaharlal Nehru, Gamal Abdel Nasser, Josip Broz Tito and Sukarno.",
      "It grew out of the Bandung Conference of 1955, which brought Afro-Asian nations together against colonialism.",
      "Its principles include national independence, sovereignty, non-interference and peaceful coexistence.",
      "NAM has about 120 member states and remains the largest grouping of developing countries outside the UN.",
      "After the Cold War, NAM's relevance was questioned, but India continues to invoke strategic autonomy and the Global South in its foreign policy."
    ],
    why: "NAM explains India's Cold War diplomacy and remains relevant to debates on strategic autonomy.",
    tags: ["non-aligned movement", "nam", "bandung", "nehru", "strategic autonomy", "global south"],
    sources: [
      wikiSource("Non-Aligned Movement"),
      wikiSource("Bandung Conference")
    ]
  },
  {
    id: "ir-india-china",
    category: "ir",
    title: "India-China Relations",
    hook: "Two neighbours caught between trade, rivalry and a disputed border.",
    intro: "India and China are major neighbours with deep economic ties and a long-running border dispute. Their relationship shapes Asian and global politics.",
    facts: [
      "The two countries fought a war in 1962. The border dispute involves the Line of Actual Control, Aksai Chin and Arunachal Pradesh.",
      "Agreements in 1993 and 1996 committed both sides to maintaining peace and tranquillity along the border and to confidence-building measures.",
      "China is a major supplier of electronics, machinery and active pharmaceutical ingredients to India, and India runs a large trade deficit with China.",
      "The Galwan clash in June 2020 caused casualties on both sides and led to a prolonged military standoff. A patrolling arrangement was reached in 2024 to ease tensions.",
      "The two countries cooperate in BRICS and the Shanghai Cooperation Organisation, but compete for influence in the Indian Ocean and South Asia."
    ],
    why: "The border standoff, trade dependence and China's role in the Indo-Pacific are major UPSC themes.",
    tags: ["india china", "lac", "galwan", "border dispute", "trade deficit", "sco"],
    sources: [
      wikiSource("China–India relations"),
      officialSource("Ministry of External Affairs", "https://www.mea.gov.in")
    ]
  },
  {
    id: "ir-india-us",
    category: "ir",
    title: "India-US Relations",
    hook: "From nuclear isolation to a strategic partnership.",
    intro: "India and the United States have moved from Cold War distance to a broad strategic partnership covering defence, technology, trade and the Indo-Pacific.",
    facts: [
      "The India-US civil nuclear deal, agreed in 2005 and finalised in 2008, ended India's nuclear isolation and included a waiver from the Nuclear Suppliers Group.",
      "Defence ties deepened through foundational agreements: LEMOA (2016), COMCASA (2018) and BECA (2020).",
      "The two countries cooperate in the Quad along with Japan and Australia, and have launched the Initiative on Critical and Emerging Technology.",
      "Trade and services are central, including India's IT exports and the Indian diaspora. Disputes over tariffs, visas and market access recur.",
      "Differences remain over India's purchases of Russian defence equipment, tariffs and visa policy, even as the overall partnership broadens."
    ],
    why: "The India-US partnership is central to questions on the Indo-Pacific, defence and technology policy.",
    tags: ["india us", "nuclear deal", "lemoa", "comcasa", "beca", "quad", "icet"],
    sources: [
      wikiSource("India–United States relations"),
      officialSource("Ministry of External Affairs", "https://www.mea.gov.in")
    ]
  },
  {
    id: "ir-indo-pacific-quad",
    category: "ir",
    title: "The Indo-Pacific and the Quad",
    hook: "A new geopolitical map stretching from Africa to the Pacific.",
    intro: "The Indo-Pacific is a term for the region spanning the Indian Ocean and the Pacific Ocean. It has become central to debates about trade, security and the balance of power with China.",
    facts: [
      "India's official Indo-Pacific vision, articulated in 2018, calls for a free, open, inclusive and rules-based order.",
      "The Quad brings together India, the United States, Japan and Australia. It was revived in 2017 and now holds regular leaders' summits.",
      "Quad cooperation includes vaccines, infrastructure, maritime security, critical technologies and disaster response.",
      "ASEAN adopted its own Outlook on the Indo-Pacific in 2019, and India supports ASEAN centrality in the region.",
      "India's initiatives include SAGAR (Security and Growth for All in the Region) and the Indo-Pacific Oceans Initiative."
    ],
    why: "The Indo-Pacific and Quad are among the most frequently discussed international relations topics in UPSC.",
    tags: ["indo-pacific", "quad", "sagar", "asean centrality", "maritime security", "china"],
    sources: [
      wikiSource("Indo-Pacific"),
      officialSource("Ministry of External Affairs", "https://www.mea.gov.in")
    ]
  }
]);
