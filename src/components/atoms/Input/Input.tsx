import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    disabled?: boolean;
    className?: string;
}

export const Input: React.FC<InputProps> = ({ 
    type = 'text',
    placeholder,
    value,
    onChange,
    disabled = false,
    className = ''
}) => {

    // ====================
    // Handle input change 
    // calls onChange prop with new value
    // ====================
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	if (onChange) {
	    onChange(e.target.value);
	}
    };

    return (
	<input
	    type={type}
	    className={`${styles.input} ${className}`}
	    placeholder={placeholder}
	    value={value}
	    onChange={handleChange}
	    disabled={disabled}
	/>
    );
};
