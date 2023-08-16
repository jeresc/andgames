import { useState } from 'react';
import {
  FormContainer,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  FormTextArea,
  FormGroup,
  FormError,
  AddButton,
  OptionsContainer,
  Option,
  SubmitButton,
  CancelButton,
} from './videogame-form.styles';
import { AddForm, StarRating, UploadWidget } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  removeInputField,
  postVideogame,
  addNotification,
  resetInputField,
} from '@/redux';
import { validateForm } from '@/helpers';
import { useNavigate } from 'react-router-dom';
import { setForm } from '../../redux';

export const VideogameForm = () => {
  const [showAddPlatformForm, setShowAddPlatformForm] = useState(false);
  const [showAddGenreForm, setShowAddGenreForm] = useState(false);
  const { genres, platforms } = useSelector(state => state.form.inputFields);
  const { image, rating } = useSelector(state => state.form);
  const navigate = useNavigate();

  const [videogame, setVideogame] = useState({
    name: '',
    image: '',
    description: '',
    released: '',
    rating: '',
    platforms: [],
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: '',
    image,
    description: '',
    released: '',
    rating,
    platforms: [],
    genres: [],
  });

  const handleSubmit = () => {
    dispatch(postVideogame(videogame));
    dispatch(
      addNotification({
        message: 'Your game has been successfully added',
        type: 'success',
      }),
    );
    navigate('/videogames');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setVideogame({
      ...videogame,
      [name]: value,
    });
    const validate = validateForm({
      ...videogame,
      [name]: value,
    });
    setErrors(validate);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setVideogame({
      ...videogame,
      image,
      rating,
      platforms: platforms
        .filter(options => options.selected === true)
        .map(option => option.name),
      genres: genres
        .filter(options => options.selected === true)
        .map(option => option.id),
    });
  }, [image, rating, platforms, genres]);

  useEffect(() => {
    const validate = validateForm({
      ...videogame,
      image: videogame.image,
      rating: videogame.rating,
      platforms: videogame.platforms,
      genres: videogame.genres,
    });
    setErrors(validate);
  }, [
    videogame.image,
    videogame.rating,
    videogame.platforms,
    videogame.genres,
  ]);

  useEffect(() => {
    console.log(videogame)
  }, [videogame])

  return (
    <FormContainer>
      <Form data-set-id="add-videogame-form" onSubmit={e => e.preventDefault()}>
        <FormTitle>Add videogame</FormTitle>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormError>{errors.name}</FormError>
          <FormInput
            type="text"
            name="name"
            onChange={handleChange}
            value={videogame.name}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="image">Image</FormLabel>
          <FormError>{errors.image}</FormError>
          <UploadWidget key="upload-widget" />
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="genres">Genres</FormLabel>
          <FormError>{errors.genres}</FormError>
          <OptionsContainer>
            <AddButton
              field="genres"
              onClick={() => setShowAddGenreForm(!showAddGenreForm)}
            >
              Add options
            </AddButton>
            {showAddGenreForm && (
              <AddForm
                field="genres"
                key="genres"
                setShowAddForm={setShowAddGenreForm}
              />
            )}
            {genres
              .filter(options => options.selected === true)
              .map(option => (
                <Option
                  key={option.id}
                  onClick={() => {
                    dispatch(
                      removeInputField({ field: 'genres', id: option.id }),
                    );
                  }}
                >
                  {option.name}
                </Option>
              ))}
          </OptionsContainer>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="platforms">Platforms</FormLabel>
          <FormError>{errors.platforms}</FormError>
          <OptionsContainer>
            <AddButton
              onClick={() => setShowAddPlatformForm(!showAddPlatformForm)}
              field="platforms"
            >
              Add options
            </AddButton>
            {showAddPlatformForm && (
              <AddForm
                field="platforms"
                key="platforms"
                setShowAddForm={setShowAddPlatformForm}
              />
            )}
            {platforms
              .filter(options => options.selected === true)
              .map(option => (
                <Option
                  key={option.id}
                  onClick={() => {
                    dispatch(
                      removeInputField({ field: 'platforms', id: option.id }),
                    );
                  }}
                >
                  {option.name}
                </Option>
              ))}
          </OptionsContainer>
        </FormGroup>

        <FormGroup>
          <FormLabel htmlFor="rating">Rating</FormLabel>
          <FormError>{errors.rating}</FormError>
          <StarRating />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="description">Description</FormLabel>
          <FormError>{errors.description}</FormError>
          <FormTextArea
            name="description"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={videogame.description}
          ></FormTextArea>
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="releaseDate">Release Date</FormLabel>
          <FormError>{errors.released}</FormError>
          <FormInput
            type="date"
            name="released"
            onChange={handleChange}
            value={videogame.released}
          />
        </FormGroup>
        <button
          type="button"
          onClick={() =>
            dispatch(
              setForm({
                field: 'image',
                value:
                  'http://3.bp.blogspot.com/_o6PeYNxMNQo/TDypRRCrxBI/AAAAAAAAACE/rEc3a9qan8w/w1200-h630-p-k-no-nu/123750910poq41.jpg',
              }),
            )
          }
          id="test-image-button"
          style={{ visibility: 'visible', position: 'absolute', width: 1, height: 1, left: 999 }}
        ></button>
        <SubmitButton
          type="submit"
          onClick={handleSubmit}
          disabled={
            errors.name ||
            errors.rating ||
            errors.platforms ||
            errors.genres ||
            errors.description ||
            errors.released
          }
        >
          Submit
        </SubmitButton>
        <CancelButton
          onClick={() => {
            setVideogame({
              name: '',
              image: '',
              description: '',
              released: '',
              rating: '',
              platforms: [],
              genres: [],
            });
            dispatch(resetInputField({ field: 'genres' }));
            dispatch(resetInputField({ field: 'platforms' }));
            navigate('/videogames');
          }}
        >
          Cancel
        </CancelButton>
      </Form>
    </FormContainer>
  );
};
