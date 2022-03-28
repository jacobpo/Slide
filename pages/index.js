import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
      Click one
      <div>
        <ul>
          <li>
          <Link href = "/Classes/ACCT1101/Classes/chat">ACCT1101</Link> 
          </li>
          <li>
          <Link href = "/Classes/CITS1401/Classes/chat">CITS1401</Link> 
          </li>
          <li>
          <Link href = "/Classes/FINA3000/Classes/chat">FINA300</Link> 
          </li>
        </ul>
      </div>
    </div>

  )
}
