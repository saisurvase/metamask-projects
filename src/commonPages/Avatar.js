import React from 'react'

import pdf_icon from '../images/pdf_icon.png'

function Avatar({
  uri,
  isBackground = false,
  alt = '',
  title = '',
  style = {},
  className = '',
  cursorType = 'pointer',
  children,
  isViewFile = false
}) {
  const getAvatar = () => {
    if (uri) {
      // for static images
      if (uri.indexOf('/') === 0) {
        return uri
      }

      // for images with full path
      if (uri.indexOf('://') >= 0) {
        return uri
      }

      // for pdf
      if (uri.indexOf('.pdf') >= 0) {
        return pdf_icon
      }

      // for images with just filePath and microservice
    //   return `${API_BASE}${uri}`
      return uri
    }
    // for default image
    return ''
  }

  const finalClassName = `${isBackground ? 'background-image' : 'img-responsive'} ${className}`.trim()

  if (isBackground) {
    return (
      <div
        className={finalClassName}
        style={{
          backgroundImage: `url(${getAvatar()})`,
          backgroundPosition: 'left',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          ...style
        }}>
        {children}
      </div>
    )
  }

  const onClickFile = () => {
    if (uri && isViewFile) {
      const url = `${uri}`
      window.open(url, '_blank')
    }
  }

  const role = cursorType === 'pointer' ? 'button' : 'layout'

  return (
    // <div role={role} tabIndex={uri} onKeyDown={onClickFile} onClick={onClickFile} className={className}>
      <img src={getAvatar()} alt={alt} title={title} style={style} className={finalClassName} role={role} tabIndex={uri} onKeyDown={onClickFile} onClick={onClickFile} />
    // </div>
  )
}

export default Avatar