export const validateForm = (videogame) => {
  const errors = {};

  if (!videogame.name) errors.name = "Must contain name"
  if (videogame.name.length > 50) errors.name = "Must be less than 50 characters"
  if(videogame.name !== videogame.name.trim()) errors.name = "Names should not contain white spaces"

  if (!videogame.image) errors.image = "Must contain image"

  if (!videogame.genres.length) errors.genres = "Must contain genres"
  if (!videogame.platforms.length) errors.platforms = "Must contain platforms"
  
  if (!videogame.description) errors.description = "Must contain description"
  if (videogame.description.length < 10) errors.description = "Must be more than 10 characters"
  if (videogame.description.length > 700) errors.description = "Must be less than 700 characters"

  if(!videogame.released) errors.released = "Must contain release date"

  return errors
}
