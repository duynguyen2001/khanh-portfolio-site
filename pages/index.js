import Footer from '../components/Footer';
import { getGlobalData } from '../utils/global-data';
import { serialize } from 'next-mdx-remote/serialize';
import { Background } from '../components/background/Background.jsx';
import { MDXRemote } from 'next-mdx-remote';
import { fetchSanityClient } from '../utils/sanity';
import hydrateComponents from "../hydrateComponents";

export default function Index({ globalData, bodySource }) {
  const components = hydrateComponents(bodySource.frontmatter.imports);
  return (
    <Background>
      <main className="w-full">
        <ul className="w-full prose dark:prose-dark prose-headings:font-ven prose-headings:text-primary dark:prose-headings:text-primarycontrast">
          <MDXRemote {...bodySource} components={components} />
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Background>
  );
}

export async function getStaticProps() {
  const globalData = getGlobalData();
  const allPosts = await fetchSanityClient(
    `*[_type == "page" && slug.current == 'first-page'] [0]{
        slug,
        title,
        content
    }`
  );
  const mdxSource = await serialize(allPosts.content, {
    parseFrontmatter: true,
  });
  return { props: { globalData: globalData, bodySource: mdxSource } };
}
