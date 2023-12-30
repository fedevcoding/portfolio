import { discord, email, github, pipe, telegram } from "@/assets";
import { Row } from "./ui/Row";
import { P } from "./ui/P";
import Link from "next/link";

function Footer() {
  return (
    <footer className="dark:bg-primary-dark bg-primary-light">
      <Row className="py-10" direction={"col"} align={"center"} gap={"sm"}>
        <Row align={"center"} gap={"md"}>
          <img src={github.src} alt="Github" className="invert" />
          <img src={discord.src} alt="Discord" className="invert" />
          <img src={email.src} alt="Email" className="invert" />
          <img src={telegram.src} alt="Telegram" />
        </Row>
        <Row align={"center"} gap={"sm"}>
          <P>© {new Date().getFullYear()} fedevcoding</P>
          <img src={pipe.src} alt="pipe" className="invert" />
          <Link href={"mailto:fedevcoding@gmail.com"}>
            <P>fedevcoding@gmail.com</P>
          </Link>
        </Row>
      </Row>
    </footer>
  );
}

export default Footer;
