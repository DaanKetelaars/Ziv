
'use client'

// React
import { useEffect } from 'react'

// Next
import Image from 'next/image'

// Images
import Logo from '@/public/ziv-logo.svg'

//Styles
import styles from '@/app/styles/load-screen.module.scss'


export default function App() {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/welcome'
    }, 12000);
  }, [])

  return (
    <main className={styles.main}>
      <section>
        <Image src={Logo} alt="Ziv" />
        <h1>Blijf <span>gefocust</span> met <span>Ziv</span> en <span>voorkom</span> kruisband blessures.</h1>
      </section>
    </main>
  )
}
