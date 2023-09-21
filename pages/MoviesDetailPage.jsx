import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function MoviesDetailPage() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetail, setMovieDetail] = useState();
  useEffect(() => {
    async function loadMovieDetails() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          "https://2zc6fti416.execute-api.eu-central-1.amazonaws.com/prod/movies/" +
            movieId
        );
        setMovieDetail(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("The data fetched");
        setIsLoading(false);
      }
    }
    if (movieId) {
      loadMovieDetails();
    }
  }, [movieId]);
  return (
    <>
      <h1>This is Movies detail page</h1>
      <p>{movieDetail ? movieDetail.title : "Loading..."}</p>
      {movieDetail ? <img src={movieDetail.image} alt="" /> : "Also loading..."}
      {movieDetail ? (
        <ul>
          {movieDetail.cast.map((actor) => {
            return <li key={actor.id}>{actor.character}</li>;
          })}
        </ul>
      ) : undefined}
    </>
  );
}
