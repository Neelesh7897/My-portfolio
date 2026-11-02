import { useEffect, useState } from "react";
import { NAV_ITEMS, PROFILE } from "../config";

function getLocalTime() {
  const now = new Date();
  return {
    time: new Intl.DateTimeFormat(undefined, {
      hour: "numeric",
      minute: "2-digit",
    }).format(now),
    date: new Intl.DateTimeFormat(undefined, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(now),
  };
}

export default function Header({
  menuOpen,
  onMenuToggle,
  onMenuClose,
  onNavigate,
}) {
  const [localTime, setLocalTime] = useState(getLocalTime);

  useEffect(() => {
    const timer = window.setInterval(() => setLocalTime(getLocalTime()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  const handleNavigate = (event, target) => {
    event.preventDefault();
    onNavigate(target);
  };

  return (
    <>
      <header className="top">
        <div className="shell">
          <a
            className="logo"
            href="#home"
            aria-label={`${PROFILE.name} — home`}
            onClick={(event) => handleNavigate(event, "home")}
          >
            <span className="mk">NS</span>
            <span>{PROFILE.name}</span>
          </a>

          <nav className="pnav" aria-label="Main navigation">
            {NAV_ITEMS.map(([label, target]) => (
              <a
                key={target}
                href={`#${target}`}
                onClick={(event) => handleNavigate(event, target)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hright">
            <div className="clock chip" aria-label="Local time">
              <span className="l">Local time</span>
              <span className="t">{localTime.time}</span>
              <span className="s" aria-hidden="true">
                ·
              </span>
              <span className="d">{localTime.date}</span>
            </div>
            <button
              id="menuBtn"
              className="menu-btn chip"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="nav"
              onClick={onMenuToggle}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <div id="nav" className={menuOpen ? "open" : ""} aria-hidden={!menuOpen}>
        <div className="shell bar">
          <a className="logo" href="#home" onClick={(event) => handleNavigate(event, "home")}>
            <span className="mk">NS</span>
            <span>{PROFILE.name}</span>
          </a>
          <button className="close" type="button" onClick={onMenuClose}>
            Close <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav className="shell" aria-label="Overlay navigation">
          <ul id="navList">
            {NAV_ITEMS.map(([label, target], index) => (
              <li key={target}>
                <button
                  type="button"
                  data-nav={target}
                  style={{ "--i": index }}
                  onClick={() => onNavigate(target)}
                >
                  <span className="ix">0{index + 1}</span>
                  <span className="lab">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shell bot">
          <span>{PROFILE.title}</span>
          <button type="button" onClick={() => onNavigate("contact")}>
            Have an idea? Let’s connect
          </button>
        </div>
      </div>
    </>
  );
}
