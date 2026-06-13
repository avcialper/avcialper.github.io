interface TechBadgesProps {
    technologies: readonly string[] | string[];
    className?: string;
}

export default function TechBadges({ technologies, className = "role-tech-list" }: TechBadgesProps) {
    return (
        <div className={className}>
            {technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                    {tech}
                </span>
            ))}
        </div>
    );
}
