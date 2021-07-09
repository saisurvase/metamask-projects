import React from 'react'

function ValidationTextComponent(props) {
    const { validationMessage } = props

    let validationMessageSection = null
    if (validationMessage) {
        validationMessageSection = (
            <>
                <lable className='validation-label'>{validationMessage}</lable>
                <br />
            </>
        )
    }

    return validationMessageSection
}

export default ValidationTextComponent