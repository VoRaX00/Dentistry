import styles from "@/styles/Hero.module.css";
import {Button} from "@/components/Button";

export function Hero() {
    return (
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <img src="/hole.png" alt="Clinic" width="690" height="460"/>
        </div>
        <div className={styles.heroContent}>
          <h1>Первая комплексная<br/>
              поликлиника<br/>
              города Хэйхэ
          </h1>
          <p>Европейское качество, китайские специалисты —
            <Button text="лучшая улыбка" isBold={true} backgroundColor="#FFE5EE" color="#FF6699" size="small"/>
          </p>
          <button>Узнать подробнее</button>
        </div>
      </section>
    )
}