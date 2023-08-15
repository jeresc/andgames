import { styled } from "styled-components";

export const SearchBarContainer = styled.div`
  height: 44px;
  max-width: 400px;
  width: 100%;
  margin: 0 20px;
  position: relative;
`

export const SearchBarInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: #282828;
  color: #fff;
  font-size: 1.7rem;
  padding: 0 10px 0 40px;
  border-radius: 20px;
  outline: none;

  &::placeholder {
    color: #ccc;
  }

`

export const SearchBarIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 12px;
  width: 20px;
  height: 20px;
`
