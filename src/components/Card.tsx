import styles from "@/styles/Card.module.css";

type ContactCardProps = {
    text: string;
    number: string;
    imgSrc: string;
};

export const Card: React.FC<ContactCardProps> = ({ text, number, imgSrc }) => {
    return (
        <div className={styles.card}>
            <div className={styles.iconTextContainer}>
                <img src={imgSrc} alt="message" className={styles.icon}/>
            </div>
            <span className={styles.number}>{number}</span>
            <p className={styles.text}>{text}</p>
        </div>
    );
};
