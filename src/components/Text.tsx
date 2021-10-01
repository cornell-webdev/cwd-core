import React from 'react'
import styled from 'styled-components'

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p'
  children: React.ReactNode
}

const Text = ({ variant = 'p', children, ...rest }: TextProps) => {
  return (
    <StyledText variant={variant} {...rest}>
      {children}
    </StyledText>
  )
}

interface IStyledTextProps {
  variant: TextProps['variant']
}

const StyledText = styled.p<IStyledTextProps>`
  color: ${(props) => props.theme.text.default};
  font-size: 1.1rem;
  line-height: 1.3;

  /* variants */
  font-size: ${(props) => props.variant === 'h1' && `2.5rem`};
  font-weight: ${(props) => props.variant === 'h1' && `bold`};

  font-size: ${(props) => props.variant === 'h3' && `1.5rem`};
  font-weight: ${(props) => props.variant === 'h3' && `bold`};

  font-size: ${(props) => props.variant === 'p' && `1.1rem`};
  font-weight: ${(props) => props.variant === 'p' && `normal`};
  color: ${(props) => props.variant === 'p' && props.theme.text.light};
`

export default Text
