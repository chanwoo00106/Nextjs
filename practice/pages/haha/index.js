import React from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/Hahas.module.css";

export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return {
    props: { data: res.data },
  };
};

export default function HahaIndex({ data }) {
  return (
    <>
      <Head>
        <title>Teemo | haha</title>
        <meta name="keywords" content="Teemo"></meta>
      </Head>
      <div>
        <h1>All HaHa</h1>
        {data.map((i) => (
          <div key={i.id}>
            <Link href={`/haha/${i.id}`}>
              <a className={styles.single}>
                <h3>{i.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
