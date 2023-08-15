import { useNavigate } from "react-router-dom"

export const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Landing</h1>
      <button onClick={() => navigate("/videogames")}>Go to Home</button>
    </div>
  )
}
