// ...existing code...
import Layout from '../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function Resume({ frontMatter, mdxSource }) {
  return (
    <Layout title="Resume" description="履歴書">
      <article className="card resume-article">
        <h1>{frontMatter.title || 'Resume'}</h1>
        <MDXRemote {...mdxSource} />
        <p style={{ marginTop: 24 }}>
          <a href="/resume.pdf" download>履歴書（PDF）をダウンロード</a>
        </p>
      </article>
    </Layout>
  )
}

export async function getStaticProps() {
  const resumePath = path.join(process.cwd(), 'content', 'resume.md')
  const file = fs.readFileSync(resumePath, 'utf8')
  const { data, content } = matter(file)
  const mdxSource = await serialize(content)
  return { props: { frontMatter: data || {}, mdxSource } }
}
// ...existing code...