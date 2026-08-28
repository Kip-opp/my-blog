import { useId, useMemo, useState } from "react";
import type { Diagram, DiagramNode } from "../data/llmFundamentals";

type Layout = {
  width: number;
  height: number;
  positions: Record<string, { x: number; y: number; width: number; height: number }>;
  columnCount: number;
  rowCount: number;
};

const NODE_WIDTH = 168;
const NODE_HEIGHT = 64;
const COLUMN_GAP = 56;
const ROW_GAP = 36;
const PADDING = 24;

function layoutDiagram(diagram: Diagram): Layout {
  const nodes = diagram.nodes;
  const columnCount = nodes.reduce(
    (max, node) => Math.max(max, (node.column ?? 0) + 1),
    0
  );
  const rowCount = nodes.reduce(
    (max, node) => Math.max(max, (node.row ?? 0) + 1),
    0
  );

  const positions: Layout["positions"] = {};
  for (const node of nodes) {
    const column = node.column ?? 0;
    const row = node.row ?? 0;
    positions[node.id] = {
      x: PADDING + column * (NODE_WIDTH + COLUMN_GAP),
      y: PADDING + row * (NODE_HEIGHT + ROW_GAP),
      width: NODE_WIDTH,
      height: NODE_HEIGHT
    };
  }

  const width = PADDING * 2 + columnCount * NODE_WIDTH + (columnCount - 1) * COLUMN_GAP;
  const height = PADDING * 2 + rowCount * NODE_HEIGHT + (rowCount - 1) * ROW_GAP;

  return { width, height, positions, columnCount, rowCount };
}

function nodeCenter(
  position: { x: number; y: number; width: number; height: number }
) {
  return { x: position.x + position.width / 2, y: position.y + position.height / 2 };
}

type FlowchartProps = {
  diagram: Diagram;
};

export function Flowchart({ diagram }: FlowchartProps) {
  const titleId = useId();
  const layout = useMemo(() => layoutDiagram(diagram), [diagram]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedNode: DiagramNode | null = useMemo(() => {
    if (!selectedId) return null;
    return diagram.nodes.find((node) => node.id === selectedId) ?? null;
  }, [diagram, selectedId]);

  return (
    <figure className="flowchart" aria-labelledby={titleId}>
      <figcaption id={titleId} className="flowchart-caption">
        <span className="flowchart-eyebrow">Diagram</span>
        <span className="flowchart-title">{diagram.title}</span>
        <span className="flowchart-detail">{diagram.caption}</span>
      </figcaption>

      <div className="flowchart-canvas" role="group" aria-label={`${diagram.title} diagram`}>
        <svg
          viewBox={`0 0 ${layout.width} ${layout.height}`}
          width="100%"
          height="auto"
          role="img"
          aria-label={diagram.title}
        >
          <defs>
            <marker
              id="sl-arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="var(--sl-slate-600, #475569)" />
            </marker>
          </defs>

          {diagram.edges.map((edge, index) => {
            const from = layout.positions[edge.from];
            const to = layout.positions[edge.to];
            if (!from || !to) return null;
            const fromCenter = nodeCenter(from);
            const toCenter = nodeCenter(to);
            const isLoop = edge.from === edge.to;
            if (isLoop) {
              const loopRadius = 28;
              const cx = from.x + from.width / 2;
              const cy = from.y;
              return (
                <g key={`edge-${index}`} className="flowchart-edge">
                  <path
                    d={`M ${cx} ${cy} c ${loopRadius} -40, ${loopRadius} -40, 0 0`}
                    fill="none"
                    stroke="var(--sl-slate-500, #64748b)"
                    strokeWidth="1.5"
                    markerEnd="url(#sl-arrow)"
                  />
                  {edge.label ? (
                    <text
                      x={cx + loopRadius + 6}
                      y={cy - loopRadius - 2}
                      className="flowchart-edge-label"
                    >
                      {edge.label}
                    </text>
                  ) : null}
                </g>
              );
            }
            return (
              <g key={`edge-${index}`} className="flowchart-edge">
                <line
                  x1={fromCenter.x}
                  y1={fromCenter.y}
                  x2={toCenter.x}
                  y2={toCenter.y}
                  stroke="var(--sl-slate-500, #64748b)"
                  strokeWidth="1.5"
                  markerEnd="url(#sl-arrow)"
                />
                {edge.label ? (
                  <text
                    x={(fromCenter.x + toCenter.x) / 2}
                    y={(fromCenter.y + toCenter.y) / 2 - 6}
                    textAnchor="middle"
                    className="flowchart-edge-label"
                  >
                    {edge.label}
                  </text>
                ) : null}
              </g>
            );
          })}

          {diagram.nodes.map((node) => {
            const pos = layout.positions[node.id];
            if (!pos) return null;
            const isSelected = selectedId === node.id;
            return (
              <g
                key={node.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                className={`flowchart-node ${isSelected ? "is-selected" : ""}`}
              >
                <foreignObject x="0" y="0" width={pos.width} height={pos.height}>
                  <button
                    type="button"
                    className="flowchart-node-button"
                    aria-label={`${node.label}: ${node.description}`}
                    aria-pressed={isSelected}
                    onClick={() =>
                      setSelectedId((current) =>
                        current === node.id ? null : node.id
                      )
                    }
                  >
                    <span className="flowchart-node-label">{node.label}</span>
                  </button>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="flowchart-hint">
        Tab to a node and press <kbd>Enter</kbd> or <kbd>Space</kbd> to inspect it.
      </p>

      {selectedNode ? (
        <div
          className="flowchart-detail-panel"
          role="region"
          aria-live="polite"
        >
          <p className="flowchart-detail-label">{selectedNode.label}</p>
          <p className="flowchart-detail-body">{selectedNode.description}</p>
        </div>
      ) : (
        <div className="flowchart-detail-panel is-empty">
          <p className="flowchart-detail-body">
            Select a node above to see what it represents in the system.
          </p>
        </div>
      )}
    </figure>
  );
}
