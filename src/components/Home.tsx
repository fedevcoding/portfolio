import { homePfpDark, waveDark } from "@/assets";
import Header from "./Header";
import "@/styles/home.scss";

function Home() {
  return (
    <>
      <section
        className="h-screen dark:bg-landing-dark bg-landing-light"
        id="home"
      >
        <Header />
        <div className="flex w-screen justify-center items-center h-home gap-44">
          <div className="flex flex-col items-start h-full justify-center gap-16">
            <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
              FEDERICO
              <br />
              CAVALLINI
            </h1>
            <p>
              Hi, I&apos;m Fedev
              <br />A young full-stack developer from Italy
            </p>

            <button className="bg-secondary-dark text-[28px] text-black py-4 px-12 rounded-lg">
              About Me
            </button>
          </div>
          <img src={homePfpDark.src} alt="Pfp" />
        </div>
      </section>
      <img src={waveDark.src} className="w-screen" />
    </>
  );
}

export default Home;
