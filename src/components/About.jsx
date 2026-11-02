import { PROFILE } from "../config";

export default function About() {
  return (
    <section id="about">
      <div className="shell sec">
        <div className="about">
          <div className="globe" data-reveal aria-hidden="true">
            <svg className="bg" viewBox="0 0 320 320" fill="none">
              <defs>
                <radialGradient id="globe-sphere" cx="0" cy="0" r="1" gradientTransform="translate(112 95) rotate(54) scale(190)">
                  <stop stopColor="#554032" />
                  <stop offset=".46" stopColor="#171513" />
                  <stop offset="1" stopColor="#080808" />
                </radialGradient>
                <radialGradient id="globe-specular" cx="0" cy="0" r="1" gradientTransform="translate(113 100) rotate(90) scale(68)">
                  <stop stopColor="#fff" stopOpacity=".17" />
                  <stop offset="1" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="globe-core" cx="0" cy="0" r="1" gradientTransform="translate(148 146) rotate(90) scale(55)">
                  <stop stopColor="#f0ac70" stopOpacity=".58" />
                  <stop offset="1" stopColor="#cf8047" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="globe-node" x1="136" y1="134" x2="184" y2="184" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f0ac70" />
                  <stop offset="1" stopColor="#97501f" />
                </linearGradient>
                <clipPath id="globe-clip">
                  <circle cx="160" cy="160" r="106" />
                </clipPath>
              </defs>
              <circle className="globe-halo" cx="160" cy="160" r="110" />
              <circle className="globe-shell" cx="160" cy="160" r="106" fill="url(#globe-sphere)" />
              <g clipPath="url(#globe-clip)">
                <ellipse className="globe-latitude" cx="160" cy="160" rx="48" ry="106" />
                <ellipse className="globe-latitude globe-latitude-wide" cx="160" cy="160" rx="106" ry="40" />
                <ellipse className="globe-latitude globe-meridian" cx="160" cy="160" rx="78" ry="106" />
                <circle className="globe-specular" cx="113" cy="102" r="68" fill="url(#globe-specular)" />
                <path className="globe-continent" d="m75 137 16-22 25-8 12 11 22 3 8 13-16 13-8 18-21-5-14 8-20-10-12-21Zm111 36 17-11 20 8 10 18-13 18-20-3-14-14v-16Z" />
              </g>
              <ellipse className="globe-orbit globe-orbit-one" cx="160" cy="160" rx="133" ry="59" />
              <ellipse className="globe-orbit globe-orbit-two" cx="160" cy="160" rx="129" ry="48" />
              <g className="globe-satellite globe-satellite-one">
                <circle cx="293" cy="160" r="7" />
                <circle className="satellite-halo" cx="293" cy="160" r="13" />
              </g>
              <g className="globe-satellite globe-satellite-two">
                <circle cx="289" cy="160" r="4" />
              </g>
              <circle className="globe-core-halo" cx="160" cy="160" r="48" fill="url(#globe-core)" />
              <circle className="globe-core-ring" cx="160" cy="160" r="35" fill="url(#globe-node)" />
              <circle className="globe-core-inner" cx="160" cy="160" r="28" />
              <text className="globe-monogram" x="160" y="166" textAnchor="middle">
                NS
              </text>
            </svg>
            <span className="globe-badge globe-badge-java">JAVA <i>01</i></span>
            <span className="globe-badge globe-badge-api">REST API <i>02</i></span>
            <span className="globe-badge globe-badge-sql">SQL <i>03</i></span>
            <div className="meta">
              <span className="ico" aria-hidden="true">
                ✳
              </span>
              <span>Curious by nature. Building with purpose.</span>
            </div>
          </div>

          <div className="about-r" data-reveal>
            <span className="eyebrow">A little about me</span>
            <h2 className="statement">{PROFILE.aboutLead}</h2>
            <p>{PROFILE.about}</p>
            <ul className="info">
              {PROFILE.facts.map(([label, value]) => (
                <li key={label}>
                  <small>{label}</small>
                  <b>{value}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
