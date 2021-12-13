import { useRouter } from "next/router";

function Review() {
  const router = useRouter();
  const { productId, product } = router.query;

  return (
    <h1>
      {product}, {productId}
    </h1>
  );
}

export default Review;
