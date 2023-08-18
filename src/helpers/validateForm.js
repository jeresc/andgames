export const validateForm = (videogame) => {
  const errors = {};

  if (!videogame.name) errors.title = "Form must contain videogame title"
  if (videogame.name.length > 70) errors.name = "Titles should be less than 70 characters"
  if(videogame.name !== videogame.name.trim()) errors.name = "Titles should not contain white spaces"
  if(!/^[a-zA-Z0-9&._-\s^!"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^áéíóú]+$/i.test(videogame.name)) errors.name = "Titles should not contain special characters"

  if (!videogame.image) errors.image = "Your game must contain image"

  if (!videogame.genres.length) errors.genres = "Your game must contain at least one genre"

  if (!videogame.platforms.length) errors.platforms = "Your game must contain at least one platform"
  
  if (!videogame.description) errors.description = "Your game must contain a description"
  if (videogame.description.length < 10) errors.description = "Description should have more than 10 characters"
  if (videogame.description.length > 700) errors.description = "Description should be less than 700 characters"

  if(!videogame.released) errors.released = "Your game must have a release date"

  return errors
}
