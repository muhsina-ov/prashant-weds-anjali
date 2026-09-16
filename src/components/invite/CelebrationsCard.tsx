import { useState } from "react";
import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";

export function CelebrationsCard() {
  const [active, setActive] = useState(0);
  const event = wedding.events[active];
  return (
    <section className="celebrations-editorial" aria-labelledby="celebrations-title">
      <Reveal className="celebrations-editorial__heading">
        <p className="section-kicker">Two celebrations · One sacred day</p>
        <h2 id="celebrations-title">Choose a chapter</h2>
        <p>Celebrate with us on 25 November 2026, from our morning engagement to the evening wedding ceremony.</p>
      </Reveal>
      <div className="celebration-stage">
        <div className="celebration-stage__wash" aria-hidden />
        <div className="celebration-stage__content" key={event.name}>
          <span className="event-number">0{active + 1}</span>
          <p>
            {event.date} · {event.time}
          </p>
          <h3>{event.name}</h3>
          <p className="event-note">{event.note}</p>
          <p className="event-venue">{event.venue}</p>
        </div>
      </div>
      <div className="celebration-selector" role="tablist" aria-label="Wedding celebrations">
        {wedding.events.map((item, index) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
    </section>
  );
}
