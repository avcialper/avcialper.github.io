export const TRANSLATIONS = {
    en: {
        aboutText: "Hi, I'm Alper. I'm a computer engineer. I build mobile applications using React Native and Kotlin.",
        downloadCv: "Download CV",
        experienceTitle: "experience",
        toggleTheme: "Toggle Theme",
        projectsTitle: "projects",
        writingsTitle: "writings"
    },
    tr: {
        aboutText: "Merhaba, ben Alper. Bilgisayar mühendisiyim. React Native ve Kotlin kullanarak mobil uygulamalar geliştiriyorum.",
        downloadCv: "CV İndir",
        experienceTitle: "deneyim",
        toggleTheme: "Temayı Değiştir",
        projectsTitle: "projeler",
        writingsTitle: "yazılar"
    }
} as const;

export type Language = 'en' | 'tr';
