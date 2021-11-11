import Head from "next/head";

export default function Header({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>Header</h1>
    </div>
  );
}
