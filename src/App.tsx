import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import ProfileImage from './components/ProfileImage';

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark';
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

    const toggleTheme = () => {
        setLoaded(false);
        window.setTimeout(() => {
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
            window.setTimeout(() => {
                setLoaded(true);
            }, 50);
        }, 350);
    };

    return (
        <div className="portfolio-container">
            <Navbar theme={theme} onToggleTheme={toggleTheme} />

            <div className={`main-content ${loaded ? 'fade-in' : ''}`}>
                <main className="content-wrapper">
                    <About />
                    <ProfileImage />
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
