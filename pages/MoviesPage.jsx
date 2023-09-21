import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function MoviesPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function loadMovies() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/"
        );
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMovies();
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div>
        {data.map((film) => {
          return (
            <Link key={film.id} to={"/movies/" + film.id}>
              <h3>{film.title}</h3>
            </Link>
          );
        })}
      </div>

      <h3>
        <Link to="/">Back to Home Page</Link>
      </h3>
    </>
  );
}
