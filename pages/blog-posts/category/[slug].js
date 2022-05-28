import { getGlobalData } from '../../../utils/global-data';
import { fetchSanityClient } from '../../../utils/sanity';
import { Background } from '../../../components/background/Background';
import Link from 'next/dist/client/link';
import Footer from '../../../components/Footer';
import { PostPreview } from '../../../components/postPreview/PostPreview';

export default function Post({ title, description, slug, posts, globalData }) {
  return (
    <Background>
      <main className="w-full py-4">
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl py-4 text-center mb-12 font-ven text-primary dark:text-primarycontrast">
            <Link href={'/blog-posts/author/' + slug}>{title}</Link>
          </h1>
        </div>

        <></>
        <ul className="max-w-none p-2 prose dark:prose-dark prose-headings:font-aileron prose-headings:text-primary dark:prose-headings:text-primarycontrast px-2">
          {description}
        </ul>
        <ul>
          <br></br>
          <h1 className="font-ven text-primary dark:text-primarycontrast px-2">
            All Posts
          </h1>
          {posts.map(function (post, index) {
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
    `*[_type == "category" && defined(slug.current)][].slug.current`
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
  const category = await fetchSanityClient(
    `*[_type == "category" && slug.current == $slug] [0] {
        slug,
        title,
        description,
        "posts": *[_type == 'post' && references(^._id)] {
          slug, title, description, publishedAt, mainImage
        }
      }`,
    {
      slug: params.slug,
    }
  );
  const globalData= getGlobalData();
  return {
    props: {
      title: category.title,
      description: category.description,
      slug: category.slug.current,
      posts: category.posts,
      globalData: globalData
    },
  };
}
