import { usePerformance } from '../hooks/usePerformance';

interface Task {
  id: string;
  label: string;
  subject: string;
  type: 'questions' | 'revision' | 'reading';
  duration: string;
  priority: 'high' | 'medium' | 'low';
}

const dailyTasks: Task[] = [
  { id: 't1', label: '20 Telangana Movement & Schemes questions', subject: 'Telangana', type: 'questions', duration: '25 min', priority: 'high' },
  { id: 't2', label: '15 Economy (Monetary Policy + RBI) questions', subject: 'Economy', type: 'questions', duration: '18 min', priority: 'high' },
  { id: 't3', label: '10 Polity (Constitutional Bodies) questions', subject: 'Polity', type: 'questions', duration: '12 min', priority: 'high' },
  { id: 't4', label: 'Revise AP Reorganisation Act 2014 key provisions', subject: 'Telangana', type: 'revision', duration: '15 min', priority: 'medium' },
  { id: 't5', label: 'Read about Telangana Government Schemes (Rythu Bandhu, Mission Bhagiratha)', subject: 'Economy', type: 'reading', duration: '20 min', priority: 'medium' },
  { id: 't6', label: '10 History (Freedom Struggle) questions', subject: 'History', type: 'questions', duration: '12 min', priority: 'medium' },
  { id: 't7', label: 'Quick revision: Fundamental Rights Articles 12-35', subject: 'Polity', type: 'revision', duration: '10 min', priority: 'low' },
  { id: 't8', label: '5 Geography (Telangana Rivers & Irrigation) questions', subject: 'Geography', type: 'questions', duration: '6 min', priority: 'low' },
];

const weeklyPlan = [
  { day: 'Monday', focus: 'Telangana Paper-IV deep dive', subjects: ['Telangana Movement', 'AP Reorg Act', 'Nizam History'] },
  { day: 'Tuesday', focus: 'Economy master class', subjects: ['Banking & RBI', 'Fiscal Policy', 'Telangana Schemes'] },
  { day: 'Wednesday', focus: 'Polity & Governance', subjects: ['Fundamental Rights', 'Constitutional Bodies', 'Federalism'] },
  { day: 'Thursday', focus: 'History & Geography', subjects: ['Freedom Struggle', 'Telangana Geography', 'Rivers & Soil'] },
  { day: 'Friday', focus: 'Science & Technology', subjects: ['ISRO missions', 'IT & Cyber', 'Environment'] },
  { day: 'Saturday', focus: 'Full mixed mock test', subjects: ['All subjects - 60 questions'] },
  { day: 'Sunday', focus: 'Weak topic revision', subjects: ['Review mistakes', 'Re-attempt wrong questions'] },
];

const priorityColors: Record<string, string> = {
  high: '#ef4444', medium: '#f59e0b', low: '#3b82f6'
};

const typeIcons: Record<string, string> = {
  questions: '✏️', revision: '🔄', reading: '📖'
};

const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
const todayDay = new Date().toLocaleDateString('en-IN', { weekday: 'long' });

export default function DailyPlanPage() {
  const { performance, toggleTask } = usePerformance();
  const completedToday = performance.completedTasks.filter(t => dailyTasks.find(dt => dt.id === t)).length;
  const totalTasks = dailyTasks.length;
  const progressPct = Math.round((completedToday / totalTasks) * 100);

  return (
    <div className="page">
      <div className="page-header">
        <h1>📋 Daily Study Plan</h1>
        <p className="subtitle">{today}</p>
      </div>

      {/* Progress */}
      <div className="plan-progress-card">
        <div className="plan-progress-top">
          <div>
            <h3>Today's Progress</h3>
            <p className="plan-progress-sub">{completedToday} of {totalTasks} tasks completed</p>
          </div>
          <div className="plan-pct">{progressPct}%</div>
        </div>
        <div className="plan-bar-wrap">
          <div className="plan-bar" style={{ width: `${progressPct}%` }} />
        </div>
        {completedToday === totalTasks && (
          <p className="plan-complete-msg">🎉 All tasks done! You're building your rank. Keep the streak going tomorrow.</p>
        )}
      </div>

      {/* Daily Tasks */}
      <h2 className="section-title">📌 Today's Tasks</h2>
      <div className="task-list">
        {dailyTasks.map(task => {
          const done = performance.completedTasks.includes(task.id);
          return (
            <div key={task.id} className={`task-card ${done ? 'done' : ''}`} onClick={() => toggleTask(task.id)}>
              <div className="task-check">{done ? '✅' : '⬜'}</div>
              <div className="task-body">
                <p className={`task-label ${done ? 'strikethrough' : ''}`}>{task.label}</p>
                <div className="task-meta">
                  <span className="task-subject">{task.subject}</span>
                  <span className="task-type">{typeIcons[task.type]} {task.type}</span>
                  <span className="task-duration">⏱️ {task.duration}</span>
                  <span className="task-priority" style={{ color: priorityColors[task.priority] }}>
                    {task.priority.toUpperCase()} priority
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weekly Plan */}
      <h2 className="section-title">🗓️ Weekly Study Plan</h2>
      <div className="weekly-grid">
        {weeklyPlan.map((day, i) => {
          const isToday = day.day.toLowerCase() === todayDay.toLowerCase();
          return (
            <div key={i} className={`week-card ${isToday ? 'today' : ''}`}>
              <div className="week-day">{day.day} {isToday && <span className="today-badge">TODAY</span>}</div>
              <div className="week-focus">{day.focus}</div>
              <ul className="week-subjects">
                {day.subjects.map((s, si) => <li key={si}>{s}</li>)}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Study Tips */}
      <h2 className="section-title">💡 Study Command System</h2>
      <div className="tips-grid">
        <div className="tip-card">
          <h4>🎯 The 50-30-20 Rule</h4>
          <p>50% time on Telangana (Paper-IV is 150 marks), 30% on Economy + Polity, 20% on History + Geography + Science.</p>
        </div>
        <div className="tip-card">
          <h4>⏱️ Pomodoro for TSPSC</h4>
          <p>45 min study → 10 min break. Never study for more than 90 minutes without a break. Avoid marathon sessions.</p>
        </div>
        <div className="tip-card">
          <h4>🔄 Active Recall &gt; Passive Reading</h4>
          <p>Don't highlight books. Close the book and write from memory. Then check. This doubles retention.</p>
        </div>
        <div className="tip-card">
          <h4>📊 Track Accuracy, Not Time</h4>
          <p>Hours studied is vanity. Questions correct is sanity. Your target is 70%+ accuracy per subject before exam.</p>
        </div>
        <div className="tip-card">
          <h4>🏴 Telangana is the Priority</h4>
          <p>Paper-IV is 150 marks (25% of total). It differentiates serious candidates. Never skip a Telangana session.</p>
        </div>
        <div className="tip-card">
          <h4>📅 Daily Minimum (No Exceptions)</h4>
          <p>Minimum 30 questions per day, every day. On bad days: 10 questions. Missing a day breaks your streak and compounds.</p>
        </div>
      </div>
    </div>
  );
}
