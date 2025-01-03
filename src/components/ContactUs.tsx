import styles from "@/styles/ContactUs.module.css";
import {Messenger} from "@/components/Messenger";

export function ContactUs() {
    return (
        <div id="section2" className={styles.compareUs}>
            <div className={styles.text}>
                <span>Связаться с нами</span>
            </div>
            <div className={styles.number}>
                <span>+7 996 385 52 20</span>
            </div>
            <div className={styles.icons}>
                <Messenger path="/messengers/telegram.png" text="Telegram" platform="telegram"/>
                <Messenger path="/messengers/whatsApp.png" text="WhatsApp" platform="whatsapp"/>
            </div>
        </div>
    )
}