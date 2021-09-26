import React, { useRef } from 'react'
import FadeIn from 'src/components/FadeIn'
import useOnScreen from 'src/hooks/useOnScreen'

interface IFadeOnViewProps {
  children: React.ReactNode
}

const FadeOnView = ({ children }: IFadeOnViewProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isViewing = useOnScreen(ref)

  return (
    <div ref={ref}>
      <FadeIn visible={isViewing}>{children}</FadeIn>
    </div>
  )
}

export default FadeOnView
