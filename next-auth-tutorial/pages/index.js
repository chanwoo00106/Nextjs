import Head from "next/head";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>next auth tutorial</title>
        <meta name="description" content="practice next auth" />
      </Head>

      {!session ? (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        <>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
      {session && (
        <Link href="/test">
          <a>test page</a>
        </Link>
      )}
    </div>
  );
}
