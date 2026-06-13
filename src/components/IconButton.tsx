import React from 'react';

interface IconButtonProps {
    href?: string;
    onClick?: () => void;
    title?: string;
    ariaLabel?: string;
    className?: string;
    children: React.ReactNode;
}

export default function IconButton({
    href,
    onClick,
    title,
    ariaLabel,
    className = "social-icon-btn",
    children
}: IconButtonProps) {
    const isMailTo = href?.startsWith('mailto:');

    if (href) {
        return (
            <a
                href={href}
                target={isMailTo ? undefined : '_blank'}
                rel={isMailTo ? undefined : 'noopener noreferrer'}
                className={className}
                title={title || ariaLabel}
                aria-label={ariaLabel || title}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={className}
            title={title || ariaLabel}
            aria-label={ariaLabel || title}
            type="button"
        >
            {children}
        </button>
    );
}
