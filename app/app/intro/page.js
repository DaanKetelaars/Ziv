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
                </div>
                <div className={styles["card-container"]}>
                    <div className={styles.card}>
                        <h4>Voorste kruisband blessures</h4>
                        <p>Ziv is bedacht en ontworpen om voorste kruisband blessures tegen te gaan. Ons doel is om een preventieprogramma te worden die voor mindering zal zorgen in het jaarlijks aantal kruisband blessures bij topsporters.</p>
                    </div>
                    <div className={styles.card}>
                        <h4>Hartritmevariabiliteit & de meting</h4>
                        <p>Wat is HRV? Dit duid de tijd tussen elke hartslag. De variatie in tijdsintervallen tussen de hartslagen wordt in miliseconden uitgedrukt. Je HRV kan verschillen en dat ligt aan verschillende factoren. Na deze intro krijg je de eerste HRV scan. Deze is nodig om je begin waarde vast te stellen. Na deze scan zul je alleen nog een scan moeten doen voor en na een oefening. Zo kunnen we je waardes up to date houden.</p>
                    </div>
                    <div className={styles.card}>
                        <h4>Periodes</h4>
                        <p>Jouw staf heeft een periodeplan opgezet, een periode kun je ook wel als een week zien. Binnen deze periode zitten weer een aantal oefeningen. Voor je door kan naar de volgende periode, moet je eerst de voorafgaande periode afronden.</p>
                    </div>
                    <div className={styles.card}>
                        <h4>Oefeningen</h4>
                        <p>Alle oefeningen zijn er op gericht om je focus te trainen, dit zal dan ook voornamelijk gaan via mindfulness oefeningen. Als je een oefening start, volg je de video in de specifieke oefening. Deze legt exact uit wat de bedoeling is en hoe je de oefening juist moet uitvoeren.</p>
                    </div>
                    <div className={styles.card}>
                        <h4>Blessuregevoeligheid</h4>
                        <p>Je moet blessuregevoeligheid zien als een soort risico factor. Deze geeft je dus aan of je dicht tegen een blessure aan hinkt of niet. Deze gegevens komen ook binnen bij jouw staf, zo sta je er dus ook niet alleen voor!</p>
                    </div>
                </div>
            </main>
            <nav className={styles["bottom-nav"]}>
                <Link href="/scan-intro">Verder</Link>
            </nav>
        </>
    );
}