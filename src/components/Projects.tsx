import { PROJECTS } from '../data/projects';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../data/translations';
import IconButton from './IconButton';
import TechBadges from './TechBadges';
import Card from './Card';
import SectionTitle from './SectionTitle';

interface ProjectsProps {
    lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
    const t = TRANSLATIONS[lang];

    return (
        <section className="projects-section" id="projects">
            <SectionTitle text={t.projectsTitle} />
            <div className="projects-container">
                {PROJECTS.map((project) => (
                    <Card key={project.id} className="project-card">
                        <div className="project-card-header">
                            <div className="project-image-frame">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-title-info">
                                <div className="project-header">
                                    <div className="project-title-wrapper">
                                        <h3 className="project-name">{project.title}</h3>
                                        {project.isCurrent && (
                                            <span className="current-badge">
                                                {lang === 'tr' ? 'Geliştiriliyor' : 'In Progress'}
                                            </span>
                                        )}
                                    </div>
                                    {project.githubUrl && (
                                        <IconButton
                                            href={project.githubUrl}
                                            ariaLabel={`${project.title} GitHub repository`}
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                width="22"
                                                height="22"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </IconButton>
                                    )}
                                </div>
                            </div>
                        </div>
                        <p className="project-description">{project.description[lang]}</p>
                        {project.technologies && project.technologies.length > 0 && (
                            <TechBadges
                                technologies={project.technologies}
                                className="project-tech-list"
                            />
                        )}
                    </Card>
                ))}
            </div>
        </section>
    );
}
