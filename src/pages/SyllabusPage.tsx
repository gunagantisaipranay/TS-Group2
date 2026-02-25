import { useState } from 'react';
import { subjects } from '../data/syllabus';
import type { Subject } from '../data/syllabus';

const colorMap: Record<string, string> = {
  blue: '#3b82f6', green: '#22c55e', orange: '#f97316',
  teal: '#14b8a6', purple: '#a855f7', red: '#ef4444'
};

const roiColors: Record<string, string> = {
  High: '#22c55e', Medium: '#f59e0b', Low: '#ef4444'
};

export default function SyllabusPage() {
  const [selected, setSelected] = useState<Subject>(subjects[0]);
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  return (
    <div className="page">
      <div className="page-header">
        <h1>📚 Complete Syllabus</h1>
        <p className="subtitle">Topics, weightage, ROI analysis & exam strategy</p>
      </div>

      <div className="syllabus-layout">
        {/* Subject Tabs */}
        <div className="subject-tabs">
          {subjects.map(sub => {
            const color = colorMap[sub.color] ?? '#f59e0b';
            const isActive = selected.id === sub.id;
            return (
              <button
                key={sub.id}
                className={`subject-tab ${isActive ? 'active' : ''}`}
                style={isActive ? { borderColor: color, color } : {}}
                onClick={() => setSelected(sub)}
              >
                <span className="tab-icon">{sub.icon}</span>
                <span className="tab-name">{sub.name}</span>
                <span className="tab-paper">{sub.paper}</span>
              </button>
            );
          })}
        </div>

        {/* Subject Content */}
        <div className="subject-content">
          <div className="subject-header" style={{ borderColor: colorMap[selected.color] }}>
            <div className="sub-title-row">
              <span className="sub-big-icon">{selected.icon}</span>
              <div>
                <h2>{selected.name}</h2>
                <div className="sub-meta-row">
                  <span className="badge-outline">{selected.paper}</span>
                  <span className="badge-outline">~{selected.totalMarks} marks</span>
                </div>
              </div>
            </div>
            <div className="strategy-box">
              <span className="strategy-label">📌 STRATEGY</span>
              <p>{selected.strategy}</p>
            </div>
          </div>

          <div className="topics-list">
            {selected.topics.map((topic, idx) => {
              const isOpen = expandedTopic === `${selected.id}-${idx}`;
              return (
                <div key={idx} className="topic-card">
                  <button
                    className="topic-header"
                    onClick={() => setExpandedTopic(isOpen ? null : `${selected.id}-${idx}`)}
                  >
                    <div className="topic-title-row">
                      <span className="topic-name">{topic.name}</span>
                      <div className="topic-badges">
                        <span className="badge-roi" style={{ color: roiColors[topic.roi], borderColor: roiColors[topic.roi] }}>
                          ROI: {topic.roi}
                        </span>
                        <span className="badge-wt" style={{ color: roiColors[topic.weightage], borderColor: roiColors[topic.weightage] }}>
                          {topic.weightage}
                        </span>
                        <span className="badge-pyq">~{topic.pyqFrequency} Qs/exam</span>
                      </div>
                    </div>
                    <span className="expand-icon">{isOpen ? '▲' : '▼'}</span>
                  </button>
                  {isOpen && (
                    <div className="topic-body">
                      <p className="subtopic-label">Key Subtopics:</p>
                      <ul className="subtopics-ul">
                        {topic.subtopics.map((st, si) => (
                          <li key={si}>{st}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
