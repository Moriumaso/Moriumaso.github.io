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
        <title>{title ? `${title} — 森 爽真` : '森 爽真 — Portfolio'}</title>
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
          {/* Try JPG first, fall back to PNG if not present/invalid */}
          <img
            src="/images/avatar.jpg"
            alt="avatar"
            className="avatar"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/avatar.png' }}
          />
          <div>
            <h1>森 爽真</h1>
            <div className="small">東京科学大学大学院卒</div>
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
          <img
            src="/images/avatar.jpg"
            alt="avatar"
            className="avatar avatar--small"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/avatar.png' }}
          />
        </div>
      )}

      <main role="main">{children}</main>

      <footer role="contentinfo">
        © {new Date().getFullYear()} 森 爽真 — <Link href="/resume">Resume</Link>
      </footer>
    </div>
  )
}