import React from 'react'
import FadeOnView from 'src/components/FadeOnView'
import { FlexRow } from 'src/components/FlexContainer'
import Space from 'src/components/Space'
import Text from 'src/components/Text'
import styled from 'styled-components'
import { ReactComponent as IllustTimeline } from 'src/assets/illust-timeline.svg'
import useIsDesktop from 'src/hooks/useIsDesktop'

const Timeline = () => {
  const isDesktop = useIsDesktop()

  return (
    <Container>
      {isDesktop && <StyledIllustTimeline />}
      <InnerContainer>
        <LineContainer>
          <VertLine height={30} />
          <Dot />
          <VertLine height={100} brand />
          <Dot />
          <VertLine height={40} />
          <Dot />
          <VertLine height={100} brand />
          <Dot />
          <VertLine height={40} />
          <Dot />
          <VertLine height={30} />
        </LineContainer>
      </InnerContainer>
      <InnerContainer>
        <FadeOnView>
          <Space padding='15px 0' />
          <FlexRow>
            <DateText>09/27</DateText>
            <EventText>Applications open</EventText>
          </FlexRow>
          <Space padding='44px 0' />
          <FlexRow>
            <DateText>10/06</DateText>
            <EventText>Applications close</EventText>
          </FlexRow>
          <Space padding='17px 0' />
          <FlexRow>
            <DateText>10/08</DateText>
            <EventText>Interviews begin</EventText>
          </FlexRow>
          <Space padding='45px 0' />
          <FlexRow>
            <DateText>10/14</DateText>
            <EventText>Interviews end</EventText>
          </FlexRow>
          <Space padding='16px 0' />
          <FlexRow>
            <DateText>10/16</DateText>
            <EventText>Decisions released</EventText>
          </FlexRow>
        </FadeOnView>
      </InnerContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:first-of-type {
    margin-right: 1rem;
  }
`

const InnerContainer = styled.div`
  height: 70%;
`

const LineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export interface IVertLineProps {
  height?: number
  brand?: boolean
}

const VertLine = styled.div<IVertLineProps>`
  width: 4px;
  background: ${(props) => props.theme.border.default};

  /* height */
  height: ${(props) => props.height && `${props.height}px`};

  /* brand */
  background: ${(props) => props.brand && props.theme.brand.default};
`

const Dot = styled.div`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  background: ${(props) => props.theme.brand.default};
  border: 2px solid white;
`

const DateText = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
  color: ${(props) => props.theme.text.muted};
`

const EventText = styled(Text)`
  font-size: 1.2rem;
  font-weight: bold;
`

const StyledIllustTimeline = styled(IllustTimeline)`
  height: 30%;
  width: 30vw;
  margin-right: 2rem;
`

export default Timeline
