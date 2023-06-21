// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import ScanExample from '@/public/scan-example.png'

//Styles
import styles from '@/app/styles/start-scanning.module.scss'

export default function StartScanning() {
    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <div className={styles.container}>
                    <section>
                        <h1>Start met scannen!</h1>
                        <p>Leg je wijsvinger op je camera. Zo kunnen we het beste je HRV meten. Hou je vinger gedurende de scan op dezelfde plek voor een zo’n accuraat mogelijk resultaat.</p>
                    </section>
                    <div>
                        <Image src={ScanExample} alt="Big Heart" width={300} height={300} />
                    </div>
                </div>
            </main>
            <nav className={styles["bottom-nav"]}>
                <Link href="/scanning">Verder</Link>
            </nav>
        </>
    );
}