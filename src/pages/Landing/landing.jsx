import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchVideogames } from "../../redux"
import { useEffect } from "react"

export const Landing = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideogames())
  }, [dispatch])

  const navigate = useNavigate()

  return (
    <div>
      <h1>Landing</h1>
      <button onClick={() => navigate("/videogames")}>Go to Home</button>
    </div>
  )
}
