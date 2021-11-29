import Link from "next/link";
import Image from "next/image";

export default function Posts({ post }) {
  return (
    <div className="card">
      <Image
        src={post.frontmatter.cover_image}
        alt="뷁"
        width={300}
        height={300}
      />
      <Link href={`/${post.slug}`}>
        <a>
          <h2 className="title">{post.frontmatter.title}</h2>
        </a>
      </Link>
      <p className="date">{post.frontmatter.date}</p>
    </div>
  );
}
