/* eslint-disable no-useless-escape */
import React from 'react'

// Slug input
// const SlugInput = props => {
//   const { onChange, ...restProps } = props

//   const isValid = str => {
//     return /^[a-zA-Z-]*$/.test(str)
//   }

//   const handleOnChange = e => {
//     const res = isValid(e.target.value)
//     if (res) {
//       onChange(e)
//     }
//   }

//   return <Text onChange={e => handleOnChange(e)} {...restProps} />
// }

// // Email input
// const EmailInput = props => {
//   const { onChange, ...restProps } = props

//   const isValid = str => {
//     if ((/^[^\s]/.test(str) && !/\s{1,}/g.test(str)) || str === '') {
//       return !/[~`!#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str)
//     }
//     return false
//   }

//   const handleOnChange = e => {
//     const res = isValid(e.target.value)
//     if (res) {
//       onChange(e)
//     }
//   }

//   return <Text onChange={e => handleOnChange(e)} {...restProps} />
// }

// String input
const StringInput = props => {
  const { onChange, ...restProps } = props

  const isValid = str => {
    return /^[a-zA-Z .]*$/.test(str)
  }

  const handleOnChange = e => {
    const res = isValid(e.target.value)
    if (res) {
      onChange(e)
    }
  }

  return <Text onChange={e => handleOnChange(e)} {...restProps} />
}

// Only Number input
const NumberInput = props => {
  const { onChange, ...restProps } = props

  const isValid = str => {
    return /^(\s*|\d+)$/.test(str)
  }

  const handleOnChange = e => {
    const res = isValid(e.target.value)
    if (res) {
      onChange(e)
    }
  }

  const handleOnKeyDown = e => {
    onChange(e)
  }

  return <SecureInput onKeyDown={e => handleOnKeyDown(e)} onChange={e => handleOnChange(e)} {...restProps} />
}

// Only Decimal Number input
const DecimalNumberInput = props => {
  const { onChange, ...restProps } = props

  const isValid = str => {
    return /^(-?\d{0,6})((\.(\d*)?)?)$/.test(str)
  }

  const handleOnChange = e => {
    const res = isValid(e.target.value)
    if (res) {
      onChange(e)
    }
  }

  return <Text type='text' onChange={e => handleOnChange(e)} {...restProps} />
}

// Only Secure text (alphanumeric value)
const SecureInput = props => {
  const { onChange, ...restProps } = props

  const isValid = str => {
    return !/[~`!@#$%\^&*()+=\-\[\]\\';,./{}|\\":<>\?]/g.test(str)
  }

  const handleOnChange = e => {
    const res = isValid(e.target.value)
    if (res) {
      onChange(e)
    }
  }

  return <Text type='text' onChange={e => handleOnChange(e)} {...restProps} />
}

// Text Input
const Text = props => {
  const { onChange, ...restProps } = props

  const isValid = str => {
    // Validation for String not starting with space,
    // and not more than 1 space in between words
    if ((/^[^\s]/.test(str) && !/\s{2,}/g.test(str)) || str === '') {
      return true
    }
    return false
  }

  const handleOnChange = e => {
    const res = isValid(e.target.value)
    if (res) {
      onChange(e)
    }
  }

  return <TextInput type='text' onChange={e => handleOnChange(e)} {...restProps} />
}

const TextInput = props => {
  const { inputRef, ...restProps } = props
  return <input ref={inputRef} {...restProps} />
}

// TextArea Input
const TextArea = props => {
  const { onChange, ...restProps } = props

  const isValid = str => {
    // Validation for String not starting with space,
    // and not more than 1 space in between words
    if ((/^[^\s]/.test(str) && !/\s{2,}/g.test(str)) || str === '') {
      return true
    }
    return false
  }

  const handleOnChange = e => {
    const res = isValid(e.target.value)
    if (res) {
      onChange(e)
    }
  }

  return <TextAreaInput type='text' onChange={e => handleOnChange(e)} {...restProps} />
}

const TextAreaInput = props => {
  const { inputRef, ...restProps } = props
  return <textarea ref={inputRef} {...restProps} />
}

Text.StringInput = StringInput
Text.NumberInput = NumberInput
Text.SecureInput = SecureInput
// Text.EmailInput = EmailInput
// Text.SlugInput = SlugInput
Text.TextArea = TextArea
Text.DecimalNumberInput = DecimalNumberInput

export default Text
