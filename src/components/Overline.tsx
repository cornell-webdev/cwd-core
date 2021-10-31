import { Text } from 'cornell-glue-ui'
import styled from 'styled-components'

const Overline = styled(Text)`
  font-weight: bold;
  color: ${(props) => props.theme.text.muted};
`

export default Overline
