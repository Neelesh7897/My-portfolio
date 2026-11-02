import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../config";

export default function Activity() {
  const statsRef = useRef(null);
  const [values, setValues] = useState(() => PROFILE.stats.map(() => 0));

  useEffect(() => {
    const updateStats = () => {
      const viewportHeight = window.innerHeight;
      const statElements = statsRef.current?.querySelectorAll(".count-up");
      if (!statElements) return;

      setValues(
        Array.from(statElements, (element) => {
          const rect = element.getBoundingClientRect();
          const currentY = rect.top + rect.height / 2;
          const progress = Math.max(
            0,
            Math.min(1, (viewportHeight - currentY) / (viewportHeight / 2)),
          );
          const target = Number.parseInt(element.dataset.target, 10);
          return Math.round(progress * target);
        }),
      );
    };

    updateStats();
    window.addEventListener("scroll", updateStats, { passive: true });
    window.addEventListener("resize", updateStats, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateStats);
      window.removeEventListener("resize", updateStats);
    };
  }, []);

  return (
    <section id="activity">
      <div className="shell">
        <div className="stats-panel" data-reveal>
          <span className="eyebrow light">
            <span className="dot" aria-hidden="true" />
            Activity
          </span>
          <h2>Consistency creates progress.</h2>
          <ul className="stats-grid" ref={statsRef}>
            {PROFILE.stats.map((stat, index) => (
              <li key={stat.label}>
                <div className="stat-val">
                  <span className="count-up" data-target={stat.value}>
                    {values[index]}
                  </span>
                  {stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
