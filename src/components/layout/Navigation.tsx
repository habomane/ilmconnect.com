import { LinkItem } from "@/components/interactive/Link";
import { Text, TextType } from "@/components/typography/Text";
import { Icon } from "@/components/image/Icon";

// icons
import user from '@/assets/icons/user.svg';
import mentors from '@/assets/icons/users.svg';
import calender from '@/assets/icons/calendar.svg';
import message from '@/assets/icons/message-square-text.svg';

export const Navigation = () => {
  // const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center gap-y-5 bg-white border border-gray-200 px-2 lg:px-4 dark:bg-gray-800 shadow">
      <LinkItem path="/mentor">
      <div className="flex gap-x-4 items-center">
        <Icon src={mentors} alt="The outline of two people standing next to eachother."/>
        <Text type={TextType.headerThreeBlack}>Mentor</Text>
      </div>
      </LinkItem>
      <LinkItem path="/messages">
      <div className="flex gap-x-4 items-center">
        <Icon src={message} alt="A message blurb."/>
        <Text type={TextType.headerThreeBlack}>Message</Text>
      </div>
      </LinkItem>
      <LinkItem path="/schedule">
      <div className="flex gap-x-4 items-center">
        <Icon src={calender} alt="A black and white calender."/>
        <Text type={TextType.headerThreeBlack}>Schedule</Text>
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
