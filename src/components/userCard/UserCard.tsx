import { Link } from "react-router-dom";
import { Text,TextType } from "../typography/Text";

type UserCardProps = {
    displayName: string,
    profession:string,
    profilePicture:string,
    profileKey: string
  }

export const UserCard: React.FC<UserCardProps> = ({ displayName, profession, profilePicture, profileKey }) => {
    let url = profilePicture === null || profilePicture === undefined || profilePicture === "" ? "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/21b8ef2b-093f-472c-b2a5-791abf410891.jpeg" : profilePicture;
    return (
        <div className="rounded-2xl w-[300px] overflow-hidden bg-white shadow-md"> 
            <img src={url} alt="profile picture" className="h-72 w-full" /> 
            <div className="p-4"> 
                <Text type={TextType.headerTwoBlack}>{displayName}</Text>
                <Text type={TextType.headerThreeBlack}>{profession}</Text>
                <Link to={"/profile/" + profileKey} className="text-customPurple hover:underline">See profile</Link> 
                </div> 
        </div>)
}