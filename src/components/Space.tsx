import styled from 'styled-components'

interface ISpaceProps {
  margin?: string
  padding?: string
}

const Space = styled.div<ISpaceProps>`
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
`

export default Space
