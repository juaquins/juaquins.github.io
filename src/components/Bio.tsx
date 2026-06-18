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
        I'm a data engineer and systems builder based in Cambridge, Massachusetts. Professionally, I work on complex data problems, privacy-conscious infrastructure, and developing solutions that help make science faster.
        Outside of work, I'm usually climbing, sailing, hosting gatherings, experimenting with self-hosted technology, or disappearing into a new project that seemed like a good idea at the time. I'm fascinated by communities, local-first tools, intentional living, and the intersection between the digital and physical worlds.
        I enjoy building things that are useful, learning things that are difficult, and bringing interesting people together. This site is a collection of projects, notes, experiments, and ongoing adventures.
      </p>
    </section>
  );
};

export default Bio;
