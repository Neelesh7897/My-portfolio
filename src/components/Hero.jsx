import { useState } from "react";
import { PROFILE } from "../config";

export default function Hero({ onContactOpen }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = PROFILE.profileImage && !imageError;

  const handleFramePointerMove = (event) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const frame = event.currentTarget;
    const bounds = frame.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    frame.classList.add("live");
    frame.style.setProperty("--rx", `${(0.5 - y) * 12}deg`);
    frame.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
  };

  const handleFramePointerLeave = (event) => {
    const frame = event.currentTarget;
    frame.classList.remove("live");
    frame.style.setProperty("--rx", "0deg");
    frame.style.setProperty("--ry", "0deg");
  };

  return (
    <>
      <section id="home" className="hero">
        <div className="wm" aria-hidden="true">
          Nilesh
        </div>
        <div className="hero-grid shell">
          <div className="hero-l" data-reveal>
            <span className="eyebrow box">{PROFILE.availability}</span>
            <h1 className="hero-h">
              Hi, I&apos;m <span className="acc">{PROFILE.name}.</span>
            </h1>
            <p className="role">
              <span className="hl">{PROFILE.title}</span> — {PROFILE.headline}
            </p>
            <p className="desc">{PROFILE.description}</p>

            <div className="ctas">
              <a className="btn dark arrow" href="#projects">
                <span className="in-btn">
                  <span>Explore My Work</span>
                  <span className="bd" aria-hidden="true">
                    →
                  </span>
                </span>
              </a>
              {PROFILE.links.resume ? (
                <a
                  className="btn outline arrow up"
                  href={PROFILE.links.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="in-btn">
                    <span>Download Resume</span>
                    <span className="bd" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </a>
              ) : (
                <button className="btn outline arrow up" type="button" disabled>
                  <span className="in-btn">
                    <span>Add resume link in config.js</span>
                    <span className="bd" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </button>
              )}
              <button
                className="btn light"
                type="button"
                onClick={onContactOpen}
              >
                <span className="in-btn">Let&apos;s Connect</span>
              </button>
            </div>

            <ul className="chips" aria-label="Professional highlights">
              {PROFILE.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>

          <div className="hero-r" data-reveal>
            <div className="stage">
              <div
                className="frame"
                onPointerMove={handleFramePointerMove}
                onPointerLeave={handleFramePointerLeave}
              >
                <div className="glow" />
                <div className={`photo${hasImage ? " has-img" : ""}`}>
                  {hasImage && (
                    <img
                      src={PROFILE.profileImage}
                      alt={`Portrait of ${PROFILE.name}`}
                          onLoad={(event) =>
                            event.currentTarget.closest(".hero-r")?.classList.add("has-profile-image")
                          }
                          onError={() => setImageError(true)}
                        />
                      )}
                  <div className="ph">
                    <b>{PROFILE.name.split(/\s+/).map((part) => part[0]).join("")}</b>
                    <small>
                      Paste a profile image URL into{" "}
                      <code>PROFILE.profileImage</code> in{" "}
                      <code>src/config.js</code>.
                    </small>
                  </div>
                </div>
                <div className="fbadge">
                  <i aria-hidden="true" />
                  {PROFILE.availability}
                </div>
                <div className="fbadge fbadge2">
                  <i aria-hidden="true" />
                  {PROFILE.facts[1][1]} · {PROFILE.facts[2][1]}
                </div>
              </div>
            </div>
            {!hasImage && (
              <p className="photo-hint">
                Image placeholder · update <code>PROFILE.profileImage</code>
              </p>
            )}
          </div>
        </div>

        <div className="status">
          <div className="shell">
            <span>Computer Science Engineering</span>
            <span className="mid">Java · Spring Boot · DSA</span>
            <span>Scroll to explore ↓</span>
          </div>
        </div>
      </section>
    </>
  );
}
