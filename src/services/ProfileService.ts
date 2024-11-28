import { Profile, ProfileDTO, ProfileUpdateDTO } from "@/models";
import { ProfileEndpoints } from "@/requests";

export const createProfileService = async (profile: ProfileDTO): Promise<void> => {
    const response = await fetch(ProfileEndpoints.postProfile, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile)});
    if (response.status !== 201) {
      throw new Error(`Cannot create profile at this time.`);
    }
};


export const getMentorProfilesService = async (): Promise<Profile[] | null> => {
    const response = await fetch(ProfileEndpoints.getMentorProfiles);
    if (response.status !== 200) {
      return null;
    }
    const responseJson = await response.json(); 
    const result = responseJson["response"];
    const profiles: Profile[] =[];
    for(const item of result) {
        profiles.push(new Profile(item["userKey"], item["profileKey"], item["displayName"],
            item["profileType"], item["profession"], item["currentCompany"], item["description"],
            item["linkedinLink"], item["profilePictureLink"], item["portfolioLink"], item["bookingLink"],
            item["yearsOfExperience"], item["skills"]

        ));
    }
    return profiles;
};

export const getProfileByUserKeyService = async (userKey: string): Promise<Profile | null> => {
    const response = await fetch(ProfileEndpoints.getProfileByUserKey + userKey);
    if (response.status !== 200) {
      return null;
    }
    const responseJson = await response.json(); 
    const result = responseJson["response"];
    return new Profile(result["userKey"], result["profileKey"], result["displayName"],
        result["profileType"], result["profession"], result["currentCompany"], result["description"],
            result["linkedinLink"], result["profilePictureLink"], result["portfolioLink"], result["bookingLink"],
            result["yearsOfExperience"], result["skills"]

    );
};

export const getProfileByProfileKeyService = async (profileKey: string): Promise<Profile | null> => {
    const response = await fetch(ProfileEndpoints.getProfileByProfileKey + profileKey);
    if (response.status !== 200) {
      return null;
    }
    const responseJson = await response.json(); 
    const result = responseJson["response"];
    return new Profile(result["userKey"], result["profileKey"], result["displayName"],
        result["profileType"], result["profession"], result["currentCompany"], result["description"],
            result["linkedinLink"], result["profilePictureLink"], result["portfolioLink"], result["bookingLink"],
            result["yearsOfExperience"], result["skills"]

    );
};


export const updateProfileService = async (profileKey: string, profile: ProfileUpdateDTO): Promise<void> => {
    const response = await fetch(ProfileEndpoints.putProfile + profileKey, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile)});
    if (response.status !== 201) {
      throw new Error(`Cannot update profile at this time.`);
    }
};


export const deleteProfileService = async (profileKey: string): Promise<void> => {
    const response = await fetch(ProfileEndpoints.deleteProfileByProfileKey + profileKey, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }});
    if (response.status !== 200) {
      throw new Error(`Cannot delete profile at this time.`);
    }
};