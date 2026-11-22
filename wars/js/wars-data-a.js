var WARS_A = [
  {
    id: "first-panipat-1526",
    title: "First Battle of Panipat",
    years: "1526",
    start: 1526,
    end: 1526,
    era: "foundations",
    type: "indian",
    region: "Panipat, Haryana",
    summary: "Babur's Timurid cavalry and field artillery defeat Ibrahim Lodi's much larger Delhi Sultanate army, opening the road to Delhi and founding the Mughal Empire.",
    result: "Mughal victory; end of the Lodi dynasty.",
    treaty: "No treaty; Babur occupied Delhi and Agra.",
    belligerents: [
      { side: "Mughals", powers: ["mughals"], commanders: ["Babur", "Humayun"] },
      { side: "Delhi Sultanate", powers: ["delhi_sultanate"], commanders: ["Ibrahim Lodi"] }
    ],
    involvement: {
      mughals: "belligerent",
      delhi_sultanate: "belligerent",
      bengal: "neutral",
      vijayanagara: "neutral",
      deccan_sultanates: "neutral",
      rajputana: "neutral"
    },
    rulerNotes: {
      mughals: "Babur had already secured Kabul and was advancing into Punjab.",
      delhi_sultanate: "Ibrahim Lodi's army was larger but poorly coordinated."
    },
    keyBattles: [
      { name: "Battle of Panipat", year: 1526, note: "Babur used the tulughma flanking formation and matchlock artillery to break the Lodi centre." }
    ],
    sections: {
      background: "Babur, a Timurid prince from Central Asia, had lost Samarkand and turned his attention to India. After securing Kabul and Punjab, he faced Ibrahim Lodi, whose Delhi Sultanate was unpopular with many Afghan and Rajput nobles.",
      course: "Babur drew up his smaller army at Panipat with carts and artillery in front and cavalry on the flanks. Ibrahim Lodi attacked head-on; Mughal guns and flanking cavalry shattered his formations, and the Sultan was killed in the fighting.",
      outcome: "Babur entered Delhi and Agra and proclaimed the Mughal Empire. The Lodi dynasty collapsed, and Afghan power in northern India fragmented.",
      aftermath: "The victory gave the Mughals a base in India but did not secure the north immediately. Babur faced Rajput and Afghan coalitions before his death in 1530, and Humayun lost the throne to Sher Shah Suri a decade later."
    },
    britishScopes: [],
    britishRole: "not-present",
    britishNote: "The East India Company did not exist until 1600; no British power was present in India.",
    related: ["second-panipat-1556", "talikota-1565"],
    sources: [
      "Satish Chandra, Medieval India, Vol. 2",
      "Abraham Eraly, Emperors of the Peacock Throne",
      "Encyclopaedia Britannica, Battle of Panipat (1526)"
    ]
  },
  {
    id: "second-panipat-1556",
    title: "Second Battle of Panipat",
    years: "1556",
    start: 1556,
    end: 1556,
    era: "foundations",
    type: "indian",
    region: "Panipat, Haryana",
    summary: "Akbar and Bairam Khan defeat Hemu Vikramaditya, the Sur commander who had seized Delhi, restoring Mughal rule after Humayun's death.",
    result: "Mughal victory; Hemu captured and executed.",
    treaty: "No treaty; Mughal rule restored in Delhi.",
    belligerents: [
      { side: "Mughals", powers: ["mughals"], commanders: ["Akbar", "Bairam Khan"] },
      { side: "Sur Empire", powers: ["sur_empire"], commanders: ["Hemu Vikramaditya"] }
    ],
    involvement: {
      mughals: "belligerent",
      sur_empire: "belligerent",
      bengal: "neutral",
      vijayanagara: "neutral",
      deccan_sultanates: "neutral",
      rajputana: "neutral"
    },
    rulerNotes: {
      mughals: "Akbar was a boy emperor; Bairam Khan commanded the Mughal army.",
      sur_empire: "Hemu was the Sur chief minister and de facto ruler, not a crowned Sultan."
    },
    keyBattles: [
      { name: "Battle of Panipat", year: 1556, note: "Hemu's army initially pressed the Mughals, but an arrow wound and his collapse turned the battle." }
    ],
    sections: {
      background: "Humayun died in 1556, leaving the young Akbar on the throne. Hemu, a Hindu general and chief minister of the Sur dynasty, exploited the succession crisis to capture Delhi and Agra and claim royal status.",
      course: "Bairam Khan led the Mughal army north and met Hemu at Panipat. Hemu's artillery and war elephants made early progress, but he was wounded in the eye and lost consciousness; his army broke, and he was captured.",
      outcome: "Akbar was confirmed as emperor, and Bairam Khan became regent. Hemu was executed, and Mughal authority was re-established in northern India.",
      aftermath: "The victory secured the Mughal restoration and allowed Akbar to build the administrative and military system that would make the empire dominant. Sur power in the region collapsed."
    },
    britishScopes: [],
    britishRole: "not-present",
    britishNote: "No British territorial power existed in India in 1556.",
    related: ["first-panipat-1526", "talikota-1565"],
    sources: [
      "Satish Chandra, Medieval India, Vol. 2",
      "Abraham Eraly, Emperors of the Peacock Throne",
      "Encyclopaedia Britannica, Battle of Panipat (1556)"
    ]
  },
  {
    id: "talikota-1565",
    title: "Battle of Talikota",
    years: "1565",
    start: 1565,
    end: 1565,
    era: "foundations",
    type: "indian",
    region: "Rakshasa-Tangadi, Karnataka",
    summary: "The Deccan Sultanates defeat Vijayanagara, kill regent Rama Raya and sack the capital, ending the empire's imperial phase.",
    result: "Deccan Sultanate victory; Vijayanagara sacked and weakened.",
    treaty: "No formal treaty; the victors divided territory.",
    belligerents: [
      { side: "Vijayanagara Empire", powers: ["vijayanagara"], commanders: ["Rama Raya", "Sadasiva Raya", "Tirumala Deva Raya"] },
      { side: "Deccan Sultanates", powers: ["deccan_sultanates"], commanders: ["Ali Adil Shah I", "Ibrahim Quli Qutb Shah", "Hussain Nizam Shah I", "Ali Barid Shah I"] }
    ],
    involvement: {
      vijayanagara: "belligerent",
      deccan_sultanates: "belligerent",
      mughals: "neutral",
      bengal: "neutral",
      rajputana: "neutral"
    },
    rulerNotes: {
      vijayanagara: "Sadasiva Raya was the titular emperor; Rama Raya held effective power as regent.",
      deccan_sultanates: "Four Sultanates formed a rare coalition against Vijayanagara."
    },
    keyBattles: [
      { name: "Battle of Talikota", year: 1565, note: "The Sultanate coalition broke Vijayanagara's centre; Rama Raya was captured and executed." }
    ],
    sections: {
      background: "Vijayanagara was the dominant power in southern India, but its regent Rama Raya interfered in the politics of the Deccan Sultanates. The Sultanates of Bijapur, Golconda, Ahmadnagar and Bidar set aside their rivalries and formed an alliance.",
      course: "The two armies met near Talikota on the Krishna river. Vijayanagara's infantry and elephants initially held, but the Sultanate artillery and cavalry broke its centre; Rama Raya was captured and killed, and the Vijayanagara army collapsed.",
      outcome: "The victors plundered Vijayanagara's capital for months. The empire survived in a reduced form under the Aravidu dynasty, but it never recovered its former power.",
      aftermath: "Talikota reshaped the Deccan, leaving the Sultanates dominant and opening the way for later Mughal and Maratha expansion. The ruins of Vijayanagara became a symbol of lost imperial glory."
    },
    britishScopes: [],
    britishRole: "not-present",
    britishNote: "The East India Company did not yet exist; Portuguese traders were present on the coast but not a territorial power in the Deccan.",
    related: ["first-panipat-1526", "second-panipat-1556"],
    sources: [
      "Burton Stein, A History of India",
      "Hermann Kulke and Dietmar Rothermund, A History of India",
      "Encyclopaedia Britannica, Vijayanagara"
    ]
  },
  {
    id: "childs-war-1686",
    title: "Child's War",
    years: "1686–1690",
    start: 1686,
    end: 1690,
    era: "mughal-twilight",
    type: "british",
    region: "Western India and Bengal",
    summary: "The East India Company's attempt to force trading concessions from Aurangzeb's Mughal Empire ends in defeat, a heavy fine and a humiliating apology.",
    result: "Mughal victory; the Company restored its trade rights after submitting.",
    treaty: "Peace of 1690; the Company apologized and paid a fine.",
    belligerents: [
      { side: "East India Company", powers: ["british"], commanders: ["Sir Josiah Child", "Sir John Child", "Job Charnock"] },
      { side: "Mughal Empire", powers: ["mughals"], commanders: ["Aurangzeb", "Shaista Khan"] }
    ],
    involvement: {
      mughals: "belligerent",
      marathas_chhatrapati: "neutral",
      sikhs: "neutral",
      rajputana: "neutral"
    },
    rulerNotes: {
      mughals: "Aurangzeb was campaigning in the Deccan while his governors controlled Bengal and Gujarat.",
      marathas_chhatrapati: "Sambhaji was at war with the Mughals, but the Marathas were not allied with the Company."
    },
    keyBattles: [
      { name: "Capture of Mughal shipping", year: 1686, note: "The Company seized Mughal merchant vessels in an attempt to force concessions." },
      { name: "Siege of Bombay", year: 1689, note: "Mughal forces besieged Bombay; the Company's position became untenable." }
    ],
    sections: {
      background: "The East India Company wanted a stronger position in Bengal and Gujarat. Its governor in London, Sir Josiah Child, believed that naval pressure could force Aurangzeb to grant broad trading privileges.",
      course: "The Company attacked Mughal shipping and fortified its settlements. Mughal forces retaliated, blockaded Bombay and threatened the Company's trade. The English had no answer to Mughal land power and faced financial ruin.",
      outcome: "The Company submitted, paid a fine and apologized. Mughal authorities restored its trading rights, and the Company abandoned its attempt to use force against the empire.",
      aftermath: "The humiliation convinced the Company to rely on negotiation and local alliances. It soon shifted its attention to Bengal, where Calcutta would become its most important base."
    },
    britishScopes: ["bombay"],
    britishRole: "belligerent",
    britishNote: "No Governor-General existed; Sir John Child governed Bombay and Sir Josiah Child directed the Company from London.",
    related: ["mughal-maratha-wars", "plassey-1757"],
    sources: [
      "John Keay, The Honourable Company",
      "William Dalrymple, The Anarchy",
      "Encyclopaedia Britannica, East India Company"
    ]
  },
  {
    id: "mughal-maratha-wars",
    title: "Mughal–Maratha Wars",
    years: "1681–1707",
    start: 1681,
    end: 1707,
    era: "mughal-twilight",
    type: "indian",
    region: "Deccan and Maharashtra",
    summary: "Aurangzeb's 26-year campaign to destroy the Marathas becomes a war of forts and attrition; Maratha resistance survives the execution of Sambhaji and outlasts the emperor.",
    result: "Stalemate; Mughal power exhausted, Maratha power survives.",
    treaty: "No formal treaty; the war faded after Aurangzeb's death in 1707.",
    belligerents: [
      { side: "Mughal Empire", powers: ["mughals"], commanders: ["Aurangzeb", "Muazzam", "Zulfikar Khan"] },
      { side: "Marathas", powers: ["marathas_chhatrapati"], commanders: ["Sambhaji", "Rajaram", "Tarabai", "Santaji Ghorpade", "Dhanaji Jadhav"] }
    ],
    involvement: {
      mughals: "belligerent",
      marathas_chhatrapati: "belligerent",
      sikhs: "indirect",
      rajputana: "indirect"
    },
    rulerNotes: {
      mughals: "Aurangzeb moved his court to the Deccan and spent the last decades of his reign there.",
      marathas_chhatrapati: "Sambhaji was executed in 1689; Rajaram and Tarabai continued the struggle."
    },
    keyBattles: [
      { name: "Siege of Raigad", year: 1689, note: "Mughal forces captured Sambhaji and the Maratha capital." },
      { name: "Battle of Wai", year: 1687, note: "A hard-fought Maratha–Mughal engagement in the western Deccan." },
      { name: "Siege of Jinji", year: 1690, note: "Rajaram held the fortress of Jinji for years before escaping." }
    ],
    sections: {
      background: "Aurangzeb wanted to eliminate the Maratha state founded by Shivaji and annex the Deccan. The Marathas, led by Sambhaji and later Rajaram, relied on hill forts, cavalry raids and local networks.",
      course: "The Mughals captured many forts and executed Sambhaji in 1689, but the Marathas refused to submit. Rajaram defended Jinji, Tarabai organized resistance from Satara, and Maratha cavalry raided Mughal supply lines across the Deccan.",
      outcome: "The Mughals failed to destroy the Marathas. Aurangzeb died in 1707 with the Deccan still unsettled, and the Marathas emerged as a major power under Shahu and the Peshwas.",
      aftermath: "The war drained the Mughal treasury and army, accelerating the empire's decline. Maratha expansion into northern and central India followed in the 18th century."
    },
    britishScopes: ["bombay"],
    britishRole: "neutral",
    britishNote: "The East India Company's Bombay settlement was affected by the wider conflict but was not a belligerent in the Mughal–Maratha war.",
    related: ["childs-war-1686", "third-panipat-1761", "maratha-nizam-wars"],
    sources: [
      "Jadunath Sarkar, History of Aurangzib, Vol. 5",
      "Stewart Gordon, The Marathas 1600–1818",
      "Encyclopaedia Britannica, Aurangzeb"
    ]
  },
  {
    id: "mughal-sikh-wars",
    title: "Mughal–Sikh Wars",
    years: "1675–1716",
    start: 1675,
    end: 1716,
    era: "mughal-twilight",
    type: "indian",
    region: "Punjab",
    summary: "From Guru Tegh Bahadur's execution to Banda Singh Bahadur's revolt, the Sikhs fight Mughal authority; the Mughals win militarily but cannot destroy the Sikh community.",
    result: "Mughal military victory; Sikh resistance survives and reorganizes.",
    treaty: "No treaty; Banda Singh Bahadur was captured and executed in 1716.",
    belligerents: [
      { side: "Mughal Empire", powers: ["mughals"], commanders: ["Aurangzeb", "Bahadur Shah I", "Farrukhsiyar"] },
      { side: "Sikhs", powers: ["sikhs"], commanders: ["Guru Tegh Bahadur", "Guru Gobind Singh", "Banda Singh Bahadur"] }
    ],
    involvement: {
      mughals: "belligerent",
      sikhs: "belligerent",
      rajputana: "neutral",
      marathas_chhatrapati: "indirect"
    },
    rulerNotes: {
      mughals: "Aurangzeb's policies provoked the Sikh Gurus; his successors continued the confrontation.",
      sikhs: "Guru Gobind Singh founded the Khalsa in 1699; Banda Singh Bahadur led the armed revolt after the Guru's death."
    },
    keyBattles: [
      { name: "Battle of Bhangani", year: 1688, note: "Guru Gobind Singh's first major battle against local hill chiefs." },
      { name: "Battle of Anandpur", year: 1704, note: "Mughal and hill-state forces besieged the Guru's stronghold." },
      { name: "Battle of Sirhind", year: 1710, note: "Banda Singh Bahadur captured Sirhind and established a short-lived Sikh state." },
      { name: "Siege of Gurdas Nangal", year: 1715, note: "Mughal forces captured Banda Singh Bahadur after a long siege." }
    ],
    sections: {
      background: "The Sikh Gurus built a community that challenged Mughal religious and political authority. Aurangzeb's execution of Guru Tegh Bahadur in 1675 deepened the conflict, and Guru Gobind Singh militarized the Sikhs through the Khalsa.",
      course: "The Sikhs fought Mughal and hill-state forces in Punjab. After the Guru's death in 1708, Banda Singh Bahadur led a peasant revolt, captured Sirhind and established a Sikh administration before Mughal armies closed in.",
      outcome: "Banda was besieged at Gurdas Nangal, captured and executed in 1716. The Mughals crushed the revolt, but the Sikh community survived and reorganized into the misl system.",
      aftermath: "The war became a founding memory of Sikh resistance. In the 18th century, Sikh misls expanded across Punjab and eventually enabled Ranjit Singh's empire."
    },
    britishScopes: ["eic"],
    britishRole: "neutral",
    britishNote: "No Governor-General existed. The East India Company's presidencies were not involved in the Mughal–Sikh conflict.",
    related: ["mughal-rajput-war", "first-anglo-sikh-war", "afghan-sikh-wars"],
    sources: [
      "Khushwant Singh, A History of the Sikhs, Vol. 1",
      "J. S. Grewal, The Sikhs of the Punjab",
      "Encyclopaedia Britannica, Sikhism"
    ]
  },
  {
    id: "mughal-rajput-war",
    title: "Mughal–Rajput War",
    years: "1680–1707",
    start: 1680,
    end: 1707,
    era: "mughal-twilight",
    type: "indian",
    region: "Rajputana",
    summary: "Aurangzeb's interference in Rajput succession and his temple policies provoke a long resistance war in Mewar and Marwar; the Rajputs survive with their autonomy intact.",
    result: "Mughal failure; Rajput states retain substantial autonomy.",
    treaty: "No single treaty; a series of settlements restored Rajput rulers.",
    belligerents: [
      { side: "Mughal Empire", powers: ["mughals"], commanders: ["Aurangzeb"] },
      { side: "Rajput states", powers: ["rajputana"], commanders: ["Rana Raj Singh I", "Ajit Singh", "Durga Das Rathore", "Amar Singh II"] }
    ],
    involvement: {
      mughals: "belligerent",
      rajputana: "belligerent",
      marathas_chhatrapati: "indirect",
      sikhs: "indirect"
    },
    rulerNotes: {
      mughals: "Aurangzeb wanted direct control over Rajput succession and revenues.",
      rajputana: "Mewar and Marwar led the resistance; Amber's loyalty was divided."
    },
    keyBattles: [
      { name: "Siege of Jodhpur", year: 1679, note: "Aurangzeb occupied Marwar after Jaswant Singh's death." },
      { name: "Siege of Chittorgarh", year: 1680, note: "Mughal forces pressured Mewar's historic capital." },
      { name: "Rathore guerrilla campaign", year: 1680, note: "Durga Das Rathore and Ajit Singh's supporters fought a long war in the Aravallis." }
    ],
    sections: {
      background: "Aurangzeb's decision to intervene in the succession of Marwar and his broader religious policies alienated the Rajput states. Mewar and Marwar resisted, while Amber tried to balance loyalty to the emperor with Rajput solidarity.",
      course: "Mughal armies occupied Jodhpur and pressured Chittorgarh, but Rajput forces avoided decisive battles and used the hills and deserts to wear down imperial columns. Ajit Singh became a symbol of Rathore resistance.",
      outcome: "Aurangzeb could not permanently subdue the Rajputs. After his death, Rajput rulers recovered their thrones and much of their autonomy.",
      aftermath: "The war weakened Mughal authority in Rajasthan and contributed to the empire's wider crisis. Rajput states remained important players in the 18th-century struggle between the Marathas, Mughals and British."
    },
    britishScopes: ["eic"],
    britishRole: "neutral",
    britishNote: "No Governor-General existed; the East India Company was not involved in the Rajput–Mughal war.",
    related: ["mughal-maratha-wars", "mughal-sikh-wars"],
    sources: [
      "Satish Chandra, Medieval India, Vol. 2",
      "Jadunath Sarkar, History of Aurangzib, Vol. 3",
      "Encyclopaedia Britannica, Rajput"
    ]
  },
  {
    id: "maratha-nizam-wars",
    title: "Maratha–Nizam Wars",
    years: "1728–1795",
    start: 1728,
    end: 1795,
    era: "mughal-twilight",
    type: "indian",
    region: "Deccan",
    summary: "A series of campaigns between the expanding Maratha Confederacy and the Nizam of Hyderabad, from Baji Rao I's victory at Palkhed to the Maratha victory at Kharda.",
    result: "Maratha dominance in the Deccan; Hyderabad checked.",
    treaty: "Several treaties, including the settlement after Kharda in 1795.",
    belligerents: [
      { side: "Marathas", powers: ["marathas_peshwa", "marathas_chhatrapati", "gwalior", "indore"], commanders: ["Baji Rao I", "Balaji Baji Rao", "Madhav Rao I", "Mahadaji Shinde"] },
      { side: "Hyderabad", powers: ["hyderabad"], commanders: ["Asaf Jah I", "Salabat Jung", "Asaf Jah II"] }
    ],
    involvement: {
      marathas_peshwa: "belligerent",
      marathas_chhatrapati: "ally",
      gwalior: "ally",
      indore: "ally",
      hyderabad: "belligerent",
      mughals: "indirect"
    },
    rulerNotes: {
      marathas_peshwa: "The Peshwas directed Maratha expansion; the Chhatrapati was largely titular.",
      hyderabad: "The Nizam tried to contain Maratha power in the Deccan."
    },
    keyBattles: [
      { name: "Battle of Palkhed", year: 1728, note: "Baji Rao I's fast cavalry campaign forced the Nizam to accept Maratha terms." },
      { name: "Battle of Bhopal", year: 1737, note: "Marathas defeated a Mughal–Nizam coalition and secured Malwa." },
      { name: "Battle of Kharda", year: 1795, note: "A Maratha coalition decisively defeated the Nizam." }
    ],
    sections: {
      background: "After the Mughal retreat from the Deccan, the Marathas and the Nizam competed for revenue, territory and influence. The Peshwas built a confederacy of powerful Maratha houses, including Scindia, Holkar and Bhonsle.",
      course: "Baji Rao I used speed and surprise to defeat the Nizam at Palkhed. Later campaigns extended Maratha power into Malwa and central India, while the Nizam repeatedly tried to rebuild his position with Mughal, French or British support.",
      outcome: "The Marathas remained the dominant power in the Deccan. The Nizam survived as a regional state but was forced to concede territory and influence, especially after Kharda.",
      aftermath: "The wars left Hyderabad dependent on diplomacy and foreign allies. Maratha power soon faced a greater challenge from the British, culminating in the Anglo-Maratha wars."
    },
    britishScopes: ["eic", "india"],
    britishRole: "neutral",
    britishNote: "Britain was not a belligerent. Before 1773 no Governor-General existed; after 1773 the relevant Governor-General is shown for context.",
    related: ["maratha-bengal-wars", "second-anglo-maratha-war", "third-anglo-maratha-war"],
    sources: [
      "Stewart Gordon, The Marathas 1600–1818",
      "Jadunath Sarkar, Fall of the Mughal Empire, Vol. 1",
      "Encyclopaedia Britannica, Maratha"
    ]
  },
  {
    id: "maratha-bengal-wars",
    title: "Maratha Invasions of Bengal",
    years: "1742–1751",
    start: 1742,
    end: 1751,
    era: "mughal-twilight",
    type: "indian",
    region: "Bengal, Bihar and Odisha",
    summary: "Maratha cavalry under Raghuji Bhonsle raids Bengal and defeats Alivardi Khan's forces; the campaigns end with Odisha ceded to the Marathas.",
    result: "Maratha gains; Odisha ceded to Raghuji Bhonsle in 1751.",
    treaty: "Settlement of 1751 between Alivardi Khan and Raghuji Bhonsle.",
    belligerents: [
      { side: "Marathas", powers: ["nagpur", "marathas_peshwa"], commanders: ["Raghuji Bhonsle I", "Balaji Baji Rao"] },
      { side: "Bengal", powers: ["bengal"], commanders: ["Alivardi Khan"] }
    ],
    involvement: {
      nagpur: "belligerent",
      marathas_peshwa: "ally",
      marathas_chhatrapati: "ally",
      bengal: "belligerent",
      mughals: "indirect"
    },
    rulerNotes: {
      nagpur: "Raghuji Bhonsle led the raids and gained Odisha.",
      bengal: "Alivardi Khan defended Bengal but could not expel the Marathas."
    },
    keyBattles: [
      { name: "Battle of Midnapore", year: 1746, note: "Maratha cavalry raided deep into Bengal's western districts." },
      { name: "Battle of Burdwan", year: 1747, note: "Alivardi Khan's forces tried to block the Maratha advance." },
      { name: "Maratha raids into Bihar", year: 1740, note: "Raghuji's cavalry extended the campaign into Bihar and Odisha." }
    ],
    sections: {
      background: "The Maratha Confederacy expanded eastward in the 1740s. Raghuji Bhonsle of Nagpur saw Bengal's wealth as a target, while the Peshwa wanted to extend Maratha influence without committing his main army.",
      course: "Maratha cavalry raided Bengal repeatedly, defeating Alivardi Khan's forces in several engagements. The Nawab struggled to defend a long frontier, and the raids disrupted Bengal's revenue and trade.",
      outcome: "The campaigns ended with a settlement in 1751. Alivardi Khan ceded Odisha to Raghuji Bhonsle, and the Marathas withdrew from Bengal proper.",
      aftermath: "The invasions weakened Bengal's finances and military confidence on the eve of the British advance. They also made Odisha part of the Bhonsle domain until the Anglo-Maratha wars."
    },
    britishScopes: ["eic"],
    britishRole: "neutral",
    britishNote: "The East India Company's Bengal Presidency was affected by the raids but was not a belligerent; no Governor-General existed.",
    related: ["maratha-nizam-wars", "plassey-1757", "third-panipat-1761"],
    sources: [
      "Stewart Gordon, The Marathas 1600–1818",
      "Jadunath Sarkar, Fall of the Mughal Empire, Vol. 1",
      "Encyclopaedia Britannica, Alivardi Khan"
    ]
  },
  {
    id: "travancore-dutch-war",
    title: "Travancore–Dutch War",
    years: "1741",
    start: 1741,
    end: 1741,
    era: "mughal-twilight",
    type: "european",
    region: "Colachel, Kerala",
    summary: "Marthanda Varma's Travancore army defeats a Dutch expedition at Colachel, capturing Eustachius De Lannoy and checking Dutch power on the Malabar Coast.",
    result: "Travancore victory; Dutch expansion checked.",
    treaty: "No major treaty; the Dutch withdrew from the campaign.",
    belligerents: [
      { side: "Travancore", powers: ["travancore"], commanders: ["Marthanda Varma", "Ramayyan Dalawa"] },
      { side: "Dutch East India Company", powers: ["dutch"], commanders: ["Eustachius De Lannoy"] }
    ],
    involvement: {
      travancore: "belligerent",
      dutch: "belligerent",
      mysore_wodeyar: "neutral",
      hyderabad: "neutral",
      marathas_chhatrapati: "neutral",
      mughals: "neutral"
    },
    rulerNotes: {
      travancore: "Marthanda Varma was centralizing Travancore and building a modern army.",
      dutch: "The Dutch tried to protect their Malabar trade and influence."
    },
    keyBattles: [
      { name: "Battle of Colachel", year: 1741, note: "Travancore forces surrounded and defeated the Dutch landing force." }
    ],
    sections: {
      background: "Marthanda Varma expanded Travancore and challenged the Dutch East India Company's dominance of the pepper trade. The Dutch resented the rise of a strong local state and sent an expedition to punish Travancore.",
      course: "The Dutch landed at Colachel, but Travancore's army, advised by Ramayyan Dalawa, used the terrain and superior numbers to trap them. The Dutch commander Eustachius De Lannoy was captured.",
      outcome: "Travancore won a decisive victory and captured Dutch weapons and officers. De Lannoy later entered Travancore service and helped modernize its army.",
      aftermath: "Colachel is often seen as an early Indian victory over a European colonial power. It marked the decline of Dutch influence in Kerala and the rise of Travancore as a regional state."
    },
    britishScopes: ["madras"],
    britishRole: "neutral",
    britishNote: "The British Madras Presidency was not involved; no Governor-General existed.",
    related: ["carnatic-wars", "travancore-mysore-wars"],
    sources: [
      "A. Sreedhara Menon, A Survey of Kerala History",
      "K. M. Panikkar, Malabar and the Dutch",
      "Encyclopaedia Britannica, Travancore"
    ]
  },
  {
    id: "carnatic-wars",
    title: "Carnatic Wars",
    years: "1746–1763",
    start: 1746,
    end: 1763,
    era: "mughal-twilight",
    type: "european",
    region: "Carnatic, South India",
    summary: "Three phases of Anglo-French conflict fought through Indian allies; British victories at Wandiwash and Pondicherry end French hopes of dominance in India.",
    result: "British victory; French influence in India reduced.",
    treaty: "Treaty of Paris (1763); Pondicherry restored to France but French political power was broken.",
    belligerents: [
      { side: "British East India Company", powers: ["british"], commanders: ["Stringer Lawrence", "Robert Clive", "Eyre Coote"] },
      { side: "French East India Company", powers: ["france"], commanders: ["Joseph François Dupleix", "Thomas Arthur de Lally"] }
    ],
    involvement: {
      france: "belligerent",
      carnatic: "belligerent",
      hyderabad: "belligerent",
      mughals: "indirect",
      mysore_wodeyar: "neutral",
      travancore: "neutral",
      bengal: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      france: "Dupleix and Lally directed French policy; French power depended on Indian allies.",
      carnatic: "The Nawab's succession was fought over by British and French-backed claimants.",
      hyderabad: "The Nizam's court was divided between British and French factions."
    },
    keyBattles: [
      { name: "Battle of Adyar", year: 1746, note: "French and Indian troops defeated a larger Carnatic force near Madras." },
      { name: "Battle of Ambur", year: 1749, note: "French-backed Chanda Sahib defeated and killed Anwar-ud-Din." },
      { name: "Battle of Wandiwash", year: 1760, note: "Eyre Coote's British army decisively defeated Lally." },
      { name: "Siege of Pondicherry", year: 1760, note: "The British captured the French capital in India." }
    ],
    sections: {
      background: "The decline of Mughal authority left the Carnatic and Hyderabad open to European interference. Britain and France, already rivals in Europe, fought through Indian claimants and their own Company armies.",
      course: "The First Carnatic War saw the French capture Madras, but the war ended with its return. The Second Carnatic War was fought through the succession disputes of the Carnatic and Hyderabad. In the Third Carnatic War, British naval and financial superiority proved decisive.",
      outcome: "The British captured Pondicherry and broke French political power in India. The Treaty of Paris restored the French settlements but not their influence.",
      aftermath: "The Carnatic Wars established the British as the dominant European power in India. Their Indian allies and revenues became the foundation for further conquest in Bengal and Mysore."
    },
    britishScopes: ["madras"],
    britishRole: "belligerent",
    britishNote: "No Governor-General existed; the British effort was directed from Madras by its governors and Company commanders.",
    related: ["travancore-dutch-war", "plassey-1757", "first-anglo-mysore-war"],
    sources: [
      "John Keay, The Honourable Company",
      "Lawrence James, Raj: The Making and Unmaking of British India",
      "Encyclopaedia Britannica, Carnatic Wars"
    ]
  },
  {
    id: "plassey-1757",
    title: "Battle of Plassey",
    years: "1757",
    start: 1757,
    end: 1757,
    era: "mughal-twilight",
    type: "british",
    region: "Palashi, Bengal",
    summary: "Robert Clive's small Company force, aided by Mir Jafar's betrayal of Siraj-ud-Daulah, wins a decisive victory that establishes British political power in Bengal.",
    result: "British victory; Mir Jafar installed as Nawab.",
    treaty: "Treaty with Mir Jafar (1757); the Company gained control of Bengal's revenues.",
    belligerents: [
      { side: "East India Company", powers: ["british"], commanders: ["Robert Clive", "Mir Jafar"] },
      { side: "Bengal", powers: ["bengal"], commanders: ["Siraj-ud-Daulah"] }
    ],
    involvement: {
      bengal: "belligerent",
      france: "ally",
      mughals: "indirect",
      awadh: "neutral",
      hyderabad: "neutral",
      marathas_chhatrapati: "neutral",
      mysore_wodeyar: "neutral",
      carnatic: "neutral"
    },
    rulerNotes: {
      bengal: "Siraj-ud-Daulah was the young Nawab; Mir Jafar and other nobles secretly sided with the British.",
      france: "A small French contingent fought alongside the Nawab."
    },
    keyBattles: [
      { name: "Battle of Plassey", year: 1757, note: "Clive's artillery and the defection of Mir Jafar's division decided the day." }
    ],
    sections: {
      background: "The British feared French influence at the Bengal court and resented Siraj-ud-Daulah's attack on Calcutta. Clive and the Company conspired with Mir Jafar, the Nawab's disaffected commander, to replace him.",
      course: "Clive advanced with about 3,000 men against a much larger Bengali army. Heavy rain spoiled the Nawab's artillery, and Mir Jafar's troops refused to fight. The British broke the remaining resistance and Siraj-ud-Daulah fled.",
      outcome: "Mir Jafar was installed as Nawab, and the Company received vast payments and control over Bengal's finances. Siraj-ud-Daulah was captured and executed.",
      aftermath: "Plassey gave the Company a territorial base and revenues that transformed it into a political power. It also exposed the fragility of Indian regional states in the face of Company money, discipline and intrigue."
    },
    britishScopes: ["bengal"],
    britishRole: "belligerent",
    britishNote: "No Governor-General existed; Robert Clive commanded the Company force and soon became Governor of Bengal.",
    related: ["buxar-1764", "third-panipat-1761", "carnatic-wars"],
    sources: [
      "John Keay, The Honourable Company",
      "William Dalrymple, The Anarchy",
      "Encyclopaedia Britannica, Battle of Plassey"
    ]
  },
  {
    id: "third-panipat-1761",
    title: "Third Battle of Panipat",
    years: "1761",
    start: 1761,
    end: 1761,
    era: "mughal-twilight",
    type: "indian",
    region: "Panipat, Haryana",
    summary: "Ahmad Shah Durrani's Afghan–Rohilla–Awadh coalition destroys the Maratha army under Sadashivrao Bhau, checking Maratha expansion in North India.",
    result: "Afghan-led victory; heavy Maratha losses.",
    treaty: "No treaty; Ahmad Shah Durrani withdrew from India.",
    belligerents: [
      { side: "Durrani Empire and allies", powers: ["afghanistan", "rohilkhand", "awadh"], commanders: ["Ahmad Shah Durrani", "Najib-ud-Daula", "Shuja-ud-Daula"] },
      { side: "Marathas", powers: ["marathas_peshwa", "gwalior", "indore", "nagpur"], commanders: ["Sadashivrao Bhau", "Malhar Rao Holkar", "Ibrahim Khan Gardi"] }
    ],
    involvement: {
      afghanistan: "belligerent",
      rohilkhand: "ally",
      awadh: "ally",
      marathas_peshwa: "belligerent",
      marathas_chhatrapati: "ally",
      gwalior: "ally",
      indore: "ally",
      nagpur: "ally",
      mughals: "neutral",
      bengal: "neutral",
      hyderabad: "neutral",
      mysore_wodeyar: "neutral",
      mysore_effective: "neutral",
      sikhs: "neutral",
      rajputana: "neutral"
    },
    rulerNotes: {
      afghanistan: "Ahmad Shah Durrani invaded India to check Maratha expansion and support his allies.",
      marathas_peshwa: "Balaji Baji Rao sent a large army north under his cousin Sadashivrao Bhau.",
      awadh: "Shuja-ud-Daula joined the Afghan coalition despite earlier Maratha contacts."
    },
    keyBattles: [
      { name: "Battle of Panipat", year: 1761, note: "The Maratha army was encircled and destroyed after weeks of attrition and starvation." }
    ],
    sections: {
      background: "Maratha power had expanded into northern India, alarming Ahmad Shah Durrani and his Indian allies. The Marathas sent a large army north to secure their influence, but supply problems and hostile local powers weakened them.",
      course: "The two armies faced each other for months around Panipat. Maratha foraging was cut off, and their coalition frayed. On 14 January 1761 the Afghans and their allies broke the Maratha lines; Sadashivrao Bhau was killed and the retreat became a massacre.",
      outcome: "The Marathas suffered enormous casualties and lost much of their northern army. Ahmad Shah Durrani did not stay to rule India, and the Marathas recovered under Madhav Rao I.",
      aftermath: "Panipat checked Maratha expansion but did not destroy the Confederacy. It also left Punjab and North India open to Sikh and Afghan competition, shaping the next phase of Indian warfare."
    },
    britishScopes: ["bengal"],
    britishRole: "neutral",
    britishNote: "The British were not belligerents. Henry Vansittart was Governor of Bengal; no Governor-General existed.",
    related: ["maratha-nizam-wars", "plassey-1757", "buxar-1764"],
    sources: [
      "Jadunath Sarkar, Fall of the Mughal Empire, Vol. 2",
      "Stewart Gordon, The Marathas 1600–1818",
      "Encyclopaedia Britannica, Battle of Panipat (1761)"
    ]
  },
  {
    id: "buxar-1764",
    title: "Battle of Buxar",
    years: "1764",
    start: 1764,
    end: 1764,
    era: "mughal-twilight",
    type: "british",
    region: "Buxar, Bihar",
    summary: "Hector Munro's Company army defeats the combined forces of Mir Qasim, Shuja-ud-Daula and Shah Alam II, securing British control of Bengal, Bihar and Awadh.",
    result: "British victory; Treaty of Allahabad (1765).",
    treaty: "Treaty of Allahabad (1765); the Company received the Diwani of Bengal, Bihar and Odisha.",
    belligerents: [
      { side: "East India Company", powers: ["british"], commanders: ["Hector Munro", "Robert Clive"] },
      { side: "Bengal, Awadh and the Mughal court", powers: ["bengal", "awadh", "mughals"], commanders: ["Mir Qasim", "Shuja-ud-Daula", "Shah Alam II"] }
    ],
    involvement: {
      bengal: "belligerent",
      awadh: "belligerent",
      mughals: "belligerent",
      hyderabad: "neutral",
      marathas_peshwa: "neutral",
      mysore_effective: "neutral",
      carnatic: "neutral",
      france: "neutral"
    },
    rulerNotes: {
      bengal: "Mir Qasim had turned against the British after disputes over revenue and sovereignty.",
      awadh: "Shuja-ud-Daula joined Mir Qasim and the Mughal emperor.",
      mughals: "Shah Alam II was trying to recover imperial authority in the Gangetic plain."
    },
    keyBattles: [
      { name: "Battle of Buxar", year: 1764, note: "Munro's disciplined infantry and artillery defeated the allied army." }
    ],
    sections: {
      background: "Mir Qasim's attempts to assert independence from the Company led to war. He formed an alliance with Shuja-ud-Daula of Awadh and the Mughal emperor Shah Alam II, hoping to expel the British from Bengal.",
      course: "The allied army met Hector Munro's smaller Company force at Buxar. British artillery and musketry broke the allied centre, and the coalition disintegrated. Mir Qasim fled, and Shah Alam II sought terms.",
      outcome: "The Company won a decisive victory. The Treaty of Allahabad gave it the Diwani of Bengal, Bihar and Odisha, making it the effective ruler of the richest province in India.",
      aftermath: "Buxar confirmed the gains of Plassey and gave the Company legal sovereignty over Bengal's revenues. It also made Awadh a dependent ally and reduced the Mughal emperor to a British pensioner."
    },
    britishScopes: ["bengal"],
    britishRole: "belligerent",
    britishNote: "Henry Vansittart was Governor of Bengal during the battle; Robert Clive negotiated the settlement afterwards.",
    related: ["plassey-1757", "rohilla-war", "first-anglo-mysore-war"],
    sources: [
      "John Keay, The Honourable Company",
      "William Dalrymple, The Anarchy",
      "Encyclopaedia Britannica, Battle of Buxar"
    ]
  },
  {
    id: "first-anglo-mysore-war",
    title: "First Anglo-Mysore War",
    years: "1767–1769",
    start: 1767,
    end: 1769,
    era: "company-expansion",
    type: "british",
    region: "South India",
    summary: "Hyder Ali defeats British columns and forces a favourable peace, the first serious check to British expansion in southern India.",
    result: "Treaty of Madras; status quo restored.",
    treaty: "Treaty of Madras (1769).",
    belligerents: [
      { side: "Mysore", powers: ["mysore_effective", "mysore_wodeyar"], commanders: ["Hyder Ali"] },
      { side: "East India Company", powers: ["british"], commanders: ["Colonel Joseph Smith", "Harry Verelst"] }
    ],
    involvement: {
      mysore_effective: "belligerent",
      mysore_wodeyar: "ally",
      hyderabad: "neutral",
      marathas_peshwa: "neutral",
      carnatic: "ally",
      travancore: "neutral",
      mughals: "neutral",
      awadh: "neutral",
      bengal: "neutral"
    },
    rulerNotes: {
      mysore_effective: "Hyder Ali was the real ruler of Mysore; the Wodeyar maharaja was titular.",
      hyderabad: "The Nizam briefly allied with the British before switching sides.",
      carnatic: "The Nawab of the Carnatic was a British ally."
    },
    keyBattles: [
      { name: "Battle of Chengam", year: 1767, note: "Hyder Ali's cavalry harassed British columns in the Carnatic." },
      { name: "Battle of Tiruvannamalai", year: 1767, note: "A hard-fought engagement that failed to stop Hyder's advance." },
      { name: "Hyder's march on Madras", year: 1769, note: "Hyder threatened Madras and forced the British to negotiate." }
    ],
    sections: {
      background: "Hyder Ali had made Mysore the strongest state in southern India. The British, alarmed by his power and his French connections, allied with the Nizam and the Marathas to contain him.",
      course: "The campaign went badly for the British. Hyder's cavalry moved faster than Company columns, and his forces raided the Carnatic. The British alliance with the Nizam and Marathas collapsed, leaving Madras exposed.",
      outcome: "Hyder's march on Madras forced the British to sign the Treaty of Madras in 1769. Both sides agreed to restore conquests and support each other in defensive wars.",
      aftermath: "The treaty was fragile, and the British never forgave Hyder's success. The First Mysore War exposed the limits of Company power and set the stage for three more wars."
    },
    britishScopes: ["bengal", "madras"],
    britishRole: "belligerent",
    britishNote: "Harry Verelst was Governor of Bengal and Josias Du Pré governed Madras; no Governor-General existed.",
    related: ["second-anglo-mysore-war", "travancore-mysore-wars", "carnatic-wars"],
    sources: [
      "Mark Wilks, Historical Sketches of the South of India",
      "Kate Brittlebank, Tipu Sultan's Search for Legitimacy",
      "Encyclopaedia Britannica, Anglo-Mysore Wars"
    ]
  },
  {
    id: "rohilla-war",
    title: "Rohilla War",
    years: "1774",
    start: 1774,
    end: 1774,
    era: "company-expansion",
    type: "british",
    region: "Rohilkhand, Uttar Pradesh",
    summary: "British troops under Colonel Champion, allied with Awadh's Shuja-ud-Daula, crush the Rohilla chiefs; the war stains Warren Hastings's reputation.",
    result: "Rohilla defeat; Rohilkhand annexed to Awadh.",
    treaty: "Rohilkhand transferred to Awadh; Faizullah Khan retained Rampur as a British client.",
    belligerents: [
      { side: "East India Company and Awadh", powers: ["british", "awadh"], commanders: ["Warren Hastings", "Colonel Champion", "Shuja-ud-Daula"] },
      { side: "Rohilkhand", powers: ["rohilkhand"], commanders: ["Hafiz Rahmat Khan", "Faizullah Khan"] }
    ],
    involvement: {
      rohilkhand: "belligerent",
      awadh: "ally",
      mughals: "neutral",
      marathas_peshwa: "neutral",
      hyderabad: "neutral",
      mysore_effective: "neutral",
      bengal: "neutral",
      carnatic: "neutral",
      sikhs: "neutral"
    },
    rulerNotes: {
      rohilkhand: "Hafiz Rahmat Khan led the Rohilla defence; Faizullah Khan survived as Nawab of Rampur.",
      awadh: "Shuja-ud-Daula wanted Rohilla territory and used British troops to take it."
    },
    keyBattles: [
      { name: "Battle of Miranpur Katra", year: 1774, note: "British artillery and musketry broke the Rohilla charge; Hafiz Rahmat Khan was killed." }
    ],
    sections: {
      background: "The Rohillas were Afghan-descended chiefs who controlled Rohilkhand. Awadh's Nawab Shuja-ud-Daula wanted their territory, and Warren Hastings agreed to lend Company troops in exchange for money and an alliance.",
      course: "A combined Company–Awadh force invaded Rohilkhand. At Miranpur Katra, the Rohillas attacked bravely but were shattered by British firepower. Hafiz Rahmat Khan was killed, and organized resistance collapsed.",
      outcome: "Rohilkhand was annexed to Awadh, while Faizullah Khan kept Rampur as a dependent state. The Company received payment for its troops.",
      aftermath: "The war was condemned in Britain as a mercenary adventure. It damaged Hastings's reputation during his impeachment and exposed the Company's willingness to use Indian allies for profit."
    },
    britishScopes: ["india"],
    britishRole: "belligerent",
    britishNote: "Warren Hastings was Governor-General; the campaign was fought by Company troops under Colonel Champion.",
    related: ["buxar-1764", "first-anglo-maratha-war"],
    sources: [
      "John Keay, The Honourable Company",
      "P. J. Marshall, Bengal: The British Bridgehead",
      "Encyclopaedia Britannica, Warren Hastings"
    ]
  },
  {
    id: "first-anglo-maratha-war",
    title: "First Anglo-Maratha War",
    years: "1775–1782",
    start: 1775,
    end: 1782,
    era: "company-expansion",
    type: "british",
    region: "Western India",
    summary: "British intervention in Peshwa succession politics leads to a long war; Maratha armies under Nana Phadnavis and Mahadji Scindia force the Treaty of Salbai.",
    result: "Treaty of Salbai; status quo restored.",
    treaty: "Treaty of Salbai (1782).",
    belligerents: [
      { side: "East India Company", powers: ["british"], commanders: ["Warren Hastings", "Colonel Keating", "Thomas Goddard"] },
      { side: "Marathas", powers: ["marathas_peshwa", "marathas_chhatrapati", "gwalior"], commanders: ["Nana Phadnavis", "Mahadji Scindia", "Madhav Rao II", "Haripant Phadke"] }
    ],
    involvement: {
      marathas_peshwa: "belligerent",
      marathas_chhatrapati: "ally",
      gwalior: "ally",
      indore: "neutral",
      nagpur: "neutral",
      hyderabad: "neutral",
      mysore_effective: "neutral",
      mughals: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      marathas_peshwa: "Madhav Rao II was a child; Nana Phadnavis directed the regency.",
      gwalior: "Mahadji Scindia was the leading Maratha commander in the north."
    },
    keyBattles: [
      { name: "Battle of Wadgaon", year: 1779, note: "Maratha forces surrounded and forced the surrender of a British column." },
      { name: "Siege of Gwalior", year: 1780, note: "British and Maratha forces contested Scindia's stronghold." },
      { name: "Battle of Sipri", year: 1780, note: "A hard-fought engagement in central India." }
    ],
    sections: {
      background: "The British backed Raghunath Rao's claim to the Peshwa's office, hoping to gain influence in Pune. The Maratha court, led by Nana Phadnavis, resisted foreign interference and rallied the Confederacy.",
      course: "The war began with British gains but soon turned against them. A British column surrendered at Wadgaon, and Maratha armies under Mahadji Scindia threatened Bengal and Bombay. The conflict spread across western and central India.",
      outcome: "Both sides were exhausted. The Treaty of Salbai restored the pre-war position, recognized Madhav Rao II as Peshwa and gave the British Salsette.",
      aftermath: "The treaty bought peace for two decades and allowed the British to focus on Mysore. It also showed that the Marathas could still defeat Company armies, a lesson the British remembered in the next war."
    },
    britishScopes: ["india"],
    britishRole: "belligerent",
    britishNote: "Warren Hastings was Governor-General throughout the war.",
    related: ["second-anglo-maratha-war", "second-anglo-mysore-war", "third-panipat-1761"],
    sources: [
      "Stewart Gordon, The Marathas 1600–1818",
      "John Keay, The Honourable Company",
      "Encyclopaedia Britannica, Anglo-Maratha Wars"
    ]
  },
  {
    id: "second-anglo-mysore-war",
    title: "Second Anglo-Mysore War",
    years: "1780–1784",
    start: 1780,
    end: 1784,
    era: "company-expansion",
    type: "british",
    region: "South India",
    summary: "Hyder Ali and Tipu Sultan fight British forces to a bloody stalemate; Hyder's death and the Treaty of Mangalore end the war on mutual restitution.",
    result: "Treaty of Mangalore; status quo restored.",
    treaty: "Treaty of Mangalore (1784).",
    belligerents: [
      { side: "Mysore", powers: ["mysore_effective", "mysore_wodeyar"], commanders: ["Hyder Ali", "Tipu Sultan"] },
      { side: "East India Company", powers: ["british"], commanders: ["Warren Hastings", "Eyre Coote", "Hector Munro"] }
    ],
    involvement: {
      mysore_effective: "belligerent",
      mysore_wodeyar: "ally",
      hyderabad: "ally",
      marathas_peshwa: "ally",
      marathas_chhatrapati: "neutral",
      carnatic: "ally",
      travancore: "neutral",
      mughals: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      mysore_effective: "Hyder Ali died in 1782; Tipu Sultan continued the war.",
      hyderabad: "The Nizam initially joined Mysore against the British.",
      marathas_peshwa: "The Marathas were Mysore's allies until the Treaty of Salbai detached them."
    },
    keyBattles: [
      { name: "Battle of Pollilur", year: 1780, note: "Hyder Ali destroyed a British column under Colonel Baillie." },
      { name: "Battle of Porto Novo", year: 1781, note: "Eyre Coote defeated Hyder Ali in a hard-fought battle." },
      { name: "Siege of Mangalore", year: 1783, note: "Tipu's forces besieged the British garrison for months." }
    ],
    sections: {
      background: "The British attacked the French at Mahe, a port Hyder Ali considered under his protection. Hyder responded by invading the Carnatic with a large army and forming an alliance with the Nizam and the Marathas.",
      course: "Hyder's army devastated the Carnatic and destroyed a British column at Pollilur. Eyre Coote won a costly victory at Porto Novo, but the British could not knock Mysore out of the war. Hyder died in 1782, and Tipu continued fighting.",
      outcome: "The war ended with the Treaty of Mangalore in 1784. Both sides returned conquests and agreed to a peace that recognized Mysore's strength.",
      aftermath: "The treaty was the last time an Indian power negotiated with the British on equal terms. It left Tipu free to rebuild, and the British determined to destroy Mysore in the next war."
    },
    britishScopes: ["india", "madras"],
    britishRole: "belligerent",
    britishNote: "Warren Hastings was Governor-General; Madras was the main British base.",
    related: ["first-anglo-mysore-war", "maratha-mysore-war", "third-anglo-mysore-war"],
    sources: [
      "Kate Brittlebank, Tipu Sultan's Search for Legitimacy",
      "Mark Wilks, Historical Sketches of the South of India",
      "Encyclopaedia Britannica, Anglo-Mysore Wars"
    ]
  },
  {
    id: "maratha-mysore-war",
    title: "Maratha–Mysore War",
    years: "1785–1787",
    start: 1785,
    end: 1787,
    era: "company-expansion",
    type: "indian",
    region: "Deccan and Karnataka",
    summary: "Tipu Sultan's attempt to expand into Maratha territory is checked; the war ends with the Treaty of Gajendragad.",
    result: "Maratha victory; Tipu cedes territory.",
    treaty: "Treaty of Gajendragad (1787).",
    belligerents: [
      { side: "Mysore", powers: ["mysore_effective", "mysore_wodeyar"], commanders: ["Tipu Sultan"] },
      { side: "Marathas and Hyderabad", powers: ["marathas_peshwa", "marathas_chhatrapati", "gwalior", "hyderabad"], commanders: ["Madhav Rao II", "Nana Phadnavis", "Haripant Phadke"] }
    ],
    involvement: {
      mysore_effective: "belligerent",
      mysore_wodeyar: "ally",
      marathas_peshwa: "belligerent",
      marathas_chhatrapati: "ally",
      gwalior: "ally",
      hyderabad: "ally",
      indore: "neutral",
      nagpur: "neutral",
      british: "neutral",
      carnatic: "neutral",
      travancore: "neutral"
    },
    rulerNotes: {
      mysore_effective: "Tipu Sultan wanted to recover territory lost after the Second Mysore War.",
      marathas_peshwa: "Nana Phadnavis coordinated the Maratha–Hyderabad alliance."
    },
    keyBattles: [
      { name: "Battle of Bahadur Benda", year: 1786, note: "Tipu Sultan defeated a Maratha force, but the campaign stalled." },
      { name: "Siege of Gajendragad", year: 1786, note: "Maratha and Hyderabad forces pressured Tipu's northern frontier." }
    ],
    sections: {
      background: "After the Treaty of Mangalore, Tipu Sultan sought to expand north into Maratha and Hyderabad territory. The Marathas, recovering from their own wars, wanted to check Mysore's growing power.",
      course: "Tipu won some early engagements, including Bahadur Benda, but the combined Maratha–Hyderabad forces stretched his army. Supply problems and the approach of a larger coalition forced him to negotiate.",
      outcome: "The Treaty of Gajendragad ended the war. Tipu gave up territory and agreed to peace with the Marathas and the Nizam.",
      aftermath: "The treaty freed Tipu to focus on the British, but it also isolated him. When the Third Anglo-Mysore War began in 1790, the Marathas and Hyderabad joined the British against him."
    },
    britishScopes: ["india"],
    britishRole: "neutral",
    britishNote: "The British were not belligerents; the Governor-General was Lord Cornwallis from 1786.",
    related: ["second-anglo-mysore-war", "third-anglo-mysore-war", "fourth-anglo-mysore-war"],
    sources: [
      "Kate Brittlebank, Tipu Sultan's Search for Legitimacy",
      "Stewart Gordon, The Marathas 1600–1818",
      "Encyclopaedia Britannica, Tipu Sultan"
    ]
  },
  {
    id: "third-anglo-mysore-war",
    title: "Third Anglo-Mysore War",
    years: "1790–1792",
    start: 1790,
    end: 1792,
    era: "company-expansion",
    type: "british",
    region: "South India",
    summary: "Cornwallis's coordinated campaign with the Nizam and Marathas drives Tipu from most of his territory; the Treaty of Seringapatam strips Mysore of half its lands.",
    result: "British-led victory; Treaty of Seringapatam.",
    treaty: "Treaty of Seringapatam (1792).",
    belligerents: [
      { side: "East India Company, Hyderabad and the Marathas", powers: ["british", "hyderabad", "marathas_peshwa", "gwalior"], commanders: ["Lord Cornwallis", "William Medows", "Asaf Jah II"] },
      { side: "Mysore", powers: ["mysore_effective", "mysore_wodeyar"], commanders: ["Tipu Sultan"] }
    ],
    involvement: {
      mysore_effective: "belligerent",
      mysore_wodeyar: "neutral",
      hyderabad: "ally",
      marathas_peshwa: "ally",
      marathas_chhatrapati: "neutral",
      gwalior: "ally",
      carnatic: "ally",
      travancore: "ally",
      mughals: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      mysore_effective: "Tipu Sultan faced a broad coalition.",
      travancore: "Travancore's dispute with Tipu helped trigger the war.",
      marathas_peshwa: "The Marathas joined the British after their 1787 treaty with Tipu collapsed."
    },
    keyBattles: [
      { name: "Battle of Bangalore", year: 1791, note: "Cornwallis captured Bangalore after a hard siege." },
      { name: "Battle of Arakere", year: 1791, note: "Tipu's attempt to relieve Seringapatam was defeated." },
      { name: "Siege of Seringapatam", year: 1792, note: "The coalition forced Tipu to negotiate." }
    ],
    sections: {
      background: "Tipu Sultan's attack on Travancore, a British ally, gave Cornwallis a pretext for war. The British built a coalition with the Nizam and the Marathas, determined to reduce Mysore's power.",
      course: "Cornwallis captured Bangalore in 1791 and advanced on Seringapatam. Tipu fought back with cavalry raids and scorched-earth tactics, but the coalition's numbers and resources told. The British stormed the outer defences in 1792.",
      outcome: "Tipu sued for peace. The Treaty of Seringapatam forced him to cede nearly half his territory, pay a large indemnity and send two sons as hostages.",
      aftermath: "Mysore was crippled but survived. Tipu rebuilt his army and sought French help, setting the stage for the final war in 1799."
    },
    britishScopes: ["india", "madras"],
    britishRole: "belligerent",
    britishNote: "Lord Cornwallis was Governor-General and commander; Madras supplied the base.",
    related: ["second-anglo-mysore-war", "fourth-anglo-mysore-war", "travancore-mysore-wars"],
    sources: [
      "Kate Brittlebank, Tipu Sultan's Search for Legitimacy",
      "John Keay, The Honourable Company",
      "Encyclopaedia Britannica, Anglo-Mysore Wars"
    ]
  },
  {
    id: "fourth-anglo-mysore-war",
    title: "Fourth Anglo-Mysore War",
    years: "1799",
    start: 1799,
    end: 1799,
    era: "company-expansion",
    type: "british",
    region: "Mysore, South India",
    summary: "A short, decisive British campaign storms Seringapatam; Tipu Sultan dies and the British restore the Wodeyar dynasty under a subsidiary alliance.",
    result: "British victory; Tipu killed; Mysore partitioned.",
    treaty: "Partition of Mysore (1799); Wodeyar dynasty restored under British protection.",
    belligerents: [
      { side: "East India Company and Hyderabad", powers: ["british", "hyderabad"], commanders: ["Richard Wellesley", "George Harris", "Arthur Wellesley"] },
      { side: "Mysore", powers: ["mysore_effective"], commanders: ["Tipu Sultan"] }
    ],
    involvement: {
      mysore_effective: "belligerent",
      mysore_wodeyar: "ally",
      hyderabad: "ally",
      marathas_peshwa: "neutral",
      marathas_chhatrapati: "neutral",
      carnatic: "ally",
      travancore: "ally",
      mughals: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      mysore_effective: "Tipu Sultan refused to accept a British subsidiary alliance.",
      mysore_wodeyar: "The British restored the Wodeyar dynasty after Tipu's death.",
      hyderabad: "The Nizam joined the British coalition."
    },
    keyBattles: [
      { name: "Battle of Seedaseer", year: 1799, note: "A British force held off Tipu's attack in a costly engagement." },
      { name: "Siege of Seringapatam", year: 1799, note: "The British stormed the capital; Tipu was killed in the fighting." }
    ],
    sections: {
      background: "After the Third Mysore War, Tipu Sultan rebuilt his army and sought French support. The British, fearing a French revival in India, decided to eliminate Mysore as an independent power.",
      course: "British and Hyderabad forces invaded Mysore in 1799. Tipu's army fought hard, but the British reached Seringapatam and breached its walls. Tipu was killed during the final assault.",
      outcome: "Mysore was partitioned. The British annexed large territories, the Nizam gained land, and the Wodeyar dynasty was restored as a British client state.",
      aftermath: "The fall of Mysore removed the most dangerous Indian rival in the south. It also gave the British control of the Mysore plateau and access to the Malabar Coast, strengthening their position for the Maratha wars."
    },
    britishScopes: ["india"],
    britishRole: "belligerent",
    britishNote: "Lord Wellesley was Governor-General; General George Harris commanded the assault on Seringapatam.",
    related: ["third-anglo-mysore-war", "polygar-wars", "second-anglo-maratha-war"],
    sources: [
      "Kate Brittlebank, Tipu Sultan's Search for Legitimacy",
      "John Keay, The Honourable Company",
      "Encyclopaedia Britannica, Anglo-Mysore Wars"
    ]
  },
  {
    id: "polygar-wars",
    title: "Polygar Wars",
    years: "1799–1805",
    start: 1799,
    end: 1805,
    era: "company-expansion",
    type: "uprising",
    region: "Tamil Nadu",
    summary: "Polygar chieftains resist British revenue demands and annexation; campaigns led by Kattabomman and the Maruthu brothers are crushed, but the resistance becomes iconic.",
    result: "British victory; Polygar system dismantled.",
    treaty: "No treaty; Polygar estates were confiscated or brought under direct British control.",
    belligerents: [
      { side: "East India Company", powers: ["british"], commanders: ["Colonel Agnew", "Major Bannerman"] },
      { side: "Polygar chieftains", powers: ["polygars"], commanders: ["Veerapandiya Kattabomman", "Maruthu Pandiyar", "Oomathurai"] }
    ],
    involvement: {
      polygars: "belligerent",
      carnatic: "ally",
      mysore_wodeyar: "ally",
      travancore: "ally",
      hyderabad: "neutral",
      marathas_peshwa: "neutral",
      mughals: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      polygars: "The Polygars were local military chiefs, not a unified state.",
      carnatic: "The Nawab of the Carnatic was a British ally, though his authority was nominal."
    },
    keyBattles: [
      { name: "Battle of Panchalankurichi", year: 1799, note: "British forces captured Kattabomman's fortress." },
      { name: "Siege of Kalayarkoil", year: 1801, note: "The Maruthu brothers and Oomathurai led the second great Polygar rising." },
      { name: "Second Battle of Panchalankurichi", year: 1801, note: "A second British campaign destroyed the rebuilt Polygar stronghold." }
    ],
    sections: {
      background: "After the fall of Tipu Sultan, the British demanded revenue and obedience from the Polygars of southern Tamil Nadu. These chieftains had long controlled local forts and armed followers and resisted the loss of their autonomy.",
      course: "Kattabomman refused to submit and fought a guerrilla campaign before his capture and execution in 1799. In 1801 the Maruthu brothers and Oomathurai led a wider revolt, which British columns suppressed after sieges and harsh reprisals.",
      outcome: "The British dismantled the Polygar military system, confiscated estates and imposed direct administration. The chieftains' resistance was broken.",
      aftermath: "The wars became a powerful memory of local resistance to colonial rule. Kattabomman and the Maruthu brothers are celebrated in Tamil Nadu as early freedom fighters."
    },
    britishScopes: ["madras", "india"],
    britishRole: "belligerent",
    britishNote: "The Madras Presidency directed the campaigns; Lord Wellesley was Governor-General.",
    related: ["fourth-anglo-mysore-war", "paika-rebellion"],
    sources: [
      "K. Rajayyan, South Indian Rebellion",
      "Nicholas Dirks, Castes of Mind",
      "Encyclopaedia Britannica, Polygar Wars"
    ]
  },
  {
    id: "second-anglo-maratha-war",
    title: "Second Anglo-Maratha War",
    years: "1803–1805",
    start: 1803,
    end: 1805,
    era: "company-expansion",
    type: "british",
    region: "Central and western India",
    summary: "British armies under Arthur Wellesley and Gerard Lake defeat Scindia and Bhonsle in a series of rapid battles; the war breaks the Maratha Confederacy's military power.",
    result: "British victory; Maratha states forced into subsidiary alliances.",
    treaty: "Treaties of Deogaon (1803) and Surji-Anjangaon (1803).",
    belligerents: [
      { side: "East India Company", powers: ["british", "hyderabad"], commanders: ["Lord Wellesley", "Arthur Wellesley", "Gerard Lake"] },
      { side: "Maratha states", powers: ["gwalior", "nagpur", "indore"], commanders: ["Daulat Rao Scindia", "Raghuji Bhonsle II", "Yashwant Rao Holkar"] }
    ],
    involvement: {
      gwalior: "belligerent",
      nagpur: "belligerent",
      indore: "belligerent",
      marathas_peshwa: "ally",
      marathas_chhatrapati: "neutral",
      hyderabad: "ally",
      mysore_wodeyar: "ally",
      carnatic: "ally",
      awadh: "ally",
      mughals: "neutral",
      sikhs: "neutral",
      nepal: "neutral",
      burma: "neutral"
    },
    rulerNotes: {
      gwalior: "Daulat Rao Scindia was the leading Maratha opponent of the British.",
      nagpur: "Raghuji Bhonsle II joined Scindia against the British.",
      indore: "Yashwant Rao Holkar fought the British after the initial campaigns.",
      marathas_peshwa: "Baji Rao II had signed the Treaty of Bassein with the British in 1802 and became their ally."
    },
    keyBattles: [
      { name: "Battle of Assaye", year: 1803, note: "Arthur Wellesley defeated a large Scindia–Bhonsle army." },
      { name: "Battle of Argaon", year: 1803, note: "Wellesley's victory broke Bhonsle resistance in the Deccan." },
      { name: "Battle of Laswari", year: 1803, note: "Gerard Lake destroyed Scindia's northern army." },
      { name: "Battle of Delhi", year: 1803, note: "British forces captured Delhi and took control of the Mughal emperor." }
    ],
    sections: {
      background: "The Peshwa's defeat by Yashwant Rao Holkar forced him to seek British protection. Wellesley used the Treaty of Bassein to turn the Peshwa into an ally and then demanded that Scindia and Bhonsle accept British terms.",
      course: "When Scindia and Bhonsle refused, British armies attacked from the Deccan and the north. Arthur Wellesley won at Assaye and Argaon, while Gerard Lake defeated Scindia at Laswari and captured Delhi. Holkar continued a destructive campaign before peace was restored.",
      outcome: "Scindia and Bhonsle signed treaties ceding territory and accepting British subsidiary forces. The Peshwa became a dependent ally, and the Maratha Confederacy lost much of its military power.",
      aftermath: "The war made the British the dominant power in central India and gave them control of Delhi and the Mughal emperor. The Marathas would make one final attempt to recover in 1817–18."
    },
    britishScopes: ["india"],
    britishRole: "belligerent",
    britishNote: "Lord Wellesley was Governor-General; Arthur Wellesley and Gerard Lake commanded the main armies.",
    related: ["first-anglo-maratha-war", "third-anglo-maratha-war", "gwalior-campaign"],
    sources: [
      "Stewart Gordon, The Marathas 1600–1818",
      "John Keay, The Honourable Company",
      "Encyclopaedia Britannica, Anglo-Maratha Wars"
    ]
  },
  {
    id: "travancore-mysore-wars",
    title: "Travancore–Mysore Wars",
    years: "1766–1790",
    start: 1766,
    end: 1790,
    era: "company-expansion",
    type: "indian",
    region: "Kerala and the Tamil Nadu border",
    summary: "Hyder Ali and Tipu Sultan repeatedly invade Travancore; the campaigns culminate at Nedumkotta, where Tipu fails to break Travancore's defences and the British are drawn in.",
    result: "Travancore survives; Mysore checked.",
    treaty: "No single treaty; the conflict merged into the Third Anglo-Mysore War.",
    belligerents: [
      { side: "Mysore", powers: ["mysore_effective"], commanders: ["Hyder Ali", "Tipu Sultan"] },
      { side: "Travancore", powers: ["travancore"], commanders: ["Dharma Raja", "Balarama Varma"] }
    ],
    involvement: {
      mysore_effective: "belligerent",
      mysore_wodeyar: "neutral",
      travancore: "belligerent",
      british: "indirect",
      carnatic: "neutral",
      hyderabad: "neutral",
      marathas_peshwa: "neutral",
      mughals: "neutral",
      awadh: "neutral"
    },
    rulerNotes: {
      mysore_effective: "Hyder Ali and Tipu Sultan wanted control of Travancore's trade and territory.",
      travancore: "Dharma Raja and Balarama Varma defended Travancore with British support."
    },
    keyBattles: [
      { name: "Mysore raids into Travancore", year: 1766, note: "Hyder Ali's forces invaded northern Travancore." },
      { name: "Battle of Nedumkotta", year: 1789, note: "Tipu Sultan's assault on Travancore's northern lines failed." }
    ],
    sections: {
      background: "Mysore's expansion southward brought it into conflict with Travancore, a wealthy state on the Malabar Coast. Travancore's rulers fortified the northern frontier and sought British support.",
      course: "Hyder Ali raided Travancore in the 1760s, and Tipu Sultan renewed the pressure in the 1780s. In 1789 Tipu attacked the Nedumkotta fortifications but was repulsed with heavy losses.",
      outcome: "Travancore survived, and Tipu's failure at Nedumkotta encouraged the British to intervene. The dispute became part of the Third Anglo-Mysore War.",
      aftermath: "Travancore became a British ally and a buffer against Mysore. The wars strengthened Travancore's army and its relationship with the Company, while Tipu's southern ambitions were checked."
    },
    britishScopes: ["eic", "india"],
    britishRole: "indirect",
    britishNote: "The British Madras Presidency supported Travancore diplomatically and militarily from 1789; Lord Cornwallis was Governor-General.",
    related: ["first-anglo-mysore-war", "second-anglo-mysore-war", "third-anglo-mysore-war"],
    sources: [
      "A. Sreedhara Menon, A Survey of Kerala History",
      "Kate Brittlebank, Tipu Sultan's Search for Legitimacy",
      "Encyclopaedia Britannica, Travancore"
    ]
  }
];
