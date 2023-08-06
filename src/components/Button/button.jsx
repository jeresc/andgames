import { StyledButton } from './button.styles'

export const Button = ({ children, action }) => {
  return <StyledButton onClick={action}>{children}</StyledButton>
}
