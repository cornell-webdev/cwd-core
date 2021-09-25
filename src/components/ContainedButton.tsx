import React from 'react'
import styled from 'styled-components'

interface ContainedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ContainedButton = ({ children, ...rest }: ContainedButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = styled.button`
  background: ${(props) => props.theme.brand.default};
  color: white;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: 0.9px;
`

export default ContainedButton
