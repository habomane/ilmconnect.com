const API_URL = "http://localhost:8080/user/";

export enum UserEndpoints  {
    getUserWithUserKey= API_URL,
    postUser = API_URL + "register",
    postUserLogin = API_URL + "login",
    putUserWithUserKey = API_URL + "update/",
    putUserPasswordWithUserKey = API_URL + "update/password/",
    deleteUserWithUserKet = API_URL + "delete/"
}