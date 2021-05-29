import React from 'react'
import { CustomLink, CustomLinkIconWrapper } from './styles'

export default function CustomLinkWrapper({ icon, label, ...rest }) {
  return (
    <CustomLink {...rest}>
      <CustomLinkIconWrapper>{icon}</CustomLinkIconWrapper>
      {label}
    </CustomLink>
  )
}