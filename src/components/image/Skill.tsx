import { Text, TextType } from "../typography/Text";
import { Icon } from "./Icon";
import star from '@/assets/png/star.png'
type SkillProps = {
    skill: string;
}

export const Skill: React.FC<SkillProps> = ( {skill} ) => {
    return (
        <div className="flex gap-x-3">
            <Icon src={star} alt="Golden star."/>
            <Text type={TextType.bodyGrey}>{skill}</Text>
        </div>
    )
}