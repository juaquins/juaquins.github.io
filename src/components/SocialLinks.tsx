const links = [
  { label: "GitHub", href: "https://github.com/juaquins" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/juaquins/" },
];

const SocialLinks = () => {
  return (
    <section aria-labelledby="social-links">
      <p className="font-secondary text-text-light dark:text-darkmode-text-light mb-3 text-sm uppercase tracking-[0.2em]">
        Links
      </p>
      <h2 id="social-links" className="mb-4 text-h4">
        Connect
      </h2>
      <nav aria-label="Social links">
        <ul className="flex flex-wrap items-center gap-2 text-base">
          {links.map((link, index) => (
            <li key={link.href} className="flex items-center">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary dark:hover:text-darkmode-primary underline-offset-4 hover:underline focus-visible:ring-primary rounded-sm focus-visible:ring-2 focus-visible:outline-none"
              >
                {link.label}
              </a>
              {index < links.length - 1 && <span className="px-2">·</span>}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default SocialLinks;
