import './App.css';
import { useState, useEffect } from 'react';
import SocialLinks from './components/SocialLinks';

export default function App() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="portfolio-container">
            <div className="glow-sphere glow-1"></div>
            <div className="glow-sphere glow-2"></div>

            <div className={`main-content ${loaded ? 'fade-in' : ''}`}>
                <main className="content-wrapper">
                    <h1 className="my-name">
                        Alper AVCI
                    </h1>

                    <SocialLinks />

                    <a
                        href="https://drive.google.com/u/0/uc?id=1e2PzU0x2B-AJPwABj2g1m_dq2-77OFYi&export=download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                        style={{ marginTop: '1.5rem' }}
                    >
                        <span>Download CV</span>
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
                </main>
            </div>

            <footer className="portfolio-footer">
                <p>
                    ©{new Date().getFullYear()} avcialper
                </p>
            </footer>
        </div>
    );
}
