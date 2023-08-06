import { styled } from 'styled-components'

export const FormContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  place-items: center;
  place-content: center;
  background-color: #181818;
`
export const Form = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const OptionsContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #202020;
  display: flex;
  padding: 1rem;
  flex-direction: column;
`

export const Option = styled.div`
  width: 100%;
  background-color: #303030;
  padding: 1rem;
`
