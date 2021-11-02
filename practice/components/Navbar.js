import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>Anything</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/haha">
        <a>Haha</a>
      </Link>
    </nav>
  );
}
