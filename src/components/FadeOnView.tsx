import React, { useRef } from 'react'
import FadeIn from 'src/components/FadeIn'
import useOnScreen from 'src/hooks/useOnScreen'
import { isIPhone13, isChrome } from 'react-device-detect'

interface IFadeOnViewProps {
  children: React.ReactNode
}

const FadeOnView = ({ children }: IFadeOnViewProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isViewing = useOnScreen(ref)

  if (isIPhone13 && isChrome) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <div ref={ref}>
      <FadeIn visible={isViewing}>{children}</FadeIn>
    </div>
  )
}

export default FadeOnView
