import { useState, useEffect } from 'react';

export default function ProfileImage() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [introFinished, setIntroFinished] = useState(false);

    useEffect(() => {
        const toAndroidifyTimer = window.setTimeout(() => {
            setIsFlipped(true);
        }, 1200);

        const backToOriginalTimer = window.setTimeout(() => {
            setIsFlipped(false);
        }, 2700);

        const finishIntroTimer = window.setTimeout(() => {
            setIntroFinished(true);
        }, 3500);

        return () => {
            window.clearTimeout(toAndroidifyTimer);
            window.clearTimeout(backToOriginalTimer);
            window.clearTimeout(finishIntroTimer);
        };
    }, []);

    const handleCardClick = () => {
        if (introFinished) {
            setIsFlipped((prev) => !prev);
        }
    };

    return (
        <div className="image-column">
            <div className="image-frame-3d">
                <div
                    className={`profile-card-inner ${isFlipped ? 'flipped' : ''}`}
                    onClick={handleCardClick}
                    style={{ cursor: introFinished ? 'pointer' : 'default' }}
                    title={introFinished ? (isFlipped ? 'Show Original' : 'Show Androidify') : undefined}
                >
                    <div className="profile-card-front">
                        <img
                            src="https://avatars.githubusercontent.com/u/90919011?v=4"
                            alt="Alper AVCI"
                            className="profile-image"
                        />
                    </div>
                    <div className="profile-card-back">
                        <img
                            src="https://i.ibb.co/Vcc7jkZZ/avcialper-androidify.png"
                            alt="Alper AVCI Androidify"
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
