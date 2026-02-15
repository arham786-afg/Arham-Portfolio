import { useState } from "react";

export default function IncidentDecisionViewer({ incident }) {
  const steps = [
    "Indicator",
    "Context",
    "MITRE",
    "Actions",
    "Impact"
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="incident-viewer">
      <div className="header">
        <h2>{incident.decision}</h2>
        <span className="confidence">{incident.confidence}</span>
      </div>

      <div className="steps">
        {steps.map((step, index) => (
          <button
            key={step}
            className={index === activeStep ? "active" : ""}
            onClick={() => setActiveStep(index)}
          >
            {step}
          </button>
        ))}
      </div>

      <div className="panel">
        {activeStep === 0 && (
          <>
            <h3>Primary Indicator</h3>
            <p><strong>Process:</strong> {incident.primary_indicator.process}</p>
            <details>
              <summary>Command Line</summary>
              <code>{incident.primary_indicator.command}</code>
            </details>
            <ul>
              {incident.primary_indicator.reasons.map(r => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </>
        )}

        {activeStep === 1 && (
          <>
            <h3>Historical Context</h3>
            <p>No prior activity observed on this host.</p>
          </>
        )}

        {activeStep === 2 && (
          <>
            <h3>MITRE ATT&CK</h3>
            {incident.mitre_techniques.map(t => (
              <p key={t}>{t}</p>
            ))}
          </>
        )}

        {activeStep === 3 && (
          <>
            <h3>Recommended Actions</h3>
            <ul>
              {incident.recommended_actions.map(a => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </>
        )}

        {activeStep === 4 && (
          <>
            <h3>Investigation Impact</h3>
            <p>Manual MTTR: {incident.manual_mttr_minutes} minutes</p>
            <p>AI MTTR: {incident.ai_mttr_minutes} minutes</p>
            <strong>{incident.mttr_reduction_percent}% reduction</strong>
          </>
        )}
      </div>
    </div>
  );
}
