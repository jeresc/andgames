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
  z-index: 10;
`
export const Form = styled.div`
  height: 90vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`
export const FormTitle = styled.h1`

`

export const SelectOptionsContainer = styled.div`
  height: auto;
  width: 100%;
  background-color: #202020;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  position: absolute;
  top: 80px;
  padding-top: 3rem;
  border-radius: 1rem;
`

export const SelectOption = styled.div`
  width: 100%;
  background-color: #303030;
  padding: 1rem;
  font-size: 1.5rem;
  color: #ccc;
`
export const OptionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
`
export const Option = styled.div`
  width: auto;
  padding: 1rem;
  border-radius: 1.6rem;
  font-size: 1.5rem;
  background-color: #121212;
  color: #fff;
  border: 1px solid #fff;
`

export const AddButton = styled.button`

`
export const ShowButton = styled.button`
width: 100%;
padding: 1rem;
border-radius: 1rem;
color: #fff;
font-size: 1.7rem;
font-weight: 700;
background-color: #242424;
border: none;
outline: none;
z-index: 10;

`
