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
        console.log(button);
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
                    <p>Join het team. Vul de unieke team code in van precies 8 karakters en maak daarna je profiel aan.</p>
                </section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Naam</label>
                        <input type="text" name="name" id="name" placeholder="Vul hier je volledige naam in..." required />

                        <label htmlFor="password">Wachtwoord aanmaken</label>
                        <input type="password" name="password" id="password" placeholder="Vul hier je wachtwoord in..." required />

                        <label htmlFor="date">Geboortedatum</label>
                        <input type="date" name="date" id="date" placeholder="Geboortedatum" required />

                        <label htmlFor="sport">Sport</label>
                        <select name="sport" id="sport" required defaultValue="default" onChange={e => setValue(e.target.value)}>
                            <option value="default" disabled hidden>Kies je sport</option>
                            <option value="voetbal">Voetbal</option>
                            <option value="basketbal">Basketbal</option>
                            <option value="tennis">Tennis</option>
                            <option value="zwemmen">Zwemmen</option>
                            <option value="atletiek">Atletiek</option>
                            <option value="gymnastiek">Gymnastiek</option>
                            <option value="handbal">Handbal</option>
                            <option value="hockey">Hockey</option>
                        </select>
                    </div>
                    <button type="submit">Account aanmaken</button>
                </form>
            </main>
        </>
    );
}