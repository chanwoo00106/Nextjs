import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ErrorPage() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>That page connot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>HomePage</a>
        </Link>
      </p>
    </div>
  );
}
