import { EXPERIENCES } from '../data/experience';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../data/translations';

interface ExperienceProps {
    lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
    const t = TRANSLATIONS[lang];

    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">
                <span className="title-slash">./</span>{t.experienceTitle}
            </h2>
            <div className="companies-container">
                {EXPERIENCES.map((co) => (
                    <div key={co.id} className="company-card">
                        <div className="company-brand-info">
                            <h3 className="company-name">{co.company}</h3>
                        </div>
                        <div className="company-roles">
                            {co.roles.map((role) => (
                                <div key={role.title[lang]} className="role-item">
                                    <div className="role-details">
                                        <div className="role-header">
                                            <h4 className="role-title">{role.title[lang]}</h4>
                                            <span className="role-period">{role.period[lang]}</span>
                                        </div>
                                        <p className="role-description">{role.description[lang]}</p>
                                        <div className="role-tech-list">
                                            {role.technologies.map((tech) => (
                                                <span key={tech} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

