import axios from "axios";
import User from "../components/User";

export default function Users({ data }) {
  return (
    <div>
      <ul>
        {data.map((i) => (
          <User key={i.id} user={i} />
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return {
    props: { data },
  };
};
