import { Background } from '../../components/background/Background.jsx';
import client from '../../client.js';
import { fetchSanityClient } from '../../utils/sanity.js';
import { PostPreview } from '../../components/postPreview/PostPreview.jsx';
import { getGlobalData } from '../../utils/global-data.js';

export default function Index({ globalData, posts }) {
  return (
    <Background>
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12 font-ven">
          {globalData.blogTitle}
        </h1>
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
    </Background>
  );
}

export async function getStaticProps() {
  const posts = await fetchSanityClient(
    "*[_type == 'post']{slug, title, description, publishedAt, mainImage}"
  );
  const globalData = getGlobalData();
  return { props: { globalData: globalData, posts: posts } };
}
