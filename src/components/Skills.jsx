import { PROFILE } from "../config";

export default function Skills() {
  return (
    <section id="skills">
      <div className="shell sec">
        <div className="head" data-reveal>
          <span className="eyebrow">Tech Stack</span>
          <h2 className="big">Technologies I work with.</h2>
        </div>
        <div className="skills">
          {PROFILE.skills.map((group, index) => (
            <article
              className={`sk ${group.dark ? "dark" : "light"}`}
              data-reveal
              key={group.title}
              style={{ "--d": `${index * 90}ms`, "--y": "40px" }}
            >
              <div className="sh">
                <h3>{group.title}</h3>
                <span className="n">0{index + 1}</span>
              </div>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
