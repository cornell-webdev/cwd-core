import { Button, Text, FadeOnView } from 'cornell-glue-ui'
import React from 'react'
import BrandColor from 'src/components/BrandColor'
import { FlexRow } from 'src/components/FlexContainer'
import Spacer from 'src/components/Spacer'
import useIsDesktop from 'src/hooks/useIsDesktop'
import styled from 'styled-components'
import { InnerDivider, Section } from '../pages/Home/Home'

export interface IShowcaseProps {
  overline?: string
  name: string
  svg: React.ReactNode
  paragraphs?: string[]
  link?: string
  buttonText?: string
}

const Showcase = ({
  overline,
  name,
  paragraphs,
  link,
  svg,
  buttonText = 'View project',
}: IShowcaseProps) => {
  const isDesktop = useIsDesktop()

  return (
    <Section>
      <FlexRow justifySpaceAround alignCenter>
        <FadeOnView>
          {overline && <Overline variant='h4'>{overline}</Overline>}
          <Text variant='h1'>
            <BrandColor>{name}</BrandColor>
          </Text>
          <Spacer y={3} />
          {paragraphs?.map((paragraph) => (
            <>
              <LeftContainer>
                <Text fontWeight={500}>{paragraph}</Text>
              </LeftContainer>
              <Spacer y={1.5} />
            </>
          ))}
          <Spacer y={2.5} />
          {link && (
            <a href={link} target='_blank' rel='noopener noreferrer'>
              <Button variant='outlined'>{buttonText}</Button>
            </a>
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

const Overline = styled(Text)`
  font-weight: bold;
  color: ${(props) => props.theme.text.muted};
`

const LeftContainer = styled.div`
  @media (min-width: ${(props) => props.theme.large}) {
    width: 30vw;
  }
`

export default Showcase
