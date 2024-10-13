import styles from "@/styles/Button.module.css"
import React from "react";

type ButtonProps = {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    text?: string;
    isBold?: boolean;
    fontSize?: string;
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'transparent',
  borderColor = 'black',
  color = 'black',
  text,
  isBold = false,
  fontSize = '13px',
}) => {
    return (
      <button
        className={styles.button}
        style={{backgroundColor, border: '1px solid', borderColor, color,
            fontWeight: isBold ? 'bold' : 'normal',
            fontSize,
        }}
      >
        {text}
      </button>
    )
}