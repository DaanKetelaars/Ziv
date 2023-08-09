'use client'

// React
import { useEffect } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import Clock from '@/public/clock-icon.svg'
import Fitness from '@/public/fitness-icon.svg'
import CheckmarkComplete from '@/public/complete-checkmark.svg'
import EmptyCheckMark from '@/public/empty-checkmark-dark.svg'

// Styles
import styles from '@/app/styles/periode-one.module.scss'
import BottomNav from '../components/BottomNav'


export default function PeriodeOne() {

    useEffect(() => {
        const popup = document.getElementById('popupScan');
        const btn = document.getElementById('start-oefening');
        const overlay = document.getElementById('overlay');
        btn.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';

        })
    }, [])




    return (
        <>
            <div className={styles.overlay} id='overlay'></div>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>

                <div className={styles.container}>
                    <section>
                        <h1>Periode 1</h1>
                        <p>Hier een samenvatting van periode 1 en de oefeningen die terug komen in deze week. Ook een uitleg wat je precies kan verwachten als resultaat van het doen van deze oefeningen.</p>
                        <ul>
                            <li>
                                <Image src={Fitness} alt="Dumbell icon" />
                                <p>12 oefeningen</p>
                            </li>
                            <li>
                                <Image src={Clock} alt="Clock icon" />
                                <p>~ 2 hour 30 min</p>
                            </li>
                        </ul>
                    </section>
                    <div className={styles['scores-periode']}>
                        <h3>Scores Periode</h3>
                        <ul>
                            <li><p><span>Oefening 1</span><span className={styles.progress}></span> <span className={styles.percentage}>85%</span></p></li>
                            <li><p><span>Oefening 2</span><span className={styles.progress}></span> <span className={styles.percentage}>0%</span></p></li>
                            <li><p><span>Oefening 3</span><span className={styles.progress}></span> <span className={styles.percentage}>0%</span></p></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.oefeningen}>
                    <article className={styles.oefening}>
                        <div className={styles.container}>
                            <h2 className={styles["oef-header"]}>Oefening 1 - Tomaat snijden <Image src={CheckmarkComplete} alt='Checkmark icon' /></h2>
                            <p className={styles["oef-desc"]}>Een samenvatting van de eerste oefening in deze week.</p>
                            <ul>
                                <li>
                                    <h4>72</h4>
                                    <p>Gemiddelde HRV score</p>
                                </li>
                                <li>
                                    <Image src={Clock} alt="Clock icon" />
                                    <p>~ 5 min</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles['bg-oefening']}>
                            <span>Oefening voltooid</span>
                        </div>
                    </article>
                    <article className={styles.oefening}>
                        <div className={styles.container}>
                            <h2 className={styles["oef-header"]}>Oefening 2 - Ademhaling <Image src={EmptyCheckMark} alt='Checkmark icon' /></h2>
                            <p className={styles["oef-desc"]}>Een samenvatting van de eerste oefening in deze week.</p>
                            <ul>
                                <li>
                                    <h4>72</h4>
                                    <p>Gemiddelde HRV score</p>
                                </li>
                                <li>
                                    <Image src={Clock} alt="Clock icon" />
                                    <p>~ 5 min</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles['bg-oefening']}>
                            <button id="start-oefening">Begin oefening</button>
                            <div className={styles.popup} id='popupScan'>
                                <div className={styles["popup-content"]}>
                                    <h2>Voor we beginnen</h2>
                                    <p>Bij elke oefening doen we een HRV scan van te voren en na de oefening. Zo heb jij altijd de meest up to date data!</p>
                                    <Link href="/scanning-before">Verder</Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className={styles.oefening}>
                        <div className={styles.container}>
                            <h2 className={styles["oef-header"]}>Oefening 3 - Visualisatie <Image src={EmptyCheckMark} alt='Checkmark icon' /></h2>
                            <p className={styles["oef-desc"]}>Een samenvatting van de eerste oefening in deze week.</p>
                            <ul>
                                <li>
                                    <h4>72</h4>
                                    <p>Gemiddelde HRV score</p>
                                </li>
                                <li>
                                    <Image src={Clock} alt="Clock icon" />
                                    <p>~ 5 min</p>
                                </li>
                            </ul>
                        </div>
                        <div className={styles['bg-oefening']}>
                            <Link href="/periode-1/oefening-1">Begin oefening</Link>
                        </div>
                    </article>
                </div>
            </main>
            <BottomNav />
        </>
    );
}