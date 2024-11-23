import { Text, TextType } from "@/components/typography/Text";   
import { useState } from "react"
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
    const [type] = useState(TextType.headerOneBlack);

    // temporary parameter until log in features is not implemented
    let isLoggedIn = 0; 

    return (
    <div className="flow-root justify-center bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">

        <div className="float-left">
            <Text type={type}>IlmConnect</Text>
        </div>
        <div className="float-right">

            {isLoggedIn ? 
                (   
                    // TO DO: handle log out when this button is clicked onClick=...
                    <button type="button" className="rounded-full bg-customPurple px-8 py-2.5" > 
                        <Text type={TextType.headerThreeWhite}>Log out</Text> 
                    </button>
                ):(
                    <>
                        <Link to="/login">
                        <button type="button" className="rounded-full bg-customPurple px-7 py-2.5 mr-1 ml-1"> 
                            <Text type={TextType.headerThreeWhite}>Login</Text>
                        </button>
                        </Link>

                        <Link to="/signup">
                        <button type="button" className="rounded-full bg-white border border-black px-7 py-2.5 mr-0 ml-1"> 
                            <Text type={TextType.headerThreeBlack}>Sign up</Text>
                        </button>
                        </Link>
                    </>
                )
            }
        </div>
    </div>
    )
}