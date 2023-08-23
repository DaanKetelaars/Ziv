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
import styles from '@/app/styles/login.module.scss'

export default function Login() {

    const [value, setValue] = useState();

    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/intro")
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
                    <h1>Inloggen</h1>
                </section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Naam</label>
                        <input type="text" name="name" id="name" placeholder="Naam..." required />

                        <label htmlFor="password">Wachtwoord</label>
                        <input type="password" name="password" id="password" placeholder="Wachtwoord..." required onChange={e => setValue(e.target.value)} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </main>
        </>
    );
}