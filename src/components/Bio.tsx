const Bio = () => {
  return (
    <section aria-labelledby="about-me">
      <p className="font-secondary text-text-light dark:text-darkmode-text-light mb-3 text-sm uppercase tracking-[0.2em]">
        About Me
      </p>
      <h2 id="about-me" className="mb-4 text-h4">
        Building trustworthy data systems for healthcare
      </h2>
      <p className="text-text dark:text-darkmode-text leading-8">
        I&apos;m Juaquin Sanchez, a data engineer and technical lead based in
        Cambridge, Massachusetts. I focus on healthcare data infrastructure,
        privacy-conscious system design, and the practical use of Palantir
        Foundry to support high-impact decision making. My work spans pipeline
        architecture, governance, and platform tooling that helps teams ship
        reliable systems without sacrificing clarity. I care most about building
        technology that is useful, resilient, and easier for people to
        understand.
      </p>
    </section>
  );
};

export default Bio;
