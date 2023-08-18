import { useNavigate } from "react-router-dom";
import { PageNotFound } from "./not-found.styles";
import { brokenHeart } from "@/assets";

export const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <PageNotFound>
      <img src={brokenHeart} alt="" />
      <h1>Page not found</h1>
      <button onClick={goBack}>Go back</button>
    </PageNotFound>
  )
}
