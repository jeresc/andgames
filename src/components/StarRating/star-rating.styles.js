import { styled } from "styled-components";

export const Star = styled.img`
  height: 33px;
  width: 19px;
  object-fit: cover;
  object-position: left;
  cursor: pointer;

  &:nth-child(even) {
    object-position: right;
  }
`
