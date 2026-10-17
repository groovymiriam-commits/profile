import type { HomePost } from '../config/home';

interface PostMeta {
  title: string;
  category: string;
  publishedAt: string;
  date: string;
  description: string;
}

export async function getAllPosts(): Promise<HomePost[]> {
  const posts = import.meta.glob<{ frontmatter: PostMeta }>(
    '/src/pages/posts/**/*.md',
    { eager: true }
  );

  const postArray: HomePost[] = [];

  for (const [path, module] of Object.entries(posts)) {
    const { frontmatter } = module;
    if (!frontmatter.title || !frontmatter.category) continue;

    // Extract slug from path: /src/pages/posts/filename.md -> /posts/filename/
    const slug = path
      .replace('/src/pages/posts/', '')
      .replace('.md', '')
      .replace(/ /g, '-');

    postArray.push({
      category: frontmatter.category,
      title: frontmatter.title,
      excerpt: frontmatter.description,
      publishedAt: frontmatter.publishedAt,
      href: `/posts/${slug}/`,
    });
  }

  // Sort by date (newest first)
  return postArray.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });
}
