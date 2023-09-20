import { Link } from "react-router-dom";

export function MoviesPage() {
  return (
    <>
      <h1>This is the MoviesPage</h1>
      <p>
        <Link to="7">Take me to the movie </Link>
      </p>
      <h3>
        <Link to="/">Back to Home Page</Link>
      </h3>
    </>
  );
}
