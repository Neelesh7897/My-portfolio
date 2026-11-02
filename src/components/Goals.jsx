import { PROFILE } from "../config";

const FOCUS = [
  ["Learn", "l"],
  ["Build", "a"],
  ["Solve", "d"],
  ["Improve", "g"],
];

export default function Goals() {
  return (
    <>
      <section id="focus" aria-label="My approach">
        <ul className="shell band">
          {FOCUS.map(([label, color]) => (
            <li key={label} data-reveal>
              <div className={`tile ${color}`}>{label}</div>
            </li>
          ))}
        </ul>
      </section>

      <section id="goals">
        <div className="shell sec">
          <div className="head" data-reveal>
            <span className="eyebrow">My Goals</span>
            <h2 className="big">What I&apos;m working towards.</h2>
          </div>
          <ul className="goals">
            {PROFILE.goals.map((goal, index) => (
              <li
                className="goal"
                data-reveal
                key={goal}
                style={{ "--d": `${index * 90}ms`, "--y": "36px" }}
              >
                <span className="gn">0{index + 1}</span>
                <p>{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
