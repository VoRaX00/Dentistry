import styles from "@/styles/Guarantees.module.css"
import {Messenger} from "@/components/Messenger";
export function Guarantees() {
    return (
        <div className={styles.guarantees}>
            <div className={styles.text}>
                <span>Связаться с нами</span>
            </div>
            <div className={styles.number}>
                <span>+7 996 385 52 20</span>
            </div>
            <Messenger path="/messengers/telegram.png" text="Telegram" />
            <Messenger path="/messengers/whatsApp.png" text="WhatsApp" />
        </div>
    )
}