import { useRouter } from "next/router";

function All() {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <ul>
      {params.map((i, idx) => (
        <li key={idx}>{i}</li>
      ))}
    </ul>
  );
}

export default All;
