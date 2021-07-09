import React from 'react'
import parse from 'html-react-parser'

function HTMLParser(props) {
    const { htmlContent } = props
    if (typeof htmlContent === "string"){
        return parse(htmlContent)
    }
    return null
}

export default HTMLParser