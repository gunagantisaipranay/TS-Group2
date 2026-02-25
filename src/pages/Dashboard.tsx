import { usePerformance } from '../hooks/usePerformance';
import { subjects } from '../data/syllabus';

type Page = 'dashboard' | 'exam-info' | 'syllabus' | 'quiz' | 'mentor' | 'daily-plan';

interface Props {
  setPage: (page: Page) => void;
}

export default function Dashboard({ setPage }: Props) {
  const { performance, getRankScore, resetPerformance } = usePerformance();
  const rankScore = getRankScore();

  const overallAccuracy = performance.totalAttempted > 0
    ? Math.round((performance.totalCorrect / performance.totalAttempted) * 100)
    : 0;

  const getRankLabel = (score: number) => {
    if (score >= 80) return { label: 'Rank Ready 🏆', color: '#22c55e' };
    if (score >= 60) return { label: 'On Track ✅', color: '#f59e0b' };
    if (score >= 40) return { label: 'Needs Work ⚠️', color: '#f97316' };
    return { label: 'Critical Zone 🚨', color: '#ef4444' };
  };

  const rankInfo = getRankLabel(rankScore);

  const quickActions = [
    { label: '✏️ Practice Quiz', page: 'quiz' as Page, desc: 'Attempt PYQ-style questions' },
    { label: '🤖 AI Mentor', page: 'mentor' as Page, desc: 'Get personalized study advice' },
    { label: '📋 Daily Plan', page: 'daily-plan' as Page, desc: 'Check today\'s study tasks' },
    { label: '📚 Syllabus', page: 'syllabus' as Page, desc: 'Browse topics & strategies' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>📊 Dashboard</h1>
        <p className="subtitle">Your TSPSC Group-2 exam readiness at a glance</p>
      </div>

      {/* Rank Score Card */}
      <div className="rank-card">
        <div className="rank-score-wrap">
          <svg className="rank-ring" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="#1e293b" strokeWidth="10" />
            <circle
              cx="60" cy="60" r="50" fill="none"
              stroke={rankInfo.color} strokeWidth="10"
              strokeDasharray={`${(rankScore / 100) * 314} 314`}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="rank-score-inner">
            <span className="rank-number">{rankScore}</span>
            <span className="rank-max">/100</span>
          </div>
        </div>
        <div className="rank-details">
          <h2>Rank Readiness Score</h2>
          <span className="rank-badge" style={{ backgroundColor: rankInfo.color + '20', color: rankInfo.color, border: `1px solid ${rankInfo.color}` }}>
            {rankInfo.label}
          </span>
          <div className="rank-stats">
            <div className="rstat">
              <span className="rstat-val">{performance.totalAttempted}</span>
              <span className="rstat-lbl">Questions Attempted</span>
            </div>
            <div className="rstat">
              <span className="rstat-val">{overallAccuracy}%</span>
              <span className="rstat-lbl">Overall Accuracy</span>
            </div>
            <div className="rstat">
              <span className="rstat-val">{performance.dailyStreak}</span>
              <span className="rstat-lbl">Day Streak 🔥</span>
            </div>
          </div>
          <p className="rank-hint">Score = 50% accuracy + 30% volume + 20% streak</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="section-title">Quick Actions</h2>
      <div className="quick-grid">
        {quickActions.map(a => (
          <button key={a.page} className="quick-card" onClick={() => setPage(a.page)}>
            <span className="quick-label">{a.label}</span>
            <span className="quick-desc">{a.desc}</span>
          </button>
        ))}
      </div>

      {/* Subject-wise performance */}
      <h2 className="section-title">Subject Performance</h2>
      <div className="subject-perf-grid">
        {subjects.map(sub => {
          const stats = performance.subjectStats[sub.id];
          const acc = stats && stats.attempted > 0
            ? Math.round((stats.correct / stats.attempted) * 100) : null;
          const colorMap: Record<string, string> = {
            blue: '#3b82f6', green: '#22c55e', orange: '#f97316',
            teal: '#14b8a6', purple: '#a855f7', red: '#ef4444'
          };
          const color = colorMap[sub.color] ?? '#f59e0b';
          return (
            <div key={sub.id} className="sub-perf-card">
              <div className="sub-perf-top">
                <span className="sub-icon">{sub.icon}</span>
                <span className="sub-name">{sub.name}</span>
              </div>
              {acc !== null ? (
                <>
                  <div className="sub-bar-wrap">
                    <div className="sub-bar" style={{ width: `${acc}%`, backgroundColor: color }} />
                  </div>
                  <div className="sub-perf-footer">
                    <span style={{ color }}>{acc}% accuracy</span>
                    <span className="sub-attempts">{stats?.attempted} attempted</span>
                  </div>
                </>
              ) : (
                <p className="sub-no-data">No data yet — take the quiz!</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Weak Topics */}
      {performance.weakTopics.length > 0 && (
        <>
          <h2 className="section-title">⚠️ Weak Topics (Recent Mistakes)</h2>
          <div className="weak-topics">
            {performance.weakTopics.slice(-6).map((topic, i) => (
              <span key={i} className="weak-tag">{topic}</span>
            ))}
          </div>
        </>
      )}

      {/* Reset */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button className="btn-danger" onClick={() => { if (confirm('Reset all performance data?')) resetPerformance(); }}>
          🗑️ Reset All Progress
        </button>
      </div>
    </div>
  );
}
