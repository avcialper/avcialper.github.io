export interface LocalizedString {
    en: string;
    tr: string;
}

export interface Role {
    title: LocalizedString;
    period: LocalizedString;
    description: LocalizedString;
    technologies: string[];
}

export interface CompanyExperience {
    id: string;
    company: string;
    roles: Role[];
}

export const EXPERIENCES: CompanyExperience[] = [
    {
        id: 'fibabanka',
        company: 'Fibabanka',
        roles: [
            {
                title: {
                    en: 'Jr. Software Engineer',
                    tr: 'Jr. Software Engineer'
                },
                period: {
                    en: 'January 2026 – Present',
                    tr: 'Ocak 2026 – Günümüz'
                },
                description: {
                    en: 'Contributing to the development of new features and maintenance of the Fibabanka mobile banking application. Responsible for implementing production-level changes, resolving bugs, supporting SDK upgrades.',
                    tr: 'Fibabanka mobil bankacılık uygulamasının yeni özelliklerin geliştirilmesi ve bakım süreçlerinde görev alıyorum. Canlı ortam değişikliklerinin uygulanması, hataların çözülmesi ve SDK yükseltmelerinin desteklenmesinden sorumluyum.'
                },
                technologies: ['React Native', 'TypeScript', 'Axios', 'React Navigation', 'Redux Toolkit', 'Redux Form', 'Jest']
            },
            {
                title: {
                    en: 'Software Engineer Intern',
                    tr: 'Software Engineer Intern'
                },
                period: {
                    en: 'March 2025 – January 2026',
                    tr: 'Mart 2025 – Ocak 2026'
                },
                description: {
                    en: 'Assisted in bug fixing, maintenance tasks, and small feature implementations for the Fibabanka mobile application. Participated in SDK updates, codebase improvements, and internal career development trainings while gaining hands-on experience in a production banking environment.',
                    tr: 'Fibabanka mobil uygulamasında hata düzeltme, bakım görevleri ve küçük özellik geliştirmelerinde aktif rol aldım. Canlı bankacılık ortamında pratik deneyim kazanırken SDK güncellemelerine, kod tabanı iyileştirmelerine ve şirket içi kariyer gelişim eğitimlerine katıldım.'
                },
                technologies: ['React Native', 'TypeScript', 'Axios', 'React Navigation', 'Redux Toolkit', 'Redux Form']
            }
        ]
    }
];
