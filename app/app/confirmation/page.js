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
                    <p>Join het team. Vul de unieke team code in van precies 8 karakters en maak daarna je profiel aan.</p>
                </section>
                <section>
                    <h4>AH&BC</h4>
                    <p>Heren 1</p>
                    <Image src={Crest} alt="Crest" width={80} height={80} />
                </section>
            </main>
            <nav className={styles["bottom-nav"]}>
                <Link href="/create-account">Account aanmaken</Link>
            </nav>
        </>
    );
}