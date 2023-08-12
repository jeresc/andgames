import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchVideogameById, resetVideogame } from "../../redux"

export const VideogameDetail = () => {

  const { videogame, loading } = useSelector(store => store.videogames)
  const dispatch = useDispatch()
  const { videogameId } = useParams()
  
  useEffect(() => {
    console.log(videogameId)
    dispatch(fetchVideogameById(videogameId))
    return () => dispatch(resetVideogame())
  }, [videogameId, dispatch])

  return (
    <div>
      {loading ? <div>Loading</div> : <div key={videogame?.id}>
        <h1>{videogame?.name}</h1>
        <img src={videogame?.image} alt={videogame?.name} />
        <p>{videogame?.description}</p>
        <p>{videogame?.released}</p>
        <p>{videogame?.rating}</p>
        <p>{videogame?.platforms}</p>
      </div>}
    </div>
  )
}
