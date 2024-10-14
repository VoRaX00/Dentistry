import styles from "@/styles/HowIt.module.css"
import {Card} from "@/components/Card";

export function HowIt() {
    return (
        <div className={styles.howIt}>
            <div className={styles.howItHeader}>
                <span>Как это происходит?</span>
            </div>
            <Card text="Связь с нами" number="01" imgSrc="icons/message.png"/>
        </div>
    )
}