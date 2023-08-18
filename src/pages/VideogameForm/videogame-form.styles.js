import { styled } from 'styled-components';

export const FormContainer = styled.section`
  color: #fff;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 10px auto 20px auto;
  padding: 2.6rem;
  border-radius: 1.2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const FormTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  font-family: var(--font-3);
`;

export const FormInput = styled.input`
  padding: 1.2rem 1.3rem;
  background-color: #222;
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
  background-color: #222;
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
  font-size: 1.7rem;
  font-weight: 500; 
  padding: 1.6rem;
  width: auto;
  background-color: #111;
  border: none;
  color: #fff;
  border-radius: 1.2rem;

  &:hover{
    background-color: #222;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`;

export const Option = styled.div`
  width: auto;
  padding: 1.4rem;
  border-radius: 1.6rem;
  font-size: 2rem;
  background-color: #222;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #333;
  }

  img {
    width: 1.6rem;
  }
`;

export const SubmitButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem;
  width: 100%;
  border-radius: .8rem;
  border:none;
  background-color: #fff;
  color: #000;

  &:disabled {
    background-color: #aaa;
  color: #666;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
  /* border-top: 1px solid #ffffff10; */
  position: relative;
`;

export const FormError = styled.p`
  color: #f8b232;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  text-align: right;
  vertical-align: middle;
  padding: 0.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const CancelButton = styled.button`
  font-size: 2rem;
  font-weight: bold;
  padding: 2rem;
  width: 100%;
  background-color: #222;
  border: none;
  color: #fff;
  border-radius: .8rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
