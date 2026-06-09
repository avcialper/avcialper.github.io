import { EXPERIENCES } from '../data/experience';

export default function Experience() {
    return (
        <section className="experience-section" id="experience">
            <h2 className="section-title">
                <span className="title-slash">./</span>experience
            </h2>
            <div className="companies-container">
                {EXPERIENCES.map((co) => (
                    <div key={co.id} className="company-card">
                        <div className="company-brand-info">
                            <h3 className="company-name">{co.company}</h3>
                            {co.sub && <span className="company-sub">{co.sub}</span>}
                        </div>
                        <div className="company-roles">
                            {co.roles.map((role) => (
                                <div key={role.title} className="role-item">
                                    <div className="role-details">
                                        <div className="role-header">
                                            <h4 className="role-title">{role.title}</h4>
                                            <span className="role-period">{role.period}</span>
                                        </div>
                                        <p className="role-description">{role.description}</p>
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
