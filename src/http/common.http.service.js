import { GET, POST, FILE_UPLOAD } from './api.http.service'

//#region Api for Admin
// Post
export function postUploadFileAPI(payload) {
    return FILE_UPLOAD('api/api/UploadFile')(payload)
}
export function saveTokenAPI(payload){
    return POST('api/api/saveToken')(payload)
}
export function editNftTokenAPI(payload) {
    
    return POST('api/api/editNftToken')(payload)
}
export function LoginAPI(payload) {
    return POST('api/api/Login')(payload)
}
// Get
export function getUserAPI(payload) {
    return GET('api/api/GetUser')(payload)
}
export function getTokenidAPI(payload) {
    return GET('api/api/getTokenid')(payload)
}
export function getNftTokenListAPI(payload) {
    return GET('api/api/getNftTokenList')(payload)
}
//#endregion Api for Admin

//#region Api for Web
// Get API
export function getNftTokenListAllAPI(payload) {
    return GET('api/api/getNftTokenListAll')(payload)
}
export function getNftDetailsAPI(payload) {
    return GET('api/api/getNftDetails')(payload)
}
export function getIsRegister(payload) {
    return GET('api/api/isRegister')(payload)
}
export function getPriceEthUsd(payload) {
    return GET('https://api.coingecko.com/api/v3/simple/price')(payload)
}
// Post API
export function postUploadProfilePicAPI(payload) {
    return FILE_UPLOAD('api/api/UploadProfilePic')(payload)
}
export function postRegistrationAPI(payload) {
    return POST('api/api/registration')(payload)
}
export function postPlaceBidAPI(payload) {
    return POST('api/api/placeBid')(payload)
}
export function postUpdateProfileAPI(payload) {
    return POST('api/api/updateProfile')(payload)
}

export function postStartAuctionAPI(payload) {
    return POST('api/api/startAuction')(payload)
}
//#endregion Api for web