import styles from "@/styles/TextWithBgColor.module.css";
import React from 'react';

type TextWithBackgroundProps = {
    backgroundColor?: string;
    color?: string;
    text: string;
    isBold?: boolean;
    fontSize?: string;
    width?: string;
    height?: string;
};

const TextWithBackground: React.FC<TextWithBackgroundProps> = ({
    backgroundColor = 'transparent',
    color = 'black',
    text,
    isBold = false,
    fontSize = '26',
    width = '203px',
    height = '40px',
}) => {
    return (
        <span
            className={styles.textWithBackground}
            style={{
                backgroundColor,
                color,
                fontSize,
                padding: '0 10px',
                fontWeight: isBold ? 'bold' : 'normal',
                width,
                height
            }}
        >
      {text}
    </span>
    );
};

export default TextWithBackground;
