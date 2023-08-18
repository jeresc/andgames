import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideogameById, resetVideogame } from '../../redux';
import {
  DetailContainer,
  LoadingContainer,
  DetailInfo,
  DetailCardContainer,
  PlatformLogo,
  LogoContainer,
  InfoSubsection
} from './videogame-detail-card.styles';
import {
  android,
  apple,
  linux,
  mobile,
  playstation,
  windows,
  xbox,
  nintendo,
} from '@/assets';
export const VideogameDetailCard = () => {
  const renderPlatform = (platform, index) => {
    let logo;
    let style = {};

    switch (platform) {
      case 'PC':
        logo = windows;
        break;
      case 'PlayStation':
        logo = playstation;
        break;
      case 'Xbox':
        logo = xbox;
        break;
      case 'iOS':
        logo = mobile;
        break;
      case 'Android':
        logo = android;
        break;
      case 'Apple Macintosh':
        logo = apple;
        break;
      case 'Linux':
        logo = linux;
        break;
      case 'Nintendo':
        logo = nintendo;
        style = { width: '1.6rem' };
        break;
    }

    if (logo) {
      return <PlatformLogo key={index} src={logo} style={style} />;
    }
  };
  const { videogame, loading } = useSelector(store => store.videogames);
  const dispatch = useDispatch();
  const { videogameId } = useParams();

  useEffect(() => {
    console.log(videogameId);
    dispatch(fetchVideogameById(videogameId));
    console.log(videogame);
    return () => dispatch(resetVideogame());
  }, [videogameId, dispatch]);

  return (
    <DetailContainer>
      {loading ? (
        <LoadingContainer>Loading</LoadingContainer>
      ) : (
        <DetailCardContainer div key={videogame?.id}>
          <img src={videogame?.image} alt={videogame?.name} />
          <DetailInfo>
            <LogoContainer>
              {videogame?.platforms?.map((platform, index) =>
                renderPlatform(platform, index),
              )}
            </LogoContainer>
            <h1>{videogame?.name}</h1>
            <InfoSubsection>
              <span>
                {' '}
                <h3>Released</h3>
                <p>{videogame?.released}</p>
              </span>
              <span style={{textAlign: 'right'}}>
                <h3>Rating</h3>
                <p>{videogame?.rating}</p>
              </span>
            </InfoSubsection>
            <h3>Description</h3>
            <p>{videogame?.description}</p>
          </DetailInfo>
        </DetailCardContainer>
      )}
    </DetailContainer>
  );
};
