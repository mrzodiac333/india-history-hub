var POWERS = {
  mughals: {
    name: "Mughal Empire",
    region: "North India",
    rulers: [
      { name: "Babur", title: "Emperor", start: 1526, end: 1530, note: "Founder of the Mughal dynasty." },
      { name: "Humayun", title: "Emperor", start: 1530, end: 1540, note: "Lost the throne to Sher Shah Suri." },
      { name: "Humayun", title: "Emperor", start: 1555, end: 1556, note: "Restored Mughal rule shortly before his death." },
      { name: "Akbar", title: "Emperor", start: 1556, end: 1605, note: "Expanded the empire across northern and central India." },
      { name: "Jahangir", title: "Emperor", start: 1605, end: 1627, note: "Consolidated Mughal administration and patronage." },
      { name: "Shah Jahan", title: "Emperor", start: 1628, end: 1658, note: "Builder of the Taj Mahal and the Delhi Red Fort." },
      { name: "Aurangzeb", title: "Emperor", start: 1658, end: 1707, note: "Extended the empire to its greatest extent but exhausted it in the Deccan." },
      { name: "Bahadur Shah I", title: "Emperor", start: 1707, end: 1712, note: "Succession war victor; Mughal authority began to fragment." },
      { name: "Jahandar Shah", title: "Emperor", start: 1712, end: 1713, note: "Puppet of the Sayyid brothers." },
      { name: "Farrukhsiyar", title: "Emperor", start: 1713, end: 1719, note: "Granted the East India Company important trade privileges." },
      { name: "Rafi ud-Darajat", title: "Emperor", start: 1719, end: 1719, note: "Brief reign during the Sayyid brothers' ascendancy." },
      { name: "Shah Jahan II", title: "Emperor", start: 1719, end: 1719, note: "Brief puppet reign." },
      { name: "Muhammad Shah", title: "Emperor", start: 1719, end: 1748, note: "Faced Nadir Shah's invasion and the rise of regional powers." },
      { name: "Ahmad Shah Bahadur", title: "Emperor", start: 1748, end: 1754, note: "Lost effective control to court factions." },
      { name: "Alamgir II", title: "Emperor", start: 1754, end: 1759, note: "Reigned during the Carnatic wars and Plassey." },
      { name: "Shah Jahan III", title: "Emperor", start: 1759, end: 1760, note: "Brief claimant during the Bengal crisis." },
      { name: "Shah Alam II", title: "Emperor", start: 1759, end: 1806, note: "Titular emperor; granted the Diwani of Bengal to the Company in 1765." },
      { name: "Akbar II", title: "Emperor", start: 1806, end: 1837, note: "Ceremonial emperor under British protection." },
      { name: "Bahadur Shah Zafar", title: "Emperor", start: 1837, end: 1857, note: "Last Mughal emperor; exiled after the 1857 revolt." }
    ]
  },
  delhi_sultanate: {
    name: "Delhi Sultanate (Lodi)",
    region: "North India",
    rulers: [
      { name: "Bahlul Lodi", title: "Sultan", start: 1451, end: 1489, note: "Founder of the Lodi dynasty." },
      { name: "Sikandar Lodi", title: "Sultan", start: 1489, end: 1517, note: "Consolidated Lodi authority in northern India." },
      { name: "Ibrahim Lodi", title: "Sultan", start: 1517, end: 1526, note: "Defeated and killed at the First Battle of Panipat." }
    ]
  },
  sur_empire: {
    name: "Sur Empire",
    region: "North India",
    rulers: [
      { name: "Sher Shah Suri", title: "Sultan", start: 1540, end: 1545, note: "Founder of the Sur dynasty and reformer of administration." },
      { name: "Islam Shah Suri", title: "Sultan", start: 1545, end: 1554, note: "Strengthened Sur administration." },
      { name: "Firuz Shah Suri", title: "Sultan", start: 1554, end: 1554, note: "Brief child ruler." },
      { name: "Muhammad Adil Shah", title: "Sultan", start: 1554, end: 1555, note: "Sur claimant during the succession wars." },
      { name: "Ibrahim Shah Suri", title: "Sultan", start: 1555, end: 1555, note: "Brief claimant." },
      { name: "Sikandar Shah Suri", title: "Sultan", start: 1555, end: 1556, note: "Last Sur ruler in the north." },
      { name: "Hemu", title: "Chief Minister and Commander", start: 1553, end: 1556, note: "Hemu Vikramaditya, de facto Sur ruler and commander at Panipat." }
    ]
  },
  vijayanagara: {
    name: "Vijayanagara Empire",
    region: "South India",
    rulers: [
      { name: "Krishnadevaraya", title: "Emperor", start: 1509, end: 1529, note: "Greatest ruler of the Tuluva dynasty." },
      { name: "Achyuta Raya", title: "Emperor", start: 1529, end: 1542, note: "Successor of Krishnadevaraya." },
      { name: "Sadasiva Raya", title: "Emperor", start: 1542, end: 1570, note: "Titular ruler during the regency of Rama Raya." },
      { name: "Rama Raya", title: "Regent and Commander", start: 1542, end: 1565, note: "Effective ruler; captured and killed after Talikota." },
      { name: "Tirumala Deva Raya", title: "Emperor", start: 1565, end: 1572, note: "Founded the Aravidu dynasty after Talikota." }
    ]
  },
  deccan_sultanates: {
    name: "Deccan Sultanates",
    region: "Deccan",
    rulers: [
      { name: "Ismail Adil Shah", title: "Sultan of Bijapur", start: 1510, end: 1534, note: "Early Bijapur ruler." },
      { name: "Ibrahim Adil Shah I", title: "Sultan of Bijapur", start: 1534, end: 1558, note: "Consolidated Bijapur." },
      { name: "Ali Adil Shah I", title: "Sultan of Bijapur", start: 1558, end: 1580, note: "Member of the alliance at Talikota." },
      { name: "Ibrahim Quli Qutb Shah", title: "Sultan of Golconda", start: 1550, end: 1580, note: "Member of the alliance at Talikota." },
      { name: "Hussain Nizam Shah I", title: "Sultan of Ahmadnagar", start: 1553, end: 1565, note: "Member of the alliance at Talikota." },
      { name: "Ali Barid Shah I", title: "Sultan of Bidar", start: 1542, end: 1580, note: "Member of the alliance at Talikota." }
    ]
  },
  marathas_chhatrapati: {
    name: "Maratha Chhatrapati",
    region: "Maharashtra",
    rulers: [
      { name: "Shivaji", title: "Chhatrapati", start: 1674, end: 1680, note: "Founder of the Maratha kingdom." },
      { name: "Sambhaji", title: "Chhatrapati", start: 1680, end: 1689, note: "Captured and executed by Aurangzeb." },
      { name: "Rajaram", title: "Chhatrapati", start: 1689, end: 1700, note: "Led Maratha resistance from Jinji and Satara." },
      { name: "Tarabai", title: "Regent", start: 1700, end: 1707, note: "Regent for Shivaji II; directed resistance to Aurangzeb." },
      { name: "Shahu I", title: "Chhatrapati", start: 1707, end: 1749, note: "Recognized Peshwa authority and expanded Maratha influence." },
      { name: "Rajaram II", title: "Chhatrapati", start: 1749, end: 1777, note: "Titular ruler during Peshwa ascendancy." },
      { name: "Shahu II", title: "Chhatrapati", start: 1777, end: 1808, note: "Titular ruler during the Anglo-Maratha wars." },
      { name: "Pratap Singh", title: "Chhatrapati", start: 1808, end: 1839, note: "Titular ruler; Satara under British control." },
      { name: "Shahaji III", title: "Chhatrapati", start: 1839, end: 1848, note: "Last ruler of Satara; kingdom annexed in 1849." }
    ]
  },
  marathas_peshwa: {
    name: "Maratha Peshwa",
    region: "Maharashtra",
    rulers: [
      { name: "Balaji Vishwanath", title: "Peshwa", start: 1713, end: 1720, note: "First great Peshwa; secured Maratha influence in the Deccan." },
      { name: "Baji Rao I", title: "Peshwa", start: 1720, end: 1740, note: "Expanded Maratha power northward and defeated the Nizam at Palkhed." },
      { name: "Balaji Baji Rao", title: "Peshwa", start: 1740, end: 1761, note: "Maratha power peaked, then suffered the Panipat disaster." },
      { name: "Madhav Rao I", title: "Peshwa", start: 1761, end: 1772, note: "Rebuilt Maratha power after Panipat." },
      { name: "Narayan Rao", title: "Peshwa", start: 1772, end: 1773, note: "Murdered in a palace conspiracy." },
      { name: "Raghunath Rao", title: "Regent", start: 1773, end: 1774, note: "Contested regency; his ambitions triggered the First Anglo-Maratha War." },
      { name: "Madhav Rao II", title: "Peshwa", start: 1774, end: 1795, note: "Reigned under the regency of Nana Phadnavis." },
      { name: "Baji Rao II", title: "Peshwa", start: 1796, end: 1818, note: "Last Peshwa; defeated in the Third Anglo-Maratha War." },
      { name: "Nana Saheb", title: "Peshwa claimant", start: 1857, end: 1859, note: "Leader of the 1857 revolt at Kanpur; never recognized as Peshwa." }
    ]
  },
  gwalior: {
    name: "Gwalior (Scindia)",
    region: "Central India",
    rulers: [
      { name: "Mahadaji Shinde", title: "Maratha sardar", start: 1761, end: 1794, note: "Rebuilt Scindia power after Panipat." },
      { name: "Daulat Rao Shinde", title: "Maharaja of Gwalior", start: 1794, end: 1827, note: "Fought the British in the Second Anglo-Maratha War." },
      { name: "Jankoji Rao Shinde II", title: "Maharaja of Gwalior", start: 1827, end: 1843, note: "Died during the Gwalior succession crisis." },
      { name: "Jayajirao Shinde", title: "Maharaja of Gwalior", start: 1843, end: 1886, note: "Installed as a minor under a British-controlled regency." }
    ]
  },
  indore: {
    name: "Indore (Holkar)",
    region: "Central India",
    rulers: [
      { name: "Malhar Rao Holkar I", title: "Holkar sardar", start: 1731, end: 1766, note: "Veteran of Panipat; died soon after." },
      { name: "Ahilyabai Holkar", title: "Rani and regent", start: 1767, end: 1795, note: "Renowned administrator and builder." },
      { name: "Tukojirao Holkar I", title: "Holkar ruler", start: 1795, end: 1797, note: "Brief reign." },
      { name: "Kashi Rao Holkar", title: "Holkar ruler", start: 1797, end: 1799, note: "Deposed by Yashwant Rao Holkar." },
      { name: "Yashwant Rao Holkar", title: "Holkar ruler", start: 1799, end: 1811, note: "Fought the British in the Second Anglo-Maratha War." },
      { name: "Malhar Rao Holkar III", title: "Holkar ruler", start: 1811, end: 1833, note: "Defeated in the Third Anglo-Maratha War." },
      { name: "Martand Rao Holkar", title: "Holkar ruler", start: 1833, end: 1834, note: "Brief reign." },
      { name: "Hari Rao Holkar", title: "Holkar ruler", start: 1834, end: 1843, note: "Reigned during the Gwalior crisis." },
      { name: "Khande Rao Holkar", title: "Holkar ruler", start: 1843, end: 1844, note: "Brief reign." },
      { name: "Tukojirao Holkar II", title: "Holkar ruler", start: 1844, end: 1886, note: "Ruled during the 1857 revolt." }
    ]
  },
  nagpur: {
    name: "Nagpur (Bhonsle)",
    region: "Central India",
    rulers: [
      { name: "Raghuji Bhonsle I", title: "Bhonsle ruler", start: 1730, end: 1755, note: "Led the Maratha invasions of Bengal." },
      { name: "Janoji Bhonsle", title: "Bhonsle ruler", start: 1755, end: 1772, note: "Fought at Panipat." },
      { name: "Mudhoji Bhonsle", title: "Bhonsle ruler", start: 1772, end: 1788, note: "Ruled during the First Anglo-Maratha War." },
      { name: "Raghoji Bhonsle II", title: "Bhonsle ruler", start: 1788, end: 1816, note: "Fought the British in the Second Anglo-Maratha War." },
      { name: "Parsoji Bhonsle", title: "Bhonsle ruler", start: 1816, end: 1817, note: "Brief reign." },
      { name: "Appa Saheb Bhonsle", title: "Bhonsle ruler", start: 1817, end: 1818, note: "Defeated in the Third Anglo-Maratha War." },
      { name: "Raghuji Bhonsle III", title: "Bhonsle ruler", start: 1818, end: 1853, note: "Last ruler; Nagpur annexed by the Doctrine of Lapse in 1854." }
    ]
  },
  bengal: {
    name: "Bengal",
    region: "Bengal",
    rulers: [
      { name: "Murshid Quli Khan", title: "Nawab of Bengal", start: 1717, end: 1727, note: "Founder of the semi-independent Bengal nawabi." },
      { name: "Shuja-ud-Din Muhammad Khan", title: "Nawab of Bengal", start: 1727, end: 1739, note: "Consolidated Bengal's finances." },
      { name: "Sarfaraz Khan", title: "Nawab of Bengal", start: 1739, end: 1740, note: "Deposed by Alivardi Khan." },
      { name: "Alivardi Khan", title: "Nawab of Bengal", start: 1740, end: 1756, note: "Defended Bengal against Maratha raids." },
      { name: "Siraj-ud-Daulah", title: "Nawab of Bengal", start: 1756, end: 1757, note: "Defeated at Plassey." },
      { name: "Mir Jafar", title: "Nawab of Bengal", start: 1757, end: 1760, note: "Installed by the British after Plassey." },
      { name: "Mir Qasim", title: "Nawab of Bengal", start: 1760, end: 1763, note: "Fought the British at Buxar." },
      { name: "Mir Jafar", title: "Nawab of Bengal", start: 1763, end: 1765, note: "Restored by the British after Buxar." },
      { name: "Najm-ud-Daulah", title: "Nawab of Bengal", start: 1765, end: 1766, note: "Nominal Nawab under the Company's Diwani." },
      { name: "Saif-ud-Daulah", title: "Nawab of Bengal", start: 1766, end: 1770, note: "Nominal Nawab." },
      { name: "Mubarak-ud-Daulah", title: "Nawab of Bengal", start: 1770, end: 1793, note: "Nominal Nawab; British Resident controlled the state." },
      { name: "Babar Ali Khan", title: "Nawab of Bengal", start: 1793, end: 1810, note: "Ceremonial Nawab." },
      { name: "Zain-ud-Din Ali Khan", title: "Nawab of Bengal", start: 1810, end: 1821, note: "Ceremonial Nawab." },
      { name: "Ahmad Ali Khan", title: "Nawab of Bengal", start: 1821, end: 1838, note: "Ceremonial Nawab." },
      { name: "Mubarak Ali Khan II", title: "Nawab of Bengal", start: 1838, end: 1880, note: "Ceremonial Nawab during the 1857 revolt." }
    ]
  },
  awadh: {
    name: "Awadh",
    region: "Awadh",
    rulers: [
      { name: "Saadat Khan", title: "Nawab-Wazir of Awadh", start: 1722, end: 1739, note: "Founder of the Awadh nawabi." },
      { name: "Safdar Jung", title: "Nawab-Wazir of Awadh", start: 1739, end: 1754, note: "Powerful Mughal courtier and Awadh ruler." },
      { name: "Shuja-ud-Daula", title: "Nawab-Wazir of Awadh", start: 1754, end: 1775, note: "Fought at Buxar and later allied with the British." },
      { name: "Asaf-ud-Daula", title: "Nawab-Wazir of Awadh", start: 1775, end: 1797, note: "Moved the capital to Lucknow and built its monuments." },
      { name: "Wazir Ali Khan", title: "Nawab-Wazir of Awadh", start: 1797, end: 1798, note: "Brief, contested reign." },
      { name: "Saadat Ali Khan II", title: "Nawab-Wazir of Awadh", start: 1798, end: 1814, note: "Accepted a British subsidiary alliance." },
      { name: "Ghazi-ud-Din Haidar", title: "Nawab-Wazir of Awadh", start: 1814, end: 1827, note: "Took the title King of Awadh." },
      { name: "Nasir-ud-Din Haidar", title: "King of Awadh", start: 1827, end: 1837, note: "Continued court patronage and fiscal decline." },
      { name: "Muhammad Ali Shah", title: "King of Awadh", start: 1837, end: 1842, note: "Built the Husainabad complex in Lucknow." },
      { name: "Amjad Ali Shah", title: "King of Awadh", start: 1842, end: 1847, note: "Reigned during the Sindh and Sikh wars." },
      { name: "Wajid Ali Shah", title: "King of Awadh", start: 1847, end: 1856, note: "Deposed and exiled when Awadh was annexed." },
      { name: "Birjis Qadr", title: "Rebel Nawab", start: 1856, end: 1858, note: "Installed by rebels at Lucknow in 1857; Begum Hazrat Mahal was regent." }
    ]
  },
  hyderabad: {
    name: "Hyderabad",
    region: "Deccan",
    rulers: [
      { name: "Asaf Jah I", title: "Nizam of Hyderabad", start: 1724, end: 1748, note: "Founder of the Asaf Jahi dynasty." },
      { name: "Nasir Jung", title: "Nizam of Hyderabad", start: 1748, end: 1750, note: "Killed in the Carnatic succession wars." },
      { name: "Muzaffar Jung", title: "Nizam of Hyderabad", start: 1750, end: 1751, note: "Brief reign; killed in the Deccan." },
      { name: "Salabat Jung", title: "Nizam of Hyderabad", start: 1751, end: 1762, note: "Installed with French support." },
      { name: "Asaf Jah II", title: "Nizam of Hyderabad", start: 1762, end: 1803, note: "Fought Mysore and the Marathas; accepted British protection." },
      { name: "Asaf Jah III", title: "Nizam of Hyderabad", start: 1803, end: 1829, note: "Signed a subsidiary alliance with the British." },
      { name: "Asaf Jah IV", title: "Nizam of Hyderabad", start: 1829, end: 1857, note: "Ruled during the Sikh and Afghan wars." },
      { name: "Asaf Jah V", title: "Nizam of Hyderabad", start: 1857, end: 1869, note: "Ruled during the 1857 revolt." },
      { name: "Asaf Jah VI", title: "Nizam of Hyderabad", start: 1869, end: 1911, note: "Long-reigning Nizam during the Second Afghan and Third Burma wars." }
    ]
  },
  mysore_wodeyar: {
    name: "Mysore (Wodeyar)",
    region: "Karnataka",
    rulers: [
      { name: "Krishnaraja Wodeyar II", title: "Maharaja of Mysore", start: 1734, end: 1766, note: "Titular ruler during Hyder Ali's rise." },
      { name: "Nanjaraja Wodeyar", title: "Maharaja of Mysore", start: 1766, end: 1770, note: "Titular ruler; real power lay with Hyder Ali." },
      { name: "Chamaraja Wodeyar VIII", title: "Maharaja of Mysore", start: 1770, end: 1776, note: "Titular ruler during the First Anglo-Mysore War." },
      { name: "Chamaraja Wodeyar IX", title: "Maharaja of Mysore", start: 1776, end: 1796, note: "Titular ruler during the wars of Hyder and Tipu." },
      { name: "Krishnaraja Wodeyar III", title: "Maharaja of Mysore", start: 1799, end: 1868, note: "Restored by the British after Tipu's fall." },
      { name: "Chamaraja Wodeyar X", title: "Maharaja of Mysore", start: 1868, end: 1894, note: "Ruled during the later Crown-era wars." }
    ]
  },
  mysore_effective: {
    name: "Mysore (effective rulers)",
    region: "Karnataka",
    rulers: [
      { name: "Hyder Ali", title: "Sultan and de facto ruler", start: 1761, end: 1782, note: "Rose from military commander to ruler of Mysore." },
      { name: "Tipu Sultan", title: "Sultan of Mysore", start: 1782, end: 1799, note: "Fought four Anglo-Mysore wars; died defending Seringapatam." }
    ]
  },
  carnatic: {
    name: "Carnatic",
    region: "South India",
    rulers: [
      { name: "Anwar-ud-Din Khan", title: "Nawab of the Carnatic", start: 1744, end: 1749, note: "Killed at the Battle of Ambur." },
      { name: "Chanda Sahib", title: "Nawab of the Carnatic (contested)", start: 1749, end: 1752, note: "French-backed claimant; executed after Trichinopoly." },
      { name: "Muhammad Ali Khan Wallajah", title: "Nawab of the Carnatic", start: 1749, end: 1795, note: "British-backed Nawab; consolidated British influence." },
      { name: "Umdat-ul-Umrah", title: "Nawab of the Carnatic", start: 1795, end: 1801, note: "Ruled during the Fourth Anglo-Mysore War and Polygar Wars." },
      { name: "Azim-ud-Daula", title: "Nawab of the Carnatic", start: 1801, end: 1819, note: "Signed a subsidiary treaty with the British." },
      { name: "Azam Jah", title: "Nawab of the Carnatic", start: 1819, end: 1825, note: "Ceremonial Nawab." },
      { name: "Ghulam Muhammad Ghouse Khan", title: "Nawab of the Carnatic", start: 1825, end: 1855, note: "Last Nawab; the Carnatic was annexed in 1855." }
    ]
  },
  sikhs: {
    name: "Sikhs",
    region: "Punjab",
    rulers: [
      { name: "Guru Hargobind", title: "Sikh Guru", start: 1606, end: 1644, note: "Militarized the Sikh community." },
      { name: "Guru Har Rai", title: "Sikh Guru", start: 1644, end: 1661, note: "Maintained the Sikh panth during Mughal pressure." },
      { name: "Guru Har Krishan", title: "Sikh Guru", start: 1661, end: 1664, note: "Youngest Sikh Guru." },
      { name: "Guru Tegh Bahadur", title: "Sikh Guru", start: 1664, end: 1675, note: "Executed by Aurangzeb in Delhi." },
      { name: "Guru Gobind Singh", title: "Sikh Guru", start: 1675, end: 1708, note: "Founded the Khalsa in 1699 and led resistance to the Mughals." },
      { name: "Banda Singh Bahadur", title: "Military leader", start: 1708, end: 1716, note: "Led the first major Sikh revolt; executed in 1716." },
      { name: "Sikh Misls", title: "Confederacy of misls", start: 1716, end: 1801, note: "Collective Sikh confederacy before Ranjit Singh." },
      { name: "Ranjit Singh", title: "Maharaja of the Sikh Empire", start: 1801, end: 1839, note: "Founder of the Sikh Empire." },
      { name: "Kharak Singh", title: "Maharaja", start: 1839, end: 1839, note: "Brief reign." },
      { name: "Nau Nihal Singh", title: "Maharaja", start: 1839, end: 1840, note: "Died in a palace accident." },
      { name: "Chand Kaur", title: "Regent", start: 1840, end: 1841, note: "Regent during the succession crisis." },
      { name: "Sher Singh", title: "Maharaja", start: 1841, end: 1843, note: "Ruled during the Dogra-Tibetan War." },
      { name: "Duleep Singh", title: "Maharaja", start: 1843, end: 1849, note: "Child ruler; Punjab annexed in 1849." }
    ]
  },
  nepal: {
    name: "Nepal",
    region: "Himalayas",
    rulers: [
      { name: "Prithvi Narayan Shah", title: "King of Nepal", start: 1768, end: 1775, note: "Unified Nepal." },
      { name: "Pratap Singh Shah", title: "King of Nepal", start: 1775, end: 1777, note: "Brief reign." },
      { name: "Rana Bahadur Shah", title: "King of Nepal", start: 1777, end: 1799, note: "Abdicated during the Anglo-Nepalese War's prelude." },
      { name: "Girvan Yuddha Bikram Shah", title: "King of Nepal", start: 1799, end: 1816, note: "Reigned during the Anglo-Nepalese War." },
      { name: "Rajendra Bikram Shah", title: "King of Nepal", start: 1816, end: 1847, note: "Reigned during the first three Anglo-Burmese and Afghan wars." },
      { name: "Surendra Bikram Shah", title: "King of Nepal", start: 1847, end: 1881, note: "Reigned during the 1857 revolt and later Crown wars." },
      { name: "Bhimsen Thapa", title: "Mukhtiyar (Prime Minister)", start: 1806, end: 1837, note: "Effective ruler during the Anglo-Nepalese War." },
      { name: "Jung Bahadur Rana", title: "Prime Minister", start: 1846, end: 1877, note: "Founder of the Rana oligarchy." }
    ]
  },
  burma: {
    name: "Burma (Konbaung)",
    region: "Burma",
    rulers: [
      { name: "Alaungpaya", title: "King of Burma", start: 1752, end: 1760, note: "Founder of the Konbaung dynasty." },
      { name: "Naungdawgyi", title: "King of Burma", start: 1760, end: 1763, note: "Consolidated Konbaung rule." },
      { name: "Hsinbyushin", title: "King of Burma", start: 1763, end: 1776, note: "Fought Siam and expanded Burmese power." },
      { name: "Singu Min", title: "King of Burma", start: 1776, end: 1782, note: "Deposed in a palace coup." },
      { name: "Phaungkaza Maung Maung", title: "King of Burma", start: 1782, end: 1782, note: "Brief reign." },
      { name: "Bodawpaya", title: "King of Burma", start: 1782, end: 1819, note: "Expanded westward and clashed with British India." },
      { name: "Bagyidaw", title: "King of Burma", start: 1819, end: 1837, note: "Lost the First Anglo-Burmese War." },
      { name: "Tharrawaddy", title: "King of Burma", start: 1837, end: 1846, note: "Rejected the Treaty of Yandabo." },
      { name: "Pagan Min", title: "King of Burma", start: 1846, end: 1853, note: "Lost Lower Burma in the Second Anglo-Burmese War." },
      { name: "Mindon Min", title: "King of Burma", start: 1853, end: 1878, note: "Reformer who tried to modernize Burma." },
      { name: "Thibaw Min", title: "King of Burma", start: 1878, end: 1885, note: "Last Konbaung king; deposed by the British." }
    ]
  },
  afghanistan: {
    name: "Afghanistan",
    region: "Afghanistan",
    rulers: [
      { name: "Ahmad Shah Durrani", title: "Emperor of the Durrani Empire", start: 1747, end: 1772, note: "Founder of the Durrani Empire; victor at Panipat." },
      { name: "Timur Shah Durrani", title: "Emperor of the Durrani Empire", start: 1772, end: 1793, note: "Moved the capital to Kabul." },
      { name: "Zaman Shah Durrani", title: "Emperor of the Durrani Empire", start: 1793, end: 1801, note: "Led campaigns into Punjab." },
      { name: "Mahmud Shah Durrani", title: "Emperor of the Durrani Empire", start: 1801, end: 1803, note: "First reign." },
      { name: "Shah Shuja Durrani", title: "Emperor of the Durrani Empire", start: 1803, end: 1809, note: "First reign; later British-backed ruler." },
      { name: "Mahmud Shah Durrani", title: "Emperor of the Durrani Empire", start: 1809, end: 1818, note: "Second reign." },
      { name: "Dost Mohammad Khan", title: "Emir of Afghanistan", start: 1826, end: 1839, note: "Founder of the Barakzai dynasty; deposed by the British." },
      { name: "Shah Shuja Durrani", title: "Emir of Afghanistan", start: 1839, end: 1842, note: "British-backed ruler during the First Anglo-Afghan War." },
      { name: "Dost Mohammad Khan", title: "Emir of Afghanistan", start: 1842, end: 1863, note: "Restored after the British withdrawal." },
      { name: "Sher Ali Khan", title: "Emir of Afghanistan", start: 1863, end: 1866, note: "First reign." },
      { name: "Sher Ali Khan", title: "Emir of Afghanistan", start: 1868, end: 1879, note: "Second reign; faced the British invasion in 1878." },
      { name: "Yaqub Khan", title: "Emir of Afghanistan", start: 1879, end: 1879, note: "Signed the Treaty of Gandamak." },
      { name: "Abdur Rahman Khan", title: "Emir of Afghanistan", start: 1880, end: 1901, note: "British-recognized Emir after the Second Anglo-Afghan War." }
    ]
  },
  rohilkhand: {
    name: "Rohilkhand",
    region: "Uttar Pradesh",
    rulers: [
      { name: "Ali Muhammad Khan", title: "Nawab of Rohilkhand", start: 1721, end: 1748, note: "Founder of Rohilla power." },
      { name: "Hafiz Rahmat Khan", title: "Regent and Rohilla chief", start: 1748, end: 1774, note: "Killed at Miranpur Katra." },
      { name: "Najib-ud-Daula", title: "Rohilla chief", start: 1755, end: 1770, note: "Key ally of Ahmad Shah Durrani at Panipat." },
      { name: "Faizullah Khan", title: "Nawab of Rampur", start: 1774, end: 1794, note: "Survived the Rohilla War as a British client." }
    ]
  },
  travancore: {
    name: "Travancore",
    region: "Kerala",
    rulers: [
      { name: "Marthanda Varma", title: "Maharaja of Travancore", start: 1729, end: 1758, note: "Defeated the Dutch at Colachel." },
      { name: "Dharma Raja", title: "Maharaja of Travancore", start: 1758, end: 1798, note: "Faced Mysore's invasions and allied with the British." },
      { name: "Balarama Varma", title: "Maharaja of Travancore", start: 1798, end: 1810, note: "Ruled during the Fourth Anglo-Mysore War." },
      { name: "Uthram Thirunal Marthanda Varma", title: "Maharaja of Travancore", start: 1846, end: 1860, note: "Ruled during the 1857 revolt." },
      { name: "Ayilyam Thirunal", title: "Maharaja of Travancore", start: 1860, end: 1880, note: "Reformer and modernizer." },
      { name: "Visakham Thirunal", title: "Maharaja of Travancore", start: 1880, end: 1885, note: "Brief reign." },
      { name: "Moolam Thirunal", title: "Maharaja of Travancore", start: 1885, end: 1924, note: "Ruled during the Third Anglo-Burmese War." }
    ]
  },
  sindh: {
    name: "Sindh",
    region: "Sindh",
    rulers: [
      { name: "Mir Fateh Ali Khan Talpur", title: "Mir of Sindh", start: 1783, end: 1801, note: "Founder of Talpur rule in Sindh." },
      { name: "Mir Ghulam Ali Khan Talpur", title: "Mir of Sindh", start: 1801, end: 1811, note: "Ruled the Hyderabad branch." },
      { name: "Mir Karam Ali Khan Talpur", title: "Mir of Sindh", start: 1811, end: 1828, note: "Ruled during the Sikh-Afghan wars." },
      { name: "Mir Murad Ali Khan Talpur", title: "Mir of Sindh", start: 1828, end: 1832, note: "Signed an unequal treaty with the British." },
      { name: "Mir Nur Mohammad Khan Talpur", title: "Mir of Sindh", start: 1832, end: 1840, note: "Faced British pressure over the Indus." },
      { name: "Mir Nasir Khan Talpur", title: "Mir of Sindh", start: 1840, end: 1843, note: "Defeated at Miani and Hyderabad." },
      { name: "Mir Sher Muhammad Talpur", title: "Mir of Mirpur Khas", start: 1840, end: 1843, note: "Fought at Miani; continued resistance after annexation." }
    ]
  },
  rajputana: {
    name: "Rajputana",
    region: "Rajasthan",
    rulers: [
      { name: "Rana Raj Singh I", title: "Rana of Mewar", start: 1652, end: 1680, note: "Led early resistance to Aurangzeb." },
      { name: "Jai Singh I", title: "Raja of Amber", start: 1621, end: 1667, note: "Mughal ally and general." },
      { name: "Ram Singh I", title: "Raja of Amber", start: 1667, end: 1688, note: "Ruled during the Rajput war." },
      { name: "Ajit Singh", title: "Raja of Marwar", start: 1679, end: 1724, note: "Posthumous son of Jaswant Singh; symbol of Rathore resistance." },
      { name: "Amar Singh II", title: "Rana of Mewar", start: 1698, end: 1710, note: "Continued Mewar's resistance." },
      { name: "Durga Das Rathore", title: "Rathore regent and commander", start: 1679, end: 1707, note: "Led guerrilla resistance in Marwar." }
    ]
  },
  tibet: {
    name: "Tibet",
    region: "Tibet",
    rulers: [
      { name: "8th Dalai Lama", title: "Dalai Lama", start: 1762, end: 1804, note: "Jamphel Gyatso." },
      { name: "9th Dalai Lama", title: "Dalai Lama", start: 1806, end: 1815, note: "Lungtok Gyatso." },
      { name: "10th Dalai Lama", title: "Dalai Lama", start: 1816, end: 1837, note: "Tsultrim Gyatso." },
      { name: "11th Dalai Lama", title: "Dalai Lama", start: 1840, end: 1856, note: "Khedrup Gyatso; reigned during the Dogra-Tibetan and Nepal-Tibet wars." },
      { name: "12th Dalai Lama", title: "Dalai Lama", start: 1856, end: 1875, note: "Trinley Gyatso." },
      { name: "13th Dalai Lama", title: "Dalai Lama", start: 1875, end: 1933, note: "Thubten Gyatso." }
    ]
  },
  qing: {
    name: "Qing China",
    region: "China and Tibet",
    rulers: [
      { name: "Qianlong", title: "Qing Emperor", start: 1735, end: 1796, note: "Expanded Qing influence in Tibet." },
      { name: "Jiaqing", title: "Qing Emperor", start: 1796, end: 1820, note: "Ruled during the Anglo-Nepalese War." },
      { name: "Daoguang", title: "Qing Emperor", start: 1820, end: 1850, note: "Ruled during the Dogra-Tibetan War." },
      { name: "Xianfeng", title: "Qing Emperor", start: 1850, end: 1861, note: "Ruled during the Nepal-Tibet War." },
      { name: "Tongzhi", title: "Qing Emperor", start: 1861, end: 1875, note: "Ruled during the later Crown-era wars." },
      { name: "Guangxu", title: "Qing Emperor", start: 1875, end: 1908, note: "Ruled during the Third Anglo-Burmese War." }
    ]
  },
  france: {
    name: "French India",
    region: "Pondicherry and the Carnatic",
    rulers: [
      { name: "Joseph François Dupleix", title: "Governor-General of French India", start: 1742, end: 1754, note: "Architect of French intervention in Carnatic politics." },
      { name: "Charles Godeheu", title: "Governor-General of French India", start: 1754, end: 1755, note: "Replaced Dupleix and sought peace with the British." },
      { name: "Thomas Arthur de Lally", title: "Commander and Governor-General", start: 1758, end: 1760, note: "Led the French in the Third Carnatic War." }
    ]
  },
  dutch: {
    name: "Dutch East India Company",
    region: "Ceylon and the Malabar Coast",
    rulers: [
      { name: "Adriaan Valckenier", title: "Governor-General of the Dutch East Indies", start: 1737, end: 1741, note: "Governor-General when the Dutch fleet sailed against Travancore." },
      { name: "Johannes Thedens", title: "Governor-General of the Dutch East Indies", start: 1741, end: 1743, note: "Took office during the Colachel campaign." },
      { name: "Gustaaf Willem van Imhoff", title: "Governor-General of the Dutch East Indies", start: 1743, end: 1750, note: "Reformed Dutch colonial administration." }
    ]
  },
  polygars: {
    name: "Polygar chieftains",
    region: "Tamil Nadu",
    rulers: [
      { name: "Veerapandiya Kattabomman", title: "Polygar of Panchalankurichi", start: 1790, end: 1799, note: "Executed after resisting British revenue demands." },
      { name: "Maruthu Pandiyar", title: "Polygar brothers of Sivaganga", start: 1780, end: 1801, note: "Leaders of the Second Polygar War." },
      { name: "Oomathurai", title: "Polygar commander", start: 1801, end: 1805, note: "Continued resistance after the Maruthu brothers' capture." }
    ]
  },
  paikas: {
    name: "Paika militia",
    region: "Odisha",
    rulers: [
      { name: "Bakshi Jagabandhu", title: "Paika commander", start: 1817, end: 1818, note: "Leader of the Paika Rebellion." }
    ]
  }
};
