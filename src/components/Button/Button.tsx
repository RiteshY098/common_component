// Button.tsx
import React from "react";
import "./Button.css";

export interface ButtonProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, dataInfo?: string) => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const dataInfo = "appp"; // Hardcoded value
        if (onClick) {
            onClick(event, dataInfo); // Pass custom data to the handler
        }

        
        const customEvent = new CustomEvent('reactButtonClicked', {
            detail: { dataInfo },
            bubbles: true,
            composed: true,
        });
        window.dispatchEvent(customEvent);
    };

    return (
        <button onClick={handleClick}>
            {label}
        </button>
    );
};


