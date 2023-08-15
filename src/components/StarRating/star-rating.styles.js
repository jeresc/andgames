import { styled } from "styled-components";

export const Star = styled.img`
  height: 35px;
  width: 20px;
  object-fit: cover;
  object-position: left;
  cursor: pointer;

  &:nth-child(even) {
    object-position: right;
  }
`
