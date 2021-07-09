export const validation = formInfo => {
    const { imageOrVideo, nftName, startingPrice, reservePrice, startTime, protectionTime, endTime, step, additionalPrice, physcicalArtworkIsAvailable = undefined, status: formStatus, description, shortDescription } = formInfo || {}

    const formValidationMessage = {
        fileValidationMessage: undefined,
        nameValidationMessage: undefined,
        startingPriceValidationMessage: undefined,
        reservePriceValidationMessage: undefined,
        aucationStartTimeValidationMessage: undefined,
        protectionTimeValidationMessage: undefined,
        physicalArtworkValidationMessage: undefined,
        additionalPriceValidationMessage: undefined,
        aucationEndTimeValidationMessage: undefined,
        statusValidationMessage: undefined,
        stepValidationMessage: undefined,
        shortDescriptionValidationMessage: undefined,
        descriptionValidationMessage: undefined
    }

    let status = true
    
    if (!imageOrVideo) {
        formValidationMessage.fileValidationMessage = 'File required'
        status = false
    } else {
        formValidationMessage.fileValidationMessage = undefined
    }

    if (!nftName) {
        formValidationMessage.nameValidationMessage = 'Name required'
        status = false
    } else {
        formValidationMessage.nameValidationMessage = undefined
    }
    
    if (!startingPrice) {
        formValidationMessage.startingPriceValidationMessage = 'Starting price required'
        status = false
    } else {
        formValidationMessage.startingPriceValidationMessage = undefined
    }

    if (!startTime) {
        formValidationMessage.aucationStartTimeValidationMessage = 'Aucation start time required'
        status = false
    } else {
        formValidationMessage.aucationStartTimeValidationMessage = undefined
    }

    if (!reservePrice) {
        formValidationMessage.reservePriceValidationMessage = 'Reserve price required'
        status = false
    } else {
        formValidationMessage.reservePriceValidationMessage = undefined
    }

    if (!protectionTime) {
        formValidationMessage.protectionTimeValidationMessage = 'Protection time required'
        status = false
    } else {
        formValidationMessage.protectionTimeValidationMessage = undefined
    }

    if (physcicalArtworkIsAvailable === undefined) {
        formValidationMessage.physicalArtworkValidationMessage = 'Physical artwork required'
        status = false
    } else {
        formValidationMessage.physicalArtworkValidationMessage = undefined
    }

    if (physcicalArtworkIsAvailable && !additionalPrice) {
        formValidationMessage.additionalPriceValidationMessage = 'Additional price required'
        status = false
    } else {
        formValidationMessage.additionalPriceValidationMessage = undefined
    }

    if (!endTime) {
        formValidationMessage.aucationEndTimeValidationMessage = 'Aucation end time required'
        status = false
    } else {
        formValidationMessage.aucationEndTimeValidationMessage = undefined
    }

    if (!step) {
        formValidationMessage.stepValidationMessage = 'Step required'
        status = false
    } else {
        formValidationMessage.stepValidationMessage = undefined
    }

    if (!formStatus) {
        formValidationMessage.statusValidationMessage = 'Status requried'
        status = false
    } else {
        formValidationMessage.statusValidationMessage = undefined
    }

    if (!shortDescription) {
        formValidationMessage.shortDescriptionValidationMessage = 'Short description requried'
        status = false
    } else {
        formValidationMessage.shortDescriptionValidationMessage = undefined
    }

    if (!description) {
        formValidationMessage.descriptionValidationMessage = 'Description requried'
        status = false
    } else {
        formValidationMessage.descriptionValidationMessage = undefined
    }

    return { status, formValidationMessage }
}