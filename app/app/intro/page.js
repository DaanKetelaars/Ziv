'use client'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'

//Styles
import styles from '@/app/styles/intro.module.scss'

export default function Intro() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <p>Voor je aan de slag kan met het preventie programma, nemen we je eerst graag even mee in Ziv.</p>
                    <div className={styles["card-container"]}>
                        <div className={styles.card}>
                            <h4>Features en uitleg over de app</h4>
                        </div>
                        <ul>
                            {Array.from(Array(5).keys()).map((item, index) => (
                                <li key={index}></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
            <nav className={styles["bottom-nav"]}>
                <Link href="/scan-intro">Overslaan</Link>
            </nav>
        </>
    );
}