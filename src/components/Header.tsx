import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'cornell-glue-ui'
import Logo from './Logo'

const Header = () => {
  return (
    <Container>
      <Logo />
      <Link to='apply'>
        <Button>Apply</Button>
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
