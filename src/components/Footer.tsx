import styles from "@/styles/Footer.module.css"
import {Messenger} from "@/components/Messenger";

const WhatsAppLink: string = `https://wa.me/89963855220`
const TelegramLink: string = `https://t.me/sekvoyastom`

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <img src="logo.png" alt="logo"/>
                </div>

                    <a href="tel:+79963855220" className={styles.phone}>
                        +7 996 385 52 20
                    </a>

                <div className={styles.bottomRow}>
                    <div className={styles.contacts}>
                        <div className={styles.icons}>
                            <a href={TelegramLink} target="_blank" rel="noopener noreferrer">
                                <img src="/messengers/telegram.png" alt="Telegram"/>
                            </a>

                            <a href={WhatsAppLink} target="_blank" rel="noopener noreferrer">
                                <img src="/messengers/whatsApp.png" alt="WhatsApp"/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        <p>© 2024 Sekvoya Stom</p>
                    </div>
                </div>
            </div>
        </div>
    )
}