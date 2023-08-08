'use client'

// Next
import Image from 'next/image'
import Link from 'next/link'


// Components
import Pie from '../components/Pie'


// Images
import Logo from '@/public/ziv-logo.svg'
import ArrowForwardGrey from '@/public/chevron-forward-grey.svg'
import ArrowForwardBlack from '@/public/arrow-forward-black.svg'
import ScoreIcon from '@/public/score.svg'
import BlackHeart from '@/public/black-heart.svg'
import TimeIcon from '@/public/time.svg'
import HRVGraph from '@/public/hrv-graph.svg'


// Styles
import styles from '@/app/styles/oefeningen-results.module.scss'
import BottomNav from '../components/BottomNav'


export default function OefeningenResults() {
    const colour = "#FFD24F";
    const percentage = 45
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <div className={styles["current-period"]}>
                    <Image src={ArrowForwardGrey} alt="Backward chevron" />
                    <h5>Periode 1/9</h5>
                    <Image src={ArrowForwardGrey} alt="Forward chevron" />
                </div>
                <div className={styles.tabs}>
                    <Link href="/home">Overview</Link>
                    <Link href="/oefeningen-results" className={styles.active}>Oefeningen</Link>
                </div>
                <div className={styles.container}>
                    <Pie percentage={percentage} colour={colour} />
                    <div className={styles["content-percentage"]}>
                        <p>Je bent bijna halverwege met de eerste periode. Goed bezig, zorg ervoor dat je dit volhoudt.</p>
                        <h1>Progressie Periode</h1>
                    </div>
                    <div className={styles.resultaten}>
                        <h2>Resultaten</h2>
                        <p>Hieronder zie je jouw resultaten van de huidige periode. De scores zijn gebaseerd op je hartritmevariabiliteit tijdens die specifieke oefening</p>
                        <Link href="https://onlinelibrary.wiley.com/doi/full/10.1111/anec.12148">Meer over hartritmevariabiliteit <Image src={ArrowForwardBlack} alt="Arrow icon" /> </Link>

                        <div className={styles.oefeningen}>
                            <article className={styles.oefening}>
                                <h3>Oefening 1 - Ademhaling</h3>
                                <p>28 juli. 2023 13:45-13:51</p>
                                <ul className="data">
                                    <li>
                                        <div>
                                            <h5><Image src={ScoreIcon} alt="Pie icon to indicate score" />Eindscore van oefening</h5>
                                            <p>Je eindscore is gebaseerd op je hartritmevariabiliteit en de duur van de oefening.</p>
                                        </div>
                                        <p className={styles["oefening-result"]}>85%</p>
                                    </li>
                                    <li>
                                        <div>
                                            <h5><Image src={BlackHeart} alt="Black heart icon" />HRV Score</h5>
                                            <p>Goed bezig, je HRV is op het juiste niveau voor je leeftijdsgroep.</p>
                                        </div>
                                        <p className={styles["oefening-result"]}>50%</p>
                                    </li>
                                    <li>
                                        <div>
                                            <h5><Image src={TimeIcon} alt="Clock icon" />Tijd actief</h5>
                                            <p>Dit is je actieve tijd van deze oefening.</p>
                                        </div>
                                        <p className={styles["oefening-result"]}>00:05:45</p>

                                    </li>
                                </ul>
                                <div className={styles["hrv-graph"]}>
                                    <Image src={HRVGraph} alt="Graph of HRV" />
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
            <BottomNav />
        </>
    );
}