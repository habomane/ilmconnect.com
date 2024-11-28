const API_URL = "https://ilmconnect-ilmapi.onrender.com/profile/";

export enum ProfileEndpoints  {
    getProfileByUserKey= API_URL + "user/",
    getProfileByProfileKey= API_URL,
    postProfile = API_URL + "create",
    getMentorProfiles = API_URL + "mentors",
    deleteProfileByProfileKey = API_URL + "delete/",
    putProfile = API_URL + "update/"
}