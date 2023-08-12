import { useDispatch, useSelector } from 'react-redux';
import { nextPage, prevPage } from '@/redux';
import { TabBarButton, TabBarContainer } from './tab-bar.styles';
import { setPage } from '../../redux';

export const TabBar = () => {
  const { page, pageCounter } = useSelector(store => store.pagination);
  const dispatch = useDispatch();
  const renderPages = pages => {
    return Array.apply(null, { length: pages }).map((_, index) => (
      <TabBarButton
        key={index + 1}
        onClick={() => dispatch(setPage(index + 1))}
      >
        {page === index + 1 ? `estas aca: ${index +1}` : index + 1}
      </TabBarButton>
    ));
  };

  return (
    <TabBarContainer>
      {pageCounter > 1 ? (
        <div>
          <TabBarButton onClick={() => dispatch(prevPage())}>
            Previous Page
          </TabBarButton>
          {renderPages(pageCounter)}
          <TabBarButton onClick={() => dispatch(nextPage())}>
            Next Page
          </TabBarButton>
        </div>
      ) : (
        <div></div>
      )}
    </TabBarContainer>
  );
};
