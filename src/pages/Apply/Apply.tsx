import React from 'react'
import { ReactComponent as IllustApplyMain } from 'src/assets/illust-apply-main.svg'
import { ReactComponent as IllustBackend } from 'src/assets/illust-backend.svg'
import { ReactComponent as IllustDesign } from 'src/assets/illust-design.svg'
import { ReactComponent as IllustFrontend } from 'src/assets/illust-frontend.svg'
import Showcase from 'src/components/Showcase'
import styled from 'styled-components'

const Apply = () => {
  return (
    <Container>
      {/* <Showcase
        overline='Welcome'
        name='Come join us!'
        p1="We'll give you a brief overview of our application process."
        p2='Afterwards, feel free to apply to the position that fits you best. Good luck!'
        svg={<IllustApplyMain />}
      /> */}
      <Showcase
        overline='Fall 2021'
        name='Applications are closed'
        paragraphs={[
          "We're no longer receiving applications for this semester.",
          'If you sign up for our application email list, we notify you via email once applications open.',
        ]}
        svg={<IllustApplyMain />}
        link='https://forms.gle/9bxLcK554j8jgi9f6'
        buttonText='Notify me'
      />
      {/* https://forms.gle/9bxLcK554j8jgi9f6 */}
      {/* <Timeline /> */}
      <Showcase
        overline='React'
        name='Frontend Developer'
        paragraphs={[
          'As a frontend developer, you will be developing highly performant React applications!',
          'Some of the things we use are Typescript, styled-components, and react-query.',
        ]}
        svg={<IllustFrontend />}
        // link='https://forms.gle/CDH48gVp6csGyQJA9'
        // buttonText='Apply'
      />
      <Showcase
        overline='Node.js | MongoDB'
        name='Backend Developer'
        paragraphs={[
          'As a backend developer, you will be developing APIs and designing databases.',
          'Some of the things we use are Node.js, Express, and MongoDB.',
        ]}
        svg={<IllustBackend />}
        // link='https://forms.gle/dAXuDMSyuP4mH1MX9'
        // buttonText='Apply'
      />
      <Showcase
        overline='Figma'
        name='Designer'
        paragraphs={[
          'As a designer, you will be designing low and high fidelity designs in Figma.',
          'You could also get a chance to design the webdev brand.',
        ]}
        svg={<IllustDesign />}
        // link='https://forms.gle/HttsvcvhKbsF9Jnv8'
        // buttonText='Apply'
      />
    </Container>
  )
}

const Container = styled.div``

export default Apply
