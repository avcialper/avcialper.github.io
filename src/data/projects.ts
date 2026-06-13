export interface LocalizedString {
    en: string;
    tr: string;
}

export interface Project {
    id: string;
    title: string;
    description: LocalizedString;
    image: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    isCurrent?: boolean;
}

export const PROJECTS: Project[] = [
    {
        id: 'logify',
        title: 'logify',
        description: {
            en: 'Logify is a notification management and archiving app that prioritizes user privacy. Based on the Android NotificationListenerService, the app captures notification data only from apps selected by the user from a list of authorized apps and stores it in a local on-device database. It does not transfer data to third-party servers or external environments; it provides a completely offline (internet-free) and secure user experience.',
            tr: 'Logify, kullanıcı gizliliğini ön planda tutarak çalışan bir bildirim yönetim ve arşivleme uygulamasıdır. Android NotificationListenerService tabanlı uygulama, kullanıcı tarafından belirlenen izinli uygulamalar listesine göre yalnızca seçilen uygulamaların bildirim verilerini yakalar ve cihaz içi yerel veritabanında saklar. Üçüncü taraf sunuculara veya dış ortama veri aktarımı yapmaz; tamamen çevrimdışı (internetsiz) ve güvenli bir kullanıcı deneyimi sunar.'
        },
        image: 'https://i.ibb.co/gFyBhkMy/logify.png',
        technologies: ['Android', 'Kotlin', 'NotificationListenerService'],
        isCurrent: true
    },
    {
        id: 'lemur',
        title: 'lemur',
        description: {
            en: 'Lemur is a prototype application designed to optimize communication, task management, and meeting processes for modern teams from a single hub. The application includes modules for authentication, a dynamic calendar, task management, and team management. It was developed as part of a thesis project and was accepted after meeting the prototype requirements.',
            tr: 'Lemur; modern takımların iletişim, görev ve toplantı süreçlerini tek bir merkezden optimize etmek için tasarlanmış bir prototip uygulamadır. Uygulama içinde kimlik doğrulama, kendisine ait dinamik bir takvim, görev yönetimi ve takım yönetimi modüllerini içermektedir. Lisans projesi kapsamında geliştirilmiş olup prototip gereksinimlerini karşılayarak kabul almıştır.'
        },
        image: 'https://i.ibb.co/M5f40YRk/lemur.png',
        technologies: ['Android', 'Kotlin', 'MVVM', 'Hilt', 'Coil', 'OwlCalendar', 'Navigation Component', 'Firebase'],
        githubUrl: 'http://github.com/avcialper/lemur',
    },
    {
        id: 'batterytracker',
        title: 'BatteryTracker',
        description: {
            en: 'BatteryTracker is a mobile application that monitors real-time battery analytics (level, voltage, temperature, health) and features a custom home screen widget for quick status tracking. Developed with core Android components to handle background state changes efficiently.',
            tr: 'BatteryTracker, gerçek zamanlı pil verilerini (seviye, voltaj, sıcaklık, sağlık durumu) izleyen ve durumun hızlı bir şekilde takip edilebilmesi için özel bir ana ekran widget\'ı içeren bir mobil uygulamadır. Arka plandaki durum değişikliklerini verimli bir şekilde yönetmek üzere temel Android bileşenleri kullanılarak geliştirilmiştir.'
        },
        image: 'https://i.ibb.co/Ps1YpYwp/ic-launcher-round.webp',
        technologies: ["Android", "Kotlin", "BroadcastReceiver"],
        githubUrl: 'https://github.com/avcialper/BatteryTracker',
    },
    {
        id: 'pinview',
        title: 'Pin-View',
        description: {
            en: 'Pin-View is a versatile and customizable UI component designed for seamless PIN entry. This library allows you to effortlessly integrate a modern PIN input view into your application. By default, it supports 6-character passwords, but the length can be adjusted to suit your needs.',
            tr: 'Pin-View, sorunsuz PIN girişi için tasarlanmış çok yönlü ve özelleştirilebilir bir kullanıcı arayüzü bileşenidir. Bu kütüphane, modern bir PIN giriş görünümünü uygulamanıza zahmetsizce entegre etmenizi sağlar. Varsayılan olarak 6 karakterlik şifreleri destekler, ancak uzunluk ihtiyaçlarınıza göre ayarlanabilir.'
        },
        image: 'https://i.ibb.co/r2YdfdmL/pin-view.png',
        technologies: ["Android", "Kotlin"],
        githubUrl: 'https://github.com/avcialper/pin-view',
    },
    {
        id: 'owlcalendar',
        title: 'OwlCalendar',
        description: {
            en: 'An Android calendar library designed for managing date visualization.It allows developers to integrate custom marked days with dynamic color rendering, focusing on custom view drawing and performance.',
            tr: 'Tarih görselleştirmesini yönetmek üzere tasarlanmış bir Android takvim kütüphanesi. Geliştiricilerin, dinamik renk işleme özelliğine sahip özel olarak işaretlenmiş günleri entegre etmelerine olanak tanır; bu kütüphane, özel görünüm çizimi ve performansa odaklanmaktadır.'
        },
        image: 'https://i.ibb.co/B25nPZRF/owl.png',
        technologies: ["Android", "Kotlin", "JDateTime"],
        githubUrl: 'https://github.com/avcialper/owlcalendar',
    },
    {
        id: 'havam',
        title: 'HAVAM',
        description: {
            en: 'A cross-platform weather/location information application. Built with React Native to handle asynchronous API communication, complex state management, and real-time data fetching based on user queries.',
            tr: 'Çapraz platformlu bir hava durumu/konum bilgisi uygulaması. Asenkron API iletişimi, karmaşık durum yönetimi ve kullanıcı sorgularına dayalı gerçek zamanlı veri alımını yönetmek üzere React Native ile geliştirilmiştir.'
        },
        image: 'https://i.ibb.co/PGTkDvwS/havam.png',
        technologies: ['React Native', 'JavaScript', 'React Navigation', 'Geolocation', 'Axios'],
        githubUrl: 'https://github.com/avcialper/HAVAM-ReactNative'
    }
];
