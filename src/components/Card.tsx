import { Img } from "./ui/Img";
import { P } from "./ui/P";
import { Row } from "./ui/Row";
import Section from "./ui/Section";

type Props = {
 name: string;
 mainIcon: string;
 icons: {
  name: string;
  icon: string;
 }[];
};

function Card({ name, mainIcon, icons }: Props) {
 return (
  <Section
   theme="primary"
   className="w-80 h-[28rem] rounded-lg"
   style={{ boxShadow: "rgb(0 0 0 / 45%) 1px 2px 12px 4px" }}
  >
   <Row direction={"col"} fullHeight>
    <div className="rounded-t-lg dark:bg-secondary-dark bg-secondary-light py-4">
     <Img
      src={mainIcon}
      alt={name}
      className="mx-auto"
      size={"md"}
      aspect={"square"}
      fit={"contain"}
     />
     <P
      boldness={"semi-bold"}
      align={"center"}
      theme={"opposite"}
      className="text-black"
     >
      {name}
     </P>
    </div>
    <div className="grid grid-cols-2 flex-1">
     {icons.map((icon, i) => (
      <Row className="pl-6" align={"center"} gap={"xs"} key={i}>
       <Img
        src={icon.icon}
        alt={icon.name}
        aspect={"square"}
        fit={"contain"}
        size={"sm-2"}
       />
       <P>{icon.name}</P>
      </Row>
     ))}
    </div>
   </Row>
  </Section>
 );
}

export default Card;
