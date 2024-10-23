"use client";

import styles from "@/styles/Hero.module.css";
import TextWithBackground from "@/components/TextWithBgColor";
import {Button} from "@/components/Button";

export function Hero() {
    const handleScroll = () => {
        console.log("Кнопка нажата, начинаем прокрутку...");
        const section1 = document.getElementById("section1");
        if (section1) {
            section1.scrollIntoView({behavior: "smooth"});
        }
    }

    return (
        <section className={styles.hero}>
            <img src="/hole.png" alt="Clinic" className={styles.heroImage} />
            <div className={styles.heroContent}>
                <div className={styles.heroDiv}>
                    <h1 className={styles.heroTitle}>
                        Первая комплексная<br/>
                        поликлиника<br/>
                        города Хэйхэ
                    </h1>
                    <p className={styles.heroText}>
                        Европейское качество, китайские
                        специалисты — <TextWithBackground text='лучшая улыбка' backgroundColor="#FFE5EE" color="#FF6699"
                                                          isBold={true} fontSize="24px" height="40px" width="203px"/>
                    </p>
                </div>
                    <Button funcClick={handleScroll} text="Узнать подробности" isBold={true} backgroundColor="#2E8AE5" color="#E6F2FF"
                            fontSize="22px" width="268px" height="59px" display="flex"/>
            </div>
        </section>
    );
}