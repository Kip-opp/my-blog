export function SystemDiagram({ ariaLabel }: { ariaLabel?: string }) {
  return (
    <svg
      viewBox="0 0 520 220"
      width="100%"
      height="auto"
      role="img"
      aria-label={ariaLabel ?? "LLM system overview"}
      className="system-diagram"
    >
      <defs>
        <marker
          id="sd-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="var(--sl-slate-500, #64748b)" />
        </marker>
        <marker
          id="sd-arrow-amber"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="var(--sl-amber, #e8a72e)" />
        </marker>
      </defs>
      <rect x="0" y="0" width="520" height="220" rx="14" fill="var(--sl-paper-elev, #fbf8f1)" stroke="var(--sl-rule, rgba(28,31,36,0.12))" />

      {/* User */}
      <rect x="20" y="80" width="86" height="60" rx="10" fill="var(--sl-slate-50, #eef2f6)" stroke="var(--sl-slate-300, #aab6c4)" />
      <text x="63" y="108" textAnchor="middle" className="sd-label">User</text>
      <text x="63" y="126" textAnchor="middle" className="sd-sub">ask · feedback</text>

      {/* System box */}
      <rect x="140" y="40" width="220" height="140" rx="12" fill="var(--sl-slate-50, #eef2f6)" stroke="var(--sl-slate-300, #aab6c4)" />
      <text x="250" y="62" textAnchor="middle" className="sd-eyebrow">Transcript</text>
      <rect x="156" y="74" width="100" height="22" rx="5" fill="var(--sl-paper, #f7f3ea)" stroke="var(--sl-rule, rgba(28,31,36,0.12))" />
      <text x="206" y="89" textAnchor="middle" className="sd-tiny">system</text>
      <rect x="262" y="74" width="84" height="22" rx="5" fill="var(--sl-paper, #f7f3ea)" stroke="var(--sl-rule, rgba(28,31,36,0.12))" />
      <text x="304" y="89" textAnchor="middle" className="sd-tiny">user</text>
      <rect x="156" y="102" width="84" height="22" rx="5" fill="var(--sl-paper, #f7f3ea)" stroke="var(--sl-rule, rgba(28,31,36,0.12))" />
      <text x="198" y="117" textAnchor="middle" className="sd-tiny">assistant</text>
      <rect x="246" y="102" width="100" height="22" rx="5" fill="var(--sl-paper, #f7f3ea)" stroke="var(--sl-rule, rgba(28,31,36,0.12))" />
      <text x="296" y="117" textAnchor="middle" className="sd-tiny">tool result</text>
      <rect x="156" y="130" width="190" height="36" rx="6" fill="var(--sl-amber-soft, #f6dca0)" stroke="var(--sl-amber, #e8a72e)" />
      <text x="251" y="146" textAnchor="middle" className="sd-amber">context window · 100%</text>
      <text x="251" y="162" textAnchor="middle" className="sd-sub">shared by input &amp; output</text>

      {/* Model */}
      <rect x="394" y="80" width="100" height="60" rx="10" fill="var(--sl-paper-elev, #fbf8f1)" stroke="var(--sl-amber, #e8a72e)" strokeWidth="2" />
      <text x="444" y="108" textAnchor="middle" className="sd-label">Model</text>
      <text x="444" y="126" textAnchor="middle" className="sd-sub">predict next token</text>

      {/* Tool */}
      <rect x="394" y="160" width="100" height="40" rx="10" fill="var(--sl-slate-50, #eef2f6)" stroke="var(--sl-slate-300, #aab6c4)" />
      <text x="444" y="184" textAnchor="middle" className="sd-label">Tool</text>

      {/* Arrows */}
      <line x1="106" y1="100" x2="140" y2="100" stroke="var(--sl-slate-500, #64748b)" strokeWidth="1.5" markerEnd="url(#sd-arrow)" />
      <line x1="360" y1="100" x2="394" y2="100" stroke="var(--sl-amber, #e8a72e)" strokeWidth="1.5" markerEnd="url(#sd-arrow-amber)" />
      <line x1="444" y1="140" x2="444" y2="160" stroke="var(--sl-slate-500, #64748b)" strokeWidth="1.5" markerEnd="url(#sd-arrow)" />
      <line x1="394" y1="180" x2="360" y2="180" stroke="var(--sl-slate-500, #64748b)" strokeWidth="1.5" />
      <line x1="360" y1="180" x2="360" y2="150" stroke="var(--sl-slate-500, #64748b)" strokeWidth="1.5" markerEnd="url(#sd-arrow)" />
    </svg>
  );
}
