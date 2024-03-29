import { Background } from '../../components/background/Background.jsx';
import { fetchSanityClient } from '../../utils/sanity.js';
import { PostPreview } from '../../components/postPreview/PostPreview.jsx';
import { getGlobalData } from '../../utils/global-data.js';
import Footer from '../../components/Footer.js';
import { CategoryButton } from '../../components/categoryButton/CategoryButton.jsx';

export default function Index({ globalData, posts, categories }) {
  return (
    <Background>
      <main className="w-full py-4">
        <h1 className="text-6xl py-4 text-center mb-12 font-ven text-primary dark:text-primarycontrast">
          {globalData.blogTitle}
        </h1>
        <div className="inline-flex flex-wrap justify-start	">
          <CategoryButton slug="" title="All Posts" />
          {categories.map(function (category, index) {
            return (
              <CategoryButton
                key={index}
                slug={category.slug.current}
                title={category.title}
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

export async function getStaticProps() {
  const posts = await fetchSanityClient(
    `*[_type == 'post']{
        slug, 
        title,
        description, 
        publishedAt, 
        mainImage,
      }`
  );
  const categories = await fetchSanityClient(`*[_type == "category"]{slug, title}`);
  const globalData = getGlobalData();
  return { props: { globalData: globalData, posts: posts, categories: categories } };
}
