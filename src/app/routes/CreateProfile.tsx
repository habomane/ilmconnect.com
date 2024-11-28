import { ProfileIcon } from "@/components/image/Icon";
import { Skill } from "@/components/image/Skill";
import { Button, ButtonColors } from "@/components/interactive/Button";
import {
  InputDropdown,
  InputText,
  InputTextarea,
} from "@/components/interactive/Input";
import { Text, TextType } from "@/components/typography/Text";
import { ProfileDTO, ProfileUpdateDTO } from "@/models";
import { createProfileService, createSkillService, deleteSkillService, getProfileByProfileKeyService, getProfileByUserKeyService, updateProfileService } from "@/services";
import { getUserKeyFromStorage } from "@/util";
import { useEffect, useState } from "react";
import { Skill as SkillModel } from '@/models'

export const CreateProfile: React.FC = () => {
  const [accountExists, setAccountExist] = useState<boolean>(false);
  const [profileKey, setProfileKey] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [profession, setProfession] = useState<string>("");
  const [currentCompany, setCurrentCompany] = useState<string>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<number>(0);
  const [profileType, setProfileType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [linkedinList, setLinkedinList] = useState<string>("");
  const [profilePictureLink, setProfilePictureLink] = useState<string>("https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/21b8ef2b-093f-472c-b2a5-791abf410891.jpeg");
  const [portfolioLink, setPortfolioLink] = useState<string>("");
  const [bookingLink, setBookingLink] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([]);

  // 1. Check if an account exists for user
  // 2. If account exists populate data
  // 3. If account doesn't exist use createProfile method, otherwise updateProfile method

  const deleteSkill = (skill: string) => {
    const index = skills.findIndex((x) => x === skill);
    delete skills[index];
    const newSkills = [];
    let lastIndex: number = 0;
    for(let i = 0; i < skills.length; i++) {
      if(skills[i] === undefined) { continue; }
      newSkills[lastIndex] = skills[i];
      lastIndex++;
    }
    setSkills(newSkills);
  }

  const addSkill = () => {
    // Check if included in get request for profile key --> if it is then dont send a request
    // If not included --> set request
    skills.push(skill);
    setSkill("");
  }


  const createProfile = async () => {
    const userKey = getUserKeyFromStorage();
    const newProfile = new ProfileDTO(userKey, displayName, profileType, profession,
      currentCompany, description, linkedinList, profilePictureLink, portfolioLink, bookingLink,
      yearsOfExperience
    )

    await createProfileService(newProfile);

    const profile = await getProfileByUserKeyService(userKey);

    if(profile !== null && profile !== undefined) {
      for(const item of skills) {
        await createSkillService(new SkillModel(profile.profileKey, item));
      }
    }

  }


  const updateProfile = async () => {
      const profileDTO = new ProfileUpdateDTO(displayName, profileType, profession, currentCompany, 
        description, linkedinList, profilePictureLink, portfolioLink, bookingLink, yearsOfExperience
      )
       await updateProfileService(profileKey, profileDTO);

       const profile = await getProfileByProfileKeyService(profileKey);

       if(profile !== null && profile !== undefined) {
        const skillsToAdd: string[] =[];
        // check which of the skills do exist
        for(let i = 0; i < skills.length; i++) {
          if(profile.skills.findIndex((item) => skills[i] === item) === -1) {
            skillsToAdd.push(skills[i]);
          }
        }
        for(const item of skillsToAdd) {
          await createSkillService(new SkillModel(profileKey, item));
        }

        const skillsToDelete: string[] =[];
        // check which of the skills do exist
        console.log("bbefore deleeting skills")
        for(let i = 0; i < profile.skills.length; i++) {
          console.log(skills.findIndex((item) => profile.skills[i] === item))
          if(skills.findIndex((item) => profile.skills[i] === item) === -1) {
            skillsToDelete.push(profile.skills[i]);
          }
        }
        for(const item of skillsToDelete) {
          await deleteSkillService(profile.profileKey, item);
        }


       }


  }

  const processProfileChanges = () => {
    try {
      if(accountExists) {
        updateProfile();
        alert("Profile updated.")
      }
      else {
        createProfile();
        alert("Profile created");
      }
    }
    catch(error) {
      alert(error instanceof Error ? error.message : "Something went wrong. Please try again later.")
    }
  }

  useEffect(() => {
    const userKey = getUserKeyFromStorage();

    const retrieveProfileIfExists = async () => {
      const profile = await getProfileByUserKeyService(userKey);
      if(profile !== null) {
        setAccountExist(true);
        setProfileKey(profile.profileKey);
        setBookingLink(profile.bookingLink);
        setCurrentCompany(profile.currentCompany);
        setDescription(profile.description);
        setDisplayName(profile.displayName);
        setLinkedinList(profile.linkedinLink);
        setPortfolioLink(profile.portfolioLink);
        setProfession(profile.profession);
        setProfilePictureLink(profile.profilePictureLink);
        setProfileType(profile.profileType);
        setSkills(profile.skills)
      }
    }

    retrieveProfileIfExists();

  },[])

  return (
    <main className="px-10 md:px-0">
      <div className="flex flex-col items-center mt-6">
        <Text type={TextType.headerTwoBlack}>Profile</Text>
        <div className="my-3">
          <ProfileIcon
            link={profilePictureLink
            }
          />
        </div>

        <div className="flex flex-col gap-y-6 w-full items-center mt-5 mb-3">
          <InputText
            type="text"
            label="Display Name"
            callBack={setDisplayName}
            value={displayName}
          />
          <InputText type="text" label="Profession" callBack={setProfession} value={profession}/>
          <InputText
            type="text"
            label="Current Company"
            callBack={setCurrentCompany}
            value={currentCompany}
          />
          <InputText type="number" label="Years Of Experience" callBack={setYearsOfExperience} value={yearsOfExperience}/>
          <InputDropdown
            options={["Mentee", "Mentor", "Both"]}
            label="Profile Type"
            callBack={setProfileType}
            value={profileType}
          />
          <InputTextarea label="Description" callBack={setDescription} value={description}>
            {" "}
          </InputTextarea>
        </div>

        <Text type={TextType.headerThreeBlack}>Links</Text>

        <div className="flex flex-col gap-y-6 w-full items-center mt-5 mb-3">
          <InputText value={linkedinList} type="text" label="LinkedIn" callBack={setLinkedinList} />
          <InputText
          value={profilePictureLink}
            type="text"
            label="Profile Picture"
            callBack={setProfilePictureLink}
          />
          <InputText
          value={portfolioLink}
            type="text"
            label="Portfolio"
            callBack={setPortfolioLink}
          />
          <InputText type="text" label="Booking" value={bookingLink} callBack={setBookingLink} />
        </div>

        <Text type={TextType.headerThreeBlack}>Skills</Text>

        <div className="flex flex-col gap-y-6 w-full items-center mt-5 mb-3">
          <InputText type="text" label="Skill" value={skill} callBack={setSkill} />
          <Button callBack={addSkill} color={ButtonColors.black}>
            <Text type={TextType.bodyWhite} tailwindClass="font-bold">
              Add
            </Text>
          </Button>

          <div className="flex flex-col gap-y-5 w-full justify-center items-center">
            {skills?.map((item, key) => {
              return (
                <div key={key}  className="flex gap-x-10 items-center justify-between md:w-1/3 ">
              <Skill skill={item} />
              <Button callBack={() => deleteSkill(item)} color={ButtonColors.red}>
            <Text type={TextType.bodyWhite}>
              Delete
            </Text>
          </Button>
                </div>
);
            })}
          </div>
        </div>

        <div className="flex justify-center my-12">
          <Button callBack={processProfileChanges} color={ButtonColors.purple}>
            <Text type={TextType.bodyWhite}>
             { accountExists ? "Save account": "Create account"}
            </Text>
          </Button>
        </div>
      </div>
    </main>
  );
};
