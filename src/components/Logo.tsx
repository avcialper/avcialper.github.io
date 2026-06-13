import { useState, useEffect } from 'react';

export default function Logo() {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const fullText = 'avcialper';

    useEffect(() => {
        let timer: number;
        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayText((prev) => fullText.substring(0, prev.length + 1));
                setTypingSpeed(150);

                if (displayText === fullText) {
                    timer = window.setTimeout(() => {
                        setIsDeleting(true);
                    }, 2500);
                    return;
                }
            } else {
                setDisplayText((prev) => fullText.substring(0, prev.length - 1));
                setTypingSpeed(80);

                if (displayText === '') {
                    timer = window.setTimeout(() => {
                        setIsDeleting(false);
                    }, 800);
                    return;
                }
            }
        };

        timer = window.setTimeout(handleTyping, typingSpeed);
        return () => window.clearTimeout(timer);
    }, [displayText, isDeleting, typingSpeed]);

    return (
        <div className="navbar-logo">
            <span className="logo-slash">./</span>{displayText}<span className="logo-cursor">_</span>
        </div>
    );
}
