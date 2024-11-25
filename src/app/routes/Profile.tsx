import { ProfileIcon } from "@/components/image/Icon";
import { Button, ButtonColors } from "@/components/interactive/Button";
import { InputDropdown, InputText, InputTextarea } from "@/components/interactive/Input";
import { Text, TextType } from "@/components/typography/Text";
import { useState } from "react";

export const Profile: React.FC = () => {
    const [displayName, setDisplayName] = useState<string>();

  return (<main className="">
    <div className="flex flex-col items-center mt-6">
    <Text type={TextType.headerTwoBlack}>Profile</Text> 
    <div className="my-3">
        <ProfileIcon link={"https://media.istockphoto.com/id/1353379051/photo/portrait-of-beautiful-mature-african-woman-looking-at-camera-outdoor.jpg?s=612x612&w=0&k=20&c=87IkLpQc2INpv2sJRrH347-qVrNFmH2QM_da8J46y44="} />
    </div>

<div className="flex flex-col gap-y-6 w-full items-center mt-5 mb-3">
    <InputText type="text" label="Display Name" callBack={setDisplayName} />
    <InputText type="text" label="Profession" callBack={setDisplayName} />
    <InputText type="text" label="Current Company" callBack={setDisplayName} />
    <InputDropdown options={["Mentee", "Mentor", "Both"]} label="Profile Type" callBack={setDisplayName} />
    <InputTextarea label="Description" callBack={setDisplayName}> </InputTextarea>
</div>

<Text type={TextType.headerThreeBlack}>Links</Text>

<div className="flex flex-col gap-y-6 w-full items-center mt-5 mb-3">
    <InputText type="text" label="LinkedIn" callBack={setDisplayName} />
    <InputText type="text" label="Profile Picture" callBack={setDisplayName} />
    <InputText type="text" label="Portfolio" callBack={setDisplayName} />
    <InputText type="text" label="Booking" callBack={setDisplayName} />

</div>

<div className="flex justify-center my-5">
              <Button callBack={() => console.log()} color={ButtonColors.purple}>
                <Text type={TextType.bodyWhite} tailwindClass="font-bold">
                  Save Profile
                </Text>
              </Button>
            </div>
    </div>

  </main>);
};
