import type { NextPage } from 'next'
import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero-bg.jpg)',
      }}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {session ? (
          <div className="text-white">
            Signed in as {session.user?.email}
            <br />
            <button onClick={() => signOut()}>logOut</button>
          </div>
        ) : (
          <div className="text-white">
            Not sined in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        )}
        <h1 className="max-w-lg text-5xl font-bold text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <h2 className="mt-4 mb-8 text-2xl font-bold text-white">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-lg text-white">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="mt-4 flex">
          <input
            className="min-w-[400px] bg-white p-4"
            placeholder="Email address"
          />
          <button className="flex items-center bg-[#e50914] px-4 text-xl text-white ">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home
