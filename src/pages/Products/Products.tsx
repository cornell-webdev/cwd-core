import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illust3 } from 'src/assets/illust-3.svg'
import { ReactComponent as IllustCore } from 'src/assets/illust-core.svg'
import { ReactComponent as IllustRSVP } from 'src/assets/illust-rsvp.svg'
import { ReactComponent as IllustWorkHub } from 'src/assets/illust-workhub.svg'
import { ReactComponent as IllustMarketplace } from 'src/assets/illust-marketplace.svg'
import { ReactComponent as IllustCarpool } from 'src/assets/illust-carpool.svg'
import { Showcase } from 'cornell-glue-ui'

const Products = () => {
  return (
    <Container>
      <Showcase
        overline='Product 01'
        name='RSVP'
        paragraphs={[
          'RSVP gathers and displays all the events happening in the Cornell community.',
          "Discover exciting events from a comprehensive database of events. If you're hosting an event, advertise your events on RSVP to gather greater interest from the community!",
        ]}
        link='https://cornellrsvp.com'
        svg={<IllustRSVP />}
      />
      <Showcase
        overline='Product 02'
        name='Carpool'
        paragraphs={[
          "Instead of buying expensive bus tickets, carpool with someone who's heading in the same direction!",
          'Usage will be restricted to Cornellians for safety and security.',
        ]}
        svg={<IllustCarpool />}
      />
      <Showcase
        overline='Product 03'
        name='Marketplace'
        paragraphs={[
          'Buy and sell second-hand goods within the Cornell community.',
          'Sell items that you no longer use, or buy quality items for half the price!',
        ]}
        svg={<IllustMarketplace />}
      />
      <Showcase
        overline='Product 04'
        name='WorkHub'
        paragraphs={[
          'What if you could see all of your assignments from Canvas, Gradescope, and CMS all in one place?',
          'WorkHub conveniently compiles all of your homeworks and assignments into one place!',
        ]}
        svg={<IllustWorkHub />}
      />
      <Showcase
        overline='Product 05'
        name='Glue'
        paragraphs={[
          'Glue is a centralized design system and React component library for webdev.',
          'Building a comprehensive design system is hard work! But your work on Glue will impact all the projects within webdev. Talk about lots of responsibility!',
        ]}
        link='https://master--6156709ecded80003acc50f3.chromatic.com'
        svg={<Illust3 />}
      />
      <Showcase
        overline='Product 06'
        name='Core'
        paragraphs={[
          "Core will be working on this very website. Yep! The one you're looking at right now!",
          'This subteam will be responsible for the face of webdev. First impressions matter. Remember, we only have 10 seconds!',
        ]}
        link='https://github.com/cornell-webdev/cwd-core'
        svg={<IllustCore />}
      />
    </Container>
  )
}

const Container = styled.div``

export default Products
