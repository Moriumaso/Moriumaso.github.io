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
          <h3>
            <Link href={`/projects/${p.slug}`}><a>{p.meta.title}</a></Link>
          </h3>
          <div className="meta">{p.meta.date} · {p.meta.tags?.join(', ')}</div>
          <p>{p.meta.description}</p>
        </article>
      ))}
    </div>
    <div style={{ marginTop: 12 }}>
      <Link href="/projects"><a>すべてのプロジェクトを見る →</a></Link>
    </div>
  </section>
</Layout>
)
}

export async function getStaticProps() {
const projects = getAllProjects()
return { props: { projects } }
}