import styles from "@/styles/Footer.module.css"

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
                            <img src="/messengers/telegram.png" alt="Telegram"/>
                            <img src="/messengers/whatsApp.png" alt="WhatsApp"/>
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