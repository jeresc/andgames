import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchVideogames } from "@/redux"
import { useEffect } from "react"
import { LandingContainer} from "./landing.styles"
import { logo } from "@/assets"

export const Landing = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchVideogames())
  }, [dispatch])

  const navigate = useNavigate()

  return (
    <LandingContainer>
      <img src={logo} alt="Landing page logo" />
      <h1>Welcome to</h1>
      <h2>&games</h2>
      <button onClick={() => navigate("/home")}>Go Home</button>
    </LandingContainer>
  )
}
