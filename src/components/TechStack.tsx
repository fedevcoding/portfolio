function TechStack() {
  return (
    <>
      <section
        className="h-screen dark:bg-primary-dark bg-primary-light flex flex-col justify-center items-center gap-24"
        id="tech-stack"
      >
        <div className="text-center">
          <p className="dark:text-secondary-dark text-secondary-light">
            Some of my
          </p>
          <h1 className="text-[48px] font-[800] leading-normal tracking-[4.8px]">
            TECH STACK
          </h1>
        </div>
        <div className="flex justify-around items-center gap-10">
          <div className="w-80 h-96 dark:bg-landing-dark bg-landing-light rounded-lg"></div>
          <div className="w-80 h-96 dark:bg-landing-dark bg-landing-light rounded-lg"></div>
          <div className="w-80 h-96 dark:bg-landing-dark bg-landing-light rounded-lg"></div>
        </div>
      </section>
      <div className="w-screen h-[1px] dark:bg-line-dark bg-line-light" />
    </>
  );
}

export default TechStack;
