export class User {
    userKey: string;
    firstName: string;
    lastName: string;
    email: string;
    timezone: string;
    state: string;
    country: string;

    constructor(userKey: string, firstName: string, lastName: string, email: string,
        timezone: string, state: string, country: string
    ) 
    {
        this.userKey = userKey;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.timezone = timezone;
        this.state = state;
        this.country = country;
    }

}

export class UserDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    timezone: string;
    state: string;
    country: string;

    constructor(firstName: string, lastName: string, email: string,
        password: string, timezone: string, state: string, country: string
    ) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.timezone = timezone;
        this.state = state;
        this.country = country;
    }

}

export class UserLoginDTO {
    email: string;
    password: string;

    constructor (email: string, password: string) 
    {
        this.email = email;
        this.password = password;
    }

}