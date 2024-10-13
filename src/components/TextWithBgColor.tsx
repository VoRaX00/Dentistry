import styles from "@/styles/TextWithBgColor.module.css";
import React from 'react';

type TextWithBackgroundProps = {
    backgroundColor?: string;
    color?: string;
    text: string;
    isBold?: boolean;
    fontSize?: string;
};

const TextWithBackground: React.FC<TextWithBackgroundProps> = ({
    backgroundColor = 'transparent',
    color = 'black',
    text,
    isBold = false,
    fontSize = '26',
}) => {
    return (
        <span
            className={styles.textWithBackground}
            style={{
                backgroundColor,
                color,
                fontSize,
                padding: '0.5rem 1rem',
                fontWeight: isBold ? 'bold' : 'normal',
            }}
        >
      {text}
    </span>
    );
};

export default TextWithBackground;
