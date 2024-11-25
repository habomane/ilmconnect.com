import { User, UserDTO, UserLoginDTO } from "@/models";
import { UserEndpoints } from "@/requests";

export const createUserService = async (user: UserDTO): Promise<User | null> => {
    const response = await fetch(UserEndpoints.postUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)});
    if (response.status !== 201) {
      throw new Error(`Cannot create user at this time.`);
    }
    const responseJson = await response.json(); 
    const result = responseJson["response"];
    return new User(result["userKey"], result["firstName"], result["lastName"],
        result["email"], result["timezone"], result["state"], result["country"]
    );
};

export const loginUserService = async (login: UserLoginDTO): Promise<User | null> => {
    try {
      const response = await fetch(UserEndpoints.postUserLogin, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(login)});
      if (response.status !== 200) {
        throw new Error(`Cannot retrieve user at this time.`);
      }
      const responseJson = await response.json(); 
      const result = responseJson["response"];

      if(result["status"] === 404) { throw new Error("User credentials are not correct.")}
      return new User(result["userKey"], result["firstName"], result["lastName"],
          result["email"], result["timezone"], result["state"], result["country"]
      );
    } catch (error) {
      
      console.log({error});
  
      return null;
    }
  };
  