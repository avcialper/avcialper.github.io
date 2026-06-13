import { EXPERIENCES } from '../data/experience';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../data/translations';
import TechBadges from './TechBadges';
import Card from './Card';
import SectionTitle from './SectionTitle';

interface ExperienceProps {
    lang: Language;
}

export default function Experience({ lang }: ExperienceProps) {
    const t = TRANSLATIONS[lang];

    return (
        <section className="experience-section" id="experience">
            <SectionTitle text={t.experienceTitle} />
            <div className="companies-container">
                {EXPERIENCES.map((co) => (
                    <Card key={co.id} className="company-card">
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
                                        <TechBadges
                                            technologies={role.technologies}
                                            className="role-tech-list"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}
