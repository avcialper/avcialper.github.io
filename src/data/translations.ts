export const TRANSLATIONS = {
    en: {
        aboutText: "Hi, I'm Alper. I'm a computer engineer and a mobile developer. I use React Native and Kotlin to build mobile apps.",
        downloadCv: "Download CV",
        experienceTitle: "experience",
        toggleTheme: "Toggle Theme"
    },
    tr: {
        aboutText: "Merhaba, ben Alper. Bilgisayar mühendisiyim ve mobil geliştiriciyim. Mobil uygulamalar geliştirmek için React Native ve Kotlin kullanıyorum.",
        downloadCv: "CV İndir",
        experienceTitle: "deneyim",
        toggleTheme: "Temayı Değiştir"
    }
} as const;

export type Language = 'en' | 'tr';
