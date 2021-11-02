import React from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  const paths = res.data.map((i) => {
    return {
      params: { id: i.id.toString() },
    };
  });

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return {
    props: {
      data: res.data,
    },
  };
};

export default function Details({ data }) {
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.website}</p>
      <p>{data.address.city}</p>
    </div>
  );
}
