import Seo from "../components/Seo";

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:3000/api/movies")
  ).json();
  return {
    props: { results },
  };
}

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Main" />
      {results?.map((movie) => (
        <div key={movie.id} className="card">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          margin: 50px 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 0 20%;
        }

        .card {
          padding: 10px;
        }

        .card img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
          transition: 0.2s;
        }

        .card img:hover {
          transform: scale(1.03);
        }

        .card h4 {
          text-align: center;
          font-size: 1.5rem;
          margin: 10px 0 20px;
        }
      `}</style>
    </div>
  );
}
