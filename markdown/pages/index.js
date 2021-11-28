import fs from "fs";
import Head from "next/head";
import matter from "gray-matter";
import path from "path";

export default function Home({ post }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <div>{post}</div>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const markdown = fs.readFileSync(path.join("posts", fileName), "utf-8");

    return {
      markdown,
    };
  });
  return {
    props: {
      post: "The Posts",
    },
  };
}
