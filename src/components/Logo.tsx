import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CwdLogo } from 'src/assets/cwd-logo.svg'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Link to='/'>
      <StyledLogo />
    </Link>
  )
}

const StyledLogo = styled(CwdLogo)`
  width: 100px;
  height: 30px;
`

export default Logo
