export interface LocalizedString {
    en: string;
    tr: string;
}

export type WritingLang = 'tr' | 'en';

export interface Writing {
    id: string;
    title: LocalizedString;
    description: LocalizedString;
    coverImage: string;
    mediumUrl: string;
    publishedAt: LocalizedString;
    writingLang: WritingLang;
}

export const WRITINGS: Writing[] = [
    {
        id: 'android-pagination',
        title: {
            en: 'Android Pagination',
            tr: 'Android Pagination'
        },
        description: {
            en: 'Pagination prevents the application from slowing down by loading data in batches and improves performance.',
            tr: 'Pagination, verileri parça parça yükleyerek uygulamanın yavaşlamasını engeller ve performansı artırır.'
        },
        coverImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*P7wIIZu8eDY8vtJz6AltFw.png',
        mediumUrl: 'https://medium.com/@avcialper/android-pagination-efd8da5f6833',
        publishedAt: {
            en: 'April 2025',
            tr: 'Nisan 2025'
        },
        writingLang: 'tr'
    },
    {
        id: 'android-navigation-drawer',
        title: {
            en: 'Android Navigation Drawer',
            tr: 'Android Navigation Drawer'
        },
        description: {
            en: 'The Navigation Drawer hides menu options behind a slide-out panel, providing users with a clean and organized interface.',
            tr: 'Navigation Drawer, açılır paneliyle menü seçeneklerini gizleyerek kullanıcılara temiz ve düzenli bir arayüz sunar.'
        },
        coverImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*g1zJ8R2JXeRmFKRioFnJwQ.png',
        mediumUrl: 'https://medium.com/@avcialper/kotlin-drawer-navigation-1b42ce3edb79',
        publishedAt: {
            en: 'October 2023',
            tr: 'Ekim 2023'
        },
        writingLang: 'tr'
    },
    {
        id: 'android-bottom-navigation',
        title: {
            en: 'Android Bottom Navigation',
            tr: 'Android Bottom Navigation'
        },
        description: {
            en: 'Bottom Navigation makes it easier for users to explore and navigate the app by pinning critical pages to the bottom.',
            tr: 'Bottom Navigation, kritik sayfaları alt kısma sabitleyerek kullanıcının uygulamayı keşfetmesini ve gezinmesini kolaylaştırır.'
        },
        coverImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*x0AozEUU1gJkOQf_K8l6aw.png',
        mediumUrl: 'https://medium.com/@avcialper/kotlin-bottom-navigation-2e6c3eb2f201',
        publishedAt: {
            en: 'September 2023',
            tr: 'Eylül 2023'
        },
        writingLang: 'tr'
    },
    {
        id: 'android-navigation-component',
        title: {
            en: 'Android Navigation Component',
            tr: 'Android Navigation Component'
        },
        description: {
            en: 'The Navigation Component enables more organized, easy, and secure management of page transitions and navigation.',
            tr: 'Navigation Component, sayfalar arası geçiş ve yönlendirmeleri daha düzenli, kolay ve güvenli yönetmeyi sağlar.'
        },
        coverImage: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pVn5tda4SB_QkrKcWPri5g.png',
        mediumUrl: 'https://medium.com/@avcialper/kotlin-navigation-component-d505e35237bb',
        publishedAt: {
            en: 'September 2023',
            tr: 'Eylül 2023'
        },
        writingLang: 'tr'
    }
];
