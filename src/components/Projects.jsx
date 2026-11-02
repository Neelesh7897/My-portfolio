import { useState } from "react";
import { PROFILE } from "../config";

function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);
  const hasLinks = project.github || project.live;

  return (
    <article
      className="pcard"
      data-reveal
      style={{ "--glow": project.glow }}
    >
      <div className="art" aria-hidden="true">
        <span className="art-mark">{project.name}</span>
        {project.image && !imageError && (
          <img src={project.image} alt="" onError={() => setImageError(true)} />
        )}
      </div>
      <div className="meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <div className="body">
        <h3>{project.name}</h3>
        <p className="pd">{project.description}</p>
        <ul className="tags" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <li className="tag light" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
        <div className="pb">
          {project.github && (
            <a
              className="btn light arrow"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="in-btn">
                GitHub <span className="bd" aria-hidden="true">↗</span>
              </span>
            </a>
          )}
          {project.live && (
            <a
              className="btn light arrow"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <span className="in-btn">
                Live Demo <span className="bd" aria-hidden="true">↗</span>
              </span>
            </a>
          )}
          {!hasLinks && (
            <span className="project-placeholder">
              Add GitHub or live link in <code>src/config.js</code>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="shell sec">
        <div className="head center" data-reveal>
          <span className="eyebrow">Featured Projects</span>
          <h2 className="big">Things I&apos;ve built.</h2>
        </div>
        <div className="pgrid">
          {PROFILE.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
