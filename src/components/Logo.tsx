import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CwdLogoAlone } from 'src/assets/cwd-logo-alone.svg'
import { ReactComponent as CwdLogo } from 'src/assets/cwd-logo.svg'

interface LogoProps {
  variant?: 'full' | 'alone'
}

const Logo = ({ variant = 'full' }: LogoProps) => {
  return (
    <Link to='/'>
      <div>{variant === 'alone' ? <CwdLogoAlone /> : <CwdLogo />}</div>
    </Link>
  )
}

export default Logo
