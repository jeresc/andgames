import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <button onClick={goBack}>Go back</button>
    </div>
  )
}
