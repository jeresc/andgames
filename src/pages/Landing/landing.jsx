import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchVideogames } from "../../redux"
import { useEffect } from "react"
import { LandingContainer} from "./landing.styles"

export const Landing = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideogames())
  }, [dispatch])

  const navigate = useNavigate()

  return (
    <LandingContainer>
      <h1>&games</h1>
      <button onClick={() => navigate("/home")}>Go to Home</button>
    </LandingContainer>
  )
}
