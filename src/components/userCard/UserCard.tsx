import { useState } from "react";
import { Link } from "react-router-dom";
import { Text,TextType } from "../typography/Text";

export const UserCard: React.FC = () => {
    return (
        <div className="rounded-2xl w-[300px] overflow-hidden bg-white shadow-md"> 
            <img src="https://picsum.photos/id/16/200/200" alt="profile picture" className="w-full" /> 
            <div className="p-4"> 
                <Text type={TextType.headerTwoBlack}>Mentor Name</Text>
                <Text type={TextType.headerThreeBlack}>Job Title</Text>
                <Link to="/" className="text-purple-500 hover:underline">See profile</Link> 
                </div> 
        </div>)
}