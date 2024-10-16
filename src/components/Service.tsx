import styles from "@/styles/Service.module.css"

type ServiceProps = {
    text: string;
    price: number;
}

export const Service: React.FC<ServiceProps> = ( { text, price }) => {
    return (
        <div className={styles.service}>
            <div className={styles.text}>
                <span>{text}</span>
            </div>
            <div className={styles.price}>
                <span>от {price} ₽</span>
            </div>
        </div>
    );
}