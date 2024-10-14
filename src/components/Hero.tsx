import styles from "@/styles/Hero.module.css";
import TextWithBackground from "@/components/TextWithBgColor";
import {Button} from "@/components/Button";

export function Hero() {
    return (
        <section className={styles.hero}>
            <img src="/hole.png" alt="Clinic" className={styles.heroImage}/>
            <div className={styles.heroContent}>
                <div className={styles.heroDiv}>
                    <h1 className={styles.heroTitle}>
                        Первая комплексная<br/>
                        поликлиника<br/>
                        города Хэйхэ
                    </h1>
                    <p className={styles.heroText}>
                        Европейское качество, китайские<br/>
                        специалисты — <TextWithBackground text='лучшая улыбка' backgroundColor="#FFE5EE" color="#FF6699"
                                                          isBold={true} fontSize="24px"/>
                    </p>
                </div>
                <Button text="Узнать подробности" isBold={true} backgroundColor="#2E8AE5" color="#E6F2FF"
                        fontSize="16px"/>
            </div>
        </section>
    );
}