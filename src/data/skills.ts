export interface SkillItem {
  name: string;
  levelUz?: string;
  levelEn?: string;
}

export interface SkillCategory {
  id: string;
  titleUz: string;
  titleEn: string;
  descriptionUz: string;
  descriptionEn: string;
  iconName: 'Layout' | 'Bot' | 'Cpu' | 'Code';
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleUz: "Frontend Dasturlash",
    titleEn: "Frontend Development",
    descriptionUz: "Interaktiv, moslashuvchan va zamonaviy foydalanuvchi interfeyslari yaratish.",
    descriptionEn: "Crafting interactive, responsive, and modern user interfaces.",
    iconName: "Layout",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "React" },
    ],
  },
  {
    id: "ai-automation",
    titleUz: "AI va Avtomatlashtirish",
    titleEn: "AI & Automation",
    descriptionUz: "Sun'iy intellekt modellarini amaliy jarayonlarga tatbiq etish va tizimlarni bog'lash.",
    descriptionEn: "Integrating AI models into practical workflows and connecting smart systems.",
    iconName: "Cpu",
    items: [
      { name: "AI Agentlar" },
      { name: "AI API Integratsiyasi" },
      { name: "Ish jarayonlarini avtomatlashtirish" },
    ],
  },
  {
    id: "bot-dev",
    titleUz: "Telegram Botlar",
    titleEn: "Telegram Bot Development",
    descriptionUz: "Foydalanuvchilarga qulay va funksional Telegram botlarini ishlab chiqish.",
    descriptionEn: "Developing functional, user-friendly Telegram bots for communication and services.",
    iconName: "Bot",
    items: [
      { name: "Telegram Botlar" },
      { name: "Telegram API integratsiyasi" },
      { name: "Buyurtma & aloqa botlari" },
    ],
  },
  {
    id: "software-dev",
    titleUz: "Dasturiy Ishlanmalar",
    titleEn: "Software Development",
    descriptionUz: "Turli servislar va API'larni birlashtirish orqali amaliy yechimlar yaratish.",
    descriptionEn: "Building practical solutions by connecting various services and modern APIs.",
    iconName: "Code",
    items: [
      { name: "API integratsiyasi" },
      { name: "Frontend & Backend bog'lanishi" },
      { name: "Amaliy dasturiy mahsulotlar" },
    ],
  },
];
