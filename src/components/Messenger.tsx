import styles from "@/styles/Messenger.module.css"
import {FC} from "react";

type MessengerProps = {
    path: string
    text: string
}

export const Messenger: FC<MessengerProps> = ({path, text}) => {
    return (
        <div className={styles.messengerContainer}>
            <div className={styles.icon}>
                <img src={path} alt="Icon" />
            </div>
            <div className={styles.text}>
                {text}
            </div>
        </div>
    )
}