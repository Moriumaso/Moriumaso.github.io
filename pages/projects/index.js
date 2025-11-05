import Link from 'next/link'
import Layout from '../../components/Layout'
import { getAllProjects } from '../../lib/projects'
export default function Projects({ projects }) {
return (
<Layout title="Projects" description="プロジェクト一覧">
<h2>Projects 一覧</h2>
<div className="projects-grid" aria-live="polite">
{projects.map((p) => (
<article className="card" key={p.slug}>
<h3><Link href={/projects/${p.slug}}><a>{p.meta.title}</a></Link></h3>
<div className="meta">{p.meta.date}</div>
<p>{p.meta.description}</p>
<div style={{ marginTop: 8 }}>
<Link href={/projects/${p.slug}}><a>詳細を見る →</a></Link>
</div>
</article>
))}
</div>
</Layout>
)
}

export async function getStaticProps() {
const projects = getAllProjects()
return { props: { projects } }
}