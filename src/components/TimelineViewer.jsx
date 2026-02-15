import { useState } from "react";

export default function TimelineViewer({ timeline }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="timeline-viewer">
      <h3>Investigation Timeline</h3>
      <p><strong>Host:</strong> {timeline.host}</p>

      <ul className="timeline">
        {timeline.events.map((event, index) => (
          <li
            key={index}
            className={selectedEvent === index ? "active" : ""}
            onClick={() => setSelectedEvent(index)}
          >
            <span className="time">{event.timestamp}</span>
            <span className="event">{event.type}</span>
          </li>
        ))}
      </ul>

      {selectedEvent !== null && (
        <div className="event-details">
          <h4>Event Details</h4>
          <p><strong>Process:</strong> {timeline.events[selectedEvent].process}</p>
          <p>{timeline.events[selectedEvent].details}</p>

          <h5>Possible Investigation Pivots</h5>
          <ul>
            {timeline.events[selectedEvent].pivot.map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
