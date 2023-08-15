'use client'

// React
import { useState, useEffect } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Components
import Pie from '../components/Pie'

// Images
import Logo from '@/public/ziv-logo.svg'
import ArrowForwardGrey from '@/public/chevron-forward-grey.svg'
import BluetoothIcon from '@/public/bluetooth-icon-white.svg'
import SmallHeartWhite from '@/public/white-heart.svg'
import CurrentPeriodIcon from '@/public/current-period-icon.svg'

// Styles
import styles from '@/app/styles/home.module.scss'
import BottomNav from '../components/BottomNav'


export default function Home() {

    const [state, setState] = useState();

    let result;

    useEffect(() => {
        result = parseInt(localStorage.getItem('result'))
        setState(result)
    }, [])


    // if the state is between 20 and 40 the percentage should be between 0 and 25%, if it's between 40 and 80, the percentage should be between 25 and 50%, if it's between 80 and 120, the percentage should be between 50 and 100%, else the percentage should be 0%
    const percentage = state >= 20 && state < 40 ? (state / 40) * 25 : state >= 40 && state < 80 ? ((state - 40) / 40) * 25 + 25 : state >= 80 && state < 120 ? ((state - 80) / 40) * 50 + 50 : 0;

    // if the percentage is between 0 and 25%, the colour should be red, if it's between 25 and 50%, the colour should be yellow, if it's between 50 and 100%, the colour should be green, else the colour should be empty
    const colour = percentage > 0 && percentage <= 25 ? '#F50045' : percentage > 25 && percentage <= 50 ? '#FFD24F' : percentage > 50 && percentage <= 100 ? '#00F58E' : '';

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
                    <Link href="/home" className={styles.active}>Overview</Link>
                    <Link href="/oefeningen-results">Resultaten</Link>
                </div>
                <div className={styles.container}>
                    <div className={styles["data-icons"]}>
                        <div className={styles["average-hrv"]}>
                            <div className={styles.icon}>
                                <Image src={SmallHeartWhite} alt="Heart icon" />
                            </div>
                            <p>
                                <span>{state}</span>
                                <span>HRV</span>
                            </p>
                        </div>
                        <div className={styles.bluetooth}>
                            <div className={styles.icon}>
                                <Image src={BluetoothIcon} alt="Bluetooth icon" />
                            </div>
                            <p>Verbonden</p>
                        </div>
                        <div className={styles["current-period-score"]}>
                            <Image src={CurrentPeriodIcon} alt="Current period icon" />
                            <p>
                                <span>30%</span>
                                <span>Periode</span>
                            </p>
                        </div>
                    </div>
                    <Pie percentage={percentage} colour={colour} />
                    <div className={styles["content-percentage"]}>
                        <p className={styles.warning}>{colour === '#F50045' ? 'Pas op! Het risico op een kruisband blessure is erg hoog. Volg het programma en neem contact op met de staf.' : colour === '#FFD24F' ? 'Kijk uit, je bent op dit moment redelijk gevoelig voor het oplopen van een kruisband blessure.' : colour === '#00F58E' ? 'Lekker bezig! Je bent nu minder gevoelig voor het oplopen van een kruisband blessure.' : ''}</p>
                        <h1>Blessuregevoeligheid</h1>
                    </div>

                </div>
            </main>
            <BottomNav />
        </>
    );
}