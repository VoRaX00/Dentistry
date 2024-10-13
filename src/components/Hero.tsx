import styles from "@/styles/Hero.module.css";
import TextWithBackground from "@/components/TextWithBgColor";
import {Button} from "@/components/Button";

export function Hero() {
    return (
        <section className={styles.hero}>
            <img src="/hole.png" alt="Clinic" className={styles.heroImage}/>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Первая комплексная<br/>
                    поликлиника<br/>
                    города Хэйхэ
                </h1>
                <p className={styles.heroText}>
                    Европейское качество, китайские<br/>
                    специалисты — <span className={styles.highlightedText}>лучшая улыбка</span>
                </p>
                <Button text="Узнать подробности" isBold={true} backgroundColor="#2E8AE5" color="#E6F2FF"
                        fontSize="16px"/>
            </div>
        </section>

    );
};