import { Image, ImageSizing } from "@/components/image/Image";


import { Text, TextType } from "@/components/typography/Text";
import { ButtonColors } from "@/components/interactive/Button";
import { LinkButton } from "@/components/interactive/Link";

// Images
import homeIcon from '@/assets/png/headImg1.png';
import teamwork from '@/assets/png/teamwork.png';
import appleLogo from '@/assets/png/appleLogo.png';
import googleLogo from '@/assets/png/googleLogo.png';
import jpMorganLogo from '@/assets/png/jpMorganLogo.png';
import paypalLogo from '@/assets/png/paypalLogo.png';
import teslaLogo from '@/assets/png/teslaLogo.png';
import wiseLogo from '@/assets/png/wiseLogo.png';

function Home() {
  const iconImages = [appleLogo, googleLogo, jpMorganLogo, paypalLogo, teslaLogo, wiseLogo];
  return (
    <main className="flex flex-col ">
      <section className=" p-20 flex flex-col text-center md:text-left md:flex-row items-center bg-slate-100">
      <div className="flex flex-col gap-y-3 justify-center md:justify-start">
        <Text type={TextType.headerOneBlack}>Empowering Muslim Women to Lead and Succeed</Text>
        <Text type={TextType.headerThreeGrey}>Connect with like-minded women today</Text>
        <div className="flex flex-row gap-x-5 items-center mt-3 justify-center md:justify-start">
          <LinkButton to="/signup" color={ButtonColors.purple}>
          <Text type={TextType.bodyWhite}><span className="font-semibold">Sign up</span></Text></LinkButton>
          <LinkButton to="/login" color={ButtonColors.white}>
          <Text type={TextType.bodyBlack}><span className="font-semibold">Login</span></Text></LinkButton>
        </div>
      </div>
      <Image src={homeIcon} size={ImageSizing.MEDIUM}/>
      </section>

      <section className="flex flex-col gap-y-5 p-20 items-center text-center">
        <Text type={TextType.headerTwoGrey}>We have mentors working at </Text>

        <div className="flex flex-col md:flex-row gap-10 my-10">
          {
            iconImages.map((item, key) => {
              return <Image size={ImageSizing.SMALL} key={key} src={item}/>
            })
          }
        </div>
      </section>

      <section className="flex flex-col gap-y-5 p-20 items-center text-center bg-slate-100">
        <Text type={TextType.headerTwoBlack}>Our Mission </Text>
        <Text type={TextType.bodyGrey}>Our mission is to empower and connect Muslim female professionals by fostering a community that inspires growth, collaboration, and opportunity. We aim to break barriers and create a platform where women can showcase their talents, share their stories, and build meaningful networks in an environment rooted in respect, inclusion, and shared values. Together, we cultivate a space where ambition meets purpose, enabling every member to thrive personally and professionally while contributing to the broader success of the community. </Text>
        <Image src={teamwork} size={ImageSizing.MEDIUM}/>
      </section>

      <section className="p-5 text-center ">
        <Text type={TextType.smallBodyBlack}> <div className="font-bold">IlmConnect © 2024</div>  </Text>
      </section>

    </main>
  );
}

export default Home;
