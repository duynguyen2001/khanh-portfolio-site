import { getGlobalData } from '../../utils/global-data';
import { fetchSanityClient } from '../../utils/sanity';
import { Background } from '../../components/background/Background';
import Footer from '../../components/Footer';
import { PostPreview } from '../../components/postPreview/PostPreview';
import {CategoryButton} from '../../components/categoryButton/CategoryButton';

export default function Post({
  title,
  slug,
  description,
  posts,
  categories,
  globalData,
}) {
  return (
    <Background>
      <main className="w-full py-4">
        <h1 className="text-6xl py-4 text-center mb-12 font-ven text-primary dark:text-primarycontrast">
          {title}
        </h1>
        <p className='max-w-none p-2 prose dark:prose-dark'>{description}</p>
        <br></br>
        <div className="inline-flex">
          <CategoryButton slug="" title="All Posts" />
          {categories.map(function (post, index) {
            return (
              <CategoryButton
                key={index}
                slug={post.slug.current}
                title={post.title}
              />
            );
          })}
        </div>
        <ul className="w-full">
          {posts.map(function (post, index) {
            return (
              <PostPreview
                key={index}
                title={post.title}
                description={post.description}
                date={post.publishedAt}
                slug={post.slug.current}
                link="/blog-posts/posts/"
              />
            );
          })}
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
        },
        "categories": *[_type == "category"]{slug, title}
      }`,
    {
      slug: params.slug,
    }
  );
  const globalData = getGlobalData();
  return {
    props: {
      title: category.title,
      description: category.description,
      slug: category.slug.current,
      posts: category.posts,
      categories: category.categories,
      globalData: globalData,
    },
  };
}
