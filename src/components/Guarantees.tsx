import styles from "@/styles/Guarantees.module.css"
export function Guarantees() {
    return (
        <div className={styles.guarantees}>
            <span className={styles.header}>Гарантии</span>
            <span className={styles.text} style={{
                marginBottom: "20px",
            }}>Мы работаем на качество и готовы за него
                отвечать
            </span>
            <span className={styles.text}>В ситуации гарантийного случая мы полностью
                оплатить вам поездку в клинику и вам будет
                проведено лечение по гарантийному случаю
            </span>
        </div>
    )
}