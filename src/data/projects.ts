export interface ProjectItem {
  id: string;
  nameUz: string;
  nameEn: string;
  taglineUz: string;
  taglineEn: string;
  descriptionUz: string;
  descriptionEn: string;
  fullDetailsUz: string[];
  fullDetailsEn: string[];
  statusUz: string;
  statusEn: string;
  statusType: 'in-progress' | 'completed' | 'planned';
  categoryUz: string;
  categoryEn: string;
  tags: string[];
  demoUrl?: string | null;
  githubUrl?: string | null;
  highlightsUz: string[];
  highlightsEn: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "ai-supermarket-system",
    nameUz: "AI Supermarket System",
    nameEn: "AI Supermarket System",
    taglineUz: "Supermarket jarayonlarini AI orqali raqamlashtirish tashabbusi",
    taglineEn: "An initiative to digitize and optimize supermarket workflows with AI",
    descriptionUz: "Supermarket jarayonlarini raqamli boshqarish va AI imkoniyatlarini biznes ehtiyojlariga moslashtirishga qaratilgan loyiha.",
    descriptionEn: "A project focused on digital supermarket operations and exploring how AI can support practical business needs.",
    fullDetailsUz: [
      "Loyiha an'anaviy supermarketlar va do'konlardagi kundalik jarayonlarni (tovarlar monitoringi, mijozlar talablarini tahlil qilish, avtomatlashtirilgan hisob-kitob) yengillashtirishga qaratilgan.",
      "Veb-platforma orqali xodimlar va boshqaruvchilar do'kondagi asosiy ko'rsatkichlarni real vaqtda kuzatishi hamda AI yordamida tezkor tavsiyalar olishi rejalashtirilgan.",
      "Hozirda loyihaning arxitekturasi va asosiy veb-interfeysi ishlab chiqilish jarayonida bo'lib, AI modullarini integratsiya qilish ustida ish olib borilmoqda."
    ],
    fullDetailsEn: [
      "The initiative aims to streamline daily supermarket routines such as inventory tracking, customer demand patterns, and automated reporting.",
      "A modern web dashboard provides managers and staff with clear visual insights and AI-driven recommendations tailored to local retail needs.",
      "Currently under active development: the web interface structure and AI integration layer are being implemented iteratively."
    ],
    statusUz: "Jarayonda",
    statusEn: "In Progress",
    statusType: "in-progress",
    categoryUz: "AI & Veb Tizim",
    categoryEn: "AI & Web System",
    tags: ["React", "AI Integration", "Tailwind CSS", "API", "Web App"],
    demoUrl: null, // Faqat tasdiqlangan real havola bo'lganda ko'rsatiladi
    githubUrl: null,
    highlightsUz: [
      "AI asosida tahlil va tavsiyalar",
      "Tezkor va qulay veb-boshqaruv paneli",
      "Real biznes ehtiyojlariga moslashtirilgan yechim"
    ],
    highlightsEn: [
      "AI-driven operational insights",
      "Fast, responsive web control interface",
      "Engineered for practical retail operations"
    ]
  }
];
