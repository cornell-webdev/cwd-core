import React from 'react'
import { Link } from 'react-router-dom'
import BrandColor from 'src/components/BrandColor'
import Button from 'src/components/glue/Button'
import FadeOnView from 'src/components/FadeOnView'
import { FlexRow } from 'src/components/FlexContainer'
import MutedColor from 'src/components/MutedColor'
import Spacer from 'src/components/Spacer'
import Text from 'src/components/Text'
import useIsDesktop from 'src/hooks/useIsDesktop'
import styled from 'styled-components'
import { InnerDivider, Section } from '../pages/Home/Home'

export interface IShowcaseProps {
  overline?: string
  name: string
  p1: string
  p2: string
  link?: string
  svg: React.ReactNode
  isApply?: boolean
  buttonText?: string
}

const Showcase = ({
  overline,
  name,
  p1,
  p2,
  link,
  svg,
  isApply,
  buttonText = 'View project',
}: IShowcaseProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Section>
      <FlexRow justifySpaceAround alignCenter>
        <FadeOnView>
          {overline && (
            <Text variant='h3'>
              <MutedColor>{overline}</MutedColor>
            </Text>
          )}
          <Text variant='h1'>
            <BrandColor>{name}</BrandColor>
          </Text>
          <Spacer y={3} />
          <LeftContainer>
            <Text>{p1}</Text>
          </LeftContainer>
          <Spacer y={1.5} />
          <LeftContainer>
            <Text>{p2}</Text>
          </LeftContainer>
          <Spacer y={4} />
          {link && !isApply && (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <Button variant='outlined'>{buttonText}</Button>
            </a>
          )}
          {isApply && (
            <Link to='/apply'>
              <Button variant='outlined'>Apply</Button>
            </Link>
          )}
          <Spacer y={4} />
          {!isDesktop && <FlexRow justifyCenter>{svg}</FlexRow>}
        </FadeOnView>
        <InnerDivider />
        {isDesktop && (
          <FlexRow justifyCenter>
            <FadeOnView>{svg}</FadeOnView>
          </FlexRow>
        )}
      </FlexRow>
    </Section>
  )
}

const LeftContainer = styled.div`
  @media (min-width: ${(props) => props.theme.large}) {
    width: 30vw;
  }
`

export default Showcase
