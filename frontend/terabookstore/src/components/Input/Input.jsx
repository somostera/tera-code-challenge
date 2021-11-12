import React, { Fragment, useState } from 'react'
import styled, { css } from 'styled-components'
import { space, color, typography, layout, flexbox } from 'styled-system'
import get from 'lodash.get'
import { BiErrorCircle, BiCheckCircle, BiInfoCircle } from 'react-icons/bi'
import { VscWarning } from 'react-icons/vsc'

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  font-size: ${({ theme }) => get(theme, 'fontSizes.1')};
  margin: 0;
  margin-bottom: 2rem;
  font-family: 'Noto Sans';
  color: ${({ theme, success, warning, error }) => success ? get(theme, 'colors.success') : error ? get(theme, 'colors.error') : warning ? get(theme, 'colors.warning') : '#E0E0E0'};

  vertical-align: middle;
  font-family: Roboto;

  .message-icon {
    ${({ theme }) => css`
      min-width: ${get(theme, 'fontSizes.3')};
      width: ${get(theme, 'fontSizes.3')};
      min-height: ${get(theme, 'fontSizes.3')};
      height: ${get(theme, 'fontSizes.3')};
    `}
    margin-right: 8px;
  }
`

const Wrapper = styled.label`
  ${color}
  ${typography}
  ${space}

  width: 100%;

  ${({ theme, label }) => Boolean(label) && css`
    &:before {
      content: '${label}';
      display: block;
      margin-bottom: ${get(theme, 'parameters.inputLabelMargin', '4px')};
      width: 100%;
      text-align: left;
    }
  `}

  input {
    outline: 0;
    transition: all .2s ease;
    ${color}
    ${typography}
    ${layout}
    ${flexbox}
    ${space}

    ${({ theme, success, warning, error }) => css`
      background-color: ${get(theme, 'colors.input', 'white')};
      padding: ${get(theme, 'parameters.inputPadding', '8px 16px')};
      border: ${get(theme, 'borders.input', '2px solid')};
      border-color: ${success ? get(theme, 'colors.success') : error ? get(theme, 'colors.error') : warning ? get(theme, 'colors.warning') : '#E0E0E0'};
      border-radius: ${get(theme, 'radii.input', '4px')};

      &::placeholder {
        color: ${get(theme, 'colors.lightGray', '#E0E0E0')};
      }

      &:hover, &:focus {
        border: ${get(theme, 'borders.inputHovered', '2px solid #777777')};
      }
    `}

    ${({ width }) => width && css`
      width: ${width};
    `}

    ${({ disabled }) => disabled && css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  }
`

Wrapper.defaultProps = {
  fontFamily: 'Roboto',
  fontSize: 1,
  color: 'black',
  width: '-webkit-fill-available'
}

const Button = styled.button`
  all: unset;

  svg {
    cursor: pointer;
    margin-left: -3rem;
    ${({ theme }) => css`
      fill: ${get(theme, 'colors.gray', '#777777')};

      &:hover, &:focus {
        fill: ${get(theme, 'colors.danger', '#FB7171')};
      }
    `}
  }
`

const CancelButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <svg width="1rem" height="1rem" viewBox="0 0 10 10" fill="none">
      <path d="M0.292893 8.29289C-0.0976311 8.68342 -0.0976311 9.31658 0.292893 9.70711C0.683417 10.0976 1.31658 10.0976 1.70711 9.70711L0.292893 8.29289ZM9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L9.70711 1.70711ZM8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711C10.0976 9.31658 10.0976 8.68342 9.70711 8.29289L8.29289 9.70711ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM1.70711 9.70711L5.70711 5.70711L4.29289 4.29289L0.292893 8.29289L1.70711 9.70711ZM5.70711 5.70711L9.70711 1.70711L8.29289 0.292893L4.29289 4.29289L5.70711 5.70711ZM4.29289 5.70711L8.29289 9.70711L9.70711 8.29289L5.70711 4.29289L4.29289 5.70711ZM5.70711 4.29289L1.70711 0.292893L0.292893 1.70711L4.29289 5.70711L5.70711 4.29289Z" fill="current" />
    </svg>
  </Button>

)

const Input = React.forwardRef(({ children, disabled, cancelable, searchable, error, success, warning, message, messageType, width, ...rest }, ref) => {
  const [value, setValue] = useState('')
  const onChange = e => { setValue(e.target.value) }
  const clearInput = () => { setValue('') }

  let iconName
  switch (messageType) {
    case 'error':
      iconName = <BiErrorCircle className="message-icon" color={messageType} />
      break
    case 'success':
      iconName = <BiCheckCircle className="message-icon" color={messageType} />
      break
    case 'warning':
      iconName = <VscWarning className="message-icon" color={messageType} />
      break
    case 'info':
      iconName = <BiInfoCircle className="message-icon" color={messageType} />
      break
    default:
      iconName = <></>
      break
  }

  return (
    <Fragment>
      <Wrapper label={children} disabled={disabled} ref={ref} width={width} success={success} error={error} warning={warning}>
        <input value={value} onChange={onChange} disabled={disabled} {...rest} />
      </Wrapper>
      {cancelable && value && <CancelButton onClick={clearInput} />}
      {message && <MessageWrapper success={success} error={error} warning={warning}>
        {iconName}
        {/* <Icon name={iconName} color={messageType} className="message-icon" /> */}
        {message}
      </MessageWrapper>}
    </Fragment>
  )
})

Input.defaultProps = {
  children: '',
  disabled: false,
  cancelable: false,
  searchable: false
}

export { Input }
