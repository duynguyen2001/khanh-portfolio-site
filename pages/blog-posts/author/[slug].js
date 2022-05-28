import { getGlobalData } from '../../../utils/global-data';
import { fetchSanityClient } from '../../../utils/sanity';
import { Background } from '../../../components/background/Background';
import Link from 'next/dist/client/link';
import serialize from '../../../utils/mdxSerialize';
import Footer from '../../../components/Footer';
import { MDXRemote } from 'next-mdx-remote';
import hydrateComponents from '../../../hydrateComponents';
import { PostPreview } from '../../../components/postPreview/PostPreview';

export default function Post({ author, slug, bodySource, globalData }) {
  const components = hydrateComponents(bodySource.frontmatter.imports);
  return (
    <Background>
      <main className="w-full">
        <div className="flex flex-col items-center ">
          <img
            className="w-28 h-28 rounded-full"
            src={author.imageURL}
            alt="Rounded avatar"
          />
          <h1 className="text-2xl lg:text-4xl text-center mb-12 font-ven text-primary dark:text-primarycontrast">
            <Link href={'/blog-posts/author/' + slug}>{author.name}</Link>
          </h1>
        </div>

        <></>
        <ul className="max-w-none p-2 prose dark:prose-dark prose-headings:font-ven prose-headings:text-primary dark:prose-headings:text-primarycontrast px-2">
          <MDXRemote {...bodySource} components={components} />
        </ul>
        <ul>
          <br></br>
          <h1 className="font-ven text-primary dark:text-primarycontrast px-2">
            All Posts
          </h1>
          {author.posts.map(function (post, index) {
            return (
              <PostPreview
                key={index}
                title={post.title}
                description={post.description}
                date={post.publishedAt}
                slug={post.slug.current}
                link="/blog-posts/posts/"
              />);})}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Background>
  );
}
export async function getStaticPaths({ params }) {
  // get all possible slug for posts
  const response = await fetchSanityClient(
    `*[_type == "author" && defined(slug.current)][].slug.current`
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
  const author = await fetchSanityClient(
    `*[_type == "author" && slug.current == $slug] [0] {
        slug,
        name,
        "imageURL": image.asset-> url,
        bio,
        "posts": *[_type == 'post' && references(^._id)] {
          slug, title, description, publishedAt, mainImage
        }
      }`,
    {
      slug: params.slug,
    }
  );
  const mdxSource = await serialize(author.bio, { parseFrontmatter: true });
  const globalData = getGlobalData();
  console.log(author);
  return {
    props: {
      author: author,
      bodySource: mdxSource,
      globalData: globalData,
      slug: author.slug.current,
    },
  };
}
