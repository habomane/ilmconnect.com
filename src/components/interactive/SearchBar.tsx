import { useState } from "react";

export const SearchBar: React.FC = () => {
    const [,setQuery]=useState("")

    const handleChange = (value: string) => {
        setQuery(value);
        // fetch the api with the query and get the filtered the results
        // navigate to another page to show results
    }

    return ( 
            <div className="search_bar_input">
                <input 
                    placeholder="Type to search mentors"
                    type="text"
                    onChange={e=>handleChange(e.target.value)}
                />     
            </div>)
}