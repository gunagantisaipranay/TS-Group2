import { useState, useRef, useEffect } from 'react';
import { analyzeMentorResponse } from '../data/mentorResponses';
import { usePerformance } from '../hooks/usePerformance';
import { getGeminiResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'mentor';
  text: string;
  time: string;
}

const SUGGESTIONS = [
  "What is my cutoff projection?",
  "Give me today's study plan",
  "How to improve in Economy?",
  "What are my weak areas?",
  "Telangana exam strategy",
  "How to study Polity?",
];

export default function MentorPage() {
  const { performance } = usePerformance();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'mentor',
      text: "I am your TSPSC Group-2 AI Mentor. I analyze your quiz performance and give data-driven advice.\n\nTake a practice quiz first, then ask me anything about your preparation strategy.",
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  const buildPerformanceContext = () => {
    const overallAcc = performance.totalAttempted > 0
      ? Math.round((performance.totalCorrect / performance.totalAttempted) * 100)
      : 0;
    const subjectLines = Object.entries(performance.subjectStats)
      .map(([sub, stats]) => {
        const acc = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
        return `  - ${sub}: ${acc}% accuracy (${stats.attempted} attempted)`;
      })
      .join('\n');
    return `[User Performance Data]
Overall accuracy: ${overallAcc}% (${performance.totalAttempted} questions attempted)
Daily streak: ${performance.dailyStreak} days
Subject breakdown:
${subjectLines || '  (no subject data yet)'}
Weak topics: ${performance.weakTopics.join(', ') || 'none identified yet'}`;
  };

  const getTimeString = () =>
    new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;
    const time = getTimeString();
    const userMsg: Message = { role: 'user', text: trimmed, time };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    if (apiKey) {
      setIsThinking(true);
      try {
        const context = buildPerformanceContext();
        const response = await getGeminiResponse(trimmed, context);
        const mentorMsg: Message = { role: 'mentor', text: response, time: getTimeString() };
        setMessages(prev => [...prev, mentorMsg]);
      } finally {
        setIsThinking(false);
      }
    } else {
      const response = analyzeMentorResponse(trimmed, performance);
      const mentorMsg: Message = { role: 'mentor', text: response, time };
      setMessages(prev => [...prev, mentorMsg]);
    }
  };

  const handleSend = () => { void sendMessage(input); };
  const handleChip = (s: string) => () => { void sendMessage(s); };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage(input);
    }
  };

  const overallAccuracy = performance.totalAttempted > 0
    ? Math.round((performance.totalCorrect / performance.totalAttempted) * 100)
    : 0;

  return (
    <div className="page">
      <div className="page-header">
        <h1>🤖 AI Mentor</h1>
        <p className="subtitle">AI-powered strategy coach — personalized to your performance</p>
      </div>

      <div className="mentor-layout">
        {/* Chat */}
        <div className="chat-container">
          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.role}`}>
                <div className="bubble-header">
                  <span className="bubble-role">{msg.role === 'mentor' ? '🤖 Mentor' : '👤 You'}</span>
                  <span className="bubble-time">{msg.time}</span>
                </div>
                <div className="bubble-text">
                  {msg.text.split('\n').map((line, li) => (
                    <p key={li}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="chat-bubble mentor">
                <div className="bubble-header">
                  <span className="bubble-role">🤖 Mentor</span>
                </div>
                <div className="bubble-text">
                  <p>Thinking...</p>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="suggestions-row">
            {SUGGESTIONS.map((s, i) => (
              <button key={i} className="suggestion-chip" onClick={handleChip(s)}>
                {s}
              </button>
            ))}
          </div>

          <div className="chat-input-row">
            <textarea
              className="chat-input"
              placeholder="Ask about your preparation strategy..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={2}
            />
            <button className="send-btn" onClick={handleSend} disabled={!input.trim() || isThinking}>
              Send ↑
            </button>
          </div>
        </div>

        {/* Stats panel */}
        <div className="mentor-stats-panel">
          <h3>📊 Your Performance Summary</h3>
          <div className="mstat-grid">
            <div className="mstat-card">
              <span className="mstat-val">{performance.totalAttempted}</span>
              <span className="mstat-lbl">Questions Done</span>
            </div>
            <div className="mstat-card">
              <span className="mstat-val">{overallAccuracy}%</span>
              <span className="mstat-lbl">Accuracy</span>
            </div>
            <div className="mstat-card">
              <span className="mstat-val">{performance.dailyStreak}</span>
              <span className="mstat-lbl">Day Streak 🔥</span>
            </div>
          </div>

          {Object.entries(performance.subjectStats).length > 0 && (
            <>
              <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase' }}>Subject Accuracy</h4>
              {Object.entries(performance.subjectStats).map(([sub, stats]) => {
                const acc = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
                const color = acc >= 70 ? '#22c55e' : acc >= 50 ? '#f59e0b' : '#ef4444';
                return (
                  <div key={sub} className="mstat-subject">
                    <span>{sub}</span>
                    <div className="mstat-bar-wrap">
                      <div className="mstat-bar" style={{ width: `${acc}%`, backgroundColor: color }} />
                    </div>
                    <span style={{ color, minWidth: '36px', textAlign: 'right' }}>{acc}%</span>
                  </div>
                );
              })}
            </>
          )}

          {performance.weakTopics.length > 0 && (
            <>
              <h4 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', textTransform: 'uppercase' }}>Weak Topics</h4>
              <div className="weak-topics">
                {performance.weakTopics.slice(-5).map((t, i) => (
                  <span key={i} className="weak-tag">{t}</span>
                ))}
              </div>
            </>
          )}

          <div className="mentor-hint">
            <p>💡 The mentor uses your quiz data to give personalized advice. More questions = better analysis.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
