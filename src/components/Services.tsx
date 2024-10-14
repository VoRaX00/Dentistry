import styles from "@/styles/Services.module.css"
import {Service} from "@/components/Service";

export function Services() {
    return (
        <div className={styles.container}>
            <div className={styles.services}>
                <div className={styles.text}>
                    <span>Услуги</span>
                </div>
                <Service text="Протезирование зубов, коронки, имплантация" price={1800}/>
                <Service text="Лечение болезней зубов, дёсен, кариеса, пародонтология" price={1500}/>
                <Service text="Исправление прикуса, отбеливание зубов" price={2500}/>
            </div>
            <div className={styles.bonuses}>
                <div className={styles.text}>
                    <span>Мы предоставляем</span>
                </div>
                <div className={styles["bonus-item"]}>Бесплантная виза</div>
                <div className={styles["bonus-item"]}>Бесплатная гостиница</div>
                <div className={styles["bonus-item"]}>Русскоговорящий водитель в Хэйхэ</div>
            </div>
        </div>
    )
}