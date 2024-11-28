export const addUserKey = (userKey: string) => {
    localStorage.setItem("key", userKey);
}

export const getUserKeyFromStorage = (): string => {
    return JSON.stringify(localStorage.getItem("key")).replace('"', '').replace('"', '');
}

export const deleteExistingKey = () => {
    localStorage.removeItem("key");
}