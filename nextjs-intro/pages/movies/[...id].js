import Seo from "../../components/Seo";

export function getServerSideProps({ params: { id } }) {
  return {
    props: {
      params: id,
    },
  };
}

export default function Detail({ params }) {
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}
