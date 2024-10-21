
import styles from "@/styles/Card.module.css";

type ContactCardProps = {
    text: string;
    number: string;
    imgSrc: string;
    width: string;
    height: string;
};

export const Card: React.FC<ContactCardProps> = ({ text, number, imgSrc, width, height}) => {
    return (
        <div className={styles.card} style={{
            width,
            height,
        }}>
            <div className={styles.iconTextContainer}>
                <img src={imgSrc} alt="message" className={styles.icon}/>
            </div>
            <span className={styles.number}>{number}</span>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
