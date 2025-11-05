import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const projectsDirectory = path.join(process.cwd(), 'content', 'projects')

export function getAllProjectSlugs() {
if (!fs.existsSync(projectsDirectory)) return []
return fs.readdirSync(projectsDirectory).filter(f => f.endsWith('.md') || f.endsWith('.mdx')).map((file) => file.replace(/.(md|mdx)$/, ''))
}

export function getProjectBySlug(slug) {
	const fullPathMDX = path.join(projectsDirectory, `${slug}.mdx`)
	const fullPathMD = path.join(projectsDirectory, `${slug}.md`)
	let fullPath = ''
	if (fs.existsSync(fullPathMDX)) fullPath = fullPathMDX
	else fullPath = fullPathMD
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)
	return { slug, meta: data, content }
}

export function getAllProjects() {
const slugs = getAllProjectSlugs()
return slugs.map((slug) => {
const p = getProjectBySlug(slug)
return { slug, meta: p.meta }
}).sort((a, b) => (b.meta.date || '').localeCompare(a.meta.date || ''))
}