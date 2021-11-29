import fs from "fs";
import Head from "next/head";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div className="posts">
        {posts.map((i, index) => (
          <Post post={i} key={index} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", fileName), "utf-8");

    const { data: frontmatter } = matter(markdown);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}
