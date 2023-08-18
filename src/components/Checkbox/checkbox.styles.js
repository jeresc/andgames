import { styled } from 'styled-components'

export const StyledCheckbox = styled.button`
  width: 100%;
  min-height: 30px;
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  gap: 1rem;
  border-radius: 6px;
  padding: 0rem .5rem;

  &:hover {
    background-color: #303030;
  }
`

export const CheckboxImage = styled.img`
  width: 16px;
`

export const CheckboxValue = styled.span`
  font-size: 1.6rem;
`
