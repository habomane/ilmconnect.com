import { useState } from "react";
import { Link } from "react-router-dom";

export const UserCard: React.FC = () => {
    return (
    <div className="flex w-full">
    <div className="rounded-2xl w-[200px] overflow-hidden">
        <img src ="https://picsum.photos/id/16/200/300" alt="profile picture" />
        <h1>Mentor Name</h1>
        <p>Job Title</p>
        <Link to={'/'}>See profile</Link>
    </div>
    </div>)
}