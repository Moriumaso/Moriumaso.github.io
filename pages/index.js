// ...existing code...
import Link from 'next/link'
import Layout from '../components/Layout'
import { getAllProjects } from '../lib/projects'

export default function Home({ projects }) {
  return (
    <Layout>
      <section>
        <h2>About / 自己紹介</h2>
        <p>ここはポートフォリオです。学歴や経験、趣味、スキルを自由に書いてください。</p>
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