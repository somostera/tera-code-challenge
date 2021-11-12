import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, typography } from 'styled-system'
import get from 'lodash.get'

const Wrapper = styled.label`
  -webkit-tap-highlight-color: transparent;
  font-family: 'Roboto';
  height: 3rem;
  display: flex;
  flex-direction: row;
  user-select: none;
  align-items: center;
  width: fit-content;
  position: relative;
  cursor: pointer;
  ${space}
  ${typography}

  & div {
    color: ${({ state, theme }) => state ? theme.colors.textOn : theme.colors.textOff};
    margin-right: 8px;
    font-weight: 500;
    transition: color .3s ease;

    &:last-child {
      color: ${({ state, theme }) => state ? theme.colors.gray : theme.colors.gray};
      margin-right: 0px;
    }
  }
  input {
    display: none;
    & + span {
      padding-left: 6.25rem;
      min-height: 3rem;
      line-height: 3rem;
      display: block;
      color: ${({ theme }) => theme.colors.gray};
      position: relative;
      white-space: nowrap;
      transition: color .3s ease;
      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 1.5rem;
      }
      &:before {
        top: 0;
        left: 0;
        width: 5.25rem;
        height: 3rem;
        background: ${({ theme, colorOff }) => get(theme, `colors.${colorOff}`, colorOff)};
        transition: all .3s ease;
      }
      &:after {
        width: 2.25rem;
        height: 2.25rem;
        background: ${({ theme }) => theme.colors.white};
        top: 0.375rem;
        left: 0.375rem;
        transition: all .45s ease;
      }
    }

    &:checked {
      & + span {
        &:before {
          background: ${({ theme, colorOn }) => get(theme, `colors.${colorOn}`, colorOn)};
        }
        &:after {
          background: #fff;
          transform: translate(2.25rem, 0);
        }
      }
    }
  }
`

/**
 * Toggle component for implementing boolean input
 */
const Toggle = ({ state, onChange, ...rest }) => {
  const handleHTMLEventChange = event => {
    onChange(event.target.checked)
  }

  return (
    <Wrapper state={state} {...rest}>
      <div>{rest.textOff || 'Off'}</div>
      <input type="checkbox" checked={state} onChange={handleHTMLEventChange} />
      <span />
      <div>{rest.textOn || 'On'}</div>
    </Wrapper>
  )
}

Toggle.propTypes = {
  /**
   * Controls the current state of the component
   */
  state: PropTypes.bool.isRequired,
  /**
   * Off (left) option label
   */
  textOff: PropTypes.string,
  /**
   * On (right) option label
   */
  textOn: PropTypes.string,
  /**
   * Function called when the toggle is clicked, passing the new state as the only parameter
   */
  onChange: PropTypes.func,
  /**
   * Override CSS margin property. Must be a valid CSS margin value as a string
   */
  margin: PropTypes.string,
  /**
   * A font size key defined in the theme
   */
  fontSize: PropTypes.string,
  /**
   * Off (left) toggle background color
   */
  colorOff: PropTypes.string,
  /**
   * On (right) toggle background color
   */
  colorOn: PropTypes.string,
}

Toggle.defaultProps = {
  onChange: null,
  textOff: 'Off',
  textOn: 'On',
  colorOff: 'lightGray',
  colorOn: 'success',
}

export { Toggle }
