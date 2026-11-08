/* India After 1857 — master timeline dataset and renderer */
(function () {
  "use strict";

  var EVENTS = [
    /* ---- The Revolt ---- */
    { y: 1857, d: "29 March", era: "revolt", t: "Mangal Pandey fires at Barrackpore", x: "A sepoy of the 34th Bengal Native Infantry attacks his officers. He is hanged in April, but the anger he voices spreads through the Bengal Army." },
    { y: 1857, d: "10 May", era: "revolt", t: "Meerut rises", x: "Sepoys break out of the Meerut cantonment, free their imprisoned comrades and march to Delhi. The revolt begins in earnest." },
    { y: 1857, d: "11 May", era: "revolt", t: "Bahadur Shah Zafar proclaimed emperor", x: "Rebel sepoys seize Delhi and salute the aged Mughal emperor as their symbolic leader, giving the uprising a pan-Indian banner." },
    { y: 1857, d: "June–November", era: "revolt", t: "Cawnpore and Lucknow", x: "The siege of Cawnpore ends in massacre and retribution; the Lucknow Residency holds out for months before relief. Nana Saheb and Begum Hazrat Mahal lead resistance in Awadh." },
    { y: 1857, d: "20 September", era: "revolt", t: "Delhi recaptured", x: "British forces storm Delhi. Bahadur Shah Zafar is arrested and later exiled to Rangoon; two of his sons are executed." },
    { y: 1858, d: "18 June", era: "revolt", t: "Rani Lakshmibai dies at Gwalior", x: "The queen of Jhansi, fighting in male attire, is killed in battle. Tantia Tope carries on a guerrilla campaign until his capture in 1859." },
    { y: 1858, d: "2 August", era: "revolt", t: "Government of India Act 1858", x: "The East India Company is abolished. India passes directly to the Crown, administered through a Secretary of State and a Viceroy." },
    { y: 1858, d: "1 November", era: "revolt", t: "Queen Victoria's Proclamation", x: "Read at Allahabad, the proclamation promises religious neutrality and an end to further annexation, and offers clemency to rebels not involved in murder." },

    /* ---- The Raj ---- */
    { y: 1859, era: "raj", t: "Indigo Revolt in Bengal", x: "Peasants refuse to grow indigo for planters at dictated prices. The revolt exposes the coercive economics of colonial agriculture." },
    { y: 1861, era: "raj", t: "Indian Councils Act", x: "Indians are admitted, in a limited way, to legislative councils. The Archaeological Survey of India is also founded this year." },
    { y: 1869, d: "2 October", era: "raj", t: "Mohandas Gandhi is born", x: "Born in Porbandar, Kathiawar, into a Modh Bania family. His mother Putlibai's piety and the region's Jain-Vaishnava culture shape his later ideas." },
    { y: 1877, d: "1 January", era: "raj", t: "Delhi Durbar", x: "Queen Victoria is proclaimed Empress of India at a grand durbar, the ceremonial high point of Crown rule." },
    { y: 1878, era: "raj", t: "Vernacular Press Act", x: "The colonial government gains sweeping powers over Indian-language newspapers, reflecting its anxiety about political opinion after 1857." },
    { y: 1885, d: "28 December", era: "raj", t: "Indian National Congress founded", x: "Seventy-two delegates meet in Bombay. Founded with British encouragement, the Congress soon becomes the main vehicle of Indian nationalism." },
    { y: 1891, d: "14 April", era: "raj", t: "B. R. Ambedkar is born", x: "Born in Mhow into a Mahar family. The Age of Consent Act is also passed in 1891, raising the age of consent for girls." },
    { y: 1892, era: "raj", t: "Indian Councils Act", x: "Indirect elections and wider (still narrow) representation are introduced into the imperial and provincial councils." },
    { y: 1893, era: "raj", t: "Gandhi reaches South Africa", x: "A one-year legal case becomes 21 years of residence. Thrown off a train at Pietermaritzburg, he begins to confront racial discrimination and develop satyagraha. In September, Vivekananda addresses the Parliament of Religions in Chicago." },
    { y: 1896, era: "raj", t: "Famine of 1896–97", x: "Famine and plague sweep large parts of India. Official relief policy, shaped by laissez-faire ideas, is widely criticised." },
    { y: 1899, era: "raj", t: "Famine of 1899–1900", x: "A second famine within a few years strikes central and western India, deepening the critique of colonial economic policy." },

    /* ---- Freedom Struggle ---- */
    { y: 1905, d: "16 October", era: "freedom", t: "Partition of Bengal", x: "Curzon splits Bengal, triggering the Swadeshi movement: boycott of British goods, promotion of Indian industry, and the song 'Bande Mataram'." },
    { y: 1906, d: "30 December", era: "freedom", t: "All-India Muslim League founded", x: "Founded at Dhaka, the League initially seeks to protect Muslim interests within the Raj. In South Africa, Gandhi launches his first satyagraha campaign." },
    { y: 1909, era: "freedom", t: "Morley–Minto Reforms", x: "The Indian Councils Act 1909 introduces separate electorates for Muslims, entrenching communal representation in colonial politics." },
    { y: 1911, era: "freedom", t: "Bengal partition annulled", x: "The partition is reversed and the capital of British India moves from Calcutta to Delhi, announced at the Delhi Durbar." },
    { y: 1915, d: "9 January", era: "freedom", t: "Gandhi returns to India", x: "After 21 years in South Africa, Gandhi lands in Bombay. Gokhale becomes his political mentor; the date is now Pravasi Bharatiya Divas." },
    { y: 1916, era: "freedom", t: "Lucknow Pact and Home Rule", x: "Congress and the Muslim League agree on separate electorates and joint demands. Tilak and Annie Besant launch Home Rule Leagues." },
    { y: 1917, era: "freedom", t: "Champaran Satyagraha", x: "Gandhi investigates indigo planters' exploitation of Bihar peasants. The inquiry becomes his first Indian satyagraha and wins relief for farmers." },
    { y: 1918, era: "freedom", t: "Kheda and Ahmedabad satyagrahas", x: "Gandhi supports Kheda peasants seeking remission of revenue and Ahmedabad mill workers on strike, refining his methods of non-violent pressure." },
    { y: 1919, d: "18 March", era: "freedom", t: "Rowlatt Act", x: "The act allows detention without trial. Gandhi calls for a nationwide hartal; protests spread across Punjab." },
    { y: 1919, d: "13 April", era: "freedom", t: "Jallianwala Bagh massacre", x: "General Dyer orders troops to fire on an unarmed gathering in Amritsar, killing hundreds. The massacre turns Gandhi against the Raj and galvanises nationalism." },
    { y: 1919, d: "December", era: "freedom", t: "Government of India Act 1919", x: "The Montagu–Chelmsford reforms introduce dyarchy in the provinces, dividing subjects between elected ministers and appointed officials." },
    { y: 1920, d: "August", era: "freedom", t: "Non-Cooperation Movement", x: "Gandhi launches mass non-cooperation: boycott of British schools, courts, titles and goods, combined with Khilafat agitation. Millions join." },
    { y: 1922, d: "5 February", era: "freedom", t: "Chauri Chaura", x: "A crowd burns a police station, killing constables. Gandhi, committed to non-violence, calls off the movement; he is arrested and jailed for six years." },
    { y: 1925, era: "freedom", t: "RSS founded", x: "The Rashtriya Swayamsevak Sangh is founded at Nagpur, beginning a long-lived Hindu nationalist organisation." },
    { y: 1928, d: "3 February", era: "freedom", t: "Simon Commission arrives", x: "An all-British commission is met with 'Simon Go Back' protests. In November, Lala Lajpat Rai dies after a police lathi-charge in Lahore." },
    { y: 1929, d: "31 December", era: "freedom", t: "Purna Swaraj declared", x: "At its Lahore session, the Congress adopts complete independence as its goal and calls for 26 January 1930 to be observed as Independence Day." },
    { y: 1930, d: "12 March–6 April", era: "freedom", t: "Dandi March", x: "Gandhi walks 240 miles to the sea to make salt in defiance of the salt law. Civil disobedience spreads across India; around 60,000 are arrested." },
    { y: 1931, d: "5 March", era: "freedom", t: "Gandhi–Irwin Pact", x: "Civil disobedience is suspended and Gandhi attends the Second Round Table Conference in London. The conference fails to resolve the communal question." },
    { y: 1931, d: "23 March", era: "freedom", t: "Bhagat Singh executed", x: "Bhagat Singh, Rajguru and Sukhdev are hanged in Lahore. Their revolutionary socialism and courage make them enduring symbols." },
    { y: 1932, d: "24 September", era: "freedom", t: "Poona Pact", x: "Gandhi's fast against separate electorates for Dalits ends with the Poona Pact: reserved seats within joint electorates, negotiated with Ambedkar." },
    { y: 1935, era: "freedom", t: "Government of India Act 1935", x: "The largest constitutional reform of the Raj introduces provincial autonomy and a federal structure, though the federation never takes effect." },
    { y: 1937, era: "freedom", t: "Provincial elections", x: "Congress wins majorities in most provinces and forms ministries, gaining experience of government." },
    { y: 1939, d: "3 September", era: "freedom", t: "Second World War begins", x: "The Viceroy declares India at war without consulting Indian leaders. Congress ministries resign in protest." },
    { y: 1940, d: "23 March", era: "freedom", t: "Lahore Resolution", x: "The Muslim League demands autonomous states for Muslim-majority areas — the 'Pakistan' demand that reshapes the endgame." },
    { y: 1942, d: "March", era: "freedom", t: "Cripps Mission", x: "Sir Stafford Cripps offers dominion status after the war. Both Congress and the League reject the proposals." },
    { y: 1942, d: "8 August", era: "freedom", t: "Quit India Movement", x: "Congress passes the Quit India resolution; Gandhi gives the call 'Do or Die'. The leadership is jailed and the movement becomes leaderless but widespread." },
    { y: 1943, d: "21 October", era: "freedom", t: "Azad Hind proclaimed", x: "Subhas Chandra Bose forms a provisional government in Singapore and raises the Indian National Army. The same year, the Bengal famine kills millions." },
    { y: 1944, era: "freedom", t: "Gandhi–Jinnah talks", x: "Talks over the future of Muslim-majority provinces collapse; Jinnah insists on a separate Pakistan." },
    { y: 1945, era: "freedom", t: "INA trials and post-war elections", x: "The Red Fort trials of INA officers provoke mass sympathy. Labour's victory in Britain signals a changed imperial mood." },
    { y: 1946, d: "March–June", era: "freedom", t: "Cabinet Mission", x: "A British mission proposes a loose federation with grouped provinces. The plan is accepted then abandoned amid mutual distrust." },
    { y: 1946, d: "16 August", era: "freedom", t: "Direct Action Day", x: "The Muslim League calls for direct action; communal violence in Calcutta leaves thousands dead and sets off rioting across northern India." },
    { y: 1946, d: "2 September", era: "freedom", t: "Interim government formed", x: "Nehru heads an interim government. The Muslim League joins, but cooperation soon breaks down." },
    { y: 1946, d: "9 December", era: "freedom", t: "Constituent Assembly meets", x: "The Assembly holds its first sitting in Delhi, beginning the task of writing a constitution for independent India." },

    /* ---- Partition & Independence ---- */
    { y: 1947, d: "3 June", era: "partition", t: "Mountbatten Plan", x: "The British government accepts partition. Both Congress and the League agree to separate dominions and a boundary commission." },
    { y: 1947, d: "18 July", era: "partition", t: "Indian Independence Act", x: "The British Parliament creates the independent dominions of India and Pakistan, ending nearly 90 years of Crown rule." },
    { y: 1947, d: "14–15 August", era: "partition", t: "Independence and Partition", x: "Pakistan is born on 14 August and India becomes independent on 15 August. The Radcliffe Line is published on 17 August, triggering one of history's largest migrations." },
    { y: 1947, d: "22 October", era: "partition", t: "Kashmir crisis", x: "Tribal fighters backed by Pakistan invade Kashmir. The Maharaja signs the Instrument of Accession on 27 October and Indian troops airlifted to Srinagar." },
    { y: 1948, d: "30 January", era: "partition", t: "Gandhi assassinated", x: "Nathuram Godse shoots Gandhi at Birla House, Delhi. The killing shocks the world and deepens the new nation's grief." },
    { y: 1948, d: "September", era: "partition", t: "Hyderabad integrated", x: "Operation Polo ends the Nizam's resistance; Hyderabad joins the Indian Union. Junagadh had been integrated in 1947." },
    { y: 1949, d: "26 November", era: "partition", t: "Constitution adopted", x: "The Constituent Assembly adopts the Constitution, the longest written constitution in the world. It comes into force on 26 January 1950." },

    /* ---- Republic ---- */
    { y: 1950, d: "26 January", era: "republic", t: "India becomes a republic", x: "The Constitution takes effect. Rajendra Prasad is sworn in as President; India becomes a sovereign democratic republic." },
    { y: 1951, era: "republic", t: "First Five-Year Plan", x: "India launches centralised planning, prioritising agriculture, irrigation and infrastructure. The Planning Commission had been set up in 1950." },
    { y: 1951, era: "republic", t: "First general election", x: "Held over 1951–52, India's first election under universal adult franchise is a logistical triumph. Congress wins a large majority." },
    { y: 1953, d: "29 May", era: "republic", t: "Mount Everest climbed", x: "Tenzing Norgay and Edmund Hillary reach the summit, a moment of national pride in newly independent India." },
    { y: 1956, era: "republic", t: "States Reorganisation Act", x: "India's states are reorganised on linguistic lines, reshaping the federal map and accommodating regional identities." },
    { y: 1961, d: "19 December", era: "republic", t: "Goa liberated", x: "Operation Vijay ends Portuguese rule in Goa. India also helps found the Non-Aligned Movement in Belgrade this year." },
    { y: 1962, d: "October–November", era: "republic", t: "Sino-Indian War", x: "India suffers a major defeat in the Himalayan border war, with lasting consequences for defence and foreign policy." },
    { y: 1964, d: "27 May", era: "republic", t: "Nehru dies", x: "India's first Prime Minister dies in office. Lal Bahadur Shastri succeeds him." },
    { y: 1965, d: "August–September", era: "republic", t: "Indo-Pak War", x: "War over Kashmir ends in a UN-brokered ceasefire. The Tashkent Declaration follows in January 1966." },
    { y: 1966, d: "11 January", era: "republic", t: "Shastri dies; Indira Gandhi becomes PM", x: "Shastri dies at Tashkent. Indira Gandhi takes office, beginning an era that will dominate Indian politics for two decades." },
    { y: 1969, d: "19 July", era: "republic", t: "Banks nationalised", x: "Fourteen major banks are nationalised, a defining move of Indira Gandhi's populist turn." },
    { y: 1971, d: "December", era: "republic", t: "Bangladesh war", x: "India intervenes in East Pakistan's independence struggle; Pakistan's surrender leads to the birth of Bangladesh and a decisive Indian victory." },
    { y: 1972, d: "2 July", era: "republic", t: "Shimla Agreement", x: "India and Pakistan agree to settle disputes bilaterally, including Kashmir, and to respect the Line of Control." },
    { y: 1974, d: "18 May", era: "republic", t: "Pokhran-I", x: "India conducts a 'peaceful nuclear explosion', becoming a de facto nuclear power and prompting international sanctions." },
    { y: 1975, d: "25 June", era: "republic", t: "The Emergency", x: "Indira Gandhi declares a national emergency. Civil liberties are suspended, opposition leaders jailed, and the press censored." },
    { y: 1977, d: "March", era: "republic", t: "Janata government", x: "The Emergency is lifted and the Janata Party wins the election — India's first non-Congress government, and a test of democratic resilience." },
    { y: 1980, d: "January", era: "republic", t: "Indira Gandhi returns", x: "Congress returns to power with a landslide. Indira's second term is dominated by regional conflicts and centralisation." },
    { y: 1984, era: "republic", t: "Blue Star, assassination and Bhopal", x: "Operation Blue Star at the Golden Temple is followed by Indira Gandhi's assassination on 31 October. On 3 December, the Bhopal gas disaster kills thousands. Rajiv Gandhi becomes Prime Minister." },
    { y: 1989, era: "republic", t: "Bofors and the coalition era", x: "Corruption allegations over the Bofors gun deal weaken Rajiv's government. V. P. Singh forms a National Front government." },
    { y: 1990, era: "republic", t: "Mandal Commission implemented", x: "Reservations for Other Backward Classes are implemented, triggering fierce debate. The economy slides toward crisis as the Gulf War raises oil prices." },

    /* ---- Modern India ---- */
    { y: 1991, d: "May–July", era: "modern", t: "The 1991 turning point", x: "Rajiv Gandhi is assassinated in May. Facing a balance-of-payments crisis, the Narasimha Rao government devalues the rupee and dismantles the licence raj, opening India to global markets." },
    { y: 1992, d: "6 December", era: "modern", t: "Babri Masjid demolished", x: "A mob demolishes the mosque in Ayodhya, triggering riots and a long legal and political reckoning." },
    { y: 1993, d: "12 March", era: "modern", t: "Bombay serial blasts", x: "Coordinated bombings across Mumbai kill hundreds, attributed to retaliation for the Babri demolition." },
    { y: 1998, d: "11–13 May", era: "modern", t: "Pokhran-II", x: "India conducts five nuclear tests and declares itself a nuclear weapons state. Atal Bihari Vajpayee is Prime Minister." },
    { y: 1999, d: "May–July", era: "modern", t: "Kargil War", x: "Indian forces push back Pakistani intruders from the Kargil heights in a high-altitude war that ends with a Pakistani withdrawal." },
    { y: 2001, d: "13 December", era: "modern", t: "Parliament attack", x: "Terrorists attack the Indian Parliament in Delhi, killing security personnel and bringing India and Pakistan close to war." },
    { y: 2002, d: "February–March", era: "modern", t: "Gujarat riots", x: "After a train fire at Godhra, communal violence in Gujarat kills over a thousand people, mostly Muslims. The state's response is widely criticised." },
    { y: 2004, d: "May", era: "modern", t: "UPA government", x: "The Congress-led United Progressive Alliance wins; Manmohan Singh becomes Prime Minister. In December, the Indian Ocean tsunami devastates coastal India." },
    { y: 2005, era: "modern", t: "Right to Information Act", x: "The RTI Act gives citizens a powerful tool to demand information from government. India and the US agree on a civilian nuclear framework." },
    { y: 2008, d: "September–November", era: "modern", t: "Nuclear deal and 26/11", x: "The India–US nuclear deal clears the NSG. In November, ten terrorists attack Mumbai, killing more than 160 people over three days." },
    { y: 2010, era: "modern", t: "Commonwealth Games, Delhi", x: "Delhi hosts the Commonwealth Games, a showcase of the new India shadowed by corruption scandals." },
    { y: 2012, d: "16 December", era: "modern", t: "Nirbhaya case", x: "The gang rape and murder of a young woman in Delhi sparks nationwide protests and legal reform on violence against women." },
    { y: 2014, d: "May–September", era: "modern", t: "Modi government and Mangalyaan", x: "The BJP wins a majority and Narendra Modi becomes Prime Minister. In September, India's Mars orbiter enters Martian orbit on its first attempt." },
    { y: 2016, d: "November", era: "modern", t: "Demonetisation", x: "The ₹500 and ₹1,000 notes are withdrawn overnight to target black money, causing disruption and a long debate over its effects." },
    { y: 2017, d: "1 July", era: "modern", t: "GST launched", x: "The Goods and Services Tax unifies India's indirect tax system. In August, the Supreme Court strikes down instant triple talaq." },
    { y: 2018, d: "6 September", era: "modern", t: "Section 377 struck down", x: "The Supreme Court decriminalises consensual same-sex relations, a landmark judgment for LGBTQ rights in India." },
    { y: 2019, d: "February–August", era: "modern", t: "Pulwama, Balakot and Article 370", x: "A suicide attack in Pulwama leads to an Indian airstrike in Balakot. In August, Jammu and Kashmir's special status under Article 370 is revoked and the state is reorganised." },
    { y: 2020, d: "March–June", era: "modern", t: "COVID-19 and Galwan", x: "A national lockdown is imposed as the pandemic spreads. In June, a border clash with China in Galwan kills Indian soldiers and raises tensions." },
    { y: 2021, d: "November", era: "modern", t: "Farm laws repealed", x: "After a year of protests by farmers, the government repeals three agricultural laws. India crosses one billion COVID-19 vaccinations." },
    { y: 2023, d: "August–September", era: "modern", t: "Chandrayaan-3 and G20", x: "India lands a spacecraft near the Moon's south pole, hosts the G20 summit in Delhi, and passes a women's reservation act." },
    { y: 2024, d: "January–June", era: "modern", t: "Ram temple and third term", x: "The Ram temple is consecrated in Ayodhya in January. After the general election, Narendra Modi is sworn in for a third term in June." },
    { y: 2025, d: "January–May", era: "modern", t: "Maha Kumbh and Operation Sindoor", x: "The Maha Kumbh in Prayagraj draws hundreds of millions. After the Pahalgam attack, India launches strikes on terror infrastructure in Pakistan and Pakistan-administered Kashmir; a ceasefire follows in May." }
  ];

  var ERA_LABEL = {
    revolt: "1857 Revolt",
    raj: "British Raj",
    freedom: "Freedom Struggle",
    partition: "Partition & Independence",
    republic: "Republic",
    modern: "Modern India"
  };

  var mount = document.getElementById("timeline");
  if (!mount) { return; }

  var countEl = document.getElementById("tl-count");
  var emptyEl = document.getElementById("tl-empty");
  var searchEl = document.getElementById("tl-search");
  var chips = document.querySelectorAll(".chip");
  var activeEra = "all";

  function render() {
    var q = searchEl ? searchEl.value.trim().toLowerCase() : "";
    var visible = EVENTS.filter(function (ev) {
      var eraOk = activeEra === "all" || ev.era === activeEra;
      if (!eraOk) { return false; }
      if (!q) { return true; }
      var hay = (ev.y + " " + (ev.d || "") + " " + ev.t + " " + ev.x + " " + ERA_LABEL[ev.era]).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    mount.innerHTML = visible.map(function (ev) {
      return "<article class=\"tl-item\" data-era=\"" + ev.era + "\">" +
        "<div class=\"tl-year\">" + ev.y +
        (ev.d ? "<span class=\"tl-date\">" + ev.d + "</span>" : "") +
        "</div>" +
        "<div class=\"tl-body\">" +
        "<span class=\"badge badge-" + ev.era + "\">" + ERA_LABEL[ev.era] + "</span>" +
        "<h3>" + ev.t + "</h3>" +
        "<p>" + ev.x + "</p>" +
        "</div></article>";
    }).join("");

    if (countEl) {
      countEl.textContent = visible.length + (visible.length === 1 ? " event" : " events") +
        (activeEra === "all" ? " across the full record" : " in this era");
    }
    if (emptyEl) { emptyEl.hidden = visible.length !== 0; }
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      chips.forEach(function (c) { c.classList.remove("active"); });
      chip.classList.add("active");
      activeEra = chip.getAttribute("data-filter") || "all";
      render();
    });
  });

  if (searchEl) {
    searchEl.addEventListener("input", render);
  }

  render();
})();
