import { serialize } from 'next-mdx-remote/serialize';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkSmartypants from 'remark-smartypants';
import remarkGfm from 'remark-gfm';

export default async function mdxSerialize(content) {
  const data = await serialize(content, {
    // made available to the arguments of any custom mdx component
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath, remarkSmartypants],
      rehypePlugins: [rehypeKatex],
    },
    // Indicates whether or not to parse the frontmatter from the mdx source
    parseFrontmatter: true,
  });
  return data;
}
