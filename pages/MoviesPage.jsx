import { Link } from "react-router-dom";
export function MoviesPage() {
  return (
    <>
      <h1>This is the MoviesPage</h1>
      <h3>
        <Link to="/">Back to Home Page</Link>
      </h3>
    </>
  );
}
