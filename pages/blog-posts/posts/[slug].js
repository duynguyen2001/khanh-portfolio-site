import { getGlobalData } from '../../../utils/global-data';

import { fetchSanityClient } from '../../../utils/sanity';
import { Background } from '../../../components/background/Background';
import Link from 'next/dist/client/link';
import { serialize } from 'next-mdx-remote/serialize';
import Footer from '../../../components/Footer';
import { MDXRemote } from 'next-mdx-remote';
import hydrateComponents from '../../../hydrateComponents';
export default function Post({
  slug,
  title,
  author,
  publishedAt,
  mainImage,
  bodySource,
  globalData
}) {
  const components = hydrateComponents(bodySource.frontmatter.imports);
  return (
    <Background>
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 font-ven">
          <Link href={'/blog-posts/posts/' + slug}>{title}</Link>
        </h1>
        <></>
        <ul className="w-full prose dark:prose-dark">
          <MDXRemote {...bodySource} components={components} />
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Background>
  );
}
export async function getStaticPaths({ params }) {
  // get all possible slug for posts
  const response = await fetchSanityClient(
    `*[_type == "post" && defined(slug.current)][].slug.current`
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
    `*[_type == "post" && slug.current == $slug] [0]{
      slug,
      title,
      author -> {name, slug},
      publishedAt,
      mainImage,
      body
    }`,
    {
      slug: params.slug,
    }
  );
  const mdxSource = await serialize(allPosts.body, { parseFrontmatter: true });
  const globalData = getGlobalData();
  return {
    props: {
      slug: allPosts.slug.current,
      title: allPosts.title,
      author: allPosts.author,
      publishedAt: allPosts.publishedAt,
      mainImage: allPosts.mainImage,
      bodySource: mdxSource,
      globalData: globalData,
    },
  };
}
