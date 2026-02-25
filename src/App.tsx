import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import ExamInfo from './pages/ExamInfo';
import SyllabusPage from './pages/SyllabusPage';
import QuizPage from './pages/QuizPage';
import MentorPage from './pages/MentorPage';
import DailyPlanPage from './pages/DailyPlanPage';
import './App.css';

type Page = 'dashboard' | 'exam-info' | 'syllabus' | 'quiz' | 'mentor' | 'daily-plan';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: '🏠 Dashboard', page: 'dashboard' as Page },
    { id: 'exam-info', label: '📅 Exam Info', page: 'exam-info' as Page },
    { id: 'syllabus', label: '📚 Syllabus', page: 'syllabus' as Page },
    { id: 'quiz', label: '✏️ Practice Quiz', page: 'quiz' as Page },
    { id: 'mentor', label: '🤖 AI Mentor', page: 'mentor' as Page },
    { id: 'daily-plan', label: '📋 Daily Plan', page: 'daily-plan' as Page },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand" onClick={() => setCurrentPage('dashboard')}>
          <span className="brand-icon">🎯</span>
          <span className="brand-text">TS Group-2 Coach</span>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-btn ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => { setCurrentPage(item.page); setMenuOpen(false); }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
      <main className="main-content">
        {currentPage === 'dashboard' && <Dashboard setPage={setCurrentPage} />}
        {currentPage === 'exam-info' && <ExamInfo />}
        {currentPage === 'syllabus' && <SyllabusPage />}
        {currentPage === 'quiz' && <QuizPage />}
        {currentPage === 'mentor' && <MentorPage />}
        {currentPage === 'daily-plan' && <DailyPlanPage />}
      </main>
    </div>
  );
}
