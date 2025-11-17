import React from 'react';
import styles from './Typography.module.css';

interface TypographyProps {
    variant: 'h1' | 'h2' | 'h3' | 'body' | 'small';
    children: React.ReactNode;
    className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
    const Component = variant.startsWith('h') ? variant as 'h1' | 'h2' | 'h3' : 'p';

    return (
	<Component className={`${styles.typography} ${styles[variant]} ${className}`}>
	{children}
	</Component>
    );
};
