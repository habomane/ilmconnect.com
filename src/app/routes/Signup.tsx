import { Text, TextType } from "@/components/typography/Text";
import { Link } from "react-router-dom";
import login from "@/assets/png/login.png";
import { Image, ImageSizing } from "@/components/image/Image";
import { InputDropdown, InputText } from "@/components/interactive/Input";
import { Button, ButtonColors } from "@/components/interactive/Button";
import { gmtOptions, countryList, isValidEmail } from "@/util";
import { UserDTO } from "@/models";
import { useState } from "react";
import { createUserService } from "@/services/UserService";
import { useNavigate } from "react-router-dom";
import { Loading } from "@/components/image/Loading";

export const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
  // User DTO data
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [province, setProvince] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [gmt, setGMT] = useState<string>("");

  const createUser = async () => {
    try {
        if (!isValidEmail(email)) {
            alert("Email not valid.")
            return;
        }
        const newUser = new UserDTO(firstName, lastName, email, password, gmt, province, country);
        setLoading(true);
        await createUserService(newUser).then((result) => {
            if(result?.userKey !== null) {
                alert("Success. Please log in.");
                navigate("/login");
            }
        })
    }
    catch(error) {
        setLoading(false);
        alert("Something went wrong. Please try again later.")
    }


  };

  return (
    <main className="flex flex-col justify-between  md:flex-row ">
      <div className="flex flex-col px-10 py-5 m-5 ">
        <div className="flex flex-col items-center mb-12 text-center">
          <Text type={TextType.headerTwoBlack}>Welcome to IlmConnect</Text>
          {
            loading ? (            <div className="flex flex-col items-center gap-y-5 mt-10">
                <Text type={TextType.headerThreeGrey}>Creating account..</Text>
                <Loading/>
            </div>) : (          
                <div className="flex gap-x-3">
                <Text type={TextType.headerThreeGrey}>
                  Already have an account?
                </Text>
                <Link to="/login">
                  <Text type={TextType.headerThreePurple}>Login</Text>
                </Link>
              </div>)

          }

        </div>
    {
        loading ? (
            <></>
        ): (  
            <div>
            <div className="flex flex-col gap-y-10 mb-8">
            <InputText type="text" label="First Name" callBack={setFirstName} />
            <InputText type="text" label="Last Name" callBack={setLastName} />
            <InputText type="text" label="Email" callBack={setEmail} />
            <InputText type="password" label="Password" callBack={setPassword} />
            <InputDropdown
              label="Country"
              options={countryList}
              callBack={setCountry}
            />

            <InputText type="text" label="State/Province" callBack={setProvince} />
            <InputDropdown
              label="GMT"
              options={gmtOptions}
              callBack={setGMT}
            />
            </div>

            <div className="flex justify-center">
          <Button callBack={createUser} color={ButtonColors.purple}>
            <Text type={TextType.bodyWhite} tailwindClass="font-bold">
              Sign up
            </Text>
          </Button>
        </div>
            </div> 
            ) 
        }


      </div>

      <div className="hidden md:block md:bg-slate-100 ">
        <Image
          src={login}
          alt="Women holding a checkbox with a check."
          size={ImageSizing.LARGE}
        />
      </div>
    </main>
  );
};
