// ...existing code...
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllProjects } from '../lib/projects'

export default function Home({ projects }) {
  return (
    <Layout>
      <section className="hero">
        <h1 className="catch">何事も全力で</h1>
        <p className="lead">はじめまして、森 爽真です。本ポートフォリオでは私について簡単にですが説明させていただきます。これまでの経歴やこれからの展望、物事の考え方やその根本にある経験談などを具に載せますので、気楽にご覧くださいm(__)m</p>

        <div className="skills">
          <h3>スキル</h3>
          <ul>
            <li>無線通信知識</li>
            <li>理数系基礎知識</li>
            <li>接客スキル等</li>
          </ul>
        </div>

        <p className="note">レジュメ（PDF）は不要とのことなので表示していません。</p>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Projects</h2>
        <div className="projects-grid" aria-live="polite">
          {projects.map((p) => (
            <article className="card" key={p.slug}>
              {p.meta.thumbnail && (
                <Link href={`/projects/${p.slug}`}>
                  <img src={p.meta.thumbnail} alt={p.meta.title + ' thumbnail'} className="thumbnail" />
                </Link>
              )}
              <h3>
                <Link href={`/projects/${p.slug}`}>{p.meta.title}</Link>
              </h3>
              <div className="meta">{p.meta.date} · {p.meta.tags?.join(', ')}</div>
              <p>{p.meta.description}</p>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <Link href="/projects">すべてのプロジェクトを見る →</Link>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return { props: { projects } }
}
// ...existing code...