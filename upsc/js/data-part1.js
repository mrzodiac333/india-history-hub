/* ==========================================================================
   UPSC Topic Explorer — data part 1 of 2
   Categories: Polity, Indian History, World History, Geography, Science
   ========================================================================== */

window.UPSC_CATEGORIES = [
  { id: "polity", name: "Polity & Constitution" },
  { id: "indian-history", name: "Indian History" },
  { id: "world-history", name: "World History" },
  { id: "geography", name: "Geography" },
  { id: "science", name: "Science" },
  { id: "technology", name: "Technology" },
  { id: "economics", name: "Economics" },
  { id: "environment", name: "Environment & Ecology" },
  { id: "culture", name: "Art & Culture" },
  { id: "ir", name: "International Relations" }
];

window.UPSC_TOPICS = [];

function wikiSource(title) {
  return {
    label: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/" + encodeURIComponent(title.replace(/ /g, "_"))
  };
}

function officialSource(label, url) {
  return { label: label, url: url };
}

var LEGISLATIVE_DEPT = "https://legislative.gov.in/constitution-of-india";

window.addTopics = function (list) {
  Array.prototype.push.apply(window.UPSC_TOPICS, list);
};

window.addTopics([
  /* ==================== POLITY & CONSTITUTION ==================== */
  {
    id: "polity-preamble",
    category: "polity",
    title: "The Preamble",
    hook: "The opening paragraph that tells you what the entire Constitution is trying to achieve.",
    intro: "The Preamble is the introduction to the Constitution. It is short, but it tells you who made the Constitution, what kind of state India is, and what values it promises to its citizens.",
    facts: [
      "The Constituent Assembly adopted the Preamble on 26 November 1949, and the Constitution came into force on 26 January 1950.",
      "It begins with 'We, the People of India', which means all power of the state flows from the people, not from any king or outside authority.",
      "It describes India as a sovereign, socialist, secular, democratic republic. The words 'socialist' and 'secular' were added by the 42nd Amendment in 1976.",
      "The Preamble promises justice (social, economic and political), liberty of thought, expression, belief, faith and worship, equality of status and opportunity, and fraternity.",
      "In the Kesavananda Bharati case (1973), the Supreme Court held that the Preamble is a part of the Constitution and can be amended, but the basic structure cannot be destroyed."
    ],
    why: "Preamble questions are common in Prelims and GS Paper II. It is also the best two-line answer to 'What is the Indian Constitution about?' in essays and interviews.",
    tags: ["preamble", "constitution", "we the people", "socialist", "secular", "basic structure"],
    sources: [
      wikiSource("Preamble to the Constitution of India"),
      officialSource("Legislative Department", LEGISLATIVE_DEPT)
    ]
  },
  {
    id: "polity-fundamental-rights",
    category: "polity",
    title: "Fundamental Rights",
    hook: "Six groups of rights that protect you from unfair treatment by the state.",
    intro: "Fundamental Rights are six basic promises in Part III of the Constitution (Articles 12 to 35). They protect individuals from unfair treatment by the state and are enforceable in court.",
    facts: [
      "The six groups are: right to equality (Articles 14-18), right to freedom (19-22), right against exploitation (23-24), right to freedom of religion (25-28), cultural and educational rights (29-30), and right to constitutional remedies (32).",
      "Article 32 lets a person approach the Supreme Court directly with writs such as habeas corpus and mandamus. Dr B.R. Ambedkar called it the 'heart and soul' of the Constitution.",
      "The right to property was a fundamental right until the 44th Amendment (1978) removed it. It is now only a legal right under Article 300A.",
      "Fundamental Rights are not absolute. The state can impose reasonable restrictions, for example on free speech in the interest of public order or national security.",
      "Courts have expanded Article 21 (right to life and personal liberty) to include the right to privacy (Puttaswamy, 2017), the right to education (now Article 21A), and the right to a clean environment."
    ],
    why: "The most frequently tested polity theme in UPSC. Know which right is under which article and the cases that expanded them.",
    tags: ["fundamental rights", "part iii", "article 21", "article 32", "writs", "privacy"],
    sources: [
      wikiSource("Fundamental rights in India"),
      officialSource("Legislative Department", LEGISLATIVE_DEPT)
    ]
  },
  {
    id: "polity-fundamental-duties",
    category: "polity",
    title: "Fundamental Duties",
    hook: "Eleven responsibilities every citizen is expected to follow.",
    intro: "Fundamental Duties are a list of moral responsibilities of citizens, placed in Part IVA by Article 51A. They were added because the Constitution's makers later felt that rights must come with duties.",
    facts: [
      "Ten Fundamental Duties were added by the 42nd Amendment (1976) on the recommendation of the Swaran Singh Committee. An 11th duty was added by the 86th Amendment (2002).",
      "The 11th duty asks parents or guardians to provide opportunities for education to their children between the ages of 6 and 14.",
      "Fundamental Duties are not directly enforceable by courts, unlike Fundamental Rights. Parliament can, however, enforce them through ordinary laws.",
      "Duties include respecting the Constitution, the national flag and anthem, protecting sovereignty, promoting harmony, preserving the composite culture, protecting the environment and developing a scientific temper.",
      "The idea was borrowed from the Constitution of the erstwhile USSR. Duties apply to citizens, not to foreigners."
    ],
    why: "Direct one-mark Prelims questions; also useful in ethics and governance answers about civic responsibility.",
    tags: ["fundamental duties", "article 51a", "part iva", "42nd amendment", "citizenship"],
    sources: [
      wikiSource("Fundamental Rights, Directive Principles, and Fundamental Duties of India"),
      officialSource("Legislative Department", LEGISLATIVE_DEPT)
    ]
  },
  {
    id: "polity-dpsp",
    category: "polity",
    title: "Directive Principles of State Policy",
    hook: "The Constitution's direction sheet for building a welfare state.",
    intro: "Directive Principles of State Policy are guidelines in Part IV (Articles 36-51) that tell governments what kind of welfare state they should build. They are not enforceable in court, but they are fundamental in governance.",
    facts: [
      "The Directive Principles were inspired by the Irish Constitution. They are classified as socialist, Gandhian and liberal-intellectual principles.",
      "Examples: Article 39A (free legal aid), Article 40 (village panchayats), Article 44 (uniform civil code), Article 45 (early childhood care and education), Article 48A (environment).",
      "They are non-justiciable: a citizen cannot go to court saying a Directive Principle was not implemented. But courts use them to interpret laws and uphold welfare measures.",
      "When Fundamental Rights and Directive Principles conflict, courts usually protect Fundamental Rights, while trying to balance both. Minerva Mills (1980) emphasised this balance.",
      "Several new Directives were added by amendments, such as equal justice and free legal aid by the 42nd Amendment (1976)."
    ],
    why: "UPSC often asks you to distinguish rights from directives and to link them with welfare schemes and the basic structure doctrine.",
    tags: ["dpsp", "directive principles", "part iv", "welfare state", "article 44", "uniform civil code"],
    sources: [
      wikiSource("Directive Principles in India"),
      officialSource("Legislative Department", LEGISLATIVE_DEPT)
    ]
  },
  {
    id: "polity-president",
    category: "polity",
    title: "The President of India",
    hook: "The formal head of state, elected indirectly and bound by ministerial advice.",
    intro: "The President of India is the constitutional head of the state. The real executive power is exercised by the Prime Minister and Council of Ministers, but the President is central to how the system formally works.",
    facts: [
      "The President is elected indirectly by an electoral college made up of elected members of Parliament and elected members of state legislative assemblies, using proportional representation by single transferable vote and secret ballot.",
      "The President serves a five-year term and can be re-elected. Removal is possible only through impeachment for violation of the Constitution, under Article 61.",
      "The executive power of the Union is vested in the President (Article 53) and is exercised on the advice of the Council of Ministers (Article 74). After the 44th Amendment, the President can ask the Council to reconsider advice only once.",
      "The President appoints the Prime Minister, other ministers, governors, judges of the higher judiciary, and the heads of constitutional bodies such as the Election Commission.",
      "The President can issue ordinances under Article 123 when Parliament is not in session. An ordinance must be approved by Parliament within six weeks of its reassembly, or it lapses."
    ],
    why: "Presidential powers and elections are regular Prelims questions and a favourite for polity Mains questions on the executive.",
    tags: ["president", "article 52", "article 61", "electoral college", "ordinance", "article 123"],
    sources: [
      wikiSource("President of India"),
      officialSource("President of India", "https://presidentofindia.nic.in")
    ]
  },
  {
    id: "polity-prime-minister",
    category: "polity",
    title: "Prime Minister and Council of Ministers",
    hook: "The real executive: who runs the government day to day.",
    intro: "The Prime Minister is the head of government. The President is the formal head of state, but the Prime Minister leads the Council of Ministers and controls the real day-to-day business of government.",
    facts: [
      "The Prime Minister is appointed by the President, usually the leader of the party or coalition with a majority in the Lok Sabha.",
      "The Council of Ministers has three tiers: Cabinet Ministers, Ministers of State and Deputy Ministers. The Cabinet is not mentioned in the Constitution; it is a convention-based body.",
      "The Council of Ministers is collectively responsible to the Lok Sabha (Article 75(3)). Individual ministers are responsible to the President and can be removed on the PM's advice.",
      "The 91st Amendment (2003) capped the size of the Council of Ministers at 15% of the total strength of the Lok Sabha and of state assemblies (minimum 12 in states).",
      "The Prime Minister can be a member of either House, but must become a member of either House within six months of appointment."
    ],
    why: "Understanding the PM-Cabinet relationship is key to answering questions on parliamentary government and accountability.",
    tags: ["prime minister", "council of ministers", "cabinet", "article 74", "article 75", "collective responsibility"],
    sources: [
      wikiSource("Prime Minister of India"),
      officialSource("Prime Minister's Office", "https://www.pmindia.gov.in")
    ]
  },
  {
    id: "polity-parliament",
    category: "polity",
    title: "The Parliament of India",
    hook: "Lok Sabha, Rajya Sabha and the President: how laws are actually made.",
    intro: "Parliament is the law-making body of the Union. It consists of the President, the Lok Sabha (House of the People) and the Rajya Sabha (Council of States).",
    facts: [
      "The Lok Sabha has 543 elected members. A provision for nominating two Anglo-Indians expired in 2020, when the 104th Amendment ended it along with extending SC/ST reservation.",
      "The Rajya Sabha can have up to 250 members: 238 elected by state and union territory legislatures and 12 nominated by the President for contributions to literature, science, art and social service.",
      "Money Bills can be introduced only in the Lok Sabha. The Rajya Sabha can keep a Money Bill for up to 14 days and can only recommend changes, not reject or amend it.",
      "The Rajya Sabha is a permanent House. One-third of its members retire every two years, and each member has a six-year term.",
      "A joint sitting of both Houses (Article 108) is summoned by the President to resolve deadlocks on ordinary and financial bills. It is not used for Money Bills or Constitution Amendment Bills."
    ],
    why: "Parliament's composition, procedures and committees are among the most frequently asked polity topics.",
    tags: ["parliament", "lok sabha", "rajya sabha", "money bill", "article 108", "joint sitting"],
    sources: [
      wikiSource("Parliament of India"),
      officialSource("Sansad", "https://sansad.in")
    ]
  },
  {
    id: "polity-supreme-court",
    category: "polity",
    title: "The Supreme Court",
    hook: "The final interpreter of the Constitution and guardian of Fundamental Rights.",
    intro: "The Supreme Court is India's highest court. It stands at the top of a single integrated judiciary and is the final interpreter of the Constitution.",
    facts: [
      "The Supreme Court was established on 26 January 1950 with 8 judges. Its sanctioned strength is now 34 (the Chief Justice plus 33 other judges).",
      "Judges retire at 65. They can be removed only by impeachment by Parliament for proved misbehaviour or incapacity, under Article 124(4).",
      "Its main jurisdictions are original (disputes between the Centre and states), appellate, advisory (Article 143), writ jurisdiction (Article 32) and special leave (Article 136).",
      "The Supreme Court is the guardian of Fundamental Rights and can strike down laws that violate the Constitution through judicial review.",
      "In Kesavananda Bharati (1973), the Court held that Parliament cannot amend the 'basic structure' of the Constitution. The collegium system, developed through the Three Judges Cases, handles appointments."
    ],
    why: "Judicial review and the basic structure doctrine are core UPSC themes and appear in both Prelims and Mains.",
    tags: ["supreme court", "judicial review", "basic structure", "collegium", "article 32", "article 143"],
    sources: [
      wikiSource("Supreme Court of India"),
      officialSource("Supreme Court of India", "https://www.sci.gov.in")
    ]
  },
  {
    id: "polity-election-commission",
    category: "polity",
    title: "The Election Commission",
    hook: "The constitutional body that runs India's elections.",
    intro: "The Election Commission of India is the constitutional body that conducts elections to Parliament, state legislatures, the office of the President and the office of the Vice-President.",
    facts: [
      "The ECI is a multi-member body: the Chief Election Commissioner plus two Election Commissioners. The CEC can be removed only in the same manner as a Supreme Court judge.",
      "The Commission's independence is protected by giving the CEC and Commissioners the same salary and conditions as Supreme Court judges, charged to the Consolidated Fund of India.",
      "It enforces the Model Code of Conduct during elections. The MCC is not a law, but it is enforced using the Commission's powers under Article 324 and election laws.",
      "Elections to panchayats and municipalities are conducted by State Election Commissions (Articles 243K and 243ZA), not by the ECI.",
      "India uses Electronic Voting Machines for voting and VVPAT slips for verification. The NOTA option was introduced in 2013 after a Supreme Court order."
    ],
    why: "The ECI features in nearly every UPSC cycle through questions on electoral reforms, the MCC and free and fair elections.",
    tags: ["election commission", "article 324", "model code of conduct", "evm", "vvpat", "nota"],
    sources: [
      wikiSource("Election Commission of India"),
      officialSource("Election Commission of India", "https://eci.gov.in")
    ]
  },
  {
    id: "polity-panchayati-raj",
    category: "polity",
    title: "Panchayati Raj",
    hook: "How villages govern themselves under the 73rd Amendment.",
    intro: "Panchayati Raj is India's system of local self-government in rural areas. It was given constitutional status by the 73rd Amendment in 1992, so villages can govern many local matters themselves.",
    facts: [
      "The 73rd Amendment came into force on 24 April 1993, which is observed as National Panchayati Raj Day. It added Part IX and the Eleventh Schedule to the Constitution.",
      "It provides a three-tier structure in most states: Gram Panchayat at the village level, Panchayat Samiti at the block level and Zila Parishad at the district level.",
      "One-third of seats are reserved for women, and many states have increased this share. Seats are also reserved for SCs and STs in proportion to their population.",
      "The Gram Sabha, consisting of all registered voters in a village, is the foundation of the system. The Eleventh Schedule lists 29 subjects, including agriculture, drinking water and rural housing.",
      "State Election Commissions conduct panchayat elections, and State Finance Commissions recommend how funds should be shared with local bodies."
    ],
    why: "Decentralisation is a favourite Mains topic. Learn the 73rd and 74th Amendments together for comparison.",
    tags: ["panchayati raj", "73rd amendment", "gram sabha", "local government", "eleventh schedule", "decentralisation"],
    sources: [
      wikiSource("Panchayati raj"),
      officialSource("Ministry of Panchayati Raj", "https://panchayat.gov.in")
    ]
  },

  /* ==================== INDIAN HISTORY ==================== */
  {
    id: "indian-history-indus-valley",
    category: "indian-history",
    title: "Indus Valley Civilisation",
    hook: "India's first cities, with drains, granaries and a script no one has read.",
    intro: "The Indus Valley Civilisation was one of the world's earliest urban civilisations. It flourished in the north-west of the subcontinent, in present-day Pakistan and north-west India, about 4,500 years ago.",
    facts: [
      "Its mature phase is dated roughly 2600-1900 BCE. It was discovered in the 1920s, with Harappa excavated by Dayaram Sahni and Mohenjo-daro by R.D. Banerji.",
      "Major sites include Harappa, Mohenjo-daro, Dholavira, Lothal, Kalibangan and Rakhigarhi. Most lie in the Indus and Ghaggar-Hakra river basins.",
      "Town planning was advanced: grid-pattern streets, covered drainage, standardised burnt bricks, granaries and the Great Bath at Mohenjo-daro. Lothal had a dockyard.",
      "The script on their seals has not been deciphered. There is no clear evidence of large temples or of a single all-powerful ruler.",
      "The civilisation declined around 1900 BCE. River changes, weaker monsoons, floods and droughts are the main explanations, not a single 'Aryan invasion'."
    ],
    why: "A standing UPSC favourite. Compare Harappan urban planning and decline theories, and map the sites for Prelims.",
    tags: ["indus valley", "harappa", "mohenjo-daro", "lothal", "dholavira", "bronze age"],
    sources: [
      wikiSource("Indus Valley Civilisation"),
      officialSource("Archaeological Survey of India", "https://asi.nic.in")
    ]
  },
  {
    id: "indian-history-vedic",
    category: "indian-history",
    title: "The Vedic Age",
    hook: "The age of the Vedas, from cattle-keeping tribes to early kingdoms.",
    intro: "The Vedic period is named after the Vedas, the oldest surviving texts composed in India. It is usually dated from about 1500 BCE to 500 BCE.",
    facts: [
      "There are four Vedas: Rigveda, Samaveda, Yajurveda and Atharvaveda. The Rigveda is the oldest and contains hymns to gods such as Indra, Agni and Varuna.",
      "Early Vedic society was largely pastoral and tribal. The basic unit was the jana (tribe), with assemblies like the sabha and samiti.",
      "Later Vedic society became more settled and agricultural. Iron tools and larger territorial kingdoms appeared, and the varna hierarchy hardened.",
      "Vedic literature also includes the Brahmanas (rituals), Aranyakas (forest texts) and Upanishads (philosophy). The Upanishads are the basis of Vedanta.",
      "Women scholars such as Gargi and Maitreyi appear in the Upanishads, and education was mainly oral and passed from teacher to student."
    ],
    why: "The transition from early to later Vedic society is a classic comparison question, and Vedic texts are frequent Prelims material.",
    tags: ["vedic age", "rigveda", "upanishads", "sabha", "samiti", "varna"],
    sources: [
      wikiSource("Vedic period"),
      wikiSource("Upanishads")
    ]
  },
  {
    id: "indian-history-mauryan",
    category: "indian-history",
    title: "The Mauryan Empire and Ashoka",
    hook: "The first subcontinental empire, and the king who gave up war.",
    intro: "The Mauryan Empire was the first empire to unite most of the Indian subcontinent, from about 321 BCE to 185 BCE. Its capital was Pataliputra, near modern Patna.",
    facts: [
      "Chandragupta Maurya founded the empire around 321 BCE with the help of his adviser Chanakya, also called Kautilya, who is credited with the Arthashastra.",
      "Ashoka, who ruled from about 268 to 232 BCE, fought the Kalinga War around 261 BCE. The bloodshed led him to embrace Buddhism and promote dhamma.",
      "Ashoka's edicts were carved on rocks and pillars in Prakrit, using Brahmi and Kharosthi scripts. The Sarnath lion capital is India's national emblem.",
      "The empire had provinces governed by viceroys, officials called mahamatras, a network of spies, and an emphasis on public works and roads.",
      "Megasthenes, an ambassador of the Seleucid king, wrote Indica, an account of Mauryan society. The empire declined after Ashoka and ended when Pushyamitra Shunga killed Brihadratha around 185 BCE."
    ],
    why: "Ashoka's dhamma, the Arthashastra and Mauryan administration are central to ancient India questions.",
    tags: ["mauryan empire", "ashoka", "kalinga", "arthashastra", "chanakya", "dhamma"],
    sources: [
      wikiSource("Maurya Empire"),
      wikiSource("Arthashastra")
    ]
  },
  {
    id: "indian-history-gupta",
    category: "indian-history",
    title: "The Gupta Empire",
    hook: "Kalidasa, Aryabhata and the age often called India's golden age.",
    intro: "The Gupta Empire ruled much of northern and central India from about 320 CE to 550 CE. It is often called a golden age because of achievements in literature, science and the arts.",
    facts: [
      "Chandragupta I founded the dynasty around 320 CE. His son Samudragupta's conquests are recorded in the Allahabad Pillar inscription composed by Harisena.",
      "Chandragupta II, also called Vikramaditya, patronised the poet Kalidasa, the astronomer Aryabhata and the scholar Varahamihira.",
      "Indian mathematicians of this era used the decimal place-value system, including a symbol for zero, which later spread to the Arab world and Europe.",
      "Kumaragupta I founded Nalanda, which became one of the world's great centres of learning. Temple architecture also developed, as seen at Deogarh.",
      "The empire declined in the 5th and 6th centuries, weakened by Huna invasions, feudalism and weak later rulers. It ended around 550 CE."
    ],
    why: "The Gupta period links history with science and culture. Questions often compare it with the Mauryan age.",
    tags: ["gupta empire", "kalidasa", "aryabhata", "nalanda", "samudragupta", "golden age"],
    sources: [
      wikiSource("Gupta Empire"),
      wikiSource("Nalanda")
    ]
  },
  {
    id: "indian-history-delhi-sultanate",
    category: "indian-history",
    title: "The Delhi Sultanate",
    hook: "Five dynasties that ruled Delhi for more than three centuries.",
    intro: "The Delhi Sultanate was a series of five Muslim dynasties that ruled from Delhi between 1206 and 1526. It shaped administration, architecture and the economy of medieval India.",
    facts: [
      "The five dynasties were the Mamluk or Slave dynasty (Qutb-ud-din Aibak), the Khaljis, the Tughlaqs, the Sayyids and the Lodis.",
      "Alauddin Khalji controlled prices and markets, reorganised the army and defended India from Mongol attacks. His general Malik Kafur led campaigns deep into the south.",
      "Muhammad bin Tughlaq is remembered for two failed experiments: shifting the capital to Daulatabad and introducing token currency. The traveller Ibn Battuta visited his court.",
      "Firoz Shah Tughlaq built canals and cities. Timur's invasion in 1398 weakened the already declining Sultanate.",
      "The Sultanate ended in 1526 when Babur defeated Ibrahim Lodi in the First Battle of Panipat."
    ],
    why: "Administrative reforms, market control and architectural styles of the Sultanate are common UPSC themes.",
    tags: ["delhi sultanate", "alauddin khalji", "tughlaq", "ibn battuta", "panipat", "medieval india"],
    sources: [
      wikiSource("Delhi Sultanate"),
      wikiSource("Alauddin Khalji")
    ]
  },
  {
    id: "indian-history-mughal",
    category: "indian-history",
    title: "The Mughal Empire",
    hook: "From Babur's guns to the Taj Mahal and the long decline.",
    intro: "The Mughal Empire ruled large parts of India from 1526 to 1857. At its height it was one of the wealthiest and most powerful states in the world.",
    facts: [
      "Babur founded the empire by defeating Ibrahim Lodi at the First Battle of Panipat in 1526, using artillery and gunpowder tactics.",
      "Akbar (1556-1605) won the Second Battle of Panipat, built alliances with Rajput rulers, introduced the mansabdari system and promoted his idea of sulh-i kul, or universal tolerance.",
      "Shah Jahan built the Taj Mahal, the Red Fort and the Jama Masjid. Mughal architecture reached its peak under him.",
      "Aurangzeb expanded the empire to its greatest extent through long Deccan campaigns, but constant warfare and religious policies triggered revolts.",
      "After Aurangzeb's death in 1707, the empire declined. Nadir Shah sacked Delhi in 1739, and the British ended Mughal rule after the revolt of 1857."
    ],
    why: "Mughal administration, land revenue and architecture are staple topics in medieval Indian history.",
    tags: ["mughal empire", "akbar", "shah jahan", "aurangzeb", "mansabdari", "taj mahal"],
    sources: [
      wikiSource("Mughal Empire"),
      wikiSource("Mughal architecture")
    ]
  },
  {
    id: "indian-history-vijayanagara",
    category: "indian-history",
    title: "The Vijayanagara Empire",
    hook: "Hampi: a lost capital that travellers described as fabulously rich.",
    intro: "The Vijayanagara Empire ruled much of southern India from 1336 to 1646. Its capital, Hampi, was one of the largest and richest cities of its time.",
    facts: [
      "Harihara and Bukka founded the empire in 1336 in the Tungabhadra valley. The city of Vijayanagara, now Hampi, became its capital.",
      "Krishnadevaraya (1509-1529) took the empire to its height. He wrote the Telugu work Amuktamalyada and patronised the Ashtadiggajas, eight celebrated poets.",
      "Foreign travellers such as Domingo Paes and Fernao Nuniz described the empire's wealth, markets and temples.",
      "In the Battle of Talikota in 1565, a coalition of Deccan sultanates defeated Vijayanagara, and Hampi was sacked and abandoned.",
      "Hampi is a UNESCO World Heritage Site, known for the Virupaksha temple, the Vitthala temple and its stone chariot."
    ],
    why: "Vijayanagara links political history with art and architecture, and Hampi is a frequent Prelims map question.",
    tags: ["vijayanagara", "hampi", "krishnadevaraya", "talikota", "unesco", "south india"],
    sources: [
      wikiSource("Vijayanagara Empire"),
      officialSource("UNESCO — Hampi", "https://whc.unesco.org/en/list/241")
    ]
  },
  {
    id: "indian-history-bhakti-sufi",
    category: "indian-history",
    title: "Bhakti and Sufi Movements",
    hook: "Devotional movements that made religion personal, musical and local.",
    intro: "The Bhakti and Sufi movements were devotional traditions that spread across India from roughly the 6th century onwards. They emphasised personal love for God and often challenged rigid rituals and caste hierarchies.",
    facts: [
      "The earliest Bhakti saints were the Alvars and Nayanars of South India, who composed devotional songs in Tamil between the 6th and 9th centuries.",
      "In northern India, nirguna poets such as Kabir and Guru Nanak described God without form, while saguna poets such as Tulsidas and Surdas wrote about Rama and Krishna.",
      "Sufism is the mystical tradition of Islam. The Chishti order was especially influential, with Khwaja Moinuddin Chishti in Ajmer and Nizamuddin Auliya in Delhi.",
      "Both movements used local languages, music and poetry, making religion accessible to ordinary people. Kabir's dohas are famous for blending ideas from different traditions.",
      "Women saints such as Mirabai, Andal, Akka Mahadevi and Lal Ded challenged social norms through their devotion."
    ],
    why: "A classic example of syncretism and cultural integration, often asked in art, culture and medieval history sections.",
    tags: ["bhakti", "sufism", "kabir", "mirabai", "chishti", "devotional"],
    sources: [
      wikiSource("Bhakti movement"),
      wikiSource("Sufism")
    ]
  },
  {
    id: "indian-history-revolt-1857",
    category: "indian-history",
    title: "The Revolt of 1857",
    hook: "The uprising that ended Company rule and brought the Crown to India.",
    intro: "The Revolt of 1857 was a large uprising against British rule, beginning with Indian soldiers in Meerut. It shook the East India Company and changed how Britain governed India.",
    facts: [
      "The revolt began on 10 May 1857 in Meerut. Soldiers marched to Delhi and proclaimed the aging Mughal emperor Bahadur Shah Zafar as their leader.",
      "The immediate trigger was the new Enfield rifle cartridge, which soldiers believed was greased with cow and pig fat. Deeper causes included annexations, taxes and the Doctrine of Lapse.",
      "Key leaders included Rani Lakshmibai of Jhansi, Nana Saheb in Kanpur, Kunwar Singh in Bihar, Begum Hazrat Mahal in Lucknow and Tantia Tope.",
      "The British called it the 'Sepoy Mutiny'. Indian nationalists later described it as the First War of Independence; V.D. Savarkar popularised that phrase.",
      "After the revolt, the British Crown took over from the East India Company through the Government of India Act 1858, and Queen Victoria's Proclamation promised non-interference in religion."
    ],
    why: "The revolt's causes, leaders and consequences are asked almost every year in some form.",
    tags: ["1857", "sepoy mutiny", "rani lakshmibai", "east india company", "queen victoria", "doctrine of lapse"],
    sources: [
      wikiSource("Indian Rebellion of 1857"),
      wikiSource("Doctrine of Lapse")
    ]
  },
  {
    id: "indian-history-gandhian-movements",
    category: "indian-history",
    title: "Gandhian Mass Movements",
    hook: "Non-cooperation, salt and 'Do or Die': how Gandhi mobilised a nation.",
    intro: "Mahatma Gandhi led three great mass movements that turned India's freedom struggle into a nationwide movement. His tools were non-violence, satyagraha and mass participation.",
    facts: [
      "The Non-Cooperation Movement (1920-22) asked Indians to boycott British schools, courts and goods. It was withdrawn after the Chauri Chaura violence in 1922.",
      "The Civil Disobedience Movement began with the Dandi March from 12 March to 6 April 1930. Gandhi walked about 240 miles to Dandi and broke the salt law.",
      "The Gandhi-Irwin Pact of 1931 led to the Second Round Table Conference, though it disappointed many nationalists.",
      "The Quit India Movement began on 8 August 1942 with Gandhi's 'Do or Die' speech. The British arrested most leaders, but the movement spread widely.",
      "Gandhi's earlier campaigns included Champaran (1917), Kheda (1918) and the Ahmedabad mill strike (1918), which established his method of non-violent protest."
    ],
    why: "Gandhian movements, their chronology and significance are essential for modern Indian history and essay answers.",
    tags: ["gandhi", "non-cooperation", "civil disobedience", "dandi march", "quit india", "satyagraha"],
    sources: [
      wikiSource("Indian independence movement"),
      wikiSource("Dandi March")
    ]
  },

  /* ==================== WORLD HISTORY ==================== */
  {
    id: "world-history-renaissance",
    category: "world-history",
    title: "The Renaissance",
    hook: "Europe's rebirth of art, science and humanist thinking.",
    intro: "The Renaissance was a cultural and intellectual movement in Europe from the 14th to the 17th century. It began in Italian cities and revived interest in classical Greek and Roman learning.",
    facts: [
      "It started in prosperous Italian city-states such as Florence, Venice and Rome, where trade and patronage supported artists and scholars.",
      "Humanism was its central idea: the study of human potential, literature and reason rather than only religious authority.",
      "The printing press, developed by Johannes Gutenberg around 1440, helped spread new ideas quickly across Europe.",
      "Major artists included Leonardo da Vinci, Michelangelo and Raphael. Writers included Petrarch, Dante and Machiavelli.",
      "Copernicus challenged the idea that the Earth was the centre of the universe, beginning the Scientific Revolution."
    ],
    why: "The Renaissance is the gateway to understanding modern Europe, the Reformation and the Scientific Revolution.",
    tags: ["renaissance", "humanism", "gutenberg", "leonardo da vinci", "copernicus", "europe"],
    sources: [
      wikiSource("Renaissance"),
      wikiSource("Humanism")
    ]
  },
  {
    id: "world-history-american-revolution",
    category: "world-history",
    title: "The American Revolution",
    hook: "Thirteen colonies, a tax revolt and a new kind of republic.",
    intro: "The American Revolution was a struggle by Britain's thirteen American colonies for independence. It created the United States of America and inspired later democratic movements.",
    facts: [
      "Colonists objected to taxes imposed by the British Parliament without their representation, summed up in the slogan 'No taxation without representation'.",
      "The Declaration of Independence was adopted on 4 July 1776, mainly drafted by Thomas Jefferson.",
      "The war lasted from 1775 to 1783. France supported the Americans, and Britain recognised independence in the Treaty of Paris in 1783.",
      "The revolution drew on Enlightenment ideas such as natural rights, the social contract and government by consent, especially from John Locke.",
      "The United States adopted a written constitution in 1787 and a Bill of Rights in 1791, creating a federal system with checks and balances."
    ],
    why: "It establishes the intellectual roots of democracy and is often compared with the French Revolution.",
    tags: ["american revolution", "declaration of independence", "no taxation", "enlightenment", "constitution"],
    sources: [
      wikiSource("American Revolution"),
      wikiSource("United States Declaration of Independence")
    ]
  },
  {
    id: "world-history-french-revolution",
    category: "world-history",
    title: "The French Revolution",
    hook: "Liberty, equality, fraternity, and the end of the old monarchy.",
    intro: "The French Revolution began in 1789 and overthrew the monarchy and old social order in France. Its ideas of liberty, equality and fraternity spread across the world, including to India.",
    facts: [
      "The revolution began with the storming of the Bastille prison on 14 July 1789, after a financial and food crisis.",
      "France was divided into three estates: clergy, nobility and commoners. The Third Estate paid most taxes but had little power.",
      "The Declaration of the Rights of Man and of the Citizen (1789) proclaimed liberty, equality before the law and popular sovereignty.",
      "The monarchy was abolished in 1792 and Louis XVI was executed in 1793. The Reign of Terror followed under Maximilien Robespierre in 1793-94.",
      "Napoleon Bonaparte rose from the revolutionary wars and later spread revolutionary ideas across Europe. The metric system is one lasting legacy."
    ],
    why: "The French Revolution's slogan and ideas appear in Indian polity answers on liberty, equality and fraternity.",
    tags: ["french revolution", "bastille", "liberty equality fraternity", "napoleon", "reign of terror"],
    sources: [
      wikiSource("French Revolution"),
      wikiSource("Declaration of the Rights of Man and of the Citizen")
    ]
  },
  {
    id: "world-history-industrial-revolution",
    category: "world-history",
    title: "The Industrial Revolution",
    hook: "Steam, coal and factories remade the world in a century.",
    intro: "The Industrial Revolution was the shift from hand production to machine production, beginning in Britain around 1760. It transformed economies, societies and the environment.",
    facts: [
      "It began in Britain's textile industry, powered by inventions such as the spinning jenny and the steam engine, improved by James Watt in 1769.",
      "Coal and iron became the key resources. Railways, steamships and telegraphs later transformed transport and communication.",
      "Factory production drew workers to cities, creating rapid urbanisation and new social classes: industrial owners and a large working class.",
      "The Second Industrial Revolution, from the late 19th century, brought steel, electricity, chemicals and the assembly line.",
      "Industrialisation drove colonialism and global trade, but also brought pollution, unsafe workplaces and the rise of labour movements."
    ],
    why: "Useful for comparing India's industrialisation, colonialism and modern economic growth.",
    tags: ["industrial revolution", "steam engine", "factories", "urbanisation", "railways", "labour"],
    sources: [
      wikiSource("Industrial Revolution"),
      wikiSource("Second Industrial Revolution")
    ]
  },
  {
    id: "world-history-russian-revolution",
    category: "world-history",
    title: "The Russian Revolution",
    hook: "How 1917 ended the Tsars and created the first communist state.",
    intro: "The Russian Revolution of 1917 ended the Tsarist monarchy and brought the Bolsheviks to power. It created the world's first communist state and shaped the 20th century.",
    facts: [
      "The February Revolution in 1917 forced Tsar Nicholas II to abdicate. A Provisional Government took over.",
      "In October 1917, the Bolsheviks led by Vladimir Lenin seized power. The event is often called the October Revolution.",
      "Causes included the hardships of World War I, food shortages, inequality and the failures of autocratic rule.",
      "A civil war followed from 1918 to 1921. The Soviet Union was formed in 1922.",
      "The revolution inspired communist movements worldwide and set the stage for the Cold War."
    ],
    why: "A key link between world history and India's socialist and non-aligned foreign policy.",
    tags: ["russian revolution", "lenin", "bolsheviks", "soviet union", "1917", "communism"],
    sources: [
      wikiSource("Russian Revolution"),
      wikiSource("Soviet Union")
    ]
  },
  {
    id: "world-history-ww1",
    category: "world-history",
    title: "World War I",
    hook: "The war that redrew empires and introduced industrialised slaughter.",
    intro: "World War I was a global conflict fought mainly in Europe from 1914 to 1918. New weapons and alliance systems made it one of the deadliest wars in history.",
    facts: [
      "The immediate trigger was the assassination of Archduke Franz Ferdinand of Austria-Hungary in Sarajevo on 28 June 1914.",
      "The main alliances were the Triple Entente (Britain, France, Russia) against the Central Powers (Germany, Austria-Hungary, the Ottoman Empire).",
      "Trench warfare, machine guns, artillery and poison gas caused enormous casualties. Around 9 to 10 million soldiers died.",
      "The United States entered in 1917, while Russia left after its revolution. The war ended with an armistice on 11 November 1918.",
      "The Treaty of Versailles in 1919 imposed harsh terms on Germany. Many historians see it as contributing to World War II."
    ],
    why: "The war reshaped empires, encouraged Indian nationalism and led to the League of Nations.",
    tags: ["world war i", "1914", "treaty of versailles", "entente", "central powers", "armistice"],
    sources: [
      wikiSource("World War I"),
      wikiSource("Treaty of Versailles")
    ]
  },
  {
    id: "world-history-ww2",
    category: "world-history",
    title: "World War II",
    hook: "The deadliest war in history, and the birth of the United Nations.",
    intro: "World War II was the deadliest conflict in history, fought from 1939 to 1945. It ended the old colonial order and gave birth to the United Nations.",
    facts: [
      "The war began with Germany's invasion of Poland on 1 September 1939.",
      "The Axis powers were Germany, Italy and Japan. The Allies included Britain, the Soviet Union, the United States, China and others.",
      "The Holocaust was the Nazi genocide of about six million Jews, along with Roma, disabled people and political opponents.",
      "Turning points included Stalingrad (1942-43), Midway (1942) and D-Day (1944). Atomic bombs were dropped on Hiroshima and Nagasaki in August 1945.",
      "Germany surrendered in May 1945 and Japan in September 1945. The United Nations was founded in 1945 and decolonisation accelerated."
    ],
    why: "Foundational for understanding the UN, decolonisation, human rights and the post-war world order.",
    tags: ["world war ii", "holocaust", "hiroshima", "united nations", "axis", "allies"],
    sources: [
      wikiSource("World War II"),
      officialSource("United Nations — History", "https://www.un.org/en/about-us/history-of-the-un")
    ]
  },
  {
    id: "world-history-cold-war",
    category: "world-history",
    title: "The Cold War",
    hook: "Four decades of nuclear standoff between two superpowers.",
    intro: "The Cold War was a long rivalry between the United States and the Soviet Union from about 1947 to 1991. It was fought through ideology, alliances, arms races and proxy wars rather than direct war.",
    facts: [
      "The Western bloc was led by the USA; the Eastern bloc by the USSR. The USA followed a policy of containment against communism.",
      "The Truman Doctrine (1947) and Marshall Plan (1948) strengthened Western Europe. NATO was formed in 1949 and the Warsaw Pact in 1955.",
      "Crisis points included the Berlin Blockade (1948-49), the Korean War (1950-53), the Cuban Missile Crisis (1962) and the Vietnam War.",
      "The space race produced Sputnik in 1957 and the Moon landing in 1969. Both sides built huge nuclear arsenals.",
      "The Cold War ended with Soviet reforms such as glasnost and perestroika, and the dissolution of the USSR in 1991."
    ],
    why: "Explains the origins of the UN, NATO, non-alignment and modern geopolitical alliances.",
    tags: ["cold war", "usa", "ussr", "nato", "cuban missile crisis", "containment"],
    sources: [
      wikiSource("Cold War"),
      wikiSource("NATO")
    ]
  },
  {
    id: "world-history-decolonisation",
    category: "world-history",
    title: "Decolonisation",
    hook: "How the map of the world was redrawn after 1945.",
    intro: "Decolonisation was the process by which Asian and African nations gained independence from European colonial empires, mainly after World War II.",
    facts: [
      "India became independent in 1947, followed by Indonesia in 1949, Ghana in 1957, Nigeria in 1960 and Algeria in 1962.",
      "Causes included weakened European powers after the war, strong anti-colonial movements, the UN principle of self-determination and Cold War pressure.",
      "Many new countries inherited arbitrary borders drawn by colonial powers, especially in Africa after the Berlin Conference of 1884-85.",
      "The Bandung Conference of 1955 brought Afro-Asian countries together and influenced the Non-Aligned Movement.",
      "New states faced nation-building challenges, border disputes and economic dependence, and some, like Partition and Vietnam, saw immense violence."
    ],
    why: "Decolonisation connects Indian independence with world history, the UN and the Non-Aligned Movement.",
    tags: ["decolonisation", "independence", "bandung", "colonialism", "africa", "asia"],
    sources: [
      wikiSource("Decolonization"),
      officialSource("United Nations", "https://www.un.org")
    ]
  },
  {
    id: "world-history-fall-of-ussr",
    category: "world-history",
    title: "The Fall of the Soviet Union",
    hook: "The end of the Cold War and the birth of a unipolar world.",
    intro: "The Soviet Union broke up in 1991 after decades as a superpower. Its collapse ended the Cold War and changed the global balance of power.",
    facts: [
      "Mikhail Gorbachev introduced glasnost (openness) and perestroika (restructuring) from 1985 to reform the stagnant Soviet system.",
      "Economic problems, the costly Afghanistan war (1979-89), the Chernobyl disaster (1986) and rising nationalism in republics weakened the USSR.",
      "Revolutions swept Eastern Europe in 1989, and the Berlin Wall fell on 9 November 1989.",
      "A failed coup in August 1991 was followed by the dissolution of the USSR in December 1991, splitting it into 15 independent states.",
      "The Cold War ended, and the United States became the sole superpower. NATO expanded and former Soviet states became newly independent."
    ],
    why: "Explains the post-1991 world order, unipolarity and the background to current Russia-West tensions.",
    tags: ["soviet union", "gorbachev", "berlin wall", "1991", "cold war", "unipolar"],
    sources: [
      wikiSource("Dissolution of the Soviet Union"),
      wikiSource("Berlin Wall")
    ]
  },

  /* ==================== GEOGRAPHY ==================== */
  {
    id: "geography-earth-structure",
    category: "geography",
    title: "Earth's Internal Structure",
    hook: "Crust, mantle and core: the layers under your feet.",
    intro: "The Earth is made of layers, each with different materials and behaviour. Understanding these layers explains earthquakes, volcanoes and the magnetic field.",
    facts: [
      "By composition, Earth has a crust, mantle and core. By mechanical behaviour, it has a lithosphere, asthenosphere and deeper layers.",
      "Oceanic crust is thin (about 5-10 km) and made of basalt. Continental crust is thicker (about 30-70 km) and made mainly of granite.",
      "The mantle is the largest layer, making up about 84% of Earth's volume. Its upper part, the asthenosphere, is partly molten and lets plates move.",
      "The outer core is liquid iron and nickel; its movement generates Earth's magnetic field. The inner core is solid because of immense pressure.",
      "Seismic waves help scientists study the interior. P-waves travel through solids and liquids, while S-waves cannot pass through liquids."
    ],
    why: "Foundation for plate tectonics, earthquakes and the magnetic field questions in geography.",
    tags: ["earth structure", "crust", "mantle", "core", "seismic waves", "lithosphere"],
    sources: [
      wikiSource("Internal structure of Earth"),
      officialSource("USGS", "https://www.usgs.gov")
    ]
  },
  {
    id: "geography-plate-tectonics",
    category: "geography",
    title: "Plate Tectonics",
    hook: "Why continents drift, mountains rise and earthquakes happen.",
    intro: "Plate tectonics explains why continents move, mountains form and earthquakes and volcanoes occur. Earth's outer shell is broken into plates that drift slowly on the mantle.",
    facts: [
      "The lithosphere is divided into about 15 major plates, which move a few centimetres per year on the asthenosphere.",
      "At convergent boundaries, plates collide. Oceanic plates subduct under continental plates (Andes, Japan), while two continental plates collide to form mountains (Himalayas).",
      "At divergent boundaries, plates move apart and new crust forms, as at the Mid-Atlantic Ridge.",
      "At transform boundaries, plates slide past each other, causing earthquakes, as along the San Andreas Fault.",
      "Alfred Wegener proposed continental drift in 1912. Seafloor mapping in the 1950s and 1960s provided evidence for plate tectonics."
    ],
    why: "Plate boundaries explain the distribution of earthquakes, volcanoes and mountain belts, a very common Prelims theme.",
    tags: ["plate tectonics", "continental drift", "subduction", "earthquakes", "himalayas", "mid-atlantic ridge"],
    sources: [
      wikiSource("Plate tectonics"),
      officialSource("USGS", "https://www.usgs.gov")
    ]
  },
  {
    id: "geography-latitude-longitude",
    category: "geography",
    title: "Latitude, Longitude and Time Zones",
    hook: "The grid that locates every place and explains the clock.",
    intro: "Latitude and longitude are imaginary lines that help us fix any place on Earth. They also explain time zones and India's standard time.",
    facts: [
      "Latitude runs from 0 degrees at the equator to 90 degrees at the poles. Longitude runs from 0 degrees at the Prime Meridian in Greenwich to 180 degrees east or west.",
      "One degree of latitude is about 111 km everywhere. One degree of longitude is about 111 km at the equator and shrinks to zero at the poles.",
      "Earth rotates 360 degrees in 24 hours, so it turns 15 degrees per hour. Every 15 degrees of longitude corresponds to one hour of time difference.",
      "Indian Standard Time is UTC+5:30, based on 82.5 degrees east longitude, which passes near Mirzapur. India has a single time zone.",
      "The International Date Line roughly follows 180 degrees longitude, with deviations around land. Crossing it eastwards means going back one day."
    ],
    why: "Time calculations, dawn-dusk and map questions are common in geography and general studies papers.",
    tags: ["latitude", "longitude", "time zone", "ist", "prime meridian", "international date line"],
    sources: [
      wikiSource("Geographic coordinate system"),
      wikiSource("Indian Standard Time")
    ]
  },
  {
    id: "geography-himalayas",
    category: "geography",
    title: "The Himalayas",
    hook: "Young mountains still growing, and the source of India's great rivers.",
    intro: "The Himalayas are the world's highest mountain range, stretching across Asia from Afghanistan to Myanmar. They were formed by a continental collision and continue to rise.",
    facts: [
      "The Himalayas formed when the Indian plate collided with the Eurasian plate, starting about 50 million years ago. The collision continues today.",
      "Parallel ranges from south to north are the Shiwaliks, the Lesser Himalaya, the Greater Himalaya (Himadri) and the Trans-Himalaya (Karakoram and Ladakh).",
      "Mount Everest, at 8,849 metres, is the highest peak. K2, at 8,611 metres, lies in the Karakoram range.",
      "The Himalayas are the source of the Indus, Ganga and Brahmaputra river systems and act as a barrier to the south-west monsoon.",
      "They are young fold mountains, highly prone to earthquakes, with glaciers, biodiversity, pilgrimage sites and hydropower potential."
    ],
    why: "A key map, climate and geomorphology topic; also central to border and disaster-management questions.",
    tags: ["himalayas", "mount everest", "fold mountains", "glaciers", "rivers", "monsoon barrier"],
    sources: [
      wikiSource("Himalayas"),
      officialSource("Geological Survey of India", "https://www.gsi.gov.in")
    ]
  },
  {
    id: "geography-monsoon",
    category: "geography",
    title: "The Indian Monsoon",
    hook: "The seasonal wind reversal that decides India's farm year.",
    intro: "The monsoon is a seasonal reversal of winds that brings most of India's rainfall. It is the backbone of Indian agriculture and water supply.",
    facts: [
      "The south-west monsoon lasts from June to September and provides about 75% of India's annual rainfall.",
      "It is driven by differential heating of land and sea, the northward shift of the Inter-Tropical Convergence Zone, and the heating of the Tibetan Plateau.",
      "The monsoon has two branches: the Arabian Sea branch, which hits the Western Ghats, and the Bay of Bengal branch, which brings rain to the east and north-east.",
      "El Nino conditions often weaken the monsoon, while the Indian Ocean Dipole can strengthen or weaken it.",
      "The retreating north-east monsoon from October to December brings rain to Tamil Nadu and the south-east coast."
    ],
    why: "Monsoon mechanism, variability and its impact on agriculture are asked in geography, economy and current affairs.",
    tags: ["monsoon", "southwest monsoon", "el nino", "itcz", "rainfall", "agriculture"],
    sources: [
      wikiSource("Monsoon"),
      officialSource("India Meteorological Department", "https://mausam.imd.gov.in")
    ]
  },
  {
    id: "geography-indian-rivers",
    category: "geography",
    title: "Indian Rivers",
    hook: "Snow-fed Himalayan rivers and rain-fed peninsular rivers.",
    intro: "India's rivers fall into two great systems: the snow-fed Himalayan rivers and the rain-fed peninsular rivers. Together they shape agriculture, settlements and culture.",
    facts: [
      "Himalayan rivers such as the Indus, Ganga and Brahmaputra are perennial because they are fed by snow and glaciers as well as rain.",
      "Peninsular rivers such as the Godavari, Krishna, Kaveri, Narmada and Tapi are mostly rain-fed and seasonal. They flow through older, shallower valleys.",
      "The Ganga is the longest river in India at about 2,525 km, and the Godavari is the longest peninsular river. The Brahmaputra carries a huge volume of water.",
      "The Narmada and Tapi flow west into the Arabian Sea through rift valleys, while most peninsular rivers flow east into the Bay of Bengal.",
      "The Ganga-Brahmaputra delta, shared with Bangladesh, is the world's largest delta and includes the Sundarbans."
    ],
    why: "River systems, drainage patterns and interlinking debates are regular geography questions.",
    tags: ["rivers", "ganga", "brahmaputra", "godavari", "narmada", "delta"],
    sources: [
      wikiSource("Rivers of India"),
      wikiSource("Ganges")
    ]
  },
  {
    id: "geography-soils",
    category: "geography",
    title: "Soils of India",
    hook: "Six soil types that decide what India grows where.",
    intro: "Soils are the thin layer of the earth that supports plant life. India has several major soil types, shaped by climate, parent rock and vegetation.",
    facts: [
      "Alluvial soil is the most widespread (about 40% of India), found in the Indo-Gangetic plain and coastal deltas. It is fertile and good for many crops.",
      "Black soil, also called regur, comes from the Deccan lava plateau. It retains moisture and is ideal for cotton.",
      "Red and yellow soils develop on crystalline rocks with iron oxide, mainly in eastern and southern India. They are often less fertile.",
      "Laterite soil forms in heavy rainfall areas through leaching. It is used for tea, coffee and cashew in Kerala, Karnataka and Odisha.",
      "Arid, saline, peaty and forest soils cover smaller areas. Soil erosion, salinity and overuse are major degradation problems."
    ],
    why: "Soil types and their crop suitability are directly asked in geography, and link to agriculture and conservation.",
    tags: ["soils", "alluvial", "black soil", "laterite", "red soil", "agriculture"],
    sources: [
      wikiSource("Major soil deposits of India"),
      officialSource("Indian Council of Agricultural Research", "https://icar.org.in")
    ]
  },
  {
    id: "geography-volcanoes",
    category: "geography",
    title: "Volcanoes",
    hook: "Mountains that build land, and sometimes destroy it.",
    intro: "A volcano is an opening in Earth's crust through which magma, ash and gases escape. Volcanoes build new land but also cause severe hazards.",
    facts: [
      "Most volcanoes occur along plate boundaries or at hotspots, where magma rises from deep in the mantle.",
      "Shield volcanoes, like those in Hawaii, are broad with fluid lava. Composite or stratovolcanoes, like Mount Fuji, are steep and explosive.",
      "The Ring of Fire around the Pacific Ocean contains about 75% of the world's active volcanoes.",
      "In India, Barren Island in the Andaman Sea is the only active volcano. Narcondam is dormant. The Deccan Traps were formed by ancient flood basalt eruptions.",
      "Volcanic soils are fertile, and volcanoes provide geothermal energy and minerals. Hazards include lava, ash, pyroclastic flows and lahars."
    ],
    why: "Linked to plate tectonics and disaster management, and Barren Island is a common map question.",
    tags: ["volcanoes", "ring of fire", "barren island", "deccan traps", "lava", "geothermal"],
    sources: [
      wikiSource("Volcano"),
      officialSource("USGS", "https://www.usgs.gov")
    ]
  },
  {
    id: "geography-ocean-currents",
    category: "geography",
    title: "Ocean Currents",
    hook: "Rivers in the sea that move heat and feed fisheries.",
    intro: "Ocean currents are large-scale movements of water across the oceans. They transfer heat, shape climates and support marine life.",
    facts: [
      "Surface currents are driven by winds, Earth's rotation (Coriolis effect) and the shape of coastlines. Deep currents are driven by differences in temperature and salinity.",
      "Warm currents raise temperatures along coasts; the Gulf Stream helps keep north-west Europe mild. Cold currents cool coasts; the Humboldt Current contributes to the Atacama Desert's dryness.",
      "Major ocean gyres rotate clockwise in the Northern Hemisphere and anticlockwise in the Southern Hemisphere.",
      "Upwelling brings cold, nutrient-rich water to the surface. It supports rich fisheries, such as off the coast of Peru.",
      "The thermohaline circulation, or global conveyor belt, moves heat around the planet. El Nino disrupts Pacific currents and weather worldwide."
    ],
    why: "Currents explain coastal climates, fisheries and El Nino, making them a recurring geography topic.",
    tags: ["ocean currents", "gulf stream", "el nino", "upwelling", "gyres", "thermohaline"],
    sources: [
      wikiSource("Ocean current"),
      officialSource("NOAA", "https://www.noaa.gov")
    ]
  },
  {
    id: "geography-deserts",
    category: "geography",
    title: "Deserts",
    hook: "The drylands: not always hot, and full of adaptations.",
    intro: "Deserts are regions that receive very little rainfall. They are not always hot; some of the largest deserts are cold.",
    facts: [
      "A desert generally receives less than 250 mm of rainfall a year. Hot deserts include the Sahara, while cold deserts include the Gobi and Antarctica.",
      "The Sahara is the largest hot desert. The Thar Desert lies partly in India. The Atacama is one of the driest places on Earth.",
      "Antarctica is the largest desert overall because it receives very little precipitation.",
      "Deserts form due to subtropical high pressure, rain shadows behind mountains, distance from seas and cold offshore currents.",
      "Desert features include dunes, oases and dry riverbeds (wadis). Desertification, especially in the Sahel, is a major environmental concern."
    ],
    why: "Desertification, the Thar and rain-shadow effects are frequently asked in geography and environment sections.",
    tags: ["deserts", "sahara", "thar", "desertification", "rain shadow", "atacama"],
    sources: [
      wikiSource("Desert"),
      officialSource("UNCCD", "https://www.unccd.int")
    ]
  },

  /* ==================== SCIENCE ==================== */
  {
    id: "science-cell",
    category: "science",
    title: "The Cell",
    hook: "The smallest unit that can be called alive.",
    intro: "The cell is the basic building block of all living things. Some organisms are a single cell, while others, like humans, are made of trillions.",
    facts: [
      "Robert Hooke discovered cells in 1665 while observing cork under a microscope. The term 'cell' comes from the small rooms he saw.",
      "Prokaryotic cells, such as bacteria, have no true nucleus. Eukaryotic cells, found in plants, animals and fungi, have a nucleus and membrane-bound organelles.",
      "Key organelles include mitochondria (energy production), ribosomes (protein synthesis), the endoplasmic reticulum and Golgi apparatus. Plant cells also have chloroplasts and a cell wall.",
      "The cell theory was developed by Schleiden and Schwann, and Rudolf Virchow added that all cells arise from existing cells.",
      "Cells divide by mitosis for growth and repair, and by meiosis to produce gametes with half the normal chromosome number."
    ],
    why: "Basics of the cell appear in general science questions and underpin biology, health and biotechnology topics.",
    tags: ["cell", "prokaryote", "eukaryote", "mitochondria", "mitosis", "meiosis"],
    sources: [
      wikiSource("Cell (biology)"),
      officialSource("NCBI", "https://www.ncbi.nlm.nih.gov")
    ]
  },
  {
    id: "science-dna",
    category: "science",
    title: "DNA and Genes",
    hook: "The instruction manual that makes you, you.",
    intro: "DNA is the molecule that carries the instructions for building and running living things. It is passed from parents to offspring and explains inherited traits.",
    facts: [
      "The double-helix structure of DNA was described by James Watson and Francis Crick in 1953, using X-ray data from Rosalind Franklin and Maurice Wilkins.",
      "DNA is made of four bases: adenine (A), thymine (T), guanine (G) and cytosine (C). A pairs with T, and G pairs with C.",
      "Genes are segments of DNA that encode proteins. The human genome has about 20,000 genes and roughly 3 billion base pairs.",
      "Changes in DNA sequence, called mutations, create genetic variation and can cause diseases.",
      "DNA fingerprinting is used in forensics and paternity testing. PCR copies DNA, and genome sequencing reads it for medicine and research."
    ],
    why: "Genetics is increasingly important in UPSC science questions, especially biotechnology and health.",
    tags: ["dna", "genes", "double helix", "mutation", "genome", "pcr"],
    sources: [
      wikiSource("DNA"),
      officialSource("MedlinePlus Genetics", "https://medlineplus.gov/genetics/")
    ]
  },
  {
    id: "science-photosynthesis",
    category: "science",
    title: "Photosynthesis",
    hook: "How plants turn sunlight into food and give us oxygen.",
    intro: "Photosynthesis is how plants, algae and some bacteria make their own food using sunlight. It also produces the oxygen we breathe.",
    facts: [
      "The overall process uses carbon dioxide, water and light energy to make glucose and release oxygen.",
      "It takes place in chloroplasts, which contain the green pigment chlorophyll. Chlorophyll absorbs red and blue light and reflects green.",
      "There are two stages: light reactions in the thylakoids produce ATP and NADPH and split water to release oxygen; the Calvin cycle in the stroma fixes carbon dioxide into sugar.",
      "C4 plants such as maize and sugarcane use a special pathway that is efficient in hot, dry conditions. CAM plants, like cacti, conserve water.",
      "Photosynthesis is the base of most food chains and plays a key role in the global carbon cycle."
    ],
    why: "A classic general science topic that links to agriculture, climate and the carbon cycle.",
    tags: ["photosynthesis", "chlorophyll", "calvin cycle", "oxygen", "c4 plants", "carbon cycle"],
    sources: [
      wikiSource("Photosynthesis"),
      officialSource("USDA", "https://www.usda.gov")
    ]
  },
  {
    id: "science-newton-laws",
    category: "science",
    title: "Newton's Laws of Motion",
    hook: "Three rules that explain nearly everything that moves.",
    intro: "Newton's laws of motion explain how objects move and why they stop. They are the foundation of classical mechanics.",
    facts: [
      "The first law (inertia) says an object stays at rest or moves uniformly unless a net external force acts on it.",
      "The second law says force equals mass times acceleration (F = ma). A larger force produces greater acceleration.",
      "The third law says every action has an equal and opposite reaction. This explains rocket propulsion and walking.",
      "Newton's law of universal gravitation states that every mass attracts every other mass, with force decreasing as the square of distance.",
      "The laws work well at everyday speeds but break down at very high speeds, where Einstein's relativity applies, and at atomic scales, where quantum mechanics applies."
    ],
    why: "Newtonian mechanics is the most commonly asked physics area in general science.",
    tags: ["newton", "laws of motion", "inertia", "force", "gravity", "f=ma"],
    sources: [
      wikiSource("Newton's laws of motion"),
      officialSource("NASA", "https://www.nasa.gov")
    ]
  },
  {
    id: "science-periodic-table",
    category: "science",
    title: "The Periodic Table",
    hook: "The map of all 118 elements and their hidden patterns.",
    intro: "The periodic table arranges all known chemical elements in order of atomic number. Its rows and columns reveal patterns in properties and reactivity.",
    facts: [
      "Dmitri Mendeleev arranged elements by atomic mass in 1869 and predicted properties of missing elements. The modern table orders elements by atomic number, following Henry Moseley.",
      "There are 118 known elements. Horizontal rows are called periods, and vertical columns are called groups.",
      "Elements on the left are metals, on the right are non-metals, and between them are metalloids such as silicon.",
      "Atomic radius generally decreases across a period and increases down a group. Electronegativity shows the opposite trend.",
      "Elements such as carbon, hydrogen, oxygen, nitrogen, phosphorus and sulphur are essential for life, while many others are vital in industry and medicine."
    ],
    why: "Periodic trends and element properties appear in general science and chemistry questions.",
    tags: ["periodic table", "elements", "mendeleev", "atomic number", "groups", "periods"],
    sources: [
      wikiSource("Periodic table"),
      officialSource("IUPAC", "https://iupac.org")
    ]
  },
  {
    id: "science-evolution",
    category: "science",
    title: "Evolution by Natural Selection",
    hook: "Why living things fit their environments so well.",
    intro: "Evolution is the change in living organisms over generations. It explains both the diversity of life and how species adapt to their environments.",
    facts: [
      "Charles Darwin published On the Origin of Species in 1859 and proposed natural selection as the main mechanism.",
      "Natural selection works when individuals vary, the variation is heritable, and some variants reproduce more successfully.",
      "Evidence comes from fossils, comparative anatomy (such as homologous structures), embryology and molecular genetics.",
      "The modern synthesis combined Darwin's ideas with genetics. Mutations provide the raw material for variation.",
      "Evolution does not produce perfect organisms. Antibiotic resistance in bacteria is an observable example of natural selection."
    ],
    why: "Evolution links to biodiversity, health and agriculture, and is a frequent science and environment question.",
    tags: ["evolution", "darwin", "natural selection", "adaptation", "fossils", "antibiotic resistance"],
    sources: [
      wikiSource("Evolution"),
      officialSource("Smithsonian Human Origins", "https://humanorigins.si.edu")
    ]
  },
  {
    id: "science-big-bang",
    category: "science",
    title: "The Big Bang",
    hook: "How the universe began, and the evidence we can still see.",
    intro: "The Big Bang is the leading scientific explanation for how the universe began. It describes the universe expanding from an extremely hot, dense state about 13.8 billion years ago.",
    facts: [
      "The Big Bang was not an explosion in existing space; it was the expansion of space itself, starting from a very hot, dense state.",
      "Key evidence includes the cosmic microwave background radiation, the redshift of distant galaxies and the observed abundance of light elements.",
      "Georges Lemaitre proposed the idea of a 'primeval atom'. The term 'Big Bang' was coined by Fred Hoyle, who was actually mocking the theory.",
      "Gravity caused matter to clump into stars, galaxies and larger structures. Dark matter and dark energy dominate the universe's mass-energy content.",
      "The universe is still expanding, and its fate depends on the nature of dark energy."
    ],
    why: "Space and cosmology questions are growing in UPSC science sections, especially with missions like Aditya-L1 and the James Webb Telescope.",
    tags: ["big bang", "cosmology", "cmb", "redshift", "dark energy", "universe"],
    sources: [
      wikiSource("Big Bang"),
      officialSource("NASA", "https://www.nasa.gov")
    ]
  },
  {
    id: "science-immune-system",
    category: "science",
    title: "The Human Immune System",
    hook: "The body's defence force, and how vaccines train it.",
    intro: "The immune system defends the body against bacteria, viruses, parasites and other threats. It also remembers past infections, which is why some diseases do not affect you twice.",
    facts: [
      "Innate immunity is fast and non-specific. It includes physical barriers such as skin and mucus, plus phagocytes and inflammation.",
      "Adaptive immunity is slower but specific. B cells produce antibodies, while T cells help and kill infected cells.",
      "Memory cells remain after an infection and allow a faster response if the same pathogen returns. Vaccines use this principle.",
      "Antigens are molecules from pathogens that trigger an immune response. The immune system normally tolerates the body's own cells.",
      "Problems include allergies, autoimmune diseases such as rheumatoid arthritis, and immunodeficiency, as in HIV/AIDS."
    ],
    why: "Health, vaccines and disease biology are increasingly tested in UPSC, especially after the pandemic.",
    tags: ["immune system", "antibodies", "vaccines", "b cells", "t cells", "immunity"],
    sources: [
      wikiSource("Immune system"),
      officialSource("World Health Organization", "https://www.who.int")
    ]
  },
  {
    id: "science-electricity",
    category: "science",
    title: "Electricity",
    hook: "Current, voltage and resistance in plain language.",
    intro: "Electricity is the flow of electric charge. It powers homes, industries and modern technology, and its basic laws are simple to understand.",
    facts: [
      "Current is the rate of flow of charge, measured in amperes. Voltage is the potential difference that drives the current, measured in volts.",
      "Resistance opposes current flow and is measured in ohms. Ohm's law states that voltage equals current times resistance (V = IR).",
      "Electrical power is voltage times current (P = VI), measured in watts. Household wiring uses parallel circuits so appliances work independently.",
      "Conductors allow current to flow easily, insulators resist it, and semiconductors sit in between and form the basis of electronics.",
      "Electricity can be direct current (DC) or alternating current (AC). India's grid uses AC at about 50 Hz. Earthing, fuses and MCBs protect against shocks."
    ],
    why: "Basic electricity questions are common in general science, and the topic links to renewable energy and EVs.",
    tags: ["electricity", "current", "voltage", "ohms law", "ac dc", "resistance"],
    sources: [
      wikiSource("Electricity"),
      officialSource("US Department of Energy", "https://www.energy.gov")
    ]
  },
  {
    id: "science-states-of-matter",
    category: "science",
    title: "States of Matter",
    hook: "Solid, liquid, gas, plasma: same stuff, different energy.",
    intro: "Matter exists in different states depending on how its particles are arranged and how much energy they have. The common states are solid, liquid and gas, with plasma as a fourth.",
    facts: [
      "Solids have a fixed shape and volume; liquids have a fixed volume but flow; gases fill their container.",
      "Particles in solids are closely packed and vibrate in place. In liquids they are looser, and in gases they move freely.",
      "Heating changes states: melting (solid to liquid), boiling (liquid to gas), condensation (gas to liquid) and sublimation (solid directly to gas).",
      "Latent heat is absorbed or released during phase changes without changing temperature.",
      "Plasma is an ionised gas found in the Sun, lightning and neon lights. Bose-Einstein condensates form near absolute zero."
    ],
    why: "States of matter are basic science for climate, materials and technology questions.",
    tags: ["states of matter", "solid liquid gas", "plasma", "latent heat", "sublimation"],
    sources: [
      wikiSource("State of matter"),
      officialSource("NASA", "https://www.nasa.gov")
    ]
  }
]);
