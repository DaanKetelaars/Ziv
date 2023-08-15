'use client'

// React
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Next
import Image from 'next/image'

// Images
import Logo from '@/public/ziv-logo.svg'

//Styles
import styles from '@/app/styles/create-account.module.scss'

export default function CreateAccount() {

    const [value, setValue] = useState();

    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/login")
    }

    useEffect(() => {
        const button = document.querySelector('main > form > button');
        if (value) {
            button.style.pointerEvents = 'auto';
            button.style.background = '#000';
            button.style.color = '#FFF';
        } else {
            button.style.pointerEvents = 'none';
            button.style.background = '#F0F0F0';
            button.style.color = '#808080';
        }
    }, [value])


    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <section>
                    <h1>Join je team!</h1>
                </section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Naam</label>
                        <input type="text" name="name" id="name" placeholder="Vul hier je volledige naam in..." required />
                        <label htmlFor="password">Wachtwoord aanmaken</label>
                        <input type="password" name="password" id="password" placeholder="Vul hier je wachtwoord in..." required />
                        <div className={styles.date}>
                            <div>
                                <label htmlFor="date">DD</label>
                                <input type="text" pattern="[0-9]*" maxlength="2" size="2" class="date-field" required />
                            </div>
                            <div>
                                <label>MM</label>
                                <input type="text" pattern="[0-9]*" maxlength="2" size="2" class="date-field" required />
                            </div>
                            <div>
                                <label>YYYY</label>
                                <input type="text" pattern="[0-9]*" maxlength="4" size="4" class="date-field date-field--year" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Account aanmaken</button>
                </form>
            </main>
        </>
    );
}