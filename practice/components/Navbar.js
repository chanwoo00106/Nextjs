import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/Shroom-logo.png"
          width={111}
          height={77}
          alt="Shroom-logo"
        />
        <h1>Teemo</h1>
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
