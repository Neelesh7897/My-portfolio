import { NAV_ITEMS, PROFILE } from "../config";

const SOCIALS = [
  ["GitHub", PROFILE.links.github],
  ["LinkedIn", PROFILE.links.linkedin],
  ["Instagram", PROFILE.links.instagram],
  ["Email", PROFILE.links.email ? `mailto:${PROFILE.links.email}` : ""],
];

export default function Footer({ onContactOpen, onNavigate }) {
  const resumeLink = PROFILE.links.resume;

  return (
    <footer id="contact">
      <div className="footer-top">
        <div className="shell">
          <div className="cta">
            <div>
              <span className="eyebrow light">Let&apos;s connect</span>
              <h2>Have an interesting idea? Let&apos;s build something together.</h2>
              <p>
                I&apos;m always interested in connecting with developers,
                learning from new experiences and exploring exciting
                opportunities.
              </p>
            </div>
            <div className="cb">
              <button
                className="btn white arrow up"
                type="button"
                onClick={onContactOpen}
              >
                <span className="in-btn">
                  Contact Me <span className="bd" aria-hidden="true">↗</span>
                </span>
              </button>
              {resumeLink ? (
                <a
                  className="btn ghost-d arrow"
                  href={resumeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="in-btn">
                    Download Resume <span className="bd" aria-hidden="true">↗</span>
                  </span>
                </a>
              ) : (
                <span className="resume-note">
                  Add your resume URL in <code>src/config.js</code>
                </span>
              )}
            </div>
          </div>

          <ul className="contacts" aria-label="Social links">
            {SOCIALS.map(([label, href]) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  >
                    <span aria-hidden="true">↗</span>
                    <b>{label}</b>
                  </a>
                ) : (
                  <span className="contact-empty">
                    {label} · Add link in <code>src/config.js</code>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div className="footer-brand">
          <div className="fb">
            <span className="mk">NS</span>
            <span>{PROFILE.name}</span>
          </div>
          <p className="tg">Designed and built with curiosity.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {NAV_ITEMS.filter(([, target]) => target !== "contact").map(
            ([label, target]) => (
              <a
                className="al"
                href={`#${target}`}
                key={target}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(target);
                }}
              >
                {label}
              </a>
            ),
          )}
          <button className="al" type="button" onClick={onContactOpen}>
            Contact
          </button>
        </nav>
      </div>
      <div className="fwm" aria-hidden="true">
        Nilesh
      </div>
    </footer>
  );
}
