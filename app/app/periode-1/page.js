'use client'

// React
import { useEffect, useState } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import Clock from '@/public/clock-icon.svg'
import Fitness from '@/public/fitness-icon.svg'
import CheckmarkComplete from '@/public/complete-checkmark.svg'
import EmptyCheckMark from '@/public/empty-checkmark-dark.svg'
import Arrow from '@/public/arrow-forward-black.svg'

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
        overlay.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        })
    }, [])
    const [state, setState] = useState();

    let result;

    useEffect(() => {
        result = parseInt(localStorage.getItem('result'))
        setState(result)
    }, [])



    return (
        <>
            <div className={styles.overlay} id='overlay'></div>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
                <Link href="/periodes">
                    <Image src={Arrow} alt="Ziv" />
                    <span>Terug</span>
                </Link>
            </header>
            <main className={styles.main}>

                <div className={styles.container}>
                    <section>
                        <h1>Periode 1</h1>
                        <p>We beginnen de eerste periode met wat basis oefeningen. Dit om je focus en concentratie op de proef te stellen. Hieronder krijg je te zien hoe je scoort per oefening, wat uiteindelijk weer verbonden is aan je blessuregevoeligheid.</p>
                        <ul>
                            <li>
                                <Image src={Fitness} alt="Dumbell icon" />
                                <p>12 oefeningen</p>
                            </li>
                            <li>
                                <Image src={Clock} alt="Clock icon" />
                                <p>~ 10 min</p>
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
                            <p className={styles["oef-desc"]}>Probeer heel precies, in een korte tijd een tomaat te snijden. Een ultieme test voor je focus en concentratie.</p>
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
                            <p className={styles["oef-desc"]}>Één van de meest gebruikte oefeningen voor het trainen van je focus. Je ademhaling kun je uiteindelijk ook toepassen tijdens je training en of wedstrijd.</p>
                            <ul>
                                <li>
                                    <h4>{state}</h4>
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
                            <p className={styles["oef-desc"]}>Met visualisatie gaan we wat dieper dan de vorige 2 oefeningen. We gebruiken de kracht van verbeelding om onze focus te verbeteren.</p>
                            <ul>
                                <li>
                                    <h4>N/A</h4>
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