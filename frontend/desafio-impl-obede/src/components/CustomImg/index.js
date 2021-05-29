import React, { useState, useEffect } from 'react';
import ProductNotFoundFallback from '../../assets/img/product-not-found.jpg';

export default function CustomImg({ src, alt, ...rest }) {
  const [ imgState , setImgState] = useState({ src, alt, errored: false })

  useEffect(() => {
    setImgState({
      src,
      alt,
      errored: false
    })
  }, [src, alt])

  const handleImageLoadError = e => {
    if (!imgState.errored) {
      setImgState({
        src: ProductNotFoundFallback,
        errored: true
      })
    }
  }

  return (
    <img src={imgState.src} alt={alt} onError={handleImageLoadError} {...rest} />
  )
}