import { styled } from 'styled-components';

export const FormContainer = styled.section`
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 10px auto 20px auto;
  background-color: #232323;
  padding: 2.6rem;
  border-radius: 1.2rem;
`;

export const FormTitle = styled.h1`
  font-size: 2.4rem;
`

export const FormInput = styled.input`
  padding: 1.2rem 1.3rem;
  background-color: #242424;
  outline: none;
  border: none;
  font-size: 1.8rem;
  border-radius: 8px;
  color: #fff;
`;
export const FormLabel = styled.label`
  font-weight: 700;
  color: #999;
  font-size: 1.9rem;
`;

export const FormSelect = styled.select``;
export const FormOption = styled.option``;
export const FormTextArea = styled.textarea`
  background-color: #171717;
  border-radius: 12px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.7rem;
  padding: 1.2rem;
  width: 100%;
  height: 200px;
  resize: none;
  font-family: var(--font);
`;

export const AddButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1.2rem;
  width: 140px;
  background-color: #171717;
  border: none;
  color: #fff;
  border-radius: 1.6rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;

export const Option = styled.div`
  width: auto;
  padding: 1rem;
  border-radius: 1.6rem;
  font-size: 1.5rem;
  background-color: #121212;
  color: #fff;
  border: 1px solid #fff;
`;

export const SubmitButton = styled.button``;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #ffffff10;
  position: relative;
`;

export const FormError = styled.p`
  color: #f8b232;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  text-align: right;
  vertical-align: middle;
  padding: .5rem;
`;

export const CancelButton = styled.button``
