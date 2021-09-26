import React from 'react'
import styled from 'styled-components'
import Showcase from 'src/components/Showcase'
import Timeline from './Timeline'
import { ReactComponent as IllustApplyMain } from 'src/assets/illust-apply-main.svg'
import { ReactComponent as IllustFrontend } from 'src/assets/illust-frontend.svg'
import { ReactComponent as IllustBackend } from 'src/assets/illust-backend.svg'
import { ReactComponent as IllustDesign } from 'src/assets/illust-design.svg'

const Apply = () => {
  return (
    <Container>
      <Showcase
        overline='Welcome'
        name='Come join us!'
        p1="We'll give you a brief overview of our application process."
        p2='Afterwards, feel free to apply to the position that fits you best. Good luck!'
        svg={<IllustApplyMain />}
      />
      <Timeline />
      <Showcase
        overline='React'
        name='Frontend Developer'
        p1='As a frontend developer, you will be developing highly performant React applications!'
        p2='Some of the things we use are Typescript, styled-components, and react-query.'
        svg={<IllustFrontend />}
        // TODO: add application link
      />
      <Showcase
        overline='Node.js | MongoDB'
        name='Backend Developer'
        p1='As a backend developer, you will be developing APIs and designing databases.'
        p2='Some of the things we use are Node.js, Express, and MongoDB.'
        svg={<IllustBackend />}
        // TODO: add application link
      />
      <Showcase
        overline='Figma'
        name='Designer'
        p1='As a designer, you will be designing low and high fidelity designs in Figma.'
        p2='You could also get a chance to design the Cornell WebDev brand. (Maybe you could design our logo!)'
        svg={<IllustDesign />}
        // TODO: add application link
      />
    </Container>
  )
}

const Container = styled.div``

export default Apply
