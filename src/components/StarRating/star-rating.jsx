import { filledStar, emptyStar, halfStar } from '@/assets';
import { Star } from './star-rating.styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setForm } from '../../redux';

export const StarRating = () => {
  const [filledStars, setFilledStars] = useState(-1);
  const [selectedStars, setSelectedStars] = useState(0);
  const dispatch = useDispatch();

  return (
    <div>
      {[...Array(10)].map((star, index) => {
        return (
          <Star
            key={index}
            src={index < filledStars ? filledStar : emptyStar}
            onClick={() => {
              setSelectedStars(filledStars);
              dispatch(setForm({ field: 'rating', value: filledStars / 2 }));
            }}
            onMouseOver={() => setFilledStars(index + 1)}
            onMouseOut={() =>
              !selectedStars ? setFilledStars(0) : setFilledStars(selectedStars)
            }
          />
        );
      })}
    </div>
  );
};
