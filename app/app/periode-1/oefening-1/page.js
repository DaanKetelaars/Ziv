'use client'

// React
import { useState, useEffect } from 'react'

// Next
import Image from 'next/image'
import Link from 'next/link'

// Images
import Logo from '@/public/ziv-logo.svg'
import PlayIconWhite from '@/public/play-icon-white.svg'
import PauseIconWhite from '@/public/pause-icon-white.svg'
import StopIconWhite from '@/public/stop-icon-white.svg'

// Styles
import styles from '@/app/styles/oefening-one.module.scss'
import BottomNav from '../../components/BottomNav'


export default function OefeningOne() {

    // create a countdown timer that starts at 5:45 and counts down to 0:00 and then stops, this timer has a pause and play function and a stop function that resets the timer to 5:45 and stops the timer from counting down to 0:00, build this timer using the useEffect hook and useState hook

    const [timer, setTimer] = useState('00:05');
    const [state, setState] = useState('72');
    const [play, setPlay] = useState(false);
    const [pause, setPause] = useState(false);
    const [stop, setStop] = useState(false);

    useEffect(() => {
        const popup = document.getElementById('popup');
        const popupEndedConfirm = document.querySelector('main #popup div:nth-child(1)');
        const popupEnded = document.querySelector('main #popup div:nth-child(2)');
        const buttonYes = document.getElementById('ja');
        const buttonNo = document.getElementById('nee');
        const overlay = document.getElementById('overlay');

        popup.style.display = 'none';
        popupEndedConfirm.style.display = 'flex';
        popupEnded.style.display = 'none';
        overlay.style.display = 'none';
        if (stop) {
            popup.style.display = 'block';
            overlay.style.display = 'block';
            buttonYes.addEventListener('click', () => {
                popupEndedConfirm.style.display = 'none';
                popupEnded.style.display = 'flex';
            })
            buttonNo.addEventListener('click', () => {
                popup.style.display = 'none';
                setStop(false);
                overlay.style.display = 'none';
            })

        }
    }, [stop])

    useEffect(() => {
        const popupCompleted = document.getElementById('popupCompleted');
        const buttonsVideo = document.querySelectorAll('#video button');
        popupCompleted.style.display = 'none';

        if (timer === '00:00') {
            popupCompleted.style.display = 'block';
            overlay.style.display = 'block';
            buttonsVideo.forEach(button => {
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.5';
            })
        }
    }, [timer])


    useEffect(() => {
        const video = document.querySelector('video');
        const interval = setInterval(() => {
            if (play) {
                video.play();
                const time = timer.split(':');
                let minutes = parseInt(time[0]);
                let seconds = parseInt(time[1]);

                if (seconds > 0) {
                    seconds--;
                }
                else if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        video.pause();
                        video.currentTime = 0;
                        popupCompleted.style.display = 'block';
                    }
                    else {
                        minutes--;
                        seconds = 59;

                    }
                }

                seconds = seconds < 10 ? '0' + seconds : seconds;
                minutes = minutes < 10 ? '0' + minutes : minutes;

                setTimer(minutes + ':' + seconds);

            } else if (pause) {
                video.pause();
                clearInterval(interval);
            } else if (stop) {
                video.pause();
                video.currentTime = 0;
                clearInterval(interval);
                setTimer('00:05');
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [timer, play, pause, stop]);

    const handlePlay = () => {
        setPlay(true);
        setPause(false);
        setStop(false);
    }

    const handlePause = () => {
        setPlay(false);
        setPause(true);
        setStop(false);
    }

    const handleStop = () => {
        setPlay(false);
        setPause(false);
        setStop(true);
    }


    useEffect(() => {

        const result = parseInt(localStorage.getItem('result'))
        setState(result)

    }, [])




    return (
        <>
            <div className={styles.overlay} id='overlay'></div>
            <header className={styles.header}>
                <Image src={Logo} alt="Ziv" />
            </header>
            <main className={styles.main}>

                <div className={styles.popup} id='popup'>
                    <div className={styles.stapOne}>
                        <h2>Oefening beëindigen</h2>
                        <p>Weet je zeker dat je de oefening wil beëindigen? De score van deze oefeningen wordt dan niet meegenomen in je resultaten en zal worden gezien als “Geen resultaat”.</p>
                        <div className={styles["buttons"]}>
                            <button className="btn" id="ja">Ja</button>
                            <button className="btn" id="nee">Nee</button>
                        </div>
                    </div>
                    <div className={styles.stapTwo}>
                        <h2>Beëindigd</h2>
                        <p>Helaas heb je de oefening niet voltooid. Hierdoor kunnen wij de score van deze oefening niet meenemen en zal er een score van 0 staan ofwel “Geen resultaat”.</p>
                        <Link href="/periode-1/">Verder</Link>
                    </div>
                </div>

                <div className={styles.popup} id='popupCompleted'>
                    <div className={styles["popup-content"]}>
                        <h2>Oefening voltooid</h2>
                        <p>Je hebt de oefening voltooid. Eerst doen we nog een scan na je oefening. Dit om de meest accurate data te halen uit je oefeningen.</p>
                        <Link href="/scanning-after">Verder</Link>
                    </div>
                </div>


                <div className={styles.container}>
                    <section>
                        <h1>Ademhaling</h1>
                        <p>Nog wat korte tips en uitleg over de oefening.</p>
                        <ul>
                            <li>
                                <p>Duur</p>
                                <p id="timer">{timer}</p>
                            </li>
                            <li>
                                <p>HRV</p>
                                <p>{state}</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className={styles.video} id='video'>
                    <video src="/breathing.mp4" controls={false} loop muted playsInline type="video/mp4" poster='/poster-breathing.jpeg' />
                    <div className={styles.controls}>
                        <button onClick={handlePlay} id='play'><Image src={PlayIconWhite} alt='Play icon' /></button>
                        <button onClick={handlePause} id='pause'><Image src={PauseIconWhite} alt='Pause icon' /></button>
                        <button onClick={handleStop} id='stop'><Image src={StopIconWhite} alt='Stop icon' /></button>
                    </div>
                </div>
            </main>
            <BottomNav />
        </>
    );
}