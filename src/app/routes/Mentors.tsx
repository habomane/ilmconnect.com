import { UserCard } from "@/components/userCard/UserCard"
import { SearchBar } from "@/components/interactive/SearchBar"

export const Mentors: React.FC = () => {
    return (
        <main>
            <div className="flex flex-col p-4 gap-4 justify-center">
                <div className="" ><SearchBar /></div>
                <div className="flex flex-wrap gap-4 justify-center"> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard /> 
                    <UserCard />
                    <UserCard /> 
                </div> 
            </div>
        </main>
    )
}