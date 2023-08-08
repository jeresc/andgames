import { useState } from 'react'
import {
  FormContainer,
  Form,
  OptionsContainer,
  Option,
} from './add-form.styles'
import { Button } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { addInputField, resetInputField, updateInitialFields, removeInputField  } from '@/redux'

export const AddForm = ({ field, setShowAddForm }) => {

  const [showOptions, setShowOptions] = useState(true)
  const {inputFields}= useSelector((state) => state.form)
  const inputOptions = inputFields[field]
  const dispatch = useDispatch()

  return (
    <FormContainer>
      <Form>
        <Button
          action={() => {
            setShowAddForm(false)
            dispatch(updateInitialFields({ field }))
          }}
        >
          Save
        </Button>
        <Button action={() => {
          setShowAddForm(false)
          dispatch(resetInputField({ field }))
        }}>Cancel</Button>
        <button onClick={() => {
          setShowOptions(!showOptions)
        }}>
          Show options
        </button>
        {showOptions && (
          <OptionsContainer>
            {inputOptions && inputOptions.filter((option) => option.selected === false).map((option) => (
              <Option
                key={option.id}
                onClick={() => {
                  console.log(dispatch(addInputField({ id: option.id, field })))
                  console.log({field, id: option.id})
    console.log(inputOptions)
                  setShowOptions(!showOptions)
                }}
              >
                {option.name}
              </Option>
            ))}
          </OptionsContainer>
        )}
        {inputOptions.filter((option) => option.selected === true).map((option) => (
          <Option key={option.id} onClick={() => {
            dispatch(removeInputField({ field, id: option.id}))
          }}>{option.name}</Option>
        ))}
      </Form>
    </FormContainer>
  )
}
