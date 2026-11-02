import { useEffect, useRef, useState } from "react";
import { PROFILE } from "../config";

export default function ContactModal({ isOpen, onClose }) {
  const [message, setMessage] = useState("");
  const nameInput = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessage("");
      nameInput.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!PROFILE.links.email) {
      setMessage("Add your email address in src/config.js to enable this form.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const sender = String(formData.get("email") || "").trim();
    const details = String(formData.get("message") || "").trim();
    const body = [
      `From: ${name}`,
      `Email: ${sender}`,
      "",
      details,
    ].join("\n");

    window.location.href = `mailto:${PROFILE.links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div
      id="modal"
      className="open"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="mp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <button className="mx" type="button" aria-label="Close dialog" onClick={onClose}>
          ×
        </button>
        <div className="hd">
          <span className="ey">Get in touch</span>
          <h2 id="contact-title">Let&apos;s start a conversation.</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="f">
            <span>Your name</span>
            <input ref={nameInput} name="name" autoComplete="name" required />
          </label>
          <label className="f">
            <span>Your email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder={PROFILE.emailPlaceholder}
              required
            />
          </label>
          <label className="f">
            <span>What is this about?</span>
            <input name="subject" required />
          </label>
          <label className="f">
            <span>Message</span>
            <textarea name="message" rows="4" required />
          </label>
          <div className="mrow">
            <small>
              Opens your email app
              {message && <span className="form-message">{message}</span>}
            </small>
            <button className="btn dark arrow up" type="submit">
              <span className="in-btn">
                Send Message <span className="bd" aria-hidden="true">↗</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
