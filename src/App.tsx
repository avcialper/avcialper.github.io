import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import ProfileImage from './components/ProfileImage';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Writings from './components/Writings';
import type { Language } from './data/translations';

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
    });
    const [lang, setLang] = useState<Language>(() => {
        const saved = localStorage.getItem('lang');
        if (saved === 'en' || saved === 'tr') return saved;
        return 'en';
    });

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'light') {
            root.classList.add('light-theme');
        } else {
            root.classList.remove('light-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleTheme = () => {
        setLoaded(false);
        window.setTimeout(() => {
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
            window.setTimeout(() => {
                setLoaded(true);
            }, 50);
        }, 350);
    };

    const toggleLanguage = () => {
        setLang((prev) => (prev === 'en' ? 'tr' : 'en'));
    };

    return (
        <div className="portfolio-wrapper">
            <Navbar theme={theme} onToggleTheme={toggleTheme} lang={lang} onToggleLanguage={toggleLanguage} />

            <div className="portfolio-container">
                <div className={`main-content ${loaded ? 'fade-in' : ''}`}>
                    <main className="content-wrapper">
                        <About lang={lang} />
                        <ProfileImage />
                    </main>
                    <Experience lang={lang} />
                    <Projects lang={lang} />
                    <Writings lang={lang} />
                </div>

                <footer className="portfolio-footer">
                    <p>
                        ©{new Date().getFullYear()} avcialper
                    </p>
                </footer>
            </div>
        </div>
    );
}
