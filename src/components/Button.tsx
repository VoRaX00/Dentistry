"use client";

import styles from "@/styles/Button.module.css"
import React from "react";

type ButtonProps = {
    backgroundColor?: string;
    borderColor?: string;
    color?: string;
    text?: string;
    isBold?: boolean;
    fontSize?: string;
    width?: string;
    height?: string;
    whiteSpace?: string;
    textAlign?: string;
    display?: string;
    justifyContent?: string;
    onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = ({
  backgroundColor = 'transparent',
  borderColor = 'black',
  color = 'black',
  text,
  isBold = false,
  fontSize = '13px',
  width = '238px',
  height = '60px',
  whiteSpace = 'nowrap',
  display = 'inline',
  justifyContent = 'center',
  onClick = () => null,
}) => {
    return (
      <button
        className={styles.button}
        style={{backgroundColor, border: '1px solid', borderColor, color,
            fontWeight: isBold ? 'bold' : 'normal',
            fontSize,
            width,
            whiteSpace,
            justifyContent,
            display,
            height,
        }}
        onClick={onClick}
      >
        {text}
      </button>
    )
}