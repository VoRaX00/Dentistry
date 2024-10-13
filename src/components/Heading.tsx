import styles from "@/styles/Heading.module.css";
import {Button} from "@/components/Button";


export function Heading() {
    return (
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src="logo.png" alt="logo" />
          <div className={styles.contact}>
            <p>
              +7 996 385 52 20
              <Button color="#45494D" text="Связаться с нами" borderColor="#45494D" isBold={true} fontSize="13px"/>
            </p>
          </div>
        </div>
      </header>
    )
}