import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className="detail">
      <Image src={cover_image} alt="sample" width="500" height="500" />
      <h2>{title}</h2>
      <Link href="/">
        <a>
          <p>back</p>
        </a>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((i) => ({
    params: {
      slug: i.replace(".md", ""),
    },
  }));

  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const markdown = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(markdown);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
