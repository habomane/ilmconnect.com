import { useState } from "react";

export const SearchBar: React.FC = () => {
    const [,setQuery]=useState("")

    const handleChange = (value: string) => {
        setQuery(value);
        // fetch the api with the query and get the filtered the results
        // navigate to another page to show results
    }

    return ( 
                <input className="w-full h-10 border-2 border-slate-300 rounded border p-2"
                    placeholder="Type to search mentors"
                    type="text"
                    onChange={e=>handleChange(e.target.value)}
                /> )   
}