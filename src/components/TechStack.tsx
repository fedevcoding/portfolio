function TechStack() {
  return (
    <>
      <section
        className="h-screen dark:bg-primary-dark bg-primary-light flex flex-col justify-center items-center gap-24"
        id="tech-stack"
      >
        <div className="text-center">
          <p className="dark:text-secondary-dark text-secondary">Some of my</p>
          <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
            TECH STACK
          </h1>
        </div>
        <div className="flex justify-around items-center gap-10">
          <div className="w-80 h-96 bg-landing-dark rounded-lg"></div>
          <div className="w-80 h-96 bg-landing-dark rounded-lg"></div>
          <div className="w-80 h-96 bg-landing-dark rounded-lg"></div>
        </div>
      </section>
      <hr className="w-screen h-[1px] bg-line-dark" />
    </>
  );
}

export default TechStack;
