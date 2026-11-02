import { PROFILE } from "../config";

export default function Journey() {
  return (
    <section id="journey">
      <div className="shell sec">
        <div className="head center" data-reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="big">My development journey.</h2>
        </div>
        <div className="tl">
          <div className="bar" aria-hidden="true" />
          <ol className="tl-list">
            {PROFILE.journey.map((step, index) => (
              <li
                data-reveal
                key={step}
                style={{ "--d": `${index * 70}ms` }}
              >
                <span className="no">0{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
