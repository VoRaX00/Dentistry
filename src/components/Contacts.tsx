import {ContactUs} from "@/components/ContactUs";
import {Guarantees} from "@/components/Guarantees";
import styles from "@/styles/Contacts.module.css"

export function Contacts() {
    return (
        <div className={styles.contacts}>
            <ContactUs/>
            <Guarantees/>
        </div>
    )
}