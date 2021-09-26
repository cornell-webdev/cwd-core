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
import { ReactComponent as IllustApply } from 'src/assets/illust-apply.svg'
import ContainedButton from 'src/components/ContainedButton'
import useIsDesktop from 'src/hooks/useIsDesktop'
import { Link } from 'react-router-dom'
import BrandColor from 'src/components/BrandColor'
import ProjectShowcase from './ProjectShowcase'

const Home = () => {
  const isDesktop = useIsDesktop()

  return (
    <Container>
      <Section>
        <FlexRow justifySpaceAround alignCenter>
          <FadeOnView>
            <Text variant='h3'>
              <MutedColor>Introducing</MutedColor>
            </Text>
            <Space padding='.1rem 0' />
            <Text variant='h1'>
              Cornell <BrandColor>WebDev</BrandColor>
            </Text>
            {isDesktop && (
              <>
                <Space padding='.8rem 0' />
                <Text variant='p'>Let's redefine what it means</Text>
                <Text variant='p'>to be a project team, together.</Text>
                <Space padding='.8rem 0' />
                <Link to='/apply'>
                  <ContainedButton>Apply</ContainedButton>
                </Link>
              </>
            )}
            <Space padding='2rem 0' />
            {!isDesktop && (
              <FlexRow justifyCenter>
                <Illust0 />
              </FlexRow>
            )}
          </FadeOnView>
          <InnerDivider />
          {isDesktop && (
            <FlexRow justifyCenter>
              <FadeOnView>
                <Illust0 />
              </FadeOnView>
            </FlexRow>
          )}
        </FlexRow>
      </Section>
      <ProjectShowcase
        overline='Project 01'
        name='Cornlet'
        p1='Cornlet is a sublet marketplace for the Cornell community. Think Airbnb, but for sublets.'
        p2="We're looking to expand into the housing market in general. New features will includeyear-lease listings, landlord reviews, and more!"
        link='https://www.cornlet.com'
        svg={<Illust1 />}
      />
      <ProjectShowcase
        overline='Project 02'
        name='Coursable'
        p1="Coursable is a course planning platform for Cornell students. It's still a work in progress!"
        p2="It's going to be an open source course planning platform, which means you will be able
        to duplicate existing course plans instead of creating your own from scratch!"
        link='https://coursable-cornell.herokuapp.com/'
        svg={<Illust2 />}
      />
      <ProjectShowcase
        overline='Project 03'
        name='Glue'
        p1='Glue is a centralized design system and React component library for Cornell WebDev.'
        p2='Building a comprehensive design system is hard work! But your work on Glue will impact
        all the projects within Cornell WebDev. Talk about lots of responsibility!'
        svg={<Illust3 />}
      />
      <ProjectShowcase
        overline="It's open!"
        name='Apply now'
        p1='Applications are open! Head on over and submit your application.'
        p2='We look forward to
        seeing you!'
        link='/apply'
        svg={<IllustApply />}
        isApply
      />
    </Container>
  )
}

const Container = styled.div``

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0 1rem;

  & svg {
    height: 80%;
    width: 80%;
  }

  @media (min-width: ${(props) => props.theme.large}) {
    & svg {
      height: 40vh;
      width: 40vh;
    }
  }
`

export const InnerDivider = styled.div`
  width: 10vw;
`

export default Home
