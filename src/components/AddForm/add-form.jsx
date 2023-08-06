import { useState } from 'react'
import {
  FormContainer,
  Form,
  OptionsContainer,
  Option,
} from './add-form.styles'
import { Button } from '@/components'

export const AddForm = ({ setShowAddForm, options, deleteOption, selectedOptions, addSelectedOption}) => {
  const [toggleOptions, setToggleOptions] = useState(true)

  return (
    <FormContainer>
      <Form>
        <Button
          action={() => {
            console.log(selectedOptions)
            setShowAddForm(false)
          }}
        >
          Save
        </Button>
        <Button action={() => setShowAddForm(false)}>Cancel</Button>
        <button onClick={() => setToggleOptions(!toggleOptions)}>
          show options
        </button>
        {toggleOptions && (
          <OptionsContainer>
            {options && options.map((option) => (
              <Option
                key={option.name}
                onClick={() => {
                  addSelectedOption(option)
                  deleteOption(option.id)
                  setToggleOptions(!toggleOptions)
                }}
              >
                {option.name}
              </Option>
            ))}
          </OptionsContainer>
        )}
        {selectedOptions.map((selectedOption) => (
          <Option key={selectedOption.id}>{selectedOption.name}</Option>
        ))}
      </Form>
    </FormContainer>
  )
}
