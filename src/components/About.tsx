import SocialLinks from './SocialLinks';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../data/translations';

interface AboutProps {
    lang: Language;
}

export default function About({ lang }: AboutProps) {
    const t = TRANSLATIONS[lang];

    return (
        <div className="info-column">
            <h1 className="my-name">
                Alper AVCI
            </h1>
            <p className="about-text">
                {t.aboutText}
            </p>
            <div className="actions-wrapper">
                <a
                    href="https://drive.google.com/u/0/uc?id=1e2PzU0x2B-AJPwABj2g1m_dq2-77OFYi&export=download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    <span>{t.downloadCv}</span>
                    <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                </a>
                <SocialLinks />
            </div>
        </div>
    );
}
