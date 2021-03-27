import {useRef} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import base32 from 'base32-browser'

const apiRoot = process.env.NEXT_PUBLIC_API_ROOT

const textToClipboard = (text) => {
  const d = document.createElement('textarea')
  document.body.appendChild(d)
  d.value = text
  d.select()
  document.execCommand('copy')
  document.body.removeChild(d)
}

export default function Home() {
  const inputRef = useRef(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>URL to CNAME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          URL to <a href="#">CNAME</a>!
        </h1>

        <p className={styles.description}>
          URL redirection from GoDaddy, Google Domains, Namecheap etc{' '}
        </p>

        <div className={styles.grid}>
          <input ref={inputRef} className={styles.card} type="text" style={{width: 600}} />
          <span href="https://nextjs.org/docs" className={`${styles.card} ${styles['card-i']}`} onClick={() => {
            const encoded = base32.encode(inputRef.current.value)
            if (encoded === '') return alert('Please enter a URL')
            const url = encoded.match(/.{1,63}/g).join('.') + '.' + apiRoot
            textToClipboard(url)
            alert('Copied to clipboard')
          }}>
            <p>Convert</p>
          </span>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://blog.tzionis.com" target="_blank">
          Developed by{' '}
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGThkoEckLcJQ/profile-displayphoto-shrink_400_400/0/1517042109683?e=1622073600&v=beta&t=P7_iU8hoW7VYWhIfwKc49Xdo6qL-3StNnqgDnfxvF6c" alt="Vercel Logo" className={styles.logo} style={{borderRadius: '50%'}}/>
        </a>
      </footer>
    </div>
  )
}
