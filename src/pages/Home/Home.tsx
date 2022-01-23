import { Showcase } from 'cornell-glue-ui'
import React from 'react'
import { ReactComponent as Illust0 } from 'src/assets/illust-0.svg'
import { ReactComponent as IllustCore } from 'src/assets/illust-core.svg'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Showcase
        overline='Introducing'
        name='Web development at Cornell'
        paragraphs={[
          'webdev is a student team at Cornell that aims to build performant web applications for the Cornell community.',
        ]}
        svg={<Illust0 />}
      />
      <Showcase
        overline="It's open!"
        name='Apply now'
        link='/apply'
        buttonText='Apply'
        paragraphs={[
          "We'll give you a brief overview of our application process.",
          'Afterwards, feel free to apply to the position that fits you best. Good luck!',
        ]}
        isOpenNewTab={false}
        svg={<IllustCore />}
      />
    </Container>
  )
}

const Container = styled.div``

export default Home
