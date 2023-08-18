import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from '@/redux';
import {
  TabBarButton,
  TabBarContainer,
  TabBarNumbers,
  InvisibleTabBarButton,
  ButtonContainer,
} from './tab-bar.styles';
import { setPage } from '../../redux';
import { useEffect } from 'react';

export const TabBar = () => {
  const { page, pageCounter } = useSelector(store => store.pagination);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(page);
  }, [page]);
  const renderPages = pages => {
    return Array.apply(null, { length: pages }).map((_, index) => (
      <TabBarNumbers
        key={index + 1}
        onClick={() =>
          dispatch(
            setPage(
              index + 1 < 4
                ? 3
                : index + 1 > pageCounter - 3
                ? pageCounter - 2
                : index + 1,
            ),
          )
        }
        $active={page === index + 1}
        $currentPage={
          page === index + 1 && page >= 3 && page <= pageCounter - 2
        }
      >
        {index + 1 < 4
          ? 3
          : index + 1 > pageCounter - 3
          ? pageCounter - 2
          : index + 1}
      </TabBarNumbers>
    ));
  };

  return (
    <TabBarContainer>
      {pageCounter > 4 ? (
        <ButtonContainer>
          <TabBarButton
            $currentPage={page === 1}
            onClick={() => dispatch(setPage(1))}
          >
            {1}
          </TabBarButton>
          <TabBarButton
            $currentPage={page === 2}
            onClick={() =>
              dispatch(
                setPage(
                  page < 3
                    ? 2
                    : page >= pageCounter - 2
                    ? pageCounter - 3
                    : page - 1,
                ),
              )
            }
          >
            {page < 3
              ? 2
              : page >= pageCounter - 2
              ? pageCounter - 3
              : page - 1}
          </TabBarButton>
          {renderPages(pageCounter)}
          <TabBarButton
            $currentPage={page === pageCounter - 1}
            onClick={() =>
              dispatch(
                setPage(
                  page < 4
                    ? 4
                    : page > pageCounter - 2
                    ? pageCounter - 1
                    : page + 1,
                ),
              )
            }
          >
            {page < 4 ? 4 : page > pageCounter - 2 ? pageCounter - 1 : page + 1}
          </TabBarButton>
          <TabBarButton
            $currentPage={page === pageCounter}
            onClick={() => dispatch(setPage(pageCounter))}
          >
            {pageCounter}
          </TabBarButton>
        </ButtonContainer>
      ) : pageCounter > 1 ? (
        <ButtonContainer>
          {Array.apply(null, { length: pageCounter }).map((_, index) => {
            return (
              <TabBarButton
                key={index + 1}
                $currentPage={page === index + 1}
                onClick={() => dispatch(setPage(index + 1))}
              >
                {index + 1}
              </TabBarButton>
            );
          })}
        </ButtonContainer>
      ) : (
        <div></div>
      )}
    </TabBarContainer>
  );
};
