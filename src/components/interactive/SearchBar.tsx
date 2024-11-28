
interface SearchBarProps {
    value: any;
    setQuery : (query:string)=>void;
  }

export const SearchBar: React.FC<SearchBarProps> = (props) => {
    

    const handleChange = (value: string) => {
        props.setQuery(value)
        // fetch the api with the query and get the filtered the results
        // navigate to another page to show results
    }

    return ( 
                <input className="w-full h-10 border-2 border-slate-300 rounded p-2"
                    placeholder="Type to search"
                    value={props.value}
                    type="text"
                    onChange={e=>handleChange(e.target.value)}
                /> )   
}