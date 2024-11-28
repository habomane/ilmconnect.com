import { LinkItem } from "@/components/interactive/Link";
import { Text, TextType } from "@/components/typography/Text";
import { Icon } from "@/components/image/Icon";

// icons
import user from '@/assets/icons/user.svg';
import mentors from '@/assets/icons/users.svg';

export const Navigation = () => {
  // const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center gap-y-5 bg-white border border-gray-200 px-2 lg:px-6 dark:bg-gray-800 shadow">
      <LinkItem path="/mentors">
      <div className="flex gap-x-4 items-center">
        <Icon src={mentors} alt="The outline of two people standing next to eachother."/>
        <Text type={TextType.headerThreeBlack}>Mentor</Text>
      </div>
      </LinkItem>
      <LinkItem path="/profile">
      <div className="flex gap-x-6 items-center">
        <Icon src={user} alt="The outline of one person."/>
        <Text type={TextType.headerThreeBlack}>Profile</Text>
      </div>
      </LinkItem>
    </nav>
  );
}
