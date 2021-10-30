import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Contents from "../../src/components/Contents";
import Header from "../../src/components/Header";

const Page = () => {
  const [data, setData] = useState();
  const router = useRouter();
  console.log(router.query);
  useEffect(() => {
    async function get() {
      if (router.query.id) {
        try {
          const res = await axios.get(
            `http://localhost:3300/${router.query.id}`
          );
          console.log(res.data);
          setData(res.data);
        } catch (e) {
          console.log(e);
        }
      }
    }
    get();
  }, [router.query.id]);
  return (
    <div>
      <Header />
      {data && <Contents data={data[0]} />}
    </div>
  );
};

export default Page;
