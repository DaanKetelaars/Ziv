
// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'

//Styles
import styles from '@/app/styles/welcome.module.scss'

export default function Welcome() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <section>
                    <h1>Welkom bij Ziv!</h1>
                    <p>Voor het eerst bij Ziv? Voeg je dan eerst toe aan je team!</p>
                    <Link href="/register">Join je team</Link>
                    <Link href="/login">Log in</Link>
                </section>
            </main>
        </>
    );
}