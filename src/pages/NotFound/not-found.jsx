import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <h1>Page not found</h1>
      <button onClick={goBack}>Go back</button>
    </div>
  )
}
