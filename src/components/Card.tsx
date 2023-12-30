import { P } from "./ui/P";
import { Row } from "./ui/Row";

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
    <Row
      direction={"col"}
      className="w-80 h-96 dark:bg-landing-dark bg-landing-light rounded-lg"
      style={{ boxShadow: "4px 9px 24.4px 10px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="rounded-t-lg dark:bg-secondary-dark bg-secondary-light py-4 text-black">
        <img src={mainIcon} alt={name} className="mx-auto w-10 h-10" />
        <P boldness={"semi-bold"} align={"center"} theme={"opposite"}>
          {name}
        </P>
      </div>
      <div className="grid grid-cols-2 flex-1">
        {icons.map((icon, i) => (
          <Row className="pl-6" align={"center"} gap={"xs"} key={i}>
            <img src={icon.icon} alt={icon.name} className="w-9 h-9" />
            <P>{icon.name}</P>
          </Row>
        ))}
      </div>
    </Row>
  );
}

export default Card;
