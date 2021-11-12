import Head from "next/Head";

const Meta = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
};

export default Meta;
