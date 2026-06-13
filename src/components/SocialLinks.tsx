import { SOCIAL_LINKS } from '../data/socials';
import IconButton from './IconButton';

export default function SocialLinks() {
    return (
        <div className="social-links">
            {SOCIAL_LINKS.map((link) => (
                <IconButton
                    key={link.title}
                    href={link.url}
                    title={link.title}
                >
                    {link.icon}
                </IconButton>
            ))}
        </div>
    );
}
