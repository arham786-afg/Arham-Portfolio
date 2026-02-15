import { useState } from "react";

export default function MetricsToggle({ metrics }) {
  const [mode, setMode] = useState("manual");

  const data = metrics[mode];

  return (
    <div className="metrics">
      <h3>Investigation Workflow Comparison</h3>

      <div className="toggle">
        <button onClick={() => setMode("manual")}>Manual</button>
        <button onClick={() => setMode("ai_assisted")}>AI-Assisted</button>
      </div>

      <ul>
        {data.steps.map(step => (
          <li key={step}>{step}</li>
        ))}
      </ul>

      <strong>MTTR: {data.mttr_minutes} minutes</strong>
    </div>
  );
}
