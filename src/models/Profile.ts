
export class Skill {
    skill: string;
    profileKey: string;
  
    constructor(
        profileKey: string,
      skill: string
    ) {
        this.profileKey = profileKey;
      this.skill = skill;
    }
  
  }
  
  

export class ProfileDTO {
    userKey: string;
    displayName: string;
    description: string;
    currentCompany: string;
    profession: string;
    profileType: string;
    linkedinLink: string;
    bookingLink: string;
    profilePictureLink: string;
    portfolioLink: string;
    yearsOfExperience: number;
  
    constructor(
      userKey: string,
      displayName: string,
      profileType: string,
      profession: string,
      currentCompany: string,
      description: string,
      linkedinLink: string,
      profilePictureLink: string,
      portfolioLink: string,
      bookingLink: string,
      yearsOfExperience: number
    ) {
        this.userKey = userKey;
        this.bookingLink = bookingLink;
        this.currentCompany = currentCompany;
        this.description = description;
        this.portfolioLink = portfolioLink;
        this.linkedinLink = linkedinLink;
        this.profilePictureLink = profilePictureLink;
        this.profileType = profileType;
        this.displayName = displayName;
        this.profession = profession;
        this.yearsOfExperience = yearsOfExperience;
    }
}

export class ProfileUpdateDTO {
    displayName?: string;
    description?: string;
    currentCompany?: string;
    profession?: string;
    profileType?: string;
    linkedinLink?: string;
    bookingLink?: string;
    profilePictureLink?: string;
    portfolioLink?: string;
    yearsOfExperience?: number;
  
    constructor(
      displayName: string,
      profileType: string,
      profession: string,
      currentCompany: string,
      description: string,
      linkedinLink: string,
      profilePictureLink: string,
      portfolioLink: string,
      bookingLink: string,
      yearsOfExperience: number
    ) {
        this.bookingLink = bookingLink === "" ? undefined : bookingLink;
        this.currentCompany = currentCompany === "" ? undefined :  currentCompany;
        this.description = description === "" ? undefined : description;
        this.portfolioLink = portfolioLink === "" ? undefined : portfolioLink;
        this.linkedinLink = linkedinLink === "" ? undefined : linkedinLink;
        this.profilePictureLink = profilePictureLink === "" ? undefined : profilePictureLink;
        this.profileType = profileType === "" ? undefined : profileType;
        this.displayName = displayName === "" ? undefined : displayName;
        this.profession = profession === "" ? undefined : profession;
        this.yearsOfExperience = yearsOfExperience === -1 ? undefined : yearsOfExperience;
    }

}


export class Profile {
    userKey: string;
    profileKey: string;
    displayName: string;
    description: string;
    currentCompany: string;
    profession: string;
    profileType: string;
    linkedinLink: string;
    bookingLink: string;
    profilePictureLink: string;
    portfolioLink: string;
    yearsOfExperience: number;
    skills: string[];


    constructor(
        userKey: string,
        profileKey: string,
        displayName: string,
        profileType: string,
        profession: string,
        currentCompany: string,
        description: string,
        linkedinLink: string,
        profilePictureLink: string,
        portfolioLink: string,
        bookingLink: string,
        yearsOfExperience: number,
        skills: string[]
    ) {
        this.userKey = userKey;
        this.profileKey = profileKey;
        this.bookingLink = bookingLink;
        this.currentCompany = currentCompany;
        this.description = description;
        this.portfolioLink = portfolioLink;
        this.linkedinLink = linkedinLink;
        this.profilePictureLink =profilePictureLink;
        this.profileType = profileType;
        this.displayName = displayName;
        this.profession = profession;
        this.yearsOfExperience = yearsOfExperience;
        this.skills = skills
        
        ;
    }

}