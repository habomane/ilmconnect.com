import { addUserKey } from "@/util";
import {  useState } from "react";
import { Text, TextType } from "@/components/typography/Text";
import { Link } from "react-router-dom";
import login from "@/assets/png/login.png";
import { Image, ImageSizing } from "@/components/image/Image";
import { InputText } from "@/components/interactive/Input";
import { Button, ButtonColors } from "@/components/interactive/Button";
import { isValidEmail } from "@/util";
import { UserLoginDTO } from "@/models";
import {  loginUserService } from "@/services/UserService";
import { useNavigate } from "react-router-dom";
import { Loading } from "@/components/image/Loading";

export const Login: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
  // User DTO data
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const loginUser = async () => {
    try {
    
        if (!isValidEmail(email)) {
            alert("Email not valid.")
            return;
        }
        setLoading(true);
        const loggedInUser = new UserLoginDTO(email, password);
        const result = await loginUserService(loggedInUser)
        if(result?.userKey !== undefined && result?.userKey !== null) {
            addUserKey(result.userKey);
            navigate("/profile");
            window.location.reload();
        }
    }
    catch (error) {
        const message = error instanceof Error ? error.message : "Something went wrong.";
        alert(message);
        setLoading(false);
        setEmail("");
        setPassword("");
    } 

  };

  return (
    <main className="flex flex-col justify-between  md:flex-row ">
      <div className="flex flex-col px-10 py-5 m-5 md:w-1/2">
        <div className="flex flex-col items-center mb-12 text-center">
          <Text type={TextType.headerTwoBlack}>Welcome to IlmConnect</Text>
          {
            loading ? (            <div className="flex flex-col items-center gap-y-5 mt-10">
                <Text type={TextType.headerThreeGrey}>Signing in..</Text>
                <Loading/>
            </div>) : (          
          <div className="flex gap-x-3">
          <Text type={TextType.headerThreeGrey}>
          Don’t have an account? 
          </Text>
          <Link to="/signup">
            <Text type={TextType.headerThreePurple}>Sign up</Text>
          </Link>
        </div>)

          }


        </div>
          {
            loading ? (<></>) : (           <div>
                <div className="flex flex-col gap-y-10 mb-8">
                <InputText type="text" label="Email" callBack={setEmail} />
                <InputText type="password" label="Password" callBack={setPassword} />
                </div>
    
                <div className="flex justify-center">
              <Button callBack={loginUser} color={ButtonColors.purple}>
                <Text type={TextType.bodyWhite} tailwindClass="font-bold">
                  Login
                </Text>
              </Button>
            </div>
                </div> )
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
}