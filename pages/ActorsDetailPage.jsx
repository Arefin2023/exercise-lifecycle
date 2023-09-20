import { useParams } from "react-router-dom";
export function ActorsDetailPage() {
  const { actorId } = useParams();
  return (
    <>
      <h1>This is Actors detail page</h1>
      <p>Actor ID: {actorId}</p>
    </>
  );
}
