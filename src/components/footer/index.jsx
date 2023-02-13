import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
    Made by Dilan Kaplan
    <Link href="https://www.linkedin.com/in/dilan-kaplan-53ab831a4/" target="_blank"> </Link>

    </footer>
   
  )
}

export default Footer