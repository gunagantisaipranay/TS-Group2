import { useState, useEffect, useCallback } from 'react';
import type { PerformanceData } from '../data/mentorResponses';

const STORAGE_KEY = 'tspsc_performance';

const defaultPerformance: PerformanceData = {
  totalAttempted: 0,
  totalCorrect: 0,
  subjectStats: {},
  dailyStreak: 0,
  lastStudyDate: '',
  weakTopics: [],
  completedTasks: [],
};

export function usePerformance() {
  const [performance, setPerformance] = useState<PerformanceData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultPerformance;
    } catch {
      return defaultPerformance;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(performance));
  }, [performance]);

  const recordAnswer = useCallback((subject: string, correct: boolean, topic?: string) => {
    setPerformance(prev => {
      const today = new Date().toDateString();
      const prevSubject = prev.subjectStats[subject] ?? { attempted: 0, correct: 0, timeSpent: 0 };
      const newStreak = prev.lastStudyDate === today ? prev.dailyStreak
        : prev.lastStudyDate === new Date(Date.now() - 86400000).toDateString()
          ? prev.dailyStreak + 1
          : 1;

      const newWeakTopics = [...prev.weakTopics];
      if (!correct && topic && !newWeakTopics.includes(topic)) {
        newWeakTopics.push(topic);
        if (newWeakTopics.length > 10) newWeakTopics.shift();
      }

      return {
        ...prev,
        totalAttempted: prev.totalAttempted + 1,
        totalCorrect: prev.totalCorrect + (correct ? 1 : 0),
        subjectStats: {
          ...prev.subjectStats,
          [subject]: {
            attempted: prevSubject.attempted + 1,
            correct: prevSubject.correct + (correct ? 1 : 0),
            timeSpent: prevSubject.timeSpent,
          }
        },
        dailyStreak: newStreak,
        lastStudyDate: today,
        weakTopics: newWeakTopics,
      };
    });
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setPerformance(prev => {
      const completed = prev.completedTasks.includes(taskId)
        ? prev.completedTasks.filter(t => t !== taskId)
        : [...prev.completedTasks, taskId];
      return { ...prev, completedTasks: completed };
    });
  }, []);

  const resetPerformance = useCallback(() => {
    setPerformance(defaultPerformance);
  }, []);

  const getRankScore = useCallback((): number => {
    if (performance.totalAttempted === 0) return 0;
    const accuracy = (performance.totalCorrect / performance.totalAttempted) * 100;
    const volumeScore = Math.min(performance.totalAttempted / 200 * 30, 30);
    const streakScore = Math.min(performance.dailyStreak * 2, 20);
    const accuracyScore = (accuracy / 100) * 50;
    return Math.round(accuracyScore + volumeScore + streakScore);
  }, [performance]);

  return { performance, recordAnswer, toggleTask, resetPerformance, getRankScore };
}
