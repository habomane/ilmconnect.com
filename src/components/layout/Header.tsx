import { Text, TextType } from "@/components/typography/Text";
import { LinkButton } from "../interactive/Link";
import { ButtonColors } from "../interactive/Button";
import { useState, useEffect } from "react";
import { getUserKeyFromStorage, deleteExistingKey } from "@/util";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const resetAccount = () => {
    deleteExistingKey();
    navigate("/");
    window.location.reload();

  }
  useEffect(() => {
    const userKey = getUserKeyFromStorage();
    if (userKey !== "null") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-between bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
      <Text type={TextType.headerOneBlack}>IlmConnect</Text>
      <div className="">
        {isLoggedIn ? (
          // TO DO: handle log out when this button is clicked onClick=...
          <LinkButton to="/" color={ButtonColors.purple} callBack={resetAccount}>
            <Text type={TextType.bodyWhite}>Log out</Text>
          </LinkButton>
        ) : (
          <div className="flex flex-col items-center gap-x-3 md:flex-row">
            <LinkButton to="/login" color={ButtonColors.purple}>
              <Text type={TextType.bodyWhite} tailwindClass="font-bold">
                Login
              </Text>
            </LinkButton>

            <LinkButton to="/signup" color={ButtonColors.white}>
              <Text type={TextType.bodyBlack} tailwindClass="font-bold">
                Sign up
              </Text>
            </LinkButton>
          </div>
        )}
      </div>
    </div>
  );
};
