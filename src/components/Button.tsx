import styles from "@/styles/Button.module.css"
import React from "react";

type ButtonProps = {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    text?: string;
    size?: 'small' | 'medium' | 'large';
    isBold?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'transparent',
  borderColor = 'black',
  color = 'black',
  size = 'medium',
  text,
  isBold = false,
}) => {
    const padding =
        size === 'large'
            ? '1rem 2rem'
            : size === 'small'
                ? '0.25rem 0.5rem'
                : '0.5rem 1rem';
    return (
      <button
        className={styles.button}
        style={{backgroundColor, borderColor, color, padding,
            fontWeight: isBold ? 'bold' : 'normal',
        }}
      >
        {text}
      </button>
    )
}