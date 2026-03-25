export type Partner = {
  id: number;
  name: string;
  logo: string;
  category: string;
};

export type InternationalPartner = {
  id: number;
  name: string;
  country: string;
  logo: string;
};

export const partnersData: Partner[] = [
  { id: 1, name: "O'zbekiston Markaziy Banki", logo: "/partners/cbu.jpg", category: "Moliya" },
  { id: 2, name: "Ipoteka Bank", logo: "/partners/ipoteka.jpg", category: "Bank" },
  { id: 3, name: "Asakabank", logo: "/partners/asaka.jpg", category: "Bank" },
  { id: 4, name: "Ernst & Young", logo: "/partners/ey.jpg", category: "Konsalting" },
  { id: 5, name: "Deloitte", logo: "/partners/deloitte.jpg", category: "Konsalting" },
  { id: 6, name: "UNDP Uzbekistan", logo: "/partners/undp.jpg", category: "Xalqaro" },
  { id: 7, name: "Iqtisodiyot va Moliya Vazirligi", logo: "/partners/mef.jpg", category: "Davlat" },
  { id: 8, name: "Uzbekistan Airways", logo: "/partners/uzairways.jpg", category: "Turizm" },
];

export const internationalPartners: InternationalPartner[] = [
  { id: 1, name: "University of Westminster", country: "🇬🇧 Buyuk Britaniya", logo: "/partners/westminster.jpg" },
  { id: 2, name: "Kazan Federal University", country: "🇷🇺 Rossiya", logo: "/partners/kazan.jpg" },
  { id: 3, name: "Ankara University", country: "🇹🇷 Turkiya", logo: "/partners/ankara.jpg" },
  { id: 4, name: "Seoul National University", country: "🇰🇷 Janubiy Koreya", logo: "/partners/seoul.jpg" },
];
