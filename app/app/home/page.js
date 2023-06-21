'use client'

// React
import { useState, useEffect } from 'react'

// Next
import Image from 'next/image'

// Components
import Pie from '../components/Pie'

// Images
import Logo from '@/public/ziv-logo.svg'

// Styles
import styles from '@/app/styles/home.module.scss'


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
                <div className={styles.container}>
                    <h1>Result</h1>
                    <Pie percentage={percentage} colour={colour} />
                </div>
            </main>
            <nav className={styles["bottom-nav"]}>
            </nav>
        </>
    );
}