import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SnsIcon from './SnsIcon'
export default function Layout({ children, title, description }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <div className="container">
      <Head>
        <title>{title ? `${title} — Your Name` : 'Your Name — Portfolio'}</title>
        {description && <meta name="description" content={description} />}
  {/* favicon: prefer JPG, fallback to SVG */}
  <link rel="icon" href="/icons/github.jpg" />
  <link rel="icon" href="/icons/github.svg" />
      </Head>

      {/* トップページ用の大きなヘッダー（中央表示） */}
      {isHome ? (
        <header className="header" role="banner" aria-label="Site header">
          <div className="socials" aria-hidden={false}>
            <a href="https://www.instagram.com/your-id" aria-label="instagram" target="_blank" rel="noopener noreferrer">
              <SnsIcon name="instagram" alt="Instagram" className="sns-icon" />
            </a>
            <a href="https://x.com/your-id" aria-label="x" target="_blank" rel="noopener noreferrer">
              <SnsIcon name="x" alt="X (formerly Twitter)" className="sns-icon" />
            </a>
            <a href="https://github.com/Moriumaso" aria-label="github" target="_blank" rel="noopener noreferrer">
              <SnsIcon name="github" alt="GitHub" className="sns-icon" />
            </a>
            <a href="mailto:you@example.com" aria-label="email">
              <SnsIcon name="mail" alt="Email" className="sns-icon" />
            </a>
          </div>
          <img src="/images/avatar.png" alt="avatar" className="avatar" />
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
              <SnsIcon name="instagram" alt="Instagram" className="sns-icon" />
            </a>
            <a href="https://x.com/your-id" aria-label="x" target="_blank" rel="noopener noreferrer">
              <SnsIcon name="x" alt="X (formerly Twitter)" className="sns-icon" />
            </a>
            <a href="https://github.com/Moriumaso" aria-label="github" target="_blank" rel="noopener noreferrer">
              <SnsIcon name="github" alt="GitHub" className="sns-icon" />
            </a>
            <a href="mailto:you@example.com" aria-label="email">
              <SnsIcon name="mail" alt="Email" className="sns-icon" />
            </a>
          </div>
          <img src="/images/avatar.png" alt="avatar" className="avatar avatar--small" />
        </div>
      )}

      <main role="main">{children}</main>

      <footer role="contentinfo">
        © {new Date().getFullYear()} Your Name — <Link href="/resume">Resume</Link>
      </footer>
    </div>
  )
}