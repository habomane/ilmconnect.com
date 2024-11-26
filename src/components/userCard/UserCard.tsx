import { useState } from "react";
import { Link } from "react-router-dom";
import { Text,TextType } from "../typography/Text";

interface UserCardProps {
    displayName: string,
    profession:string,
    profilePicture:string,
  }

export const UserCard: React.FC<UserCardProps> = (props) => {
    return (
        <div className="rounded-2xl w-[300px] overflow-hidden bg-white shadow-md"> 
            <img src={props.profilePicture} alt="profile picture" className="w-full" /> 
            <div className="p-4"> 
                <Text type={TextType.headerTwoBlack}>{props.displayName}</Text>
                <Text type={TextType.headerThreeBlack}>{props.profession}</Text>
                <Link to="/" className="text-purple-500 hover:underline">See profile</Link> 
                </div> 
        </div>)
}