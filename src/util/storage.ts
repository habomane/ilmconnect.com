export const addUserKey = (userKey: string) => {
    localStorage.setItem("key", userKey);
}

export const getUserKeyFromStorage = (): string => {
    return JSON.stringify(localStorage.getItem("key"));
}

export const deleteExistingKey = () => {
    localStorage.removeItem("key");
}