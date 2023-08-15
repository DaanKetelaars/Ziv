import Link from 'next/link'
import styles from '@/app/styles/bottom-nav.module.scss'
import { useEffect } from 'react'

export default function BottomNav() {

    // add active class to the current link in the bottom nav based on the current page
    useEffect(() => {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll(`.${styles["bottom-nav"]} ul li a`);
        links.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.parentElement.classList.add(`${styles.active}`)
            }
            // add a else if that makes the home link active when the current path is /home & /oefeningen-results
            else if (currentPath === '/home' || currentPath === '/oefeningen-results') {
                links[0].parentElement.classList.add(`${styles.active}`)
            }
            // add a else if that makes the home link active when the current path is /periodes & /periode-1
            else if (currentPath === '/periodes' || currentPath === '/periode-1' || currentPath === '/periode-1/oefening-1' || currentPath === '/periode-1/oefening-2' || currentPath === '/periode-1/oefening-3') {
                links[1].parentElement.classList.add(`${styles.active}`)
            }

        })
    }, [])

    return (
        <nav className={styles["bottom-nav"]}>
            <ul>
                <li>
                    <Link href="/home">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_146_1135)">
                                    <path d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z" fill="" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_146_1135">
                                        <rect width="24" height="24" fill="" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <p>Home</p>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/periodes">
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_146_1140)">
                                    <path d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z" fill="" />
                                    <path d="M21 16V14C18.76 14 16.84 13.04 15.4 11.32L14.06 9.72C13.68 9.26 13.12 9 12.53 9H11.48C10.89 9 10.33 9.26 9.95 9.72L8.61 11.32C7.16 13.04 5.24 14 3 14V16C5.77 16 8.19 14.83 10 12.75V15L6.12 16.55C5.45 16.82 5 17.48 5 18.21C5 19.2 5.8 20 6.79 20H9V19.5C9 18.12 10.12 17 11.5 17H14.5C14.78 17 15 17.22 15 17.5C15 17.78 14.78 18 14.5 18H11.5C10.67 18 10 18.67 10 19.5V20H17.21C18.2 20 19 19.2 19 18.21C19 17.48 18.55 16.82 17.88 16.55L14 15V12.75C15.81 14.83 18.23 16 21 16Z" fill="" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_146_1140">
                                        <rect width="24" height="24" fill="" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Periodes</p>
                        </span>
                    </Link>
                </li>
                <li>
                    <span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_146_1149)">
                                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="" />
                            </g>
                            <defs>
                                <clipPath id="clip0_146_1149">
                                    <rect width="24" height="24" fill="" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>Profiel</p>
                    </span>
                </li>
            </ul>
        </nav>
    )


}