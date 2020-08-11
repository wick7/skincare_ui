import styled, { css } from 'styled-components'

const defaultStyles = ({
    center,
    right,
    centerVertically,
    spaceBetween,
    section,
    column,
}) =>
    css`
    display: flex;
    ${center && 'justify-content: center;'}
    ${right && 'justify-content: flex-end;'}
    ${spaceBetween && 'justify-content: space-between;'}
    ${centerVertically && 'align-items: center;'}
    ${section && 'margin-bottom: 20;'}
    ${column && 'flex-direction: column;'}
  `
const Flex = styled.div`
  ${defaultStyles}
`

export default Flex