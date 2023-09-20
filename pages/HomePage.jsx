import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <>
      <button>
        <Link to="/movies">Alle Movies</Link>
      </button>
    </>
  );
}
