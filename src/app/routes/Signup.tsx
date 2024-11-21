import { Text, TextType } from "@/components/typography/Text"
import { Link } from "react-router-dom"

export const Signup: React.FC = () => {
    return (
        <main className="flex mt-5">

            <div className="flex flex-col items-center w-1/2">
                <Text type={TextType.headerTwoBlack}>Welcome to IlmConnect</Text>
                <div className="flex gap-x-3">
                <Text type={TextType.headerThreeGrey}>Already have an account?</Text>
                <Link to="/login"><Text type={TextType.headerThreePurple}>Login</Text></Link>
                </div>

            </div>

            <div className=""></div>
        </main>
    )
}