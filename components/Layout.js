import Head from 'next/head'
import Link from 'next/link'
export default function Layout({ children, title, description }) {
  return (
    <div className="container">
      <Head>
        <title>{title ? `${title} — Your Name` : 'Your Name — Portfolio'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
  <header className="header" role="banner" aria-label="Site header">
    <img src="/images/avatar.png" alt="avatar" className="avatar" />
    <div>
      <h1>Your Name</h1>
      <div className="small">ソフトウェアエンジニア / 〇〇大学卒</div>
      <div className="socials" aria-hidden={false}>
        <a href="https://github.com/Moriumaso" aria-label="github" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" className="sns-icon" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/your-id" aria-label="linkedin" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin.svg" className="sns-icon" alt="LinkedIn" />
        </a>
        <a href="https://twitter.com/your-id" aria-label="twitter" target="_blank" rel="noreferrer">
          <img src="/icons/twitter.svg" className="sns-icon" alt="Twitter" />
        </a>
      </div>
    </div>
  </header>

  <main role="main">{children}</main>

  <footer role="contentinfo">
    © {new Date().getFullYear()} Your Name — <Link href="/resume">Resume</Link>
  </footer>
</div>
)
}