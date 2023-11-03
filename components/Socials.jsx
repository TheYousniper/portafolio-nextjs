import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.facebook.com/john.lanza.9465"} target="blank" className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://www.instagram.com/theyousniper/"} target="blank" className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/johalama/"} target="blank" className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
