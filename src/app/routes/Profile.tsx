import { ProfileIcon } from "@/components/image/Icon";
import { Skill as SkillComponent } from "@/components/image/Skill";
import { Text, TextType } from "@/components/typography/Text";
import { Profile } from "@/models";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileByProfileKeyService } from "@/services";
import { Loading } from "@/components/image/Loading";

export const UserProfile: React.FC = () => {
  const {id} = useParams();
    const [profile, setProfile] = useState<Profile>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
      const retrieveProfileInformation = async () => {
        setLoading(true);
        if(id!== undefined) {
          const profile = await getProfileByProfileKeyService(id);
          if(profile !== null) {
            setProfile(profile);
            setLoading(false);

          }
        }


      }
      retrieveProfileInformation();
    },[])
  return (<main className="m-6">
    {
      loading ? (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      ): (
<div className="flex flex-col ">
    <div className="my-3 flex flex-col items-center gap-3">
        <ProfileIcon link={profile?.profilePictureLink} />
        <Text type={TextType.headerOneBlack}>{profile?.displayName}</Text>
    </div>


<div className="flex flex-col gap-y-6 mt-5 mb-3 p-6 shadow-lg bg-slate-100">
    <Text type={TextType.bodyBlack}><span className="font-bold">Profession: </span> {profile?.profession}</Text>
    <Text type={TextType.bodyBlack}><span className="font-bold">Current Company: </span> {profile?.currentCompany}</Text>
    <Text type={TextType.bodyBlack}><span className="font-bold">Years of Experience: </span> {profile?.yearsOfExperience}</Text>
    <Text type={TextType.bodyBlack}><span className="font-bold">Description: </span><br></br> {profile?.description}</Text>
</div>


<div className="flex flex-col gap-y-3 mt-5 mb-3 p-6 shadow-lg">
<Text type={TextType.headerThreeBlack}><span className="font-bold">Links</span></Text>
<Text type={TextType.bodyBlack}><span className="font-bold">LinkedIn: </span> <a href={profile?.linkedinLink}>{profile?.linkedinLink}</a> </Text>
<Text type={TextType.bodyBlack}><span className="font-bold">Portfolio: </span> <a href={profile?.portfolioLink}>{profile?.portfolioLink}</a> </Text>
<Text type={TextType.bodyBlack}><span className="font-bold">Booking: </span> <a href={profile?.bookingLink}>{profile?.bookingLink}</a> </Text>

</div>

<div className="flex flex-col gap-y-6 mt-5 mb-3 p-6 shadow-lg bg-slate-100">
<Text type={TextType.headerThreeBlack}><span className="font-bold">Skills</span></Text>
<div className="flex flex-wrap gap-y-3 gap-x-3">
{
  profile !== undefined ? (  profile.skills.map((item, key) => {
    return <SkillComponent skill={item} key={key}/>
  })) : (<></>)

}
</div>

</div>

</div>
      )
    }
    


  </main>);
};
