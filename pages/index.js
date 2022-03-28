import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      Click one
      <div>
        <ul>
          <li>
          <a href = "/Classes/ACCT1101">ACCT1101</a> 
          </li>
          <li>
          <a href = "/Classes/CITS1401">CITS1401</a>
          </li>
          <li>
          <a href = "/Classes/FINA3001">FINA3001</a>
          </li>
        </ul>
      </div>
    </div>

  )
}
