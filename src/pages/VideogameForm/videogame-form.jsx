import { useState } from 'react'
import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
  AddButton,
  OptionsContainer,
  Option,
  SubmitButton
} from './videogame-form.styles'
import { AddForm, StarRating } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchGenres, removeInputField } from '@/redux'

export const VideogameForm = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const { genres } = useSelector((state) => state.form.inputFields)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGenres())
  }, [])

  return (
    <FormContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" id="name" />
        <FormLabel htmlFor="image">Image</FormLabel>
        <FormInput type="image" id="image" />
        <FormLabel htmlFor="genres">Genres</FormLabel>
        <OptionsContainer>
          <AddButton onClick={() => setShowAddForm(!showAddForm)}>
            Add options
          </AddButton>
          {showAddForm && (
            <AddForm field="genres" setShowAddForm={setShowAddForm} />
          )}
          {genres
            .filter((options) => options.selected === true)
            .map((option) => (
              <Option
                key={option.id}
                onClick={() => {
                  dispatch(removeInputField({ field: 'genres', id: option.id }))
                }}
              >
                {option.name}
              </Option>
            ))}
        </OptionsContainer>
        <FormLabel htmlFor="rating">Rating</FormLabel>
        <StarRating />
        <FormLabel htmlFor="description">Description</FormLabel>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <FormLabel htmlFor="releaseDate">Release Date</FormLabel>
        <FormInput type="date" id="releaseDate" />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </FormContainer>
  )
}
