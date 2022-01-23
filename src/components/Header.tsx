import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, FlexContainer, theme } from 'cornell-glue-ui'
import Logo from './Logo'

const Header = () => {
  return (
    <Container>
      <FlexContainer alignCenter justifySpaceBetween fullWidth>
        <Logo />
        <NavButtonsContainer alignCenter>
          <Link to='/products'>
            <NavButton
              variant='text'
              color={theme.text.default}
              background={theme.background.default}
              hoverBackground={theme.grey[100]}>
              Products
            </NavButton>
          </Link>
          <Link to='/apply'>
            <Button>Apply</Button>
          </Link>
        </NavButtonsContainer>
      </FlexContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.border.default};

  @media (min-width: ${(props) => props.theme.small}) {
    & > div {
      max-width: 1050px;
    }
  }
`

const NavButtonsContainer = styled(FlexContainer)`
  & > * {
    margin-left: 1rem;
  }
`

const NavButton = styled(Button)`
  font-weight: 600;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
`

export default Header
