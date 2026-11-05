export interface ProfileData {
  fullName: string;
  firstName: string;
  age: number;
  avatarUrl: string;
  roleUz: string;
  roleEn: string;
  taglineUz: string;
  taglineEn: string;
  bioUz: string;
  bioEn: string;
  telegramUsername: string;
  telegramUrl: string;
  phoneNumber: string;
  phoneUrl: string;
  showPhone: boolean;
  interestsUz: string[];
  interestsEn: string[];
}

export const profileData: ProfileData = {
  fullName: "Ayubxon Murodov",
  firstName: "Ayubxon",
  age: 14,
  avatarUrl: "/ayubxon.jpg",
  roleUz: "AI & Web Dasturchi",
  roleEn: "AI & Web Developer",
  taglineUz: "AI va Web texnologiyalar orqali real muammolarga yechim yarataman.",
  taglineEn: "I build solutions to real-world problems with AI and web technologies.",
  bioUz: "Men Ayubxon Murodov — AI agentlar, Telegram botlar va zamonaviy veb-ilovalar yaratishga qiziquvchi 14 yoshli dasturchiman. Amaliy loyihalar ustida ishlash, biznes jarayonlarini sun'iy intellekt orqali avtomatlashtirish va foydali raqamli mahsulotlar yaratishga intilaman.",
  bioEn: "I'm Ayubxon Murodov, a 14-year-old developer passionate about building AI agents, Telegram bots, and modern web applications. I focus on learning through practical problem-solving, building useful digital products, and exploring AI-driven business automation.",
  telegramUsername: "@AyubxonMurodov",
  telegramUrl: "https://t.me/AyubxonMurodov",
  phoneNumber: "+998 88 737 57 59",
  phoneUrl: "tel:+998887375759",
  showPhone: true,
  interestsUz: [
    "AI Agentlar yaratish",
    "Telegram Botlar dasturlash",
    "Zamonaviy Veb-ishlanmalar",
    "AI integratsiyalari va avtomatlashtirish",
    "Amaliy dasturiy mahsulotlar",
  ],
  interestsEn: [
    "AI Agent Development",
    "Telegram Bot Development",
    "Modern Web Development",
    "AI Integrations & Business Automation",
    "Practical Software Products",
  ],
};
