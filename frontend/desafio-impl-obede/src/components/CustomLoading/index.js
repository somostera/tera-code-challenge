import React from 'react';
import { LodingWrapper } from './styles'

export default function CustomLoading() {
  return (
    <LodingWrapper >
      <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      {/* <div className="cs-loader"></div> */}
    </LodingWrapper>
  )
}