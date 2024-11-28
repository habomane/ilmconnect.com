import { UserCard } from "@/components/userCard/UserCard"
import { SearchBar } from "@/components/interactive/SearchBar"
import { useEffect, useState } from "react";
import { Profile } from "@/models";
import { Text, TextType } from "@/components/typography/Text";
import { getMentorProfilesService } from "@/services";
import { Loading } from "@/components/image/Loading";

export const Mentors: React.FC = () => {
    const [query,setQuery]=useState("")
    const [mentorsList, setMentorsList] = useState<Profile[]>([]);
    const [currentMentorList, setCurrentMentorList] = useState<Profile[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [mappedSkillsToUsers, setMappedSkillsToUsers] = useState<Map<string, Profile[]>>(new Map());
    const [mappedProfessionsToUsers, setMappedProfessionsToUsers] = useState<Map<string, Profile[]>>(new Map());
    const [mappedCurrentComapnyToUsers, setMappedCurrentCompanyToUsers] = useState<Map<string, Profile[]>>(new Map());

    const mapSkills = () => {
        const map = new Map<string, Profile[]>();
        for(const item of mentorsList) {
            for(const skill of item.skills) {
                const lcSkill = skill.toLowerCase();
                if(map.get(lcSkill) !== undefined) {
                    let mappedSkill = map.get(lcSkill) ?? [];
                        const newArr = [...mappedSkill, item];
                    map.set(lcSkill, newArr);
                } else {
                    map.set(lcSkill, [item]);
                }


            }
        }
        setMappedSkillsToUsers(map);
    }


    const mapProfession = () => {
        const map = new Map<string, Profile[]>();
        for(const item of mentorsList) {
            const totalWordsProfession = item.profession.split(' ');
            for(const profession of totalWordsProfession) {
                const lcProfession = profession.toLowerCase();
                if(map.get(lcProfession) !== undefined) {
                    let mappedProfession = map.get(lcProfession) ?? [];
                    const newArr = [...mappedProfession, item];
                    map.set(lcProfession, newArr);
                } else {
                    map.set(lcProfession, [item]);
                }


            }
        }
        setMappedProfessionsToUsers(map);
    }

    const mapCurrentCompany = () => {
        const map = new Map<string, Profile[]>();
        for(const item of mentorsList) {
            const totalWordsCurrentCompany = item.currentCompany.split(' ');
            for(const company of totalWordsCurrentCompany) {
                const lcCompany = company.toLowerCase();
                if(map.get(lcCompany) !== undefined) {
                    let mappedCompany = map.get(lcCompany) ?? [];
                    const newArr = [...mappedCompany, item];
                    map.set(lcCompany, newArr);
                } else {
                    map.set(lcCompany, [item]);
                }

            }
        }
        setMappedCurrentCompanyToUsers(map);
    }

    useEffect(() => {
        const retrieveMentors = async () => {
            setLoading(true);
            const mentors = await getMentorProfilesService();
            if(mentors !== null) {
                setLoading(false);
                setCurrentMentorList(mentors);
                setMentorsList(mentors);

            }
        }   

        retrieveMentors();
    }, [])

    useEffect(() => {
        mapSkills();
        mapProfession();
        mapCurrentCompany();
    }, [mentorsList])

    useEffect(() => {
        if(query === "") { setCurrentMentorList(mentorsList); return;}
        console.log(mappedProfessionsToUsers)
        const skills = mappedSkillsToUsers.get(query) ?? [];
        const professions = mappedProfessionsToUsers.get(query) ?? [];
        const company = mappedCurrentComapnyToUsers.get(query) ?? [];

        const totalReturned = [...new Set([...skills, ...professions, ...company])];
        setCurrentMentorList(totalReturned);

    

    }, [query])

    return (
        <main>
            <div className="flex flex-col p-4 gap-4 items-center">
                <div className="w-full md:w-2/3" ><SearchBar value={query} setQuery={setQuery}/></div>
                {
                    loading ? (
                        <div className="flex justify-center py-20">
                        <Loading />
                        </div>

                    ): (
                        <div className="flex flex-wrap gap-4 justify-center">
                        {
                            currentMentorList.length === 0 ? (
                                <div className="flex justify-center items-center py-20">
                                    <Text type={TextType.headerTwoGrey}>No Mentors Found</Text>
                                </div>
                            ) : (
                                currentMentorList.map((mentor, key) => {
                                    return <UserCard 
                                    key={key} 
                                    displayName={mentor.displayName} 
                                    profession={mentor.profession} 
                                    profilePicture={mentor.profilePictureLink}
                                    profileKey={mentor.profileKey} /> 
                                })
                            )
                        }
                           </div> 
                    )
                }
               
            </div>
        </main>
    )
}