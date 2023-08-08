import { useState } from 'react'
import {
  FormContainer,
  Form,
  FormLabel,
  FormInput,
  FormSelect,
  FormOption,
} from './videogame-form.styles'
import { AddForm } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchGenres } from '@/redux'
import { removeInputField } from '../../redux'

export const VideogameForm = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const {genres}= useSelector((state) => state.form.inputFields)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGenres())
  }, [])

  return (
    <FormContainer>
      <Form onSubmit={(e) => e.preventDefault()}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInput type="text" id="name" />
        <FormLabel htmlFor="genres">Genres</FormLabel>
        <button onClick={() => setShowAddForm(!showAddForm)}>
          Add options
        </button>
        {showAddForm && (
          <AddForm
            field="genres"
            setShowAddForm={setShowAddForm}
          />
        )}
        { genres.filter(options => options.selected === true).map((option) => (
          <div key={option.id} onClick={() => {
            dispatch(removeInputField({ field: 'genres', id: option.id }))
          }}>{option.name}</div>
        )) }
      </Form>
    </FormContainer>
  )
}
