import { UserCard } from "@/components/userCard/UserCard"
import { SearchBar } from "@/components/interactive/SearchBar"

export const Mentors: React.FC = () => {

    const photoURL = 'https://media.istockphoto.com/id/1424248097/vector/avatar-of-a-black-young-woman-in-a-hijab-smiling-beautiful-muslim-girl-portrait-of-a-happy.jpg?s=1024x1024&w=is&k=20&c=_IFgTuEBNUHaJ4zsn3H1nB9l-ZdQkgmefB2WbRKa8SA=';

    function fetchProductData(){
        return [
            { id: 1, DisplayName: 'Amina', Profession:'Software Engineer', ExperienceLevel : 'Mid-Level', CurrentCompany:'Amazon',ProfileType:'Mentor',Description:'Hi , i am keen to help others achieve their goals',LinkedinLink:'',ProfilePicture:photoURL, },
            { id: 2, DisplayName: 'Rowayda', Profession:'Data Scientist', ExperienceLevel : 'Mid-Level', CurrentCompany:'TechSMZ',ProfileType:'Mentor',Description:'',LinkedinLink:'',ProfilePicture:photoURL, },
            { id: 3, DisplayName: 'Aleena', Profession:'Cloud Engineer', ExperienceLevel : 'Senior', CurrentCompany:'',ProfileType:'Mentor',Description:'Hi , lets connect',LinkedinLink:'',ProfilePicture:photoURL, },
        ];
    }

    let mentorsList = fetchProductData();

    return (
        <main>
            <div className="flex flex-col p-4 gap-4 justify-center">
                <div className="" ><SearchBar /></div>
                <div className="flex flex-wrap gap-4 justify-center"> 
                    <UserCard displayName={mentorsList[0].DisplayName} profession={mentorsList[0].Profession} profilePicture={mentorsList[0].ProfilePicture}/> 
                    <UserCard displayName={mentorsList[1].DisplayName} profession={mentorsList[1].Profession} profilePicture={mentorsList[1].ProfilePicture}/>  
                    <UserCard displayName={mentorsList[2].DisplayName} profession={mentorsList[2].Profession} profilePicture={mentorsList[2].ProfilePicture}/>  
                    <UserCard displayName={mentorsList[0].DisplayName} profession={mentorsList[0].Profession} profilePicture={mentorsList[0].ProfilePicture}/> 
                    <UserCard displayName={mentorsList[1].DisplayName} profession={mentorsList[1].Profession} profilePicture={mentorsList[1].ProfilePicture}/>  
                    <UserCard displayName={mentorsList[2].DisplayName} profession={mentorsList[2].Profession} profilePicture={mentorsList[2].ProfilePicture}/>   
                </div> 
            </div>
        </main>
    )
}