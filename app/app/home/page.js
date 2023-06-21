'use client'

// Next
import Image from 'next/image'

// Components
import Pie from '../components/Pie'

// Images
import Logo from '@/public/ziv-logo.svg'

// Styles
import styles from '@/app/styles/home.module.scss'


export default function Home() {

    const result = localStorage.getItem('result')
    const percentage = result > 90 ? 100 : result > 80 ? 70 : result > 60 ? 30 : 0

    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <h1>Result</h1>
                    <Pie percentage={percentage} colour={result > 90 ? '#F50045' : result > 80 ? '#FFD24F' : result > 60 ? '#00F58E' : '#F000F5'} />
                </div>
            </main>
            <nav className={styles["bottom-nav"]}>
            </nav>
        </>
    );
}