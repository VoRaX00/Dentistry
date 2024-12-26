import styles from "@/styles/Messenger.module.css"
import {FC} from "react";

type MessengerProps = {
    path: string
    text: string
    platform: "whatsapp" | "telegram"
}

const WhatsAppLink: string = `https://wa.me/89963855220`
const TelegramLink: string = `https://t.me/sekvoyastom`

export const Messenger: FC<MessengerProps> = ({path, text, platform}) => {
    const getLink = () => {
        if (platform === "whatsapp") {
            return WhatsAppLink
        } else if (platform === "telegram") {
            return TelegramLink
        }
        return "#"
    }

    return (
        <div className={styles.messengerContainer}>
            <div className={styles.icon}>
                <img src={path} alt="Icon" />
            </div>
            <div className={styles.text}>
                <a href={getLink()} target="_blank" className={styles.link}>
                    {text}
                </a>
            </div>
        </div>
    )
}