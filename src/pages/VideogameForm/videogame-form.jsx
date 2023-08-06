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

export const VideogameForm = () => {
  const [showAddForm, setShowAddForm] = useState(false)
  const [options, setOptions] = useState({
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
    ],
    platforms: [],
  })
  const [selectedOptions, setSelectedOptions] = useState({
    genres: [],
    platforms: []
  })

  const deleteOption = (tag) => {
    return (id) =>
      setOptions({
        ...options,
        [tag]: options[tag].filter((option) => option.id !== id),
      })
  }

  const addSelectedOption = (tag) => {
    return (option) =>
      setSelectedOptions({
        ...selectedOptions,
        [tag]: [...selectedOptions[tag], option],
      })
  }

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
            setShowAddForm={setShowAddForm}
            options={options.genres}
            deleteOption={deleteOption('genres')}
            addSelectedOption={addSelectedOption('genres')}
            selectedOptions={selectedOptions.genres}
          />
        )}
        {selectedOptions.genres.map((option) => (
          <div key={option.id}>{option.name}</div>
        ))}
      </Form>
    </FormContainer>
  )
}
