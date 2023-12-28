import { discord, email, github, pipe, telegram } from "@/assets";

function Footer() {
  return (
    <footer className="bg-primary-dark flex flex-col items-center gap-4 py-6">
      <div className="flex items-center gap-12">
        <img src={github.src} alt="Github" className="invert" />
        <img src={discord.src} alt="Discord" className="invert" />
        <img src={email.src} alt="Email" className="invert" />
        <img src={telegram.src} alt="Telegram" />
      </div>
      <div className="flex items-center gap-4">
        <p>© {new Date().getFullYear()} fedevcoding</p>
        <img src={pipe.src} alt="pipe" className="invert" />
        <p>fedevcoding@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
