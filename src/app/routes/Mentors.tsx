import { UserCard } from "@/components/userCard/UserCard"
import { SearchBar } from "@/components/interactive/SearchBar"
import { Key } from "react";

export const Mentors: React.FC = () => {

    const photoURL = 'https://media.istockphoto.com/id/1424248097/vector/avatar-of-a-black-young-woman-in-a-hijab-smiling-beautiful-muslim-girl-portrait-of-a-happy.jpg?s=1024x1024&w=is&k=20&c=_IFgTuEBNUHaJ4zsn3H1nB9l-ZdQkgmefB2WbRKa8SA=';


    //mock data
    const fetchMentorsList = () => { 
        return [ 
            { 
                id: 1, 
                DisplayName: 'Amina', 
                Profession: 'Software Engineer', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: 'Amazon', 
                ProfileType: 'Mentor', 
                Description: 'Hi, I am keen to help others achieve their goals', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT+00:00",
                Country : "United Kingdom",
                State : "",
            }, 
            { 
                id: 2, 
                DisplayName: 'Rowayda', 
                Profession: 'Data Scientist', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: 'TechSMZ', 
                ProfileType: 'Mentor', 
                Description: '', 
                LinkedinLink: '', 
                ProfilePicture: photoURL ,
                TimeZone : "GMT+01:00",
                Country : "Netherlands",
                State : "",
            }, 
            { 
                id: 3, 
                DisplayName: 'Aleena', 
                Profession: 'Cloud Engineer', 
                ExperienceLevel: 'Senior', 
                CurrentCompany: '', 
                ProfileType: 'Mentor', 
                Description: 'Hi, let’s connect', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT+00:00",
                Country : "United Kingdom",
                State : "",
            }, 
            { 
                id: 4, 
                DisplayName: 'Noor', 
                Profession: 'Software Engineer', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: 'Amazon', 
                ProfileType: 'Mentor', 
                Description: 'Hi, I am keen to help others achieve their goals', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT-08:00",
                Country : "USA",
                State : "California",
            }, 
            { 
                id: 5, 
                DisplayName: 'Hanan', 
                Profession: 'Data Scientist', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: 'TechSMZ', 
                ProfileType: 'Mentor', 
                Description: '', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT+11:00",
                Country : "Australia",
                State : "Sydney", 
            }, 
            { 
                id: 6, 
                DisplayName: 'Iman', 
                Profession: 'Cloud Engineer', 
                ExperienceLevel: 'Senior', 
                CurrentCompany: '', 
                ProfileType: 'Mentor', 
                Description: 'Hi, let’s connect', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT-01:00",
                Country : "Iceland",
                State : "",
            },
            { 
                id: 7, 
                DisplayName: 'Mariam', 
                Profession: 'UX Engineer', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: 'Amazon', 
                ProfileType: 'Mentor', 
                Description: 'Hi, I am keen to help others achieve their goals', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT+03:00",
                Country : "Djibouti",
                State : "",
            }, 
            { 
                id: 8, 
                DisplayName: 'Lubna', 
                Profession: 'AI Engineer', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: 'TechSMZ', 
                ProfileType: 'Mentor', 
                Description: '', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT+05:00",
                Country : "Pakistan",
                State : "",
            }, 
            { 
                id: 9, 
                DisplayName: 'Aisha', 
                Profession: 'Cloud Engineer', 
                ExperienceLevel: 'Mid-Level', 
                CurrentCompany: '', 
                ProfileType: 'Mentor', 
                Description: 'Hi, let’s connect', 
                LinkedinLink: '', 
                ProfilePicture: photoURL,
                TimeZone : "GMT-06:00",
                Country : "USA",
                State : "Missouri", 
            },  
        ]; 
    };
    

    let mentorsList = fetchMentorsList();

    return (
        <main>
            <div className="flex flex-col p-4 gap-4 justify-center">
                <div className="" ><SearchBar /></div>
                <div className="flex flex-wrap gap-4 justify-center">
                {mentorsList.map((mentor: { id: Key | null | undefined; DisplayName: string; Profession: string; ProfilePicture: string; }) => 
                    ( <UserCard 
                        key={mentor.id} 
                        displayName={mentor.DisplayName} 
                        profession={mentor.Profession} 
                        profilePicture={mentor.ProfilePicture} /> 
                    ))}
                    {/* <UserCard displayName={mentorsList[0].DisplayName} profession={mentorsList[0].Profession} profilePicture={mentorsList[0].ProfilePicture}/> 
                    <UserCard displayName={mentorsList[1].DisplayName} profession={mentorsList[1].Profession} profilePicture={mentorsList[1].ProfilePicture}/>  
                    <UserCard displayName={mentorsList[2].DisplayName} profession={mentorsList[2].Profession} profilePicture={mentorsList[2].ProfilePicture}/>  
                    <UserCard displayName={mentorsList[0].DisplayName} profession={mentorsList[0].Profession} profilePicture={mentorsList[0].ProfilePicture}/> 
                    <UserCard displayName={mentorsList[1].DisplayName} profession={mentorsList[1].Profession} profilePicture={mentorsList[1].ProfilePicture}/>  
                    <UserCard displayName={mentorsList[2].DisplayName} profession={mentorsList[2].Profession} profilePicture={mentorsList[2].ProfilePicture}/>    */}
                </div> 
            </div>
        </main>
    )
}