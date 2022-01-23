import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Illust3 } from 'src/assets/illust-3.svg'
import { ReactComponent as IllustCore } from 'src/assets/illust-core.svg'
import { ReactComponent as IllustRSVP } from 'src/assets/illust-rsvp.svg'
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
        name='Glue'
        paragraphs={[
          'Glue is a centralized design system and React component library for webdev.',
          'Building a comprehensive design system is hard work! But your work on Glue will impact all the projects within webdev. Talk about lots of responsibility!',
        ]}
        link='https://master--6156709ecded80003acc50f3.chromatic.com'
        svg={<Illust3 />}
      />
      <Showcase
        overline='Product 03'
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
