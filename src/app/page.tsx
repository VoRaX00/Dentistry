import {Inter} from "next/dist/compiled/@next/font/dist/google";
import styles from "../styles/Home.module.css"
import Head from "next/head";
import {Heading} from "@/components/Heading";
import {Button} from "@/components/Button";
import {Hero} from "@/components/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Стоматология Sekvoya Stom</title>
        <meta name="description" content="Первая комплексная поликлиника города Хэйхэ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading/>
      <Hero/>

      <section className={styles.process}>
        <h2>Как это происходит?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>Связь с нами</div>
          <div className={styles.step}>Консультация</div>
          <div className={styles.step}>Оформление визы и билетов в Китай</div>
          <div className={styles.step}>Прибытие и размещение в гостинице</div>
          <div className={styles.step}>Посещение клиники</div>
          <div className={styles.step}>Подготовка материалов для вас</div>
          <div className={styles.step}>Проведение лечения</div>
          <div className={styles.step}>Возвращение домой</div>
        </div>
      </section>

      <section className={styles.services}>
        <h2>Услуги</h2>
        <ul>
          <li>Протезирование зубов, коронки, имплантация — от 1800 ₽</li>
          <li>Лечение болезней зубов, десен, кариеса — от 1500 ₽</li>
          <li>Исправление прикуса, отбеливание зубов — от 2500 ₽</li>
        </ul>
      </section>

      <section className={styles.contactInfo}>
        <h2>Свяжитесь с нами</h2>
        <p>+7 996 385 52 20</p>
        <p>Telegram | WhatsApp</p>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 Sekvoya Stom. Все права защищены.</p>
      </footer>
    </div>
  );
}