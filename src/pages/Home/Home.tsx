import React from 'react'
import FadeOnView from 'src/components/FadeOnView'
import Fullwidth from 'src/components/Fullwidth'
import MutedColor from 'src/components/MutedColor'
import Space from 'src/components/Space'
import Text from 'src/components/Text'
import styled from 'styled-components'
import { FlexRow } from 'src/components/FlexContainer'
import { ReactComponent as Illust0 } from 'src/assets/illust-0.svg'
import { ReactComponent as Illust1 } from 'src/assets/illust-1.svg'
import { ReactComponent as Illust2 } from 'src/assets/illust-2.svg'
import { ReactComponent as Illust3 } from 'src/assets/illust-3.svg'
import ContainedButton from 'src/components/ContainedButton'

const Home = () => {
  return (
    <Container>
      <Section>
        <FadeOnView>
          <Text variant='h3'>
            <MutedColor>Introducing</MutedColor>
          </Text>
          <Space padding='.2rem 0' />
          <Text variant='h1'>
            Cornell <BrandColor>WebDev</BrandColor>
          </Text>
          <Space padding='2rem 0' />
          <FlexRow justifyCenter>
            <Illust0 />
          </FlexRow>
        </FadeOnView>
      </Section>
      <Section>
        <Fullwidth>
          <FadeOnView>
            <Text variant='h3'>
              <MutedColor>Project 01</MutedColor>
            </Text>
            <Space padding='.2rem 0' />
            <Text variant='h1'>
              <BrandColor>Cornlet</BrandColor>
            </Text>
            <Space padding='.7rem 0' />
            <Text>
              Cornlet is a sublet marketplace for the Cornell community. Think Airbnb, but for
              sublets.
            </Text>
            <Space padding='.4rem 0' />
            <Text>
              We're looking to expand into the housing market in general. New features will include
              year-lease listings, landlord reviews, and more!
            </Text>
            <Space padding='1rem 0' />
            <a href='https://www.cornlet.com' target='_blank' rel='noopener noreferrer'>
              <ContainedButton>View project</ContainedButton>
            </a>
            <Space padding='2rem 0' />
            <FlexRow justifyCenter>
              <Illust1 />
            </FlexRow>
          </FadeOnView>
        </Fullwidth>
      </Section>
      <Section>
        <Fullwidth>
          <FadeOnView>
            <Text variant='h3'>
              <MutedColor>Project 02</MutedColor>
            </Text>
            <Space padding='.2rem 0' />
            <Text variant='h1'>
              <BrandColor>Coursable</BrandColor>
            </Text>
            <Space padding='.7rem 0' />
            <Text>
              Coursable is a course planning platform for Cornell students. It's still a work in
              progress!
            </Text>
            <Space padding='.4rem 0' />
            <Text>
              It's going to be an open source course planning platform, which means you will be able
              to duplicate existing course plans instead of creating your own from scratch!
            </Text>
            <Space padding='1rem 0' />
            <a
              href='https://coursable-cornell.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'>
              <ContainedButton>View project</ContainedButton>
            </a>
            <Space padding='2rem 0' />
            <FlexRow justifyCenter>
              <Illust2 />
            </FlexRow>
          </FadeOnView>
        </Fullwidth>
      </Section>
      <Section>
        <Fullwidth>
          <FadeOnView>
            <Text variant='h3'>
              <MutedColor>Project 03</MutedColor>
            </Text>
            <Space padding='.2rem 0' />
            <Text variant='h1'>
              <BrandColor>Glue</BrandColor>
            </Text>
            <Space padding='.7rem 0' />
            <Text>
              Glue is a centralized design system and React component library for Cornell WebDev.
            </Text>
            <Space padding='.4rem 0' />
            <Text>
              Building a comprehensive design system is hard work! But your work on Glue will impact
              all the projects within Cornell WebDev. Talk about lots of responsibility!
            </Text>
            <Space padding='2rem 0' />
            <FlexRow justifyCenter>
              <Illust3 />
            </FlexRow>
          </FadeOnView>
        </Fullwidth>
      </Section>
    </Container>
  )
}

const Container = styled.div``

const BrandColor = styled.span`
  color: ${(props) => props.theme.brand.default};
`

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 1rem;

  & svg {
    height: 80%;
    width: 80%;
  }
`

export default Home
