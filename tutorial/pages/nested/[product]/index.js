const { useRouter } = require("next/router");

const Product = () => {
  const router = useRouter();
  const { product } = router.query;

  return <h1>{product}</h1>;
};

export default Product;
