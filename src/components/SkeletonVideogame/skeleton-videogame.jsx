import {
  Card,
  CardImage,
  CardInfo,
  CardSubheading,
  LogoContainer,
  Rating,
  Title,
  Description,
  PlatformLogo,
  Info,
} from './skeleton-videogame.styles'

export const SkeletonVideogame = () => {
  return (
    <Card>
      <CardImage></CardImage>
      <CardInfo>
        <CardSubheading>
          <LogoContainer>
            {Array.apply(null, { length: 4 }).map((_, index) => (
              <PlatformLogo key={index} />
            ))}
          </LogoContainer>
          <Rating />
        </CardSubheading>
        <Title />
        <Description />
        <Info />
        <Info />
      </CardInfo>
    </Card>
  )
}
