import styled from 'styled-components'
import { space, color, typography, layout, variant } from 'styled-system'
import get from 'lodash.get'

const Text = styled.span`
  display: inline-block;
  transition: all 0.15s ease;
  ${space}
  ${color}
  ${typography}
  ${layout}
  ${({ theme }) => `color: ${get(theme, 'colors.text', 'white')};`}
  ${variant({
    prop: 'type',
    variants: {
      h1: {
        fontSize: 5,
        fontWeight: 'bold',
        lineHeight: '12rem'
      },
      h2: {
        fontSize: 4,
        fontWeight: 'bold',
        lineHeight: '6.75rem'
      },
      h3: {
        fontSize: 3,
        fontWeight: 'bold',
        lineHeight: '4.5rem'
      },
      large: {
        fontSize: 2,
        fontWeight: 'normal',
        lineHeight: '3.75rem'
      },
      medium: {
        fontSize: 1,
        fontWeight: 'normal',
        lineHeight: '3rem'
      },
      small: {
        fontSize: 0,
        fontWeight: 'normal',
        lineHeight: '2.625rem'
      }
    }
  })}
`

Text.defaultProps = {
  fontFamily: 'Roboto',
  type: 'medium'
}

export { Text }
