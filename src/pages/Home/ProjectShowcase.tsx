import React from 'react'
import { Link } from 'react-router-dom'
import BrandColor from 'src/components/BrandColor'
import ContainedButton from 'src/components/ContainedButton'
import FadeOnView from 'src/components/FadeOnView'
import { FlexRow } from 'src/components/FlexContainer'
import MutedColor from 'src/components/MutedColor'
import Space from 'src/components/Space'
import Text from 'src/components/Text'
import useIsDesktop from 'src/hooks/useIsDesktop'
import styled from 'styled-components'
import { InnerDivider, Section } from './Home'

export interface IProjectShowcaseProps {
  overline: string
  name: string
  p1: string
  p2: string
  link?: string
  svg: React.ReactNode
  isApply?: boolean
}

const ProjectShowcase = ({ overline, name, p1, p2, link, svg, isApply }: IProjectShowcaseProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Section>
      <FlexRow justifySpaceAround alignCenter>
        <FadeOnView>
          <Text variant='h3'>
            <MutedColor>{overline}</MutedColor>
          </Text>
          <Space padding='.2rem 0' />
          <Text variant='h1'>
            <BrandColor>{name}</BrandColor>
          </Text>
          <Space padding='.7rem 0' />
          <LeftContainer>
            <Text>{p1}</Text>
          </LeftContainer>
          <Space padding='.4rem 0' />
          <LeftContainer>
            <Text>{p2}</Text>
          </LeftContainer>
          <Space padding='1rem 0' />
          {link && !isApply && (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <ContainedButton>View project</ContainedButton>
            </a>
          )}
          {isApply && (
            <Link to='/apply'>
              <ContainedButton>Apply</ContainedButton>
            </Link>
          )}
          <Space padding='2rem 0' />
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

export default ProjectShowcase
