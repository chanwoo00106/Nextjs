import axios from "axios";
import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link href={`/posts/${post.id}`} passHref>
              <a>
                {post.id} {post.title}
              </a>
            </Link>
          </h2>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return {
    props: { posts: data },
  };
}
