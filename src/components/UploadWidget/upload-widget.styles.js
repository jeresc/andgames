import { styled } from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
`
export const UploadedImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  padding: 1rem;
  background-color: #101010;
  border-radius: 12px;
`

export const WidgetButton = styled.button`
  padding: 1.6rem;
  height: 300px;
  width: 300px;
  border-radius: 1rem;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1.7rem;
  background-color: #111;

  &:hover {
    background-color: #222;
  }
`
