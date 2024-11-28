const API_URL = "https://ilmconnect-ilmapi.onrender.com/user/";

export enum UserEndpoints  {
    getUserWithUserKey= API_URL,
    postUser = API_URL + "register",
    postUserLogin = API_URL + "login",
    putUserWithUserKey = API_URL + "update/",
    putUserPasswordWithUserKey = API_URL + "update/password/",
    deleteUserWithUserKet = API_URL + "delete/"
}