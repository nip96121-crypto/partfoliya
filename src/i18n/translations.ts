export type Language = 'uz' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    approach: string;
    contact: string;
    switchLang: string;
    toggleTheme: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    availableBadge: string;
    codeCardTitle: string;
    codeCardStatus: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    focusTitle: string;
    focusAreas: {
      title: string;
      desc: string;
    }[];
    quickFactsTitle: string;
    facts: {
      label: string;
      value: string;
    }[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    note: string;
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    statusLabel: string;
    noExternalLinkNote: string;
    modalClose: string;
    highlightsTitle: string;
    techStackTitle: string;
    statusDetailsTitle: string;
  };
  approach: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    telegramBtn: string;
    phoneBtn: string;
    copyPhone: string;
    copiedNotice: string;
    copyErrorNotice: string;
    availabilityTitle: string;
    availabilityText: string;
    directContactTitle: string;
  };
  footer: {
    role: string;
    navigationTitle: string;
    socialTitle: string;
    rights: string;
    builtWith: string;
  };
}

export const translations: Record<Language, Translations> = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      approach: "Yondashuv",
      contact: "Bog'lanish",
      switchLang: "Tilni o'zgartirish",
      toggleTheme: "Mavzuni almashtirish",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
    },
    hero: {
      badge: "AI & Web Dasturchi",
      headlinePart1: "AI va Web texnologiyalar orqali ",
      headlineHighlight: "real muammolarga",
      headlinePart2: " yechim yarataman.",
      description: "Men Ayubxon Murodov — AI agentlar, Telegram botlar va zamonaviy veb-ilovalar yaratishga qiziquvchi dasturchiman.",
      primaryCta: "Loyihalarimni ko'rish",
      secondaryCta: "Bog'lanish",
      availableBadge: "Yangi g'oyalar va loyihalarga ochiq",
      codeCardTitle: "ayubxon.init()",
      codeCardStatus: "Faol va rivojlanishda",
    },
    about: {
      sectionTag: "Tanishuv",
      title: "Men haqimda",
      subtitle: "Zamonaviy texnologiyalarni amaliyotga tatbiq etish va biznes jarayonlarini yengillashtirish.",
      p1: "Salom! Men Ayubxon Murodov, 14 yoshdaman. Dasturlashga bo'lgan qiziqishim orqali AI agentlar, Telegram botlar va veb-platformalar yaratish bilan shug'ullanaman.",
      p2: "Nazariyadan ko'ra ko'proq amaliyot orqali o'rganishni ma'qul ko'raman. Har bir loyihada muammoning ildizini tushunib, unga qulay va foydalanuvchiga haqiqiy foyda keltiradigan raqamli yechim topishga intilaman.",
      p3: "Hozirgi vaqtda supermarketlar va chakana savdo jarayonlarini sun'iy intellekt orqali raqamlashtirish tashabbusi ustida ishlamoqdaman.",
      focusTitle: "Asosiy qiziqishlar",
      focusAreas: [
        {
          title: "AI Agentlar va Integratsiya",
          desc: "Sun'iy intellekt modellarini real biznes vazifalarini avtomatlashtirishga yo'naltirish."
        },
        {
          title: "Telegram Botlar",
          desc: "Tezkor, interaktiv va buyurtmalar/muloqotni osonlashtiruvchi bot tizimlari."
        },
        {
          title: "Zamonaviy Veb-ilovalar",
          desc: "Tez ishlaydigan, moslashuvchan va foydalanuvchiga yoqimli interfeyslar."
        }
      ],
      quickFactsTitle: "Qisqacha faktlar",
      facts: [
        { label: "Yoshi", value: "14 yosh" },
        { label: "Asosiy yo'nalish", value: "AI & Veb dasturlash" },
        { label: "Falsafa", value: "Amaliyot orqali o'rganish" },
        { label: "Aloqa", value: "Telegram & Telefon" }
      ]
    },
    skills: {
      sectionTag: "Texnologiyalar",
      title: "Ko'nikmalar va Vositalar",
      subtitle: "Amaliy loyihalarda qo'llayotgan texnologiyalarim va faol o'rganayotgan sohalarim.",
      note: "Ko'rsatilgan sohalar amaliyotda foydalanilayotgan va izlanish olib borilayotgan yo'nalishlardir."
    },
    projects: {
      sectionTag: "Ishlanmalar",
      title: "Loyiha Tashabbuslari",
      subtitle: "Amaliy muammolarni hal qilishga qaratilgan haqiqiy ishlar.",
      viewDetails: "Batafsil ma'lumot",
      statusLabel: "Holat",
      noExternalLinkNote: "Loyiha hozirda ishlab chiqish bosqichida bo'lgani uchun ommaviy havola taqdim etilmagan.",
      modalClose: "Yopish",
      highlightsTitle: "Asosiy xususiyatlar",
      techStackTitle: "Qo'llanilayotgan texnologiyalar",
      statusDetailsTitle: "Loyiha holati haqida",
    },
    approach: {
      sectionTag: "Metodologiya",
      title: "Ishga Yondashuv",
      subtitle: "Har bir loyiha ustida ishlashda amal qiladigan 5 bosqichli tartib.",
      steps: [
        {
          number: "01",
          title: "Muammoni tushunish",
          desc: "Vazifaning mohiyatini, foydalanuvchilar ehtiyojini va kutilayotgan natijani chuqur o'rganish."
        },
        {
          number: "02",
          title: "Yechimni rejalashtirish",
          desc: "Dastur arxitekturasi, ma'lumotlar oqimi va zarur vositalarni oldindan aniq belgilab olish."
        },
        {
          number: "03",
          title: "Dizayn va dasturlash",
          desc: "Qulay interfeys yaratish va toza, tushunarli hamda kengaytiriladigan kod yozish."
        },
        {
          number: "04",
          title: "AI va API integratsiyasi",
          desc: "Zarur bo'lganda sun'iy intellekt imkoniyatlari va tashqi servislarni uyg'unlashtirish."
        },
        {
          number: "05",
          title: "Sinov va takomillashtirish",
          desc: "Har bir funksiyani turli qurilmalarda sinash, xatolarni tuzatish va sifatni oshirish."
        }
      ]
    },
    contact: {
      sectionTag: "Aloqa",
      title: "Keling, foydali loyiha yaratamiz.",
      subtitle: "AI agentlar, Telegram botlar yoki veb-loyiha g'oyalaringiz bo'lsa, muloqotga doimo tayyorman.",
      telegramBtn: "Telegram orqali yozish",
      phoneBtn: "Qo'ng'iroq qilish",
      copyPhone: "Raqamni nusxalash",
      copiedNotice: "Telefon raqami buferga nusxalandi!",
      copyErrorNotice: "Nusxalab bo'lmadi, iltimos raqamni to'g'ridan-to'g'ri tering.",
      availabilityTitle: "Hamkorlikka ochiq",
      availabilityText: "Amaliy loyihalar, texnologik maslahat va yangi g'oyalarni muhokama qilish uchun bemalol bog'lanishingiz mumkin.",
      directContactTitle: "To'g'ridan-to'g'ri aloqa",
    },
    footer: {
      role: "AI & Web Dasturchi",
      navigationTitle: "Navigatsiya",
      socialTitle: "Aloqa kanallari",
      rights: "Barcha huquqlar himoyalangan.",
      builtWith: "React, TypeScript va Tailwind CSS bilan yaratilgan.",
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      approach: "Approach",
      contact: "Contact",
      switchLang: "Switch language",
      toggleTheme: "Toggle theme",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      badge: "AI & Web Developer",
      headlinePart1: "I build solutions to ",
      headlineHighlight: "real-world problems",
      headlinePart2: " with AI and web technologies.",
      description: "I'm Ayubxon Murodov, a developer focused on AI agents, Telegram bots, and modern web applications.",
      primaryCta: "Explore my projects",
      secondaryCta: "Get in touch",
      availableBadge: "Open to practical ideas and initiatives",
      codeCardTitle: "ayubxon.init()",
      codeCardStatus: "Active and evolving",
    },
    about: {
      sectionTag: "Profile",
      title: "About Me",
      subtitle: "Bridging modern technologies with practical business solutions.",
      p1: "Hello! I'm Ayubxon Murodov, 14 years old. Driven by curiosity in modern software, I focus on developing AI agents, Telegram bots, and web platforms.",
      p2: "I prioritize learning through hands-on practical projects over pure theory. For every problem, my goal is to craft a clean, accessible, and genuinely helpful digital solution.",
      p3: "Currently, I am actively building an AI-powered system initiative designed to streamline everyday supermarket and retail operations.",
      focusTitle: "Core Focus Areas",
      focusAreas: [
        {
          title: "AI Agents & Integration",
          desc: "Connecting AI models to automate practical business workflows."
        },
        {
          title: "Telegram Bot Development",
          desc: "Building fast, reliable bots for communication and customer services."
        },
        {
          title: "Modern Web Applications",
          desc: "Delivering responsive, high-performance interfaces that feel effortless to use."
        }
      ],
      quickFactsTitle: "Key Information",
      facts: [
        { label: "Age", value: "14 years old" },
        { label: "Focus", value: "AI & Web Engineering" },
        { label: "Philosophy", value: "Learn by building" },
        { label: "Contact", value: "Telegram & Phone" }
      ]
    },
    skills: {
      sectionTag: "Toolkit",
      title: "Skills & Technologies",
      subtitle: "Technologies I build with and areas of active learning and experimentation.",
      note: "Highlighted items reflect active practical exploration and verified interest areas."
    },
    projects: {
      sectionTag: "Portfolio",
      title: "Project Initiatives",
      subtitle: "Practical software designed to solve concrete problems.",
      viewDetails: "View Details",
      statusLabel: "Status",
      noExternalLinkNote: "This project is currently in active development; public links will be available upon release.",
      modalClose: "Close",
      highlightsTitle: "Key Highlights",
      techStackTitle: "Technologies Applied",
      statusDetailsTitle: "About Current Status",
    },
    approach: {
      sectionTag: "Methodology",
      title: "Development Approach",
      subtitle: "A structured 5-step process I follow for building sustainable software.",
      steps: [
        {
          number: "01",
          title: "Understand the problem",
          desc: "Grasping core requirements, user pain points, and target outcomes thoroughly."
        },
        {
          number: "02",
          title: "Plan the solution",
          desc: "Architecting data flows, interface components, and selecting the right tools."
        },
        {
          number: "03",
          title: "Design and develop",
          desc: "Creating intuitive interfaces and writing clean, maintainable, modular code."
        },
        {
          number: "04",
          title: "Integrate APIs or AI",
          desc: "Hooking up AI capabilities and modern external APIs where they add true value."
        },
        {
          number: "05",
          title: "Test, refine, and improve",
          desc: "Testing across multiple viewports, fixing issues, and polishing performance."
        }
      ]
    },
    contact: {
      sectionTag: "Connect",
      title: "Let's build something useful.",
      subtitle: "If you have an idea for an AI agent, Telegram bot, or web project, I'm always open to discussing it.",
      telegramBtn: "Contact via Telegram",
      phoneBtn: "Call by Phone",
      copyPhone: "Copy phone number",
      copiedNotice: "Phone number copied to clipboard!",
      copyErrorNotice: "Could not copy automatically; please dial directly.",
      availabilityTitle: "Open for Collaboration",
      availabilityText: "Available for practical project initiatives, technology discussions, and creative ideas.",
      directContactTitle: "Direct Channels",
    },
    footer: {
      role: "AI & Web Developer",
      navigationTitle: "Navigation",
      socialTitle: "Direct Links",
      rights: "All rights reserved.",
      builtWith: "Crafted with React, TypeScript, and Tailwind CSS.",
    }
  }
};
