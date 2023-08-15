import { useState } from 'react';
import {
  FormContainer,
  Form,
  FormTitle,
  OptionsContainer,
  Option,
  ShowButton,
  SelectOption,
  SelectOptionsContainer,
} from './add-form.styles';
import { Button } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import {
  addInputField,
  resetInputField,
  updateInitialFields,
  removeInputField,
} from '@/redux';

export const AddForm = ({ field, setShowAddForm }) => {
  const [showOptions, setShowOptions] = useState(true);
  const { inputFields } = useSelector(state => state.form);
  const inputOptions = inputFields[field];
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <Form>
        <FormTitle>{field.replace(/^./, field[0].toUpperCase())}</FormTitle>
        <ShowButton
          onClick={() => {
            setShowOptions(!showOptions);
          }}
        >
          Show options
        </ShowButton>
        {showOptions && (
          <SelectOptionsContainer>
            {inputOptions &&
              inputOptions
                .filter(option => option.selected === false)
                .map(option => (
                  <SelectOption
                    key={option.id}
                    onClick={() => {
                      dispatch(addInputField({ id: option.id, field }));
                      console.log({ field, id: option.id });
                      console.log(inputOptions);
                      setShowOptions(!showOptions);
                    }}
                  >
                    {option.name}
                  </SelectOption>
                ))}
          </SelectOptionsContainer>
        )}
        <OptionsContainer>
          {inputOptions
            .filter(option => option.selected === true)
            .map(option => (
              <Option
                key={option.id}
                onClick={() => {
                  dispatch(removeInputField({ field, id: option.id }));
                }}
              >
                {option.name}
              </Option>
            ))}
        </OptionsContainer>

        <Button
          action={() => {
            setShowAddForm(false);
            dispatch(updateInitialFields({ field }));
          }}
        >
          Save
        </Button>
        <Button
          action={() => {
            setShowAddForm(false);
          }}
        >
          Cancel
        </Button>
      </Form>
    </FormContainer>
  );
};
