import styles from "@/styles/Bonuses.module.css"

export function Bonuses() {
    return (
        <div className={styles.bonuses}>
            <div className={styles.text}>
                <span>Мы предоставляем</span>
            </div>
            <div className={styles["bonus-item"]}>Бесплатная виза</div>
            <div className={styles["bonus-item"]}>Бесплатная гостиница</div>
            <div className={styles["bonus-item"]}>Русскоговорящий водитель в Хэйхэ</div>
        </div>
    )
}