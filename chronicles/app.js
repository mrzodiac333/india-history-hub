// Database of Governors-General and Viceroys of British India
const governorsData = [
  {
    id: 1,
    name: "Warren Hastings",
    title: "First Governor-General of Bengal",
    tenure: "1773–1785",
    startYear: 1773,
    endYear: 1785,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "Warren_Hastings_by_Lemuel_Francis_Abbott.jpg",
    achievements: [
      "Passed the Regulating Act of 1773, bringing the East India Company under British parliamentary control.",
      "Abolished the Dual System of Administration in Bengal (introduced by Robert Clive).",
      "Founded the Asiatic Society of Bengal in 1784 alongside Sir William Jones to promote oriental studies.",
      "Fought the First Anglo-Maratha War (1775-1782) and Second Anglo-Mysore War (1780-1784).",
      "Established the Board of Revenue and created civil (Diwani) and criminal (Faujdari) courts."
    ]
  },
  {
    id: 2,
    name: "Lord Cornwallis",
    title: "Governor-General of Bengal",
    tenure: "1786–1793",
    startYear: 1786,
    endYear: 1793,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "Charles_Cornwallis,_1st_Marquess_Cornwallis_by_John_Singleton_Copley.jpg",
    achievements: [
      "Introduced the Permanent Settlement of Bengal (1793), fixing land revenue permanently.",
      "Established the Cornwallis Code, separating revenue administration from judicial administration.",
      "Known as the 'Father of Civil Services in India' for reforming, purifying, and organizing the bureaucratic structure.",
      "Led the British in the Third Anglo-Mysore War (1790-1792) and signed the Treaty of Seringapatam.",
      "Reorganized the judiciary by creating district, provincial, and appellate courts."
    ]
  },
  {
    id: 3,
    name: "Sir John Shore",
    title: "Governor-General of Bengal",
    tenure: "1793–1798",
    startYear: 1793,
    endYear: 1798,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "John_Shore,_1st_Baron_Teignmouth_by_John_Spilsbury.jpg",
    achievements: [
      "Adopted the Policy of Non-Intervention towards Indian princely states.",
      "Drafted and implemented the Charter Act of 1793.",
      "Maintained a neutral stance which led to the Battle of Kharda (1795) where the Marathas defeated the Nizam."
    ]
  },
  {
    id: 4,
    name: "Lord Wellesley",
    title: "Governor-General of Bengal",
    tenure: "1798–1805",
    startYear: 1798,
    endYear: 1805,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "Richard_Wellesley,_1st_Marquess_Wellesley_by_Robert_Home.jpg",
    achievements: [
      "Introduced the Subsidiary Alliance System to expand British influence over princely states without direct annexation.",
      "Defeated Tipu Sultan in the Fourth Anglo-Mysore War (1799).",
      "Annexed Mysore, Tanjore, Surat, and Karnataka under British control.",
      "Established Fort William College at Calcutta in 1800 to train young civil servants.",
      "Styled himself as the 'Bengal Tiger' and aggressively expanded the empire."
    ]
  },
  {
    id: 5,
    name: "Lord Minto I",
    title: "Governor-General of Bengal",
    tenure: "1707–1813",
    startYear: 1807,
    endYear: 1813,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "Gilbert_Elliot-Murray-Kynynmound,_1st_Earl_of_Minto_by_George_Chinnery.jpg",
    achievements: [
      "Concluded the Treaty of Amritsar (1809) with Maharaja Ranjit Singh, establishing the Sutlej River as the boundary.",
      "Sent diplomatic missions to Persia and Kabul to counter French influence.",
      "Passed the Charter Act of 1813, which ended the East India Company's monopoly over Indian trade."
    ]
  },
  {
    id: 6,
    name: "Lord Hastings",
    title: "Governor-General of Bengal",
    tenure: "1813–1823",
    startYear: 1813,
    endYear: 1823,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "Francis_Rawdon-Hastings,_1st_Marquess_of_Hastings_by_Hugh_Douglas_Hamilton.jpg",
    achievements: [
      "Ended the policy of non-intervention and initiated a period of aggressive expansion.",
      "Defeated the Gurkhas in the Anglo-Nepalese War (1814-1816), signing the Treaty of Sugauli.",
      "Suppressed the Pindaris, a group of plunderers in Central India.",
      "Defeated the Peshwa in the Third Anglo-Maratha War (1817-1818), dissolving the Maratha Confederacy and annexing their territories.",
      "Supported the introduction of the Ryotwari settlement system in Madras under Thomas Munro."
    ]
  },
  {
    id: 7,
    name: "Lord Amherst",
    title: "Governor-General of Bengal",
    tenure: "1823–1828",
    startYear: 1823,
    endYear: 1828,
    category: "bengal",
    categoryLabel: "Governor-General of Bengal",
    image: "William_Amherst,_1st_Earl_Amherst_by_Sir_Thomas_Lawrence.jpg",
    achievements: [
      "Fought the First Anglo-Burmese War (1824-1826) and signed the Treaty of Yandabo, acquiring Assam, Arakan, and Tenasserim.",
      "Suppressed a mutiny of Indian soldiers at Barrackpore (1824).",
      "Successfully captured the reputedly impregnable Jat fort of Bharatpur (1826)."
    ]
  },
  {
    id: 8,
    name: "Lord William Bentinck",
    title: "First Governor-General of India",
    tenure: "1828–1835",
    startYear: 1828,
    endYear: 1835,
    category: "india",
    categoryLabel: "Governor-General of India",
    image: "Lord_William_Bentinck_by_Sir_Thomas_Lawrence.jpg",
    achievements: [
      "Outlawed the practice of Sati (1829) with the support of Raja Ram Mohan Roy.",
      "Suppressed the Thuggee cult through the efforts of William Sleeman.",
      "Introduced English as the medium of higher education in India (English Education Act of 1835), based on Macaulay's Minute.",
      "Became the first official Governor-General of India under the Charter Act of 1833.",
      "Abolished provincial courts of appeal to speed up the judicial process."
    ]
  },
  {
    id: 9,
    name: "Sir Charles Metcalfe",
    title: "Governor-General of India (Acting)",
    tenure: "1835–1836",
    startYear: 1835,
    endYear: 1836,
    category: "india",
    categoryLabel: "Governor-General of India",
    image: "Charles_Metcalfe,_1st_Baron_Metcalfe.jpg",
    achievements: [
      "Known as the 'Liberator of the Indian Press' for repealing the highly restrictive 1823 licensing regulations.",
      "Promoted freedom of speech, which led to a surge in Indian journalism."
    ]
  },
  {
    id: 10,
    name: "Lord Auckland",
    title: "Governor-General of India",
    tenure: "1836–1842",
    startYear: 1836,
    endYear: 1842,
    category: "india",
    categoryLabel: "Governor-General of India",
    image: "George_Eden,_1st_Earl_of_Auckland.jpg",
    achievements: [
      "Initiated the disastrous First Anglo-Afghan War (1838-1842), resulting in heavy British casualties.",
      "Developed roads and infrastructure in Bengal, connecting Calcutta to Delhi."
    ]
  },
  {
    id: 11,
    name: "Lord Ellenborough",
    title: "Governor-General of India",
    tenure: "1842–1844",
    startYear: 1842,
    endYear: 1844,
    category: "india",
    categoryLabel: "Governor-General of India",
    image: "Edward_Law,_1st_Earl_of_Ellenborough_by_George_Hayter.jpg",
    achievements: [
      "Annexed Sindh to British India in 1843.",
      "Abolished the practice of slavery in India through the Indian Slavery Act of 1843.",
      "Successfully ended the Gwalior campaign and pacified central states."
    ]
  },
  {
    id: 12,
    name: "Lord Hardinge I",
    title: "Governor-General of India",
    tenure: "1844–1848",
    startYear: 1844,
    endYear: 1848,
    category: "india",
    categoryLabel: "Governor-General of India",
    image: "Henry_Hardinge,_1st_Viscount_Hardinge_by_Sir_Francis_Grant.jpg",
    achievements: [
      "Conducted the First Anglo-Sikh War (1845-1846), concluding with the Treaty of Lahore and the acquisition of Jalandhar Doab.",
      "Took active measures to abolish female infanticide and human sacrifice (Meriah sacrifice) among the Khonds of Odisha.",
      "Declared that English-educated Indians would be preferred in public employment."
    ]
  },
  {
    id: 13,
    name: "Lord Dalhousie",
    title: "Governor-General of India",
    tenure: "1848–1856",
    startYear: 1848,
    endYear: 1856,
    category: "india",
    categoryLabel: "Governor-General of India",
    image: "James_Andrew_Broun-Ramsay,_1st_Marquess_of_Dalhousie_by_John_Watson_Gordon.jpg",
    achievements: [
      "Introduced the controversial Doctrine of Lapse, annexing Satara, Jaitpur, Sambalpur, Jhansi, Nagpur, and Awadh.",
      "Introduced the first passenger railway line in India between Bombay and Thane (1853).",
      "Set up the electric telegraph network and reformed the postal system (Post Office Act of 1854).",
      "Established the Public Works Department (PWD) to oversee major roads, canals, and bridges.",
      "Passed the Hindu Widows' Remarriage Act (1856) and implemented Wood's Despatch on Education (1854)."
    ]
  },
  {
    id: 14,
    name: "Lord Canning",
    title: "First Viceroy of India",
    tenure: "1856–1862",
    startYear: 1856,
    endYear: 1862,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Charles_John_Canning,_1st_Earl_Canning_by_George_Richmond.jpg",
    achievements: [
      "Governed during the Indian Rebellion of 1857 (First War of Independence).",
      "Oversaw the transition of power from the East India Company to the British Crown under the Government of India Act 1858.",
      "Became the first Viceroy of India, acting as the direct representative of the British monarch.",
      "Abolished the Doctrine of Lapse and established the Universities of Calcutta, Bombay, and Madras in 1857.",
      "Introduced the Portfolio System, laying the foundation for cabinet governance, and passed the Indian Penal Code (IPC)."
    ]
  },
  {
    id: 15,
    name: "Lord Lawrence",
    title: "Viceroy of India",
    tenure: "1864–1869",
    startYear: 1864,
    endYear: 1869,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "John_Lawrence,_1st_Baron_Lawrence_by_George_Frederic_Watts.jpg",
    achievements: [
      "Established the High Courts at Calcutta, Bombay, and Madras in 1865.",
      "Created the Forest Department to organize forestry in British India.",
      "Followed a policy of 'masterly inactivity' towards Afghanistan, avoiding expensive military interventions.",
      "Established direct telegraphic communication between India and Europe."
    ]
  },
  {
    id: 16,
    name: "Lord Mayo",
    title: "Viceroy of India",
    tenure: "1869–1872",
    startYear: 1869,
    endYear: 1872,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Richard_Southwell_Bourke,_6th_Earl_of_Mayo_by_John_Watkins.jpg",
    achievements: [
      "Conducted the first census of India in 1872.",
      "Initiated the process of financial decentralization between the center and provinces.",
      "Founded the Mayo College in Ajmer for the education of Indian princes.",
      "Established the Department of Agriculture and Commerce.",
      "The only Viceroy to be assassinated in office (stabbed by Sher Ali Afridi in the Andaman Islands)."
    ]
  },
  {
    id: 17,
    name: "Lord Northbrook",
    title: "Viceroy of India",
    tenure: "1872–1876",
    startYear: 1872,
    endYear: 1876,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Thomas_George_Baring,_1st_Earl_of_Northbrook.jpg",
    achievements: [
      "Suppressed the Kuka Movement in Punjab.",
      "Managed the Bengal Famine of 1873-1874 without massive loss of life.",
      "Welcomed the Prince of Wales (later King Edward VII) to India in 1875."
    ]
  },
  {
    id: 18,
    name: "Lord Lytton",
    title: "Viceroy of India",
    tenure: "1876–1880",
    startYear: 1876,
    endYear: 1880,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Robert_Bulwer-Lytton,_1st_Earl_of_Lytton.jpg",
    achievements: [
      "Passed the Vernacular Press Act of 1878 to muzzle Indian-language newspapers.",
      "Passed the Arms Act of 1878, making it a criminal offense for Indians to carry arms without a license.",
      "Organized the Grand Delhi Durbar in 1877, proclaiming Queen Victoria as the 'Empress of India' during the Great Famine.",
      "Initiated the Second Anglo-Afghan War (1878-1880)."
    ]
  },
  {
    id: 19,
    name: "Lord Ripon",
    title: "Viceroy of India",
    tenure: "1880–1884",
    startYear: 1880,
    endYear: 1884,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "George_Robinson,_1st_Marquess_of_Ripon_by_Sir_Hubert_von_Herkomer.jpg",
    achievements: [
      "Repealed the unpopular Vernacular Press Act in 1882.",
      "Known as the 'Father of Local Self-Government in India' for introducing local boards and municipalities.",
      "Introduced the Hunter Commission on Education (1882).",
      "Championed the Ilbert Bill (1883), which proposed allowing Indian judges to try Europeans.",
      "Passed the first Factory Act of 1881 to improve labor conditions for children."
    ]
  },
  {
    id: 20,
    name: "Lord Dufferin",
    title: "Viceroy of India",
    tenure: "1884–1888",
    startYear: 1884,
    endYear: 1888,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Frederick_Temple_Hamilton-Temple-Blackwood,_1st_Marquess_of_Dufferin_and_Ava_by_Benjamin_Constant.jpg",
    achievements: [
      "Oversaw the establishment of the Indian National Congress (INC) in 1885 by A.O. Hume.",
      "Annexed Upper Burma following the Third Anglo-Burmese War (1885).",
      "Passed the Tenancy Act of Bengal (1885) to protect peasant farmers."
    ]
  },
  {
    id: 21,
    name: "Lord Lansdowne",
    title: "Viceroy of India",
    tenure: "1888–1894",
    startYear: 1888,
    endYear: 1894,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Henry_Charles_Keith_Petty-Fitzmaurice,_5th_Marquess_of_Lansdowne_by_Frank_Holl.jpg",
    achievements: [
      "Passed the Indian Councils Act of 1892, introducing indirect elections to legislative councils.",
      "Setup the Durand Commission (1893) to demarcate the boundary between British India and Afghanistan.",
      "Passed the second Factory Act of 1891, limiting working hours for women."
    ]
  },
  {
    id: 22,
    name: "Lord Elgin II",
    title: "Viceroy of India",
    tenure: "1894–1899",
    startYear: 1894,
    endYear: 1899,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Victor_Alexander_Bruce,_9th_Earl_of_Elgin.jpg",
    achievements: [
      "Dealt with the Bubonic Plague outbreak in Bombay (1896) and the subsequent assassination of British plague officer Rand.",
      "Managed the Great Famine of 1896-1897.",
      "Stated: 'India was won by the sword and by the sword it shall be kept.'"
    ]
  },
  {
    id: 23,
    name: "Lord Curzon",
    title: "Viceroy of India",
    tenure: "1899–1905",
    startYear: 1899,
    endYear: 1905,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "George_Nathaniel_Curzon,_1st_Marquess_Curzon_of_Kedleston.jpg",
    achievements: [
      "Orchestrated the Partition of Bengal (1905), leading to widespread protests and the Swadeshi Movement.",
      "Passed the Ancient Monuments Preservation Act of 1904, restoring historical structures under the Archaeological Survey of India (ASI).",
      "Passed the Indian Universities Act of 1904 based on the Raleigh Commission.",
      "Established the Imperial Agricultural Research Institute at Pusa."
    ]
  },
  {
    id: 24,
    name: "Lord Minto II",
    title: "Viceroy of India",
    tenure: "1905–1910",
    startYear: 1905,
    endYear: 1910,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Gilbert_John_Elliot-Murray-Kynynmound,_4th_Earl_of_Minto.jpg",
    achievements: [
      "Enacted the Morley-Minto Reforms (Indian Councils Act 1909), introducing separate electorates for Muslims.",
      "Oversaw the founding of the All-India Muslim League in Dhaka (1906).",
      "Dealt with the split in the Indian National Congress (Surat Split in 1907) between Moderates and Extremists."
    ]
  },
  {
    id: 25,
    name: "Lord Hardinge II",
    title: "Viceroy of India",
    tenure: "1910–1916",
    startYear: 1910,
    endYear: 1916,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Charles_Hardinge,_1st_Baron_Hardinge_of_Penshurst.jpg",
    achievements: [
      "Cancelled the Partition of Bengal in 1911 in response to nationalist pressure.",
      "Shifted the capital of India from Calcutta to Delhi in 1911 (celebrated with the grand Delhi Durbar).",
      "Survived a bomb attack by Rash Behari Bose (Delhi Conspiracy Case, 1912).",
      "Supported the establishment of the Banaras Hindu University (BHU) in 1916 by Madan Mohan Malaviya."
    ]
  },
  {
    id: 26,
    name: "Lord Chelmsford",
    title: "Viceroy of India",
    tenure: "1916–1921",
    startYear: 1916,
    endYear: 1921,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Frederic_John_Napier_Thesiger,_1st_Viscount_Chelmsford.jpg",
    achievements: [
      "Introduced the Montagu-Chelmsford Reforms (Government of India Act 1919), establishing 'Dyarchy' in the provinces.",
      "Passed the controversial Rowlatt Act, which led to the Jallianwala Bagh Massacre (1919).",
      "Witnessed the launch of the Khilafat and Non-Cooperation Movements by Mahatma Gandhi.",
      "Established the Women's University at Pune (1916) and Aligarh Muslim University (1920)."
    ]
  },
  {
    id: 27,
    name: "Lord Reading",
    title: "Viceroy of India",
    tenure: "1921–1926",
    startYear: 1921,
    endYear: 1926,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Rufus_Daniel_Isaacs,_1st_Marquess_of_Reading.jpg",
    achievements: [
      "Governed during the Chauri Chaura incident (1922), which led Gandhi to withdraw the Non-Cooperation Movement.",
      "Witnessed the formation of the Swaraj Party by Motilal Nehru and C.R. Das (1923).",
      "Suppressed the Moplah Rebellion in Kerala (1921).",
      "Witnessed the Kakori Train Robbery (1925) by revolutionary nationalists."
    ]
  },
  {
    id: 28,
    name: "Lord Irwin",
    title: "Viceroy of India",
    tenure: "1926–1931",
    startYear: 1926,
    endYear: 1931,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Edward_Frederick_Lindley_Wood,_1st_Earl_of_Halifax.jpg",
    achievements: [
      "Faced intense protests against the all-white Simon Commission (1928).",
      "Witnessed the Civil Disobedience Movement, beginning with the Dandi March (1930).",
      "Signed the Gandhi-Irwin Pact (1931), leading to the suspension of Civil Disobedience and participation in the Second Round Table Conference.",
      "Witnessed the execution of Bhagat Singh, Sukhdev, and Rajguru (1931)."
    ]
  },
  {
    id: 29,
    name: "Lord Willingdon",
    title: "Viceroy of India",
    tenure: "1931–1936",
    startYear: 1931,
    endYear: 1936,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Freeman_Freeman-Thomas,_1st_Marquess_of_Willingdon.jpg",
    achievements: [
      "Suppressed the resumed Civil Disobedience Movement and imprisoned Gandhi.",
      "Passed the Government of India Act 1935, which introduced provincial autonomy.",
      "Witnessed the Communal Award (1932) and the subsequent Poona Pact between Gandhi and B.R. Ambedkar."
    ]
  },
  {
    id: 30,
    name: "Lord Linlithgow",
    title: "Viceroy of India",
    tenure: "1936–1943",
    startYear: 1936,
    endYear: 1943,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Victor_Alexander_John_Hope,_2nd_Marquess_of_Linlithgow.jpg",
    achievements: [
      "Governed during the longest tenure of any Viceroy in India.",
      "Declared India's entry into World War II (1939) without consulting Indian leaders, leading to the resignation of Congress ministries.",
      "Faced the Quit India Movement (1942) and arrested its leadership.",
      "Managed the tragic Bengal Famine of 1943.",
      "Rejected the Cripps Mission (1942)."
    ]
  },
  {
    id: 31,
    name: "Lord Wavell",
    title: "Viceroy of India",
    tenure: "1943–1947",
    startYear: 1943,
    endYear: 1947,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Archibald_Percival_Wavell,_1st_Earl_Wavell.jpg",
    achievements: [
      "Convened the Shimla Conference (1945) to resolve the political deadlock between Congress and Muslim League.",
      "Hosted the Cabinet Mission Plan (1946) to discuss transition of power and constitutional framing.",
      "Dealt with the Royal Indian Navy Mutiny (1946) and the communal violence of Direct Action Day (1946).",
      "Appointed the Interim Government of India under Jawaharlal Nehru."
    ]
  },
  {
    id: 32,
    name: "Lord Mountbatten",
    title: "Last Viceroy of British India",
    tenure: "1947",
    startYear: 1947,
    endYear: 1947,
    category: "viceroy",
    categoryLabel: "Viceroy of India",
    image: "Louis_Mountbatten,_1st_Earl_Mountbatten_of_Burma.jpg",
    achievements: [
      "Announced the June 3rd Plan (Mountbatten Plan) proposing the partition of India.",
      "Oversaw the passage of the Indian Independence Act 1947.",
      "Supervised the partition of British India into India and Pakistan, ending British rule.",
      "Served as the last Viceroy and, subsequently, the first Governor-General of independent India."
    ]
  }
];

// Page Load Handler
document.addEventListener("DOMContentLoaded", () => {
  const timelineContainer = document.getElementById("timeline-cards");
  const searchInput = document.getElementById("search-input");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const countDisplay = document.getElementById("results-count");
  const modal = document.getElementById("detail-modal");
  const modalClose = document.getElementById("modal-close");
  const timeScrubber = document.getElementById("scrubber-progress");
  const timeLabel = document.getElementById("scrubber-year");

  let activeCategory = "all";
  let searchQuery = "";

  // Render function
  function renderTimeline() {
    timelineContainer.innerHTML = "";
    
    // Filter data
    const filtered = governorsData.filter(gov => {
      const matchesCategory = activeCategory === "all" || gov.category === activeCategory;
      const matchesSearch = gov.name.toLowerCase().includes(searchQuery) ||
                            gov.title.toLowerCase().includes(searchQuery) ||
                            gov.tenure.toLowerCase().includes(searchQuery) ||
                            gov.achievements.some(a => a.toLowerCase().includes(searchQuery));
      return matchesCategory && matchesSearch;
    });

    // Update count display
    countDisplay.textContent = `Showing ${filtered.length} of ${governorsData.length} administrators`;

    if (filtered.length === 0) {
      timelineContainer.innerHTML = `
        <div class="no-results">
          <i class="fas fa-history"></i>
          <h3>No Administrators Found</h3>
          <p>Try adjusting your search query or filters.</p>
        </div>
      `;
      return;
    }

    // Generate cards
    filtered.forEach((gov, index) => {
      const card = document.createElement("div");
      card.className = `timeline-card ${gov.category}`;
      card.setAttribute("data-id", gov.id);
      card.setAttribute("data-year", gov.startYear);
      card.style.animationDelay = `${index * 0.05}s`;

      const imageUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(gov.image)}?width=400`;
      const initials = gov.name.split(" ").map(n => n[0]).filter((n,i,arr) => i === 0 || i === arr.length - 1).join("");

      card.innerHTML = `
        <div class="card-timeline-indicator"></div>
        <div class="card-date">${gov.tenure}</div>
        <div class="card-frame">
          <div class="portrait-container">
            <img class="governor-portrait" src="${imageUrl}" alt="${gov.name}" loading="lazy">
            <div class="portrait-fallback">${initials}</div>
          </div>
        </div>
        <div class="card-content">
          <span class="card-badge badge-${gov.category}">${gov.categoryLabel}</span>
          <h2 class="card-name">${gov.name}</h2>
          <p class="card-title">${gov.title}</p>
          <ul class="card-achievements">
            ${gov.achievements.slice(0, 2).map(a => `<li>${a}</li>`).join("")}
          </ul>
          ${gov.achievements.length > 2 ? `<button class="view-more-btn">Read More <i class="fas fa-arrow-right"></i></button>` : ""}
        </div>
      `;

      // Fallback handling if Wikimedia image fails to load
      const img = card.querySelector(".governor-portrait");
      const fallback = card.querySelector(".portrait-fallback");
      img.onerror = () => {
        img.style.display = "none";
        fallback.style.display = "flex";
      };

      // Add click listener
      card.addEventListener("click", () => showDetailModal(gov));

      timelineContainer.appendChild(card);
    });

    // Update scrubber on render/scroll
    updateScrubber();
  }

  // Show detailed modal
  function showDetailModal(gov) {
    const modalImage = document.getElementById("modal-image");
    const modalFallback = document.getElementById("modal-fallback");
    const modalName = document.getElementById("modal-name");
    const modalTenure = document.getElementById("modal-tenure");
    const modalBadge = document.getElementById("modal-badge");
    const modalTitle = document.getElementById("modal-title");
    const modalAchievementsList = document.getElementById("modal-achievements-list");

    const imageUrl = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(gov.image)}?width=500`;
    const initials = gov.name.split(" ").map(n => n[0]).filter((n,i,arr) => i === 0 || i === arr.length - 1).join("");

    modalImage.src = imageUrl;
    modalImage.style.display = "block";
    modalFallback.style.display = "none";
    modalFallback.textContent = initials;

    modalImage.onerror = () => {
      modalImage.style.display = "none";
      modalFallback.style.display = "flex";
    };

    modalName.textContent = gov.name;
    modalTenure.textContent = `Tenure: ${gov.tenure}`;
    modalTitle.textContent = gov.title;
    
    // Clear and set badge
    modalBadge.className = `modal-badge badge-${gov.category}`;
    modalBadge.textContent = gov.categoryLabel;

    // Set achievements
    modalAchievementsList.innerHTML = gov.achievements.map(a => `<li><i class="fas fa-scroll"></i> <span>${a}</span></li>`).join("");

    // Show modal
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scroll
  }

  // Close modal
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Filter Buttons click handler
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      activeCategory = e.currentTarget.getAttribute("data-filter");
      renderTimeline();
    });
  });

  // Search input change handler
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderTimeline();
  });

  // Scrubber scroll spy
  function updateScrubber() {
    const cards = document.querySelectorAll(".timeline-card");
    if (cards.length === 0) {
      timeScrubber.style.height = "0%";
      timeLabel.textContent = "1773";
      return;
    }

    const firstCard = cards[0];
    const lastCard = cards[cards.length - 1];
    
    const containerTop = timelineContainer.getBoundingClientRect().top;
    const containerHeight = timelineContainer.clientHeight;
    
    // Check which card is closest to the middle of the screen
    let currentYear = 1773;
    let closestCard = null;
    let minDistance = Infinity;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const distance = Math.abs(rect.top - window.innerHeight / 2);
      if (distance < minDistance) {
        minDistance = distance;
        closestCard = card;
      }
    });

    if (closestCard) {
      currentYear = closestCard.getAttribute("data-year");
      timeLabel.textContent = currentYear;
    }

    // Calculate overall scroll progress through the timeline
    const scrollPos = window.scrollY + window.innerHeight / 2;
    const timelineTop = timelineContainer.offsetTop;
    const timelineHeight = timelineContainer.offsetHeight;
    
    let progress = ((scrollPos - timelineTop) / timelineHeight) * 100;
    progress = Math.max(0, Math.min(100, progress));
    
    timeScrubber.style.height = `${progress}%`;
  }

  window.addEventListener("scroll", updateScrubber);
  window.addEventListener("resize", updateScrubber);

  // Initialize
  renderTimeline();
});
