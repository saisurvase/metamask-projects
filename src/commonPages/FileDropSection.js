import React, { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

import Button from './Button'

function FileDropSection(props) {
  const {
    accept = 'image/*',
    name,
    formatText = '(* PDF, JPEG, PNG format)',
    selectedFile,
    isLoading,
    isDisable,
    children
  } = props

  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
      selectedFile({ file: acceptedFiles[0] })
    }
  })

  useEffect(() => () => files.forEach(file => URL.revokeObjectURL(file.preview)), [])


  return (
    isDisable ? (
      <>
        <Button className="btn btn-info" label={name} isLoading={isLoading} isDisable={isDisable} />
        <input type="text" readonly className="form-control-plaintext" value={formatText} />
      </>
    ) : 
      <div {...getRootProps({ className: 'dropzone cursor-pointer' })}>
        <input {...getInputProps()} />
        {children || (
          <>
            <Button className="btn btn-info" label={name} isLoading={isLoading} />
            <input type="text" readonly className="form-control-plaintext" value={formatText} />
          </>
        )}

      </div>
  )
}

export default FileDropSection