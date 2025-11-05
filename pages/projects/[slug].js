import { getAllProjectSlugs, getProjectBySlug } from '../../lib/projects'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Layout from '../../components/Layout'
const components = {} // Add custom MDX components here if needed

export default function Project({ meta, mdxSource }) {
return (
<Layout title={meta.title} description={meta.description}>
<article>
<h1>{meta.title}</h1>
<div className="meta">{meta.date} · {meta.tags?.join(', ')}</div>
<MDXRemote {...mdxSource} components={components} />
</article>
</Layout>
)
}

export async function getStaticPaths() {
const slugs = getAllProjectSlugs()
return {
paths: slugs.map((s) => ({ params: { slug: s } })),
fallback: false
}
}

export async function getStaticProps({ params }) {
const project = getProjectBySlug(params.slug)
const mdxSource = await serialize(project.content, {
mdxOptions: {
rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
}
})
return {
props: {
meta: project.meta,
mdxSource
}
}
}

