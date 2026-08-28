import { lessons } from "../data/llmFundamentals";

type ProgressTrackerProps = {
  completed: Set<string>;
};

export function ProgressTracker({ completed }: ProgressTrackerProps) {
  const total = lessons.length;
  const done = lessons.filter((lesson) => completed.has(lesson.slug)).length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <aside className="progress-tracker" aria-label="Lesson progress">
      <p className="progress-tracker-heading">Progress</p>
      <p className="progress-tracker-count">
        <span className="progress-tracker-done">{done}</span>
        <span className="progress-tracker-divider">/</span>
        <span className="progress-tracker-total">{total}</span>
        <span className="progress-tracker-label"> lessons reviewed</span>
      </p>
      <div
        className="progress-tracker-bar"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={done}
        aria-label={`${done} of ${total} lessons reviewed`}
      >
        <span
          className="progress-tracker-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="progress-tracker-note">
        Progress is stored locally on this device. Nothing is sent to a server.
      </p>
    </aside>
  );
}
