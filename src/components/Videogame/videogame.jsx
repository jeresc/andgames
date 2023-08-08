import {
  Card,
  Description,
  Rating,
  Title,
  PlatformLogo,
  LogoContainer,
  CardSubheading,
  CardImage,
  CardInfo,
} from './videogame.styles'
import {
  imageNotFound,
  android,
  apple,
  linux,
  mobile,
  playstation,
  windows,
  xbox,
  nintendo,
} from '@/assets'

export const Videogame = (videogame) => {

  const renderPlatform = (platform) => {
    switch (platform) {
      case 'PC':
        return <PlatformLogo src={windows} />
      case 'PlayStation 4' || 'PlayStation 3':
        return <PlatformLogo src={playstation} />
      case 'Xbox One' || 'Xbox Series X' || 'Xbox Series S' || 'Xbox 360':
        return <PlatformLogo src={xbox} />
      case 'iOS':
        return <PlatformLogo src={mobile} />
      case 'Android':
        return <PlatformLogo src={android} />
      case 'macOS':
        return <PlatformLogo src={apple} />
      case 'Linux':
        return <PlatformLogo src={linux} />
      case 'Nintendo Switch':
        return <PlatformLogo src={nintendo} style={{ width: '1.6rem' }} />
      default:
        return
    }
  }

  const formatReleaseDate = (date) => {
    if (!date) return
    const splitDate = date.split('-')
    let formattedDate = new Date(...splitDate).toDateString()
    formattedDate = formattedDate.replace(/(^[A-z]{3}\s)/, "").replace(/(\s\d{4}$)/, ($0) => {
      return `, ${$0}`})
    return formattedDate 
  }

  return (
    <Card>
      <CardImage>
        <img src={videogame.image || imageNotFound} alt="" />
      </CardImage>
      <CardInfo>
        <CardSubheading>
          <LogoContainer>
            {videogame.platforms.map(renderPlatform)}
          </LogoContainer>
          <Rating rating={videogame.rating}>
            {videogame.rating.toFixed(2)}
          </Rating>
        </CardSubheading>
        <Title>{videogame.name}</Title>
        <Description>{videogame.description}</Description>
        <p>{formatReleaseDate(videogame.release_date)}</p>
        <p>{videogame.genres.length ? "Genres: " + videogame.genres.map((genre) => genre.name).join(', ') : ""}</p>
      </CardInfo>
    </Card>
  )
}
