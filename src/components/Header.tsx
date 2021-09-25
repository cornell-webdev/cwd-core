import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ContainedButton from './ContainedButton'
import Logo from './Logo'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <Container>
      <Logo variant='alone' />
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
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`

export default Header
