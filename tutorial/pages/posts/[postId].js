import axios from "axios";
import { useRouter } from "next/router";

export default function Post({ post }) {
  const router = useRouter();
  const onClick = () => router.back();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
      <button onClick={onClick}>back</button>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths({ params }) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const paths = data.slice(0, 3).map((post) => ({
    params: { postId: post.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}
