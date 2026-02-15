import { useState } from "react";

export default function DetectionExpander({ detection }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="detection-card">
      <div className="header" onClick={() => setOpen(!open)}>
        <h3>{detection.name}</h3>
        <span className={`severity ${detection.severity.toLowerCase()}`}>
          {detection.severity}
        </span>
      </div>

      {open && (
        <div className="content">
          <p><strong>MITRE:</strong> {detection.mitre}</p>
          <p><strong>Why this matters:</strong> {detection.why_it_matters}</p>

          <h4>Signals Used</h4>
          <ul>
            {detection.signals.map(s => <li key={s}>{s}</li>)}
          </ul>

          <h4>Detection Logic</h4>
          <pre>{JSON.stringify(detection.logic, null, 2)}</pre>

          <h4>False Positives</h4>
          <ul>
            {detection.false_positives.map(fp => <li key={fp}>{fp}</li>)}
          </ul>

          <h4>Recommended Response</h4>
          <ul>
            {detection.recommended_response.map(r => <li key={r}>{r}</li>)}
          </ul>

          <h4>Improvements Planned</h4>
          <ul>
            {detection.improvements_next.map(i => <li key={i}>{i}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
