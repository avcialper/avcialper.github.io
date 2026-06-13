import { useState, useEffect, useRef } from 'react';

interface SectionTitleProps {
    text: string;
}

export default function SectionTitle({ text }: SectionTitleProps) {
    const [displayText, setDisplayText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setIsVisible(false);
        setDisplayText('');

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [text]);

    useEffect(() => {
        if (!isVisible) return;

        let index = 0;
        let timer: number;

        const type = () => {
            if (index < text.length) {
                setDisplayText(text.substring(0, index + 1));
                index++;
                timer = window.setTimeout(type, 100);
            }
        };

        timer = window.setTimeout(type, 150);

        return () => {
            window.clearTimeout(timer);
        };
    }, [isVisible, text]);

    return (
        <h2 className="section-title" ref={headingRef}>
            <span className="title-slash">./</span>{displayText}<span className="logo-cursor">_</span>
        </h2>
    );
}
