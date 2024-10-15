import styles from "@/styles/Services.module.css"
import {Service} from "@/components/Service";
import {Bonuses} from "@/components/Bonuses";

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
            <Bonuses/>
        </div>
    )
}