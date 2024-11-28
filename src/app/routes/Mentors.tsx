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
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const retrieveMentors = async () => {
            setLoading(true);
            const mentors = await getMentorProfilesService();
            if(mentors !== null) {
                setLoading(false);
                setMentorsList(mentors);
            }
        }   

        retrieveMentors();
    }, [])

    return (
        <main>
            <div className="flex flex-col p-4 gap-4 items-center">
                <div className="w-full md:w-2/3" ><SearchBar setQuery={setQuery}/></div>
                {
                    loading ? (
                        <div className="flex justify-center py-20">
                        <Loading />
                        </div>

                    ): (
                        <div className="flex flex-wrap gap-4 justify-center">
                        {
                            mentorsList.length === 0 ? (
                                <div className="flex justify-center items-center py-20">
                                    <Text type={TextType.headerTwoGrey}>No Mentors Found</Text>
                                </div>
                            ) : (
                                mentorsList.map((mentor, key) => {
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