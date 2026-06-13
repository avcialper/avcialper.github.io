import React from 'react';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export default function Card({ className = "", children }: CardProps) {
    return (
        <div className={`portfolio-card ${className}`}>
            {children}
        </div>
    );
}
