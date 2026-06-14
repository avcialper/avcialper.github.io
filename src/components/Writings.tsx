import { WRITINGS } from '../data/writings';
import { TRANSLATIONS } from '../data/translations';
import type { Language } from '../data/translations';
import SectionTitle from './SectionTitle';

const LANG_LABEL: Record<string, { tr: string, en: string }> = {
    tr: {
        tr: "Türkçe",
        en: "Turkish"
    },
    en: {
        tr: "English",
        en: "English"
    }
};

interface WritingsProps {
    lang: Language;
}

export default function Writings({ lang }: WritingsProps) {
    const t = TRANSLATIONS[lang];

    if (WRITINGS.length === 0) return null;

    return (
        <section className="writings-section" id="writings">
            <SectionTitle text={t.writingsTitle} />
            <div className="writings-container">
                {WRITINGS.map((writing) => (
                    <a
                        key={writing.id}
                        href={writing.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="writing-card"
                        aria-label={writing.title[lang]}
                    >
                        <div className="writing-cover-frame">
                            <img
                                src={writing.coverImage}
                                alt={writing.title[lang]}
                                className="writing-cover-image"
                            />
                            <div className="writing-cover-overlay">
                                <span className="writing-read-label">
                                    {lang === 'tr' ? "Medium'da Oku" : 'Read on Medium'}
                                </span>
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="writing-arrow-icon"
                                >
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </div>
                        <div className="writing-info">
                            <div className="writing-meta">
                                <span className="writing-date">{writing.publishedAt[lang]}</span>
                                <span className={`writing-lang-badge writing-lang-${writing.writingLang}`}>
                                    {LANG_LABEL[writing.writingLang][lang]}
                                </span>
                            </div>
                            <h3 className="writing-title">{writing.title[lang]}</h3>
                            <p className="writing-description">{writing.description[lang]}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
