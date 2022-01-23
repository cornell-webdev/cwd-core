import { FadeOnView, Text, Spacer } from 'cornell-glue-ui'
import React from 'react'
import { ReactComponent as IllustTimeline } from 'src/assets/illust-timeline.svg'
import { FlexRow } from 'src/components/FlexContainer'
import useIsDesktop from 'src/hooks/useIsDesktop'
import styled from 'styled-components'

const Timeline = () => {
  const isDesktop = useIsDesktop()

  return (
    <Container>
      {isDesktop && (
        <>
          <InnerContainer>
            <FadeOnView>
              <StyledIllustTimeline />
            </FadeOnView>
          </InnerContainer>
          <Spacer x={3} />
        </>
      )}
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
          <Spacer y='24px' />
          <FlexRow>
            <DateText>01/24</DateText>
            <EventText>Applications open</EventText>
          </FlexRow>
          <Spacer y='88px' />
          <FlexRow>
            <DateText>02/06</DateText>
            <EventText>Applications close</EventText>
          </FlexRow>
          <Spacer y='28px' />
          <FlexRow>
            <DateText>02/07</DateText>
            <EventText>Interviews begin</EventText>
          </FlexRow>
          <Spacer y='88px' />
          <FlexRow>
            <DateText>02/12</DateText>
            <EventText>Interviews end</EventText>
          </FlexRow>
          <Spacer y='28px' />
          <FlexRow>
            <DateText>02/16</DateText>
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

  & > div:last-of-type {
    margin-left: 1rem;
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
  background: ${(props) => props.brand && props.theme.brand[500]};
`

const Dot = styled.div`
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  background: ${(props) => props.theme.brand[500]};
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
  height: 420px;
  width: 30vw;
  margin-right: 2rem;
`

export default Timeline
