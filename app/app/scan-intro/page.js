// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import BigHeart from '@/public/big-heart.svg'

//Styles
import styles from '@/app/styles/scan-intro.module.scss'

export default function ScanIntro() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <section>
                        <h1>Hoe is je focus?</h1>
                        <p>Voor je kan beginnen met het trainen van je focus, wordt er eerst even een hartritmevariabiliteit scan gedaan.</p> <p>Op basis van die data kunnen wij namelijk een blessuregevoeligheid koppelen aan jouw profiel.</p>
                    </section>
                    <div>
                        <Image src={BigHeart} alt="Big Heart" />
                    </div>
                </div>
            </main>
            <nav className={styles["bottom-nav"]}>
                <Link href="/start-scanning">Verder</Link>
            </nav>
        </>
    );
}