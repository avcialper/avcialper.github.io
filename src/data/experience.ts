export interface Role {
    title: string;
    period: string;
    description: string;
    technologies: string[];
}

export interface CompanyExperience {
    id: string;
    company: string;
    sub?: string;
    roles: Role[];
}

export const EXPERIENCES: CompanyExperience[] = [
    {
        id: 'fibabanka',
        company: 'Fibabanka',
        sub: 'Mobile Developer',
        roles: [
            {
                title: 'Jr. Software Engineer',
                period: 'January 2026 – Present',
                description:
                    'Contributing to the development of new features and maintenance of the Fibabanka mobile banking application. Responsible for implementing production-level changes, resolving bugs, supporting SDK upgrades.',
                technologies: ['React Native', 'TypeScript', 'Axios', 'React Navigation', 'Redux Toolkit', 'Redux Form', 'Jest']
            },
            {
                title: 'Software Engineer Intern',
                period: 'March 2025 – January 2026',
                description:
                    'Assisted in bug fixing, maintenance tasks, and small feature implementations for the Fibabanka mobile application. Participated in SDK updates, codebase improvements, and internal career development trainings while gaining hands-on experience in a production banking environment.',
                technologies: ['React Native', 'TypeScript', 'Axios', 'React Navigation', 'Redux Toolkit', 'Redux Form']
            }
        ]
    },
];
