/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/display-name */
import React, { useEffect, useRef, forwardRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { Jodit } from 'jodit'
import 'jodit/build/jodit.min.css'
// import { API_BASE } from 'http/api.http.service'
// import { postEditorImageUploadAPI } from 'http/blog.http.service'

// const apiendpoint = `${API_BASE}3103/content/editorImageUpload`

const EditorComponent = forwardRef(({ value, config: passedConfig, onChange, onBlur, tabIndex, name }, ref) => {
  const textArea = useRef(null)

  const config = {
    readonly: false,
    uploader: {
      insertImageAsBase64URI: true
      // url: 'https://xdsoft.net/jodit/connector/index.php?action=fileUpload'
      // url: apiendpoint,
      // headers: {
      //   Authorization:
      //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOGM2YTc5MDRiYWFiMTJiZTQ3MjA5ZiIsImVtYWlsIjoibm8tcmVwbHlAb25vbWV0cmEuY29tIiwiaWF0IjoxNjE2MDkzOTYyLCJleHAiOjE2MTYxODAzNjJ9.yC0LMthMHUFKsVwhx50zCfMwqMJE2Iy4p1LATN5ynsI',
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*'
      // },
      // format: 'json',
      // method: 'POST',
      // data: {},
      // isSuccess: resp => {
      //   return resp
      // },
      // process: resp => {
      //   return {
      //     files: resp.data.files,
      //     path: resp.data.path,
      //     baseurl: resp.data.baseurl,
      //     error: resp.data.error,
      //     message: resp.data.message
      //   }
      // }
      // defaultHandlerSuccess: data => {
      //   let i
      //   const field = 'files'
      //   if (data[field] && data[field].length) {
      //     for (i = 0; i < data[field].length; i += 1) {
      //       this.selection.insertImage(data.baseurl + data[field][i])
      //     }
      //   }
      // }
    },
    ...passedConfig
  }

  useLayoutEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(textArea.current)
      } else {
        // eslint-disable-next-line no-param-reassign
        ref.current = textArea.current
      }
    }
  }, [textArea])

  useEffect(() => {
    const blurHandler = value => {
      onBlur && onBlur(value)
    }

    const changeHandler = value => {
      onChange && onChange(value)
    }

    const element = textArea.current
    textArea.current = Jodit.make(element, config)
    textArea.current.value = value

    textArea.current.events.on('blur', () => blurHandler(textArea.current.value))
    textArea.current.events.on('change', () => changeHandler(textArea.current.value))

    textArea.current.workplace.tabIndex = tabIndex || -1
  }, [])

  useEffect(() => {
    textArea.current.value = value
  }, [value])

  return <textarea ref={textArea} name={name} />
})

EditorComponent.propTypes = {
  value: PropTypes.string,
  tabIndex: PropTypes.number,
  config: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

export default EditorComponent
