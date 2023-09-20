import { useParams } from "react-router-dom";
export function MoviesDetailPage() {
  const { movieId } = useParams();
  return (
    <>
      <h1>This is Movies detail page</h1>
      <p>Movie: {movieId}</p>
    </>
  );
}
