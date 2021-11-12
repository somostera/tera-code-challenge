import React, { useState, useEffect, useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, typography, layout, space } from 'styled-system'
import get from 'lodash.get'
import find from 'lodash.find'
import filter from 'lodash.filter'
import { usePopper } from 'react-popper'
import { Input } from '../Input/Input'
import { View } from '../View/View'

const SelectBox = styled.div`
  outline: 0;
  transition: all .2s ease;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${color}
  ${typography}
  ${({ theme, isOpen }) => css`
    background-color: ${get(theme, 'colors.input', 'white')};
    padding: ${get(theme, 'parameters.inputPadding', '8px 16px')};
    border: ${get(theme, `borders.${isOpen ? 'inputHovered' : 'input'}`, '2px solid #777777')};
    border-radius: ${get(theme, 'radii.input', '4px')};

    &::placeholder {
      color: ${get(theme, 'colors.text', '#E0E0E0')};
    }

    &:hover, &:focus {
      border: ${get(theme, 'borders.inputHovered', '2px solid #303030')};
    }
  `}

  ${layout}
  ${space}
  ${({ theme, disabled }) => disabled && css`
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      border: ${get(theme, 'borders.input', '2px solid #777777')};
    }
  `}
  ${({ large }) => large && css`
    height: 5rem;
    font-size: 3rem;
  `}
`

const SelectText = styled.span`
  align-self: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme, isPlaceholder }) => isPlaceholder ? theme.colors.gray : theme.colors.text};
`

const Dropdown = styled.div`
  display: flex;
  margin-left: 2rem;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${({ open }) => open ? 'rotate(180deg)' : 'rotate(0deg)'};

  svg {
    width: 2rem;
    height: 1.25rem;
    color: ${({ theme }) => get(theme, 'colors.gray', '#777777')};
  }
`

const OptionsWrapper = styled(View).attrs(props => ({
  style: {
    transform: `${props.popperTransform} ${props.open ? 'translateX(0)' : 'scale(0.9)'} !important`,
    ...props.style,
    visibility: props.open ? 'visible' : 'hidden',
    opacity: props.open ? '1' : '0',
    zIndex: props.open ? '999' : '-1'
  },
}))`
  overflow-y: auto;
  position: absolute;
  transition: all 0.2s ease;
`

OptionsWrapper.defaultProps = {
  fontFamily: 'Roboto',
  flexDirection: 'column',
  bg: 'white',
  boxShadow: 'medium',
  borderRadius: 'card'
}

const Options = styled(View)`
  display: flex;
  max-height: 30rem;
  overflow-y: auto;
  ${({ theme, searchable }) => searchable && `border-top: 1px solid ${theme.colors.lightGray};`};
  ${({ large }) => large && css`
    font-size: 3rem;
  `}
`

Options.defaultProps = {
  alignSelf: 'stretch',
  alignItems: 'stretch'
}

const Option = styled.div`
  display: flex;
  padding: ${({ theme, large }) => large ? '4rem' : get(theme, 'parameters.inputPadding', '8px 16px')};
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.4s ease;
  cursor: pointer;
  ${({ theme, divider }) => divider && `border-top: 1px solid ${theme.colors.text}`};
  min-height: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`

const OptionsPopper = React.forwardRef(({ styles, forceUpdate, attributes, searchable, isOpen, search, handleSearchChange, renderOptions, large }, ref) => {
  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [isOpen, forceUpdate])

  return <OptionsWrapper ref={ref} open={isOpen} popperTransform={styles.popper.transform} style={styles.popper} {...attributes.popper}>
    {searchable && <Input m={2} alignSelf="stretch" value={search} onChange={handleSearchChange} />}
    <Options searchable={searchable} large={large}>
      {renderOptions}
    </Options>
  </OptionsWrapper>
})

const Select = ({ placeholder, value, options, onChange, onFilterChange, searchable, large, ...rest }) => {
  const [isOpen, setDropdown] = useState(false)
  const [search, setSearch] = useState('')
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)

  const { styles, attributes, forceUpdate } = usePopper(referenceElement, popperElement, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'preventOverflow',
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      }
    ]
  })

  const toggleSelect = () => setDropdown(isOpen => !isOpen)

  const handleSearchChange = e => {
    setSearch(e.target.value)
    onFilterChange && onFilterChange(e.target.value)
  }

  const onSelect = (selectedValue, onClick) => e => {
    onChange && onChange(selectedValue)
    onClick && onClick()
    toggleSelect()
  }

  const renderOptions = filter(options, ({ label }) => label.toLowerCase().includes(search.toLowerCase())).map(({ value, label, onClick, divider }, index) =>
    <Option key={index} value={value} onClick={onSelect(value, onClick)} divider={divider} large={large}>{label}</Option>
  )

  const getPlaceholder = useCallback(() => {
    const selectedOption = find(options, { value })
    return (selectedOption && selectedOption.label) || placeholder
  }, [options, placeholder, value])

  const handleOutsideClick = useCallback(e => {
    referenceElement && popperElement && !popperElement.contains(e.target) && !referenceElement.contains(e.target) && setDropdown(false)
  }, [referenceElement, popperElement])

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    // return function to be called when unmounted
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [handleOutsideClick])

  return (
    <Fragment>
      <SelectBox ref={setReferenceElement} onClick={toggleSelect} isOpen={isOpen} large={large} {...rest}>
        <SelectText isPlaceholder={!value}>{getPlaceholder()}</SelectText>
        <Dropdown open={isOpen}>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
            <path d="M14.2929 2.70711C14.9229 2.07714 14.4767 1 13.5858 1L8 1L2.41421 1C1.52331 1 1.07714 2.07714 1.70711 2.70711L7.29289 8.29289C7.68342 8.68342 8.31658 8.68342 8.70711 8.29289L14.2929 2.70711Z" fill="currentColor" stroke="currentColor" />
          </svg>
        </Dropdown>
      </SelectBox>
      <OptionsPopper ref={setPopperElement} {...{ styles, forceUpdate, attributes, searchable, isOpen, search, handleSearchChange, renderOptions, onFilterChange, large }} />
    </Fragment>
  )
}

Select.propTypes = {
  /**
   * Placeholder when no option is selected (value is null)
   */
  placeholder: PropTypes.string,
  /**
   * Selected option value
   */
  value: PropTypes.any,
  /**
   * Array of options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string,
    onClick: PropTypes.func,
    divider: PropTypes.bool
  })).isRequired,
  /**
   * Function that is called when the value is changed, being passed as parameter the selected option value
   */
  onChange: PropTypes.func,
  /**
   * Defines if the select should support option search
   */
  searchable: PropTypes.bool,
  /**
   * Function that is called when the value for the filter is changed
   */
  onFilterChange: PropTypes.func,
}

Select.defaultProps = {
  value: null,
  fontFamily: 'Roboto',
  fontSize: 1,
}

export { Select }
