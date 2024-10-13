import styles from "@/styles/Heading.module.css";

export function Heading() {
    return (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h5>Sekvoya Stom</h5>
              <div className={styles.contact}>
                <p>
                  +7 996 385 52 20
                  <button>Связаться с нами</button>
                </p>
              </div>
            </div>
        </header>
    )
}