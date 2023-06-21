'use client'

// React
import { useState, useEffect } from 'react'

// Next
import Image from 'next/image'

// Images
import Logo from '@/public/ziv-logo.svg'

//Styles
import styles from '@/app/styles/scanning.module.scss'
import styled from 'styled-components'

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    &::after {
            content: '';
            width: 450px;
            height: 450px;
            position: absolute;
            background: ${props => props.result >= 20 && props.result < 40 ? '#F50045' : props.result >= 40 && props.result < 80 ? '#FFD24F' : props.result >= 80 && props.result < 120 ? '#00F58E' : '#F000F5'};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            opacity: 0.05;
            transform: translate(-50%, -50%);
            z-index: -1;
            transition: all 0.5s ease-in-out;
    }
    &::before {
            content: '';
            width: 350px;
            height: 350px;
            position: absolute;
            background: ${props => props.result >= 20 && props.result < 40 ? '#F50045' : props.result >= 40 && props.result < 80 ? '#FFD24F' : props.result >= 80 && props.result < 120 ? '#00F58E' : '#F000F5'};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            opacity: 0.2;
            transform: translate(-50%, -50%);
            z-index: -1;
            transition: all 0.5s ease-in-out;
    }
    h1 {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span {
            z-index: 10;
            position: relative;
            &:nth-child(1) {
                font-size: 4rem;
                line-height: 2rem;
                margin: 1rem 0;
            }
            &:nth-child(2) {
                font-size: 1rem;
            }
        }
        &::after {
            content: '';
            width: 150px;
            height: 150px;
            position: absolute;
            background: ${props => props.result >= 20 && props.result < 40 ? '#F50045' : props.result >= 40 && props.result < 80 ? '#FFD24F' : props.result >= 80 && props.result < 120 ? '#00F58E' : '#F000F5'};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            opacity: 1;
            transition: all 0.5s ease-in-out;
    }
    &::before {
            content: '';
            width: 250px;
            height: 250px;
            position: absolute;
            background: ${props => props.result >= 20 && props.result < 40 ? '#F50045' : props.result >= 40 && props.result < 80 ? '#FFD24F' : props.result >= 80 && props.result < 120 ? '#00F58E' : '#F000F5'};
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            opacity: 0.5;
            transition: all 0.5s ease-in-out;
    }
}
`;

export default function Scanning() {

    const [start, setStart] = useState(false);
    const [next, setNext] = useState(false);
    const [currentPulse, setCurrentPulse] = useState(0);
    const [result, setResult] = useState(0);



    const startPulse = () => {
        setStart(true);
    }

    const afterPulse = () => {
        setNext(true);
        window.location.href = '/home';
    }

    useEffect(() => {
        const nextButton = document.querySelector('nav button:last-child');
        if (start) {
            const interval = setInterval(() => {
                setCurrentPulse(Math.floor(Math.random() * (120 - 20 + 1) + 20));
            }, Math.floor(Math.random() * (1300 - 900 + 1) + 900));
            setTimeout(() => {
                clearInterval(interval);
                setResult(currentPulse);
                nextButton.style.pointerEvents = 'auto';
                nextButton.style.background = '#000';
                nextButton.style.color = '#FFF';
            }, 10000);
        }
        else {
            nextButton.style.pointerEvents = 'none';
            nextButton.style.background = '#F0F0F0';
            nextButton.style.color = '#808080';
        }
    }, [start]);

    if (typeof window !== 'undefined') {
        window.localStorage.setItem('result', currentPulse);
    }

    return (
        <>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>
                <section>
                    <Circle result={currentPulse}>
                        <h1>
                            <span>{currentPulse}</span>
                            <span>HRV</span>
                        </h1>
                    </Circle>
                </section>
            </main>
            <nav className={styles["bottom-nav"]}>
                <button onClick={startPulse}>Start</button>
                <button onClick={afterPulse}>Verder</button>
            </nav>
        </>
    );
}