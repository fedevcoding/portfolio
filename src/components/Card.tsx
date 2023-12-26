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
    <div
      className="w-80 h-96 dark:bg-landing-dark bg-landing-light rounded-lg flex flex-col"
      style={{ boxShadow: "4px 9px 24.4px 10px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="text-center rounded-t-lg dark:bg-secondary-dark bg-secondary-light py-4 text-black">
        <img src={mainIcon} alt={name} className="mx-auto w-10 h-10" />
        <h3 className="font-semibold">{name}</h3>
      </div>
      <div className="grid grid-cols-2 flex-1">
        {icons.map((icon, i) => (
          <div className="flex items-center gap-3 pl-6" key={i}>
            <img src={icon.icon} alt={icon.name} className="w-9 h-9" />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
