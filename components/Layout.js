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
    <div className="socials" aria-hidden={false}>
      <a href="https://www.instagram.com/your-id" aria-label="instagram" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.svg" className="sns-icon" alt="Instagram" />
      </a>
      <a href="https://x.com/your-id" aria-label="x" target="_blank" rel="noopener noreferrer">
        <img src="/icons/x.svg" className="sns-icon" alt="X (formerly Twitter)" />
      </a>
      <a href="https://github.com/Moriumaso" aria-label="github" target="_blank" rel="noopener noreferrer">
        <img src="/icons/github.svg" className="sns-icon" alt="GitHub" />
      </a>
      <a href="mailto:you@example.com" aria-label="email">
        <img src="/icons/mail.svg" className="sns-icon" alt="Email" />
      </a>
    </div>
  <img src="/images/avatar.jpg" alt="avatar" className="avatar" />
    <div>
      <h1>Your Name</h1>
      <div className="small">ソフトウェアエンジニア / 〇〇大学卒</div>
    </div>
  </header>

  <main role="main">{children}</main>

  <footer role="contentinfo">
    © {new Date().getFullYear()} Your Name — <Link href="/resume">Resume</Link>
  </footer>
</div>
)
}