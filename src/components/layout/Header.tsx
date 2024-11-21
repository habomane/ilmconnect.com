import { Text, TextType } from "@/components/typography/Text";   
import { useState } from "react"

export const Header: React.FC = () => {
    const [type] = useState(TextType.headerOneBlack);
    return (
        <div className="flex justify-center items-center">
            <Text type={type}>IlmConnect</Text>
        </div>
    )
}