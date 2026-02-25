import { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { usePerformance } from '../hooks/usePerformance';

type Filter = 'all' | 'polity' | 'economy' | 'history' | 'geography' | 'science' | 'telangana';
type Difficulty = 'all' | 'easy' | 'medium' | 'hard';

interface QuizState {
  current: number;
  selected: number | null;
  answered: boolean;
  score: number;
  wrong: number[];
  finished: boolean;
}

const subjectLabels: Record<string, string> = {
  polity: '⚖️ Polity',
  economy: '📊 Economy',
  history: '🏛️ History',
  geography: '🗺️ Geography',
  science: '🔬 Science',
  telangana: '🏴 Telangana',
};

export default function QuizPage() {
  const { recordAnswer } = usePerformance();
  const [filter, setFilter] = useState<Filter>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(questions);
  const [state, setState] = useState<QuizState>({
    current: 0, selected: null, answered: false,
    score: 0, wrong: [], finished: false,
  });

  const startQuiz = useCallback(() => {
    let filtered = questions;
    if (filter !== 'all') filtered = filtered.filter(q => q.subject === filter);
    if (difficultyFilter !== 'all') filtered = filtered.filter(q => q.difficulty === difficultyFilter);
    // Shuffle
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, 20);
    setQuizQuestions(shuffled);
    setState({ current: 0, selected: null, answered: false, score: 0, wrong: [], finished: false });
    setQuizStarted(true);
  }, [filter, difficultyFilter]);

  const handleSelect = useCallback((idx: number) => {
    if (state.answered) return;
    const q = quizQuestions[state.current];
    const correct = idx === q.correct;
    recordAnswer(q.subject, correct, q.topic);
    setState(prev => ({
      ...prev,
      selected: idx,
      answered: true,
      score: prev.score + (correct ? 1 : 0),
      wrong: correct ? prev.wrong : [...prev.wrong, prev.current],
    }));
  }, [state, quizQuestions, recordAnswer]);

  const handleNext = useCallback(() => {
    if (state.current + 1 >= quizQuestions.length) {
      setState(prev => ({ ...prev, finished: true }));
    } else {
      setState(prev => ({ ...prev, current: prev.current + 1, selected: null, answered: false }));
    }
  }, [state.current, quizQuestions.length]);

  if (!quizStarted) {
    const totalFiltered = questions.filter(q =>
      (filter === 'all' || q.subject === filter) &&
      (difficultyFilter === 'all' || q.difficulty === difficultyFilter)
    ).length;

    return (
      <div className="page">
        <div className="page-header">
          <h1>✏️ Practice Quiz</h1>
          <p className="subtitle">PYQ-style questions across all TSPSC Group-2 subjects</p>
        </div>

        <div className="quiz-setup-card">
          <h3>Configure Your Quiz</h3>

          <div className="filter-section">
            <label className="filter-label">Subject Filter</label>
            <div className="filter-btns">
              {(['all', 'polity', 'economy', 'history', 'geography', 'science', 'telangana'] as Filter[]).map(f => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f === 'all' ? '🌐 All' : subjectLabels[f]}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <label className="filter-label">Difficulty</label>
            <div className="filter-btns">
              {(['all', 'easy', 'medium', 'hard'] as Difficulty[]).map(d => (
                <button
                  key={d}
                  className={`filter-btn diff-${d} ${difficultyFilter === d ? 'active' : ''}`}
                  onClick={() => setDifficultyFilter(d)}
                >
                  {d === 'all' ? 'All Levels' : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-meta">
            <span>📊 Available questions: <strong>{totalFiltered}</strong></span>
            <span>🎯 Quiz will pick: <strong>{Math.min(totalFiltered, 20)}</strong> random questions</span>
          </div>

          <button className="btn-primary btn-lg" onClick={startQuiz} disabled={totalFiltered === 0}>
            🚀 Start Quiz
          </button>
        </div>

        <h2 className="section-title">Question Bank Overview</h2>
        <div className="qbank-grid">
          {Object.entries(subjectLabels).map(([sub, label]) => {
            const count = questions.filter(q => q.subject === sub).length;
            return (
              <div key={sub} className="qbank-card" onClick={() => { setFilter(sub as Filter); }}>
                <span className="qbank-label">{label}</span>
                <span className="qbank-count">{count} Qs</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (state.finished) {
    const pct = Math.round((state.score / quizQuestions.length) * 100);
    const grade = pct >= 80 ? '🏆 Excellent' : pct >= 60 ? '✅ Good' : pct >= 40 ? '⚠️ Average' : '🚨 Needs Work';
    return (
      <div className="page">
        <div className="page-header">
          <h1>Quiz Complete!</h1>
        </div>
        <div className="result-card">
          <div className="result-score">
            <span className="result-num">{state.score}</span>
            <span className="result-denom">/ {quizQuestions.length}</span>
          </div>
          <div className="result-pct">{pct}%</div>
          <div className="result-grade">{grade}</div>

          <div className="result-breakdown">
            <div className="rb-item green">✅ Correct: {state.score}</div>
            <div className="rb-item red">❌ Wrong: {quizQuestions.length - state.score}</div>
          </div>

          {state.wrong.length > 0 && (
            <div className="wrong-review">
              <h3>Review Wrong Answers</h3>
              {state.wrong.map(idx => {
                const q = quizQuestions[idx];
                return (
                  <div key={idx} className="wrong-item">
                    <p className="wrong-q"><strong>Q{idx + 1}:</strong> {q.question}</p>
                    <p className="wrong-ans correct-ans">✅ Correct: {q.options[q.correct]}</p>
                    <p className="wrong-exp">💡 {q.explanation}</p>
                  </div>
                );
              })}
            </div>
          )}

          <div className="result-actions">
            <button className="btn-primary" onClick={startQuiz}>🔄 Retake Quiz</button>
            <button className="btn-secondary" onClick={() => setQuizStarted(false)}>📋 New Filter</button>
          </div>
        </div>
      </div>
    );
  }

  const q = quizQuestions[state.current];
  const progress = ((state.current + 1) / quizQuestions.length) * 100;

  return (
    <div className="page">
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-meta-row">
        <span>{subjectLabels[q.subject] ?? q.subject}</span>
        <span>Q {state.current + 1} / {quizQuestions.length}</span>
        <span className={`diff-badge diff-${q.difficulty}`}>{q.difficulty}</span>
        {q.year && <span className="year-badge">PYQ {q.year}</span>}
      </div>

      <div className="question-card">
        <p className="topic-tag">📌 {q.topic}</p>
        <p className="question-text">{q.question}</p>

        <div className="options-list">
          {q.options.map((opt, i) => {
            let cls = 'option-btn';
            if (state.answered) {
              if (i === q.correct) cls += ' correct';
              else if (i === state.selected) cls += ' wrong';
            } else if (state.selected === i) {
              cls += ' selected';
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={state.answered}>
                <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
                <span className="opt-text">{opt}</span>
              </button>
            );
          })}
        </div>

        {state.answered && (
          <div className="explanation-box">
            <p className="exp-title">💡 Explanation</p>
            <p>{q.explanation}</p>
          </div>
        )}

        <div className="quiz-footer">
          <span className="quiz-score">Score: {state.score}/{state.current + (state.answered ? 1 : 0)}</span>
          {state.answered && (
            <button className="btn-primary" onClick={handleNext}>
              {state.current + 1 >= quizQuestions.length ? '🏁 Finish' : 'Next →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
