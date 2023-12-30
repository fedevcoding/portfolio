import { discord, email, github, pipe, telegram } from "@/assets";
import { Row } from "./ui/Row";
import { P } from "./ui/P";
import Link from "next/link";
import Section from "./ui/Section";
import { Img } from "./ui/Img";

function Footer() {
  return (
    <footer>
      <Section theme="secondary">
        <Row className="py-10" direction={"col"} align={"center"} gap={"sm"}>
          <Row align={"center"} gap={"md"}>
            <Link href={"https://github.com/fedevcoding"} target="_blank">
              <Img
                src={github.src}
                alt="Github"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertDark
              />
            </Link>
            <Link
              href={"https://discordapp.com/users/646076973025722388"}
              target="_blank"
            >
              <Img
                src={discord.src}
                alt="Discord"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertDark
              />
            </Link>
            <Link href={"mailto:fedevcoding@gmail.com"} target="_blank">
              <Img
                src={email.src}
                alt="Email"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertDark
              />
            </Link>
            <Link href={"https://t.me/cavallinifederico"} target="_blank">
              <Img
                src={telegram.src}
                alt="Telegram"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertLight
              />
            </Link>
          </Row>
          <Row align={"center"} gap={"sm"}>
            <P>© {new Date().getFullYear()} fedevcoding</P>
            <Img
              src={pipe.src}
              alt="pipe"
              size={"sm-2"}
              fit={"contain"}
              aspect="square"
              invertDark
            />
            <Link href={"mailto:fedevcoding@gmail.com"}>
              <P>fedevcoding@gmail.com</P>
            </Link>
          </Row>
        </Row>
      </Section>
    </footer>
  );
}

export default Footer;
