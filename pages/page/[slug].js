import { getGlobalData } from '../../utils/global-data';

import { fetchSanityClient } from '../../utils/sanity';
import { Background } from '../../components/background/Background';
import Link from 'next/dist/client/link';
import Footer from '../../components/Footer';
import { MDXRemote } from 'next-mdx-remote';
import hydrateComponents from '../../hydrateComponents';
import serialize from '../../utils/mdxSerialize';
export default function Post({
  slug,
  title,
  bodySource,
  globalData
}) {
  const components = hydrateComponents(bodySource.frontmatter.imports);
  return (
    <Background>
      <main className="w-full py-4">
        <h1 className="text-6xl py-4 text-center mb-12 font-ven text-primary dark:text-primarycontrast">
          <Link href={'/blog-posts/posts/' + slug}>{title}</Link>
        </h1>
        <div className="max-w-none p-4 prose dark:prose-dark prose-headings:font-aileron prose-headings:text-primary dark:prose-headings:text-primarycontrast">
          <MDXRemote {...bodySource} components={components} />
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Background>
  );
}
export async function getStaticPaths({ params }) {
  // get all possible slug for posts
  const response = await fetchSanityClient(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  );

  // map each of the response to a lists of params: slug
  const paths = response.map((slug) => ({
    params: { slug },
  }));

  // return a 404 page when the current slug not in the path
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch the first (unique) post have the slug
  const allPosts = await fetchSanityClient(
    `*[_type == "page" && slug.current == $slug] [0]{
        slug,
        title,
        content
    }`,
    {
      slug: params.slug,
    }
  );
  const mdxSource = await serialize(allPosts.content);
  const globalData = getGlobalData();
  return {
    props: {
      slug: allPosts.slug.current,
      title: allPosts.title,
      bodySource: mdxSource,
      globalData: globalData,
    },
  };
}
