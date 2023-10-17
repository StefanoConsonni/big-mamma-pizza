import { isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {isRouteErrorResponse(error) && <p>{error.data}</p>}
      {error instanceof Error && <p>{error.message}</p>}
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
