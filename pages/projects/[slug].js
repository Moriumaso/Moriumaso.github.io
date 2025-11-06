import { getAllProjectSlugs, getProjectBySlug } from '../../lib/projects'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

export default function ProjectPage({ source, meta }) {
  return (
    <Layout title={meta?.title} description={meta?.description}>
      <article className="card">
        <h1>{meta?.title}</h1>
        {meta?.thumbnail && (
          <img src={meta.thumbnail} alt={`${meta.title} thumbnail`} className="thumbnail" />
        )}
        <div className="meta">{meta?.date}</div>
        <div className="project-content">
          <MDXRemote {...source} components={{ Gallery }} />
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const project = await getProjectBySlug(slug)
  const mdxSource = await serialize(project.content || '', {
    mdxOptions: {
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
    }
  })

  return {
    props: {
      source: mdxSource,
      meta: project.meta || {}
    }
  }
}

export async function getStaticPaths() {
  const slugs = getAllProjectSlugs() || []
  return {
    paths: slugs.map((s) => ({ params: { slug: s } })),
    fallback: false
  }
}
// ...existing code...
import { getAllProjectSlugs, getProjectBySlug } from '../../lib/projects'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Layout from '../../components/Layout'
import Gallery from '../../components/Gallery'

const components = { Gallery } // Add custom MDX components here if needed

export default function Project({ meta, mdxSource }) {
  return (
    <Layout title={meta.title} description={meta.description}>
      <article>
        {meta.thumbnail && <img src={meta.thumbnail} alt={meta.title + ' thumbnail'} className="thumbnail" />}
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
// ...existing code...