import { useState } from 'react'
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
} from './videogame-card.styles'
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
import { useNavigate } from 'react-router-dom'

export const Videogame = (videogame) => {

const navigate = useNavigate()

  const renderPlatform = (platform, index) => {
    let logo
    let style = {}

    switch (platform) {
      case 'PC':
        logo = windows
        break
      case 'PlayStation':
        logo = playstation
        break
      case 'Xbox':
        logo = xbox
        break
      case 'iOS':
        logo = mobile
        break
      case 'Android':
        logo = android
        break
      case 'Apple Macintosh':
        logo = apple
        break
      case 'Linux':
        logo = linux
        break
      case 'Nintendo':
        logo = nintendo
        style = { width: '1.6rem' }
        break
    }

    if (logo) {
      return <PlatformLogo key={index} src={logo} style={style} />
    }
  }

  const formatReleaseDate = (date) => {
    if (!date) return
    const splitDate = date.split('-')
    let formattedDate = new Date(...splitDate).toDateString()
    formattedDate = formattedDate
      .replace(/(^[A-z]{3}\s)/, '')
      .replace(/(\s\d{4}$)/, ($0) => {
        return `, ${$0}`
      })
    return formattedDate
  }

  return (
    <Card>
      <CardImage>
        <img src={videogame.image || imageNotFound} alt="" onClick={() => navigate(`/home/${videogame.id}`)}/>
      </CardImage>
      <CardInfo>
        <CardSubheading>
          <LogoContainer>
            {videogame.platforms.map((platform, index) =>
              renderPlatform(platform, index)
            )}
          </LogoContainer>
          <Rating $rating={videogame.rating}>
            {videogame.rating.toFixed(2)}
          </Rating>
        </CardSubheading>
        <Title>{videogame.name}</Title>
        <Description>{videogame.description}</Description>
        <p>{formatReleaseDate(videogame.release_date)}</p>
        <p>
          {videogame.genres.length
            ? 'Genres: ' +
              videogame.genres.map((genre) => genre.name).join(', ')
            : ''}
        </p>
      </CardInfo>
    </Card>
  )
}
