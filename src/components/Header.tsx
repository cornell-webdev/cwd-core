import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContainedButton from './ContainedButton'
import Logo from './Logo'

const Header = () => {
  return (
    <Container>
      <Logo />
      <Link to='apply'>
        <ContainedButton>Apply</ContainedButton>
      </Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`

export default Header
