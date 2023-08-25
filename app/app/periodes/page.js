'use client'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo-white.svg'
import Calendar from '@/public/calendar-icon.svg'
import Fitness from '@/public/fitness-icon.svg'
import EmptyCheckMark from '@/public/empty-checkmark.svg'

// Styles
import styles from '@/app/styles/periodes.module.scss'
import BottomNav from '../components/BottomNav'


export default function Periodes() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <div className={styles["video-container"]}>
                </div>
                <div className={styles.container}>
                    <section>
                        <h1>Programma</h1>
                        <p>Tijdens deze 9 periodes ga je aan de slag met het trainen van je focus. Dit doe je via verschillende mindfulness oefeningen. Elke periode is aan elkaar verbonden en per periode zullen de oefeningen ook lastiger worden. Veel succes!</p>
                        <ul>
                            <li>
                                <Image src={Calendar} alt="Agenda icon" />
                                <p>9 periodes</p>
                            </li>
                            <li>
                                <Image src={Fitness} alt="Dumbell icon" />
                                <p>27 oefeningen</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className={styles.periodes}>
                    <Link href="/periode-1" className={styles.periode}>
                        <article>
                            <section>
                                <h4>Periode 1 <Image src={EmptyCheckMark} alt="Lege cirkel icon, als deze periode voltooid is, dan zal hier een checkmark inkomen." /></h4>
                                <p>In deze periode zullen we voornamelijk een start maken met de basis.</p>
                                <ul>
                                    <li>3 Oefeningen</li>
                                    <li>~ 10 min</li>
                                </ul>
                            </section>
                        </article>
                        <div className={styles["progress-active"]}></div>
                    </Link>

                    <div className={styles.periode}>
                        <article>
                            <section>
                                <h4>Periode 2 <Image src={EmptyCheckMark} alt="Lege cirkel icon, als deze periode voltooid is, dan zal hier een checkmark inkomen." /></h4>
                                <p>Nu we de basis hebben, kunnen we verder met wat complexere oefeningen.</p>
                                <ul>
                                    <li>3 Oefeningen</li>
                                    <li>~ 30 min</li>
                                </ul>
                            </section>
                        </article>
                        <div className={styles.progress}></div>
                    </div>

                    <div className={styles.periode}>
                        <article>
                            <section>
                                <h4>Periode 3 <Image src={EmptyCheckMark} alt="Lege cirkel icon, als deze periode voltooid is, dan zal hier een checkmark inkomen." /></h4>
                                <p>Je focus begint steeds beter te worden, daarom kunnen we nog nog een stap verder nemen in de oefeningen.</p>
                                <ul>
                                    <li>3 Oefeningen</li>
                                    <li>~ 11 min</li>
                                </ul>
                            </section>
                        </article>
                        <div className={styles.progress}></div>
                    </div>

                    <div className={styles.periode}>
                        <article>
                            <section>
                                <h4>Periode 4 <Image src={EmptyCheckMark} alt="Lege cirkel icon, als deze periode voltooid is, dan zal hier een checkmark inkomen." /></h4>
                                <p>We zijn al bijna halverwege het periode plan. Het is tijd om je huidige focus op de proef te stellen.</p>
                                <ul>
                                    <li>3 Oefeningen</li>
                                    <li>~ 20 min</li>
                                </ul>
                            </section>
                        </article>
                        <div className={styles.progress}></div>
                    </div>

                </div>
            </main>
            <BottomNav />
        </>
    );
}