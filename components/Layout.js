import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Layout({ children, title, description }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <div className="container">
      <Head>
        <title>{title ? `${title} — Your Name` : 'Your Name — Portfolio'}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      {/* トップページ用の大きなヘッダー（中央表示） */}
      {isHome ? (
        <header className="header" role="banner" aria-label="Site header">
          <div className="socials" aria-hidden={false}>
            <a href="https://www.instagram.com/your-id" aria-label="instagram" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.jpg" className="sns-icon" alt="Instagram" />
            </a>
            <a href="https://x.com/your-id" aria-label="x" target="_blank" rel="noopener noreferrer">
              <img src="/icons/x.jpg" className="sns-icon" alt="X (formerly Twitter)" />
            </a>
            <a href="https://github.com/Moriumaso" aria-label="github" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.jpg" className="sns-icon" alt="GitHub" />
            </a>
            <a href="mailto:you@example.com" aria-label="email">
              <img src="/icons/mail.jpg" className="sns-icon" alt="Email" />
            </a>
          </div>
          <img src="/images/avatar.jpg" alt="avatar" className="avatar" />
          <div>
            <h1>Your Name</h1>
            <div className="small">ソフトウェアエンジニア / 〇〇大学卒</div>
          </div>
        </header>
      ) : (
        /* 各ページ（トップ以外）でページ内右上に小さく表示するパネル（スクロールで追従しない） */
        <div className="page-meta" aria-hidden={false}>
          <div className="small-socials" role="navigation" aria-label="social links">
            <a href="https://www.instagram.com/your-id" aria-label="instagram" target="_blank" rel="noopener noreferrer">
              <img src="/icons/instagram.jpg" className="sns-icon" alt="Instagram" />
            </a>
            <a href="https://x.com/your-id" aria-label="x" target="_blank" rel="noopener noreferrer">
              <img src="/icons/x.jpg" className="sns-icon" alt="X (formerly Twitter)" />
            </a>
            <a href="https://github.com/Moriumaso" aria-label="github" target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.jpg" className="sns-icon" alt="GitHub" />
            </a>
            <a href="mailto:you@example.com" aria-label="email">
              <img src="/icons/mail.jpg" className="sns-icon" alt="Email" />
            </a>
          </div>
          <img src="/images/avatar.jpg" alt="avatar" className="avatar avatar--small" />
        </div>
      )}

      <main role="main">{children}</main>

      <footer role="contentinfo">
        © {new Date().getFullYear()} Your Name — <Link href="/resume">Resume</Link>
      </footer>
    </div>
  )
}