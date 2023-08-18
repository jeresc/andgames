import {
  PanelContainer,
  Aside,
  MainContainer,
  MenuOption,
  MenuHeading,
  MinimizeArrow,
  ModerationSubOption,
  SubOptions,
} from './admin.styles';
import { chess, home, hammer, closeAsideArrow } from '@/assets';
import { Outlet } from 'react-router-dom';
import { AdminNav } from '@/components';
import { useAdmin } from '@/hooks';
import { Navigate } from 'react-router-dom';

export const Admin = () => {
  const {
    toggleAside,
    showAside,
    isAsideMinimized,
    areOptionsOpen,
    handleOptionClick,
    navigate,
    pathname,
    minimizeAside,
    isLoggedIn,
  } = useAdmin();

  return (
    <PanelContainer>

      <AdminNav toggleAside={toggleAside} active={showAside} />
      <MainContainer>
        {showAside && (
          <Aside $isMinimized={isAsideMinimized}>
            <MenuHeading>
              {!isAsideMinimized && <span>ADMIN DASHBOARD</span>}
              <MinimizeArrow
                onClick={minimizeAside}
                $isMinimized={isAsideMinimized}
              >
                <img src={closeAsideArrow} alt="Minize aside arrow" />
              </MinimizeArrow>
            </MenuHeading>
            <MenuOption
              onClick={() => navigate('home')}
              $active={pathname === '/admin/home'}
            >
              <img src={home} alt="" />
              {!isAsideMinimized && <span>Home</span>}
            </MenuOption>
            <MenuOption
              onClick={() => navigate('dashboard')}
              $active={pathname === '/admin/dashboard'}
            >
              <img src={chess} alt="" />
              {!isAsideMinimized && <span>Dashboard</span>}
            </MenuOption>
            <MenuOption
              onClick={() => handleOptionClick('moderation')}
              $active={
                /moderation/.test(pathname) &&
                (!areOptionsOpen.moderation || isAsideMinimized)
              }
            >
              <img src={hammer} alt="" />
              {!isAsideMinimized && <span>Moderation</span>}
            </MenuOption>
            {areOptionsOpen.moderation && !isAsideMinimized && (
              <SubOptions>
                <ModerationSubOption
                  onClick={() => {
                    navigate('moderation');
                  }}
                  $active={
                    pathname === '/admin/moderation' &&
                    areOptionsOpen.moderation
                  }
                >
                  {!isAsideMinimized && <span>Overview</span>}
                </ModerationSubOption>
                <ModerationSubOption
                  onClick={() => {
                    navigate('moderation/videogames');
                  }}
                  $active={
                    pathname === '/admin/moderation/videogames' &&
                    areOptionsOpen.moderation
                  }
                >
                  {!isAsideMinimized && <span>Videogames</span>}
                </ModerationSubOption>
                <ModerationSubOption
                  onClick={() => {
                    navigate('moderation/genres');
                  }}
                  $active={
                    pathname === '/admin/moderation/genres' &&
                    areOptionsOpen.moderation
                  }
                >
                  {!isAsideMinimized && <span>Genres</span>}
                </ModerationSubOption>
              </SubOptions>
            )}
          </Aside>
        )}
        <Outlet />
      </MainContainer>
      
      {!isLoggedIn && (
        <Navigate to="/login" replace={true} />
      )}
    </PanelContainer>
  );
};
