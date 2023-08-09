// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import Crest from '@/public/crest.svg'

//Styles
import styles from '@/app/styles/confirmation.module.scss'

export default function Confirmation() {

    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <section>
                    <h1>Join je team!</h1>
                    <p>Je bent succesvol toegevoegd aan je team! Veel succes met je sportieve reis naar een betere focus en zo een minder risico op kruisband blessures!</p>
                </section>
                <section>
                    <h4>Naam van team en of club</h4>
                    <p>Eventueel Dames of Heren</p>
                    <Image src={Crest} alt="Crest" width={80} height={80} />
                </section>
            </main>
            <nav className={styles["bottom-nav"]}>
                <Link href="/create-account">Account aanmaken</Link>
            </nav>
        </>
    );
}