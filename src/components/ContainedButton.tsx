import React from 'react'
import styled from 'styled-components'

interface ContainedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ContainedButton = ({ children, ...rest }: ContainedButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background: ${(props) => props.theme.brand.default};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  letter-spacing: 0.9px;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadow};
`

export default ContainedButton
