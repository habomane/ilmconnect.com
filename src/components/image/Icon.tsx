import { ImageProps } from "@/components/image/Image";


export const Icon: React.FC<ImageProps> = ({ src, alt = "No caption provided" }) => {
    return <img className="h-4 w-4 md:h-6 md:w-6" src={src} alt={alt} />
}

type ProfileIconProps = {
    link?: string;
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({link}) => {
    let url = link === "" || link === undefined || link === null ? "https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/21b8ef2b-093f-472c-b2a5-791abf410891.jpeg" : link;
    return (
        <div className="border-2 border-slate-200 rounded-full h-48 w-48">
           <img 
            onClick={() => alert("Users can modify their profile pictures by navigating to 'Profile Picture' under links.")}
            className="w-full h-full object-cover rounded-full cursor-pointer" src={url} alt="User profile picture."/>
        </div>
    )
}

