
import styles from "@/styles/HowIt.module.css"
import {Card} from "@/components/Card";

export function HowIt() {
    return (
        <div id="section1" className={styles.howIt}>
            <div className={styles.howItHeader}>
                <p>Как это происходит?</p>
            </div>
            <div className={styles.allCards}>
                <Card text="Связь с нами" number="01" imgSrc="icons/message.png" width="410px" height="134px"/>
                <Card text="Консультация" number="02" imgSrc="icons/medboard.png" width="410px" height="134px"/>
                <Card text="Оформление визы и билетов в Китай" number="03" imgSrc="icons/map.png" width="520px"
                      height="134px"/>
                <Card text="Прибытие и расположение в гостинице" number="04" imgSrc="icons/plane.png" width="520px"
                      height="134px"/>
                <Card text="Посещение клиники" number="05" imgSrc="icons/medcalendar.png" width="400px" height="134px"/>
                <Card text="Подготовка материалов для вас" number="06" imgSrc="icons/microscope.png" width="420px"
                      height="134px"/>
                <Card text="Проведение лечения" number="07" imgSrc="icons/tooth.png" width="675px"
                      height="134px"/>
                <Card text="Возвращение домой" number="08" imgSrc="icons/home.png" width="675px" height="134px"/>
            </div>
        </div>
    )
}
