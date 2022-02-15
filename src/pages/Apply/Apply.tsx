import React from 'react'
import { ReactComponent as IllustApplyMain } from 'src/assets/illust-apply-main.svg'
import { ReactComponent as IllustBackend } from 'src/assets/illust-backend.svg'
import { ReactComponent as IllustDesign } from 'src/assets/illust-design.svg'
import { ReactComponent as IllustFrontend } from 'src/assets/illust-frontend.svg'
import { Showcase } from 'cornell-glue-ui'
import styled from 'styled-components'
import Timeline from './Timeline'

const Apply = () => {
  return (
    <Container>
      {/* <Showcase
        overline='Welcome'
        name='Come join us!'
        paragraphs={[
          "We'll give you a brief overview of our application process.",
          'Afterwards, feel free to apply to the position that fits you best. Good luck!',
        ]}
        svg={<IllustApplyMain />}
      /> */}
      <Showcase
        overline='Spring 2022'
        name='Applications are closed'
        paragraphs={[
          "We're no longer receiving applications for this semester.",
          'If you sign up for our application email list, we notify you via email once applications open.',
        ]}
        svg={<IllustApplyMain />}
        link='https://forms.gle/cW3u7za4v4Y7rGmS8'
        buttonText='Notify me'
      />

      {/* <Timeline /> */}

      <Showcase
        // overline='Typescript | React | Node.js | MongoDB'
        overline='Typescript • React • Node.js • MongoDB'
        name='Developer'
        paragraphs={[
          'As a developer, you will be responsible for developing performant React applications!',
          'We use Typescript, styled-components, react-query, Express, and MongoDB to develop our web applications.',
        ]}
        svg={<IllustFrontend />}
        link='https://forms.gle/JNc2oo5BR5RWjWVo6'
        buttonText='Apply'
      />
      {/* <Showcase
        overline='Node.js | MongoDB'
        name='Backend Developer'
        paragraphs={[
          'As a backend developer, you will be developing APIs and designing databases.',
          'Some of the things we use are Node.js, Express, and MongoDB.',
        ]}
        svg={<IllustBackend />}
        // link='https://forms.gle/dAXuDMSyuP4mH1MX9'
        // buttonText='Apply'
      /> */}
      <Showcase
        overline='Figma'
        name='Designer'
        paragraphs={[
          'As a designer at Cornell webdev, you will be responsible for creating UI / UX designs on Figma.',
          'Additionally, you could be given the opportunity to design the Cornell webdev brand!',
        ]}
        svg={<IllustDesign />}
        link='https://forms.gle/2brwTHGqsXdsm3z76'
        buttonText='Apply'
      />
      <Showcase
        overline='Marketing • Growth'
        name='Business'
        paragraphs={[
          'As Cornell webdev, you will be responsible for exploring strategies for growth, marketing through various channels, acquiring funding, establishing connections with industry partners, and so on!',
        ]}
        svg={<IllustBackend />}
        link='https://forms.gle/gE7H65csEo9Xmn4J8'
        buttonText='Apply'
      />
    </Container>
  )
}

const Container = styled.div``

export default Apply
