'use client'

// React
import { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import GreenCheck from '@/public/green-check.svg'
import Arrow from '@/public/arrow-forward-black.svg'

//Styles
import styles from '@/app/styles/register.module.scss'

export default function Register() {

    const [value, setValue] = useState();

    const router = useRouter()
    const [route, setRoute] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        router.push("/confirmation")
    }

    useEffect(() => {
        const input = document.querySelector('main > form > div > input');
        const button = document.querySelector('main > form > button');
        const icon = document.querySelector('main > form > div > img');
        input.addEventListener('input', () => {
            if (input.value.length === 8) {
                button.style.background = '#000';
                button.style.color = '#FFF';
                button.style.border = 'none';
                button.style.cursor = 'pointer';
                button.style.pointerEvents = 'auto';
                icon.style.opacity = '1';
            } else {
                button.style.background = '#F0F0F0';
                button.style.color = '#808080';
                button.style.cursor = 'not-allowed';
                button.style.pointerEvents = 'none';
                icon.style.opacity = '0';
            }
        })
    }, [])


    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
                <Link href="/welcome">
                    <Image src={Arrow} alt="Ziv" />
                    <span>Terug</span>
                </Link>
            </header>
            <main className={styles.main}>
                <section>
                    <h1>Join je team!</h1>
                    <p>Join het team. Vul de unieke team code in van precies 8 karakters en maak daarna je profiel aan.</p>
                </section>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text" required placeholder="Vul hier de team code in..." />
                        <Image src={GreenCheck} alt="Ziv" />
                    </div>
                    <button type="submit">Verder</button>
                </form>
            </main>
        </>
    );
}