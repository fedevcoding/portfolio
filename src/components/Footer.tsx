import { linkedin, email, github, pipe, telegram } from "@/assets";
import { Row } from "./ui/Row";
import { P } from "./ui/P";

import Section from "./ui/Section";
import { Img } from "./ui/Img";

function Footer() {
  return (
    <footer>
      <Section theme="secondary">
        <Row className="py-10" direction={"col"} align={"center"} gap={"sm"}>
          <Row align={"center"} gap={"md"}>
            <a href={"https://github.com/fedevcoding"} target="_blank">
              <Img
                src={github}
                alt="Github"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertDark
              />
            </a>
            <a
              href={"https://www.linkedin.com/in/federico-cavallini-7641b424b/"}
              target="_blank"
            >
              <Img
                src={linkedin}
                alt="Linkedin"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertDark
              />
            </a>
            <a href={"mailto:fedevcoding@gmail.com"} target="_blank">
              <Img
                src={email}
                alt="Email"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertDark
              />
            </a>
            <a href={"https://t.me/cavallinifederico"} target="_blank">
              <Img
                src={telegram}
                alt="Telegram"
                size={"sm-2"}
                fit={"contain"}
                aspect="square"
                invertLight
              />
            </a>
          </Row>
          <Row align={"center"} gap={"sm"}>
            <P>© {new Date().getFullYear()} fedevcoding</P>
            <Img
              src={pipe}
              alt="pipe"
              size={"sm-2"}
              fit={"contain"}
              aspect="square"
              invertDark
            />
            <a href={"mailto:fedevcoding@gmail.com"}>
              <P>fedevcoding@gmail.com</P>
            </a>
          </Row>
        </Row>
      </Section>
    </footer>
  );
}

export default Footer;
