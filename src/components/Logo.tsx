import React from 'react'
import { ReactComponent as CwdLogoAlone } from 'src/assets/cwd-logo-alone.svg'
import { ReactComponent as CwdLogo } from 'src/assets/cwd-logo.svg'

interface LogoProps {
  variant?: 'full' | 'alone'
}

const Logo = ({ variant = 'full' }: LogoProps) => {
  if (variant === 'alone') {
    return <CwdLogoAlone />
  }

  return <CwdLogo />
}

export default Logo
