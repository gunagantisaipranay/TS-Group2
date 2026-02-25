export interface PerformanceData {
  totalAttempted: number;
  totalCorrect: number;
  subjectStats: {
    [key: string]: {
      attempted: number;
      correct: number;
      timeSpent: number;
    };
  };
  dailyStreak: number;
  lastStudyDate: string;
  weakTopics: string[];
  completedTasks: string[];
}

export function analyzeMentorResponse(
  input: string,
  performance: PerformanceData
): string {
  const lowerInput = input.toLowerCase();
  const overallAccuracy = performance.totalAttempted > 0
    ? Math.round((performance.totalCorrect / performance.totalAttempted) * 100)
    : 0;

  const subjectAccuracy: { [key: string]: number } = {};
  for (const [subject, stats] of Object.entries(performance.subjectStats)) {
    if (stats.attempted > 0) {
      subjectAccuracy[subject] = Math.round((stats.correct / stats.attempted) * 100);
    }
  }

  const weakSubjects = Object.entries(subjectAccuracy)
    .filter(([, acc]) => acc < 50)
    .sort((a, b) => a[1] - b[1]);

  const strongSubjects = Object.entries(subjectAccuracy)
    .filter(([, acc]) => acc >= 70)
    .sort((a, b) => b[1] - a[1]);

  const estimatedScore = performance.totalAttempted > 0
    ? Math.round((overallAccuracy / 100) * 600 * 0.7)
    : 0;
  const cutoffGap = 300 - estimatedScore;

  if (lowerInput.includes("polity") || lowerInput.includes("constitution")) {
    const acc = subjectAccuracy["polity"] ?? 0;
    if (acc >= 70) return `Polity accuracy: ${acc}%. Strong, but don't become complacent. Constitutional bodies and Federalism are frequently tested — verify you're not guessing on Article numbers.`;
    if (acc >= 50) return `Polity at ${acc}% — mediocre. Constitutional bodies (Finance Commission, CAG, Election Commission) appear in every exam. Do 15 targeted PYQs TODAY on Articles 72-75, 148-151, 280.`;
    return `Polity at ${acc}% — critical weakness. You are bleeding marks here. Immediate action: focus only on Fundamental Rights (Articles 12-35), Constitutional Bodies, and Federalism (Lists). Skip everything else in Polity for now.`;
  }

  if (lowerInput.includes("economy") || lowerInput.includes("economics")) {
    const acc = subjectAccuracy["economy"] ?? 0;
    if (acc >= 70) return `Economy at ${acc}% — solid. NOW focus on Telangana-specific schemes (Rythu Bandhu, Mission Bhagiratha, Mission Kakatiya). These 6-8 questions are free marks you must not drop.`;
    if (acc >= 50) return `Economy at ${acc}% — below target. Monetary policy (Repo, CRR, SLR) and Telangana schemes are your highest ROI right now. Drop Infrastructure topics until these improve.`;
    return `Economy at ${acc}% — alarming. You're leaving 35 marks on the table. Repo rate, GDP basics, and Telangana schemes are MUST-know. Don't touch WTO or Industrial policy until the basics are solid.`;
  }

  if (lowerInput.includes("telangana") || lowerInput.includes("state")) {
    const acc = subjectAccuracy["telangana"] ?? 0;
    if (acc >= 70) return `Telangana at ${acc}% — good foundation. But Paper-IV is 150 marks. Go deeper into 1969 agitation, Mulki Rules, and all government schemes. Don't leave a single scheme un-memorized.`;
    if (acc >= 50) return `Telangana at ${acc}% — INSUFFICIENT for Paper-IV. This paper alone is 150 marks. Daily minimum: 20 Telangana questions. Focus: Movement history, AP Reorganisation Act 2014, government schemes.`;
    return `Telangana at ${acc}% — You are failing the most important paper. Paper-IV is 25% of your total marks. Stop everything else. Spend 2 hours daily ONLY on Telangana until this crosses 65%.`;
  }

  if (lowerInput.includes("history")) {
    const acc = subjectAccuracy["history"] ?? 0;
    return `History at ${acc ?? 0}%. Strategy: Modern History (1857-1947) and Telangana history are HIGH ROI. Ancient/Medieval history is LOW ROI — don't waste more than 20% of History preparation time on them.`;
  }

  if (lowerInput.includes("geography") || lowerInput.includes("geo")) {
    const acc = subjectAccuracy["geography"] ?? 0;
    return `Geography at ${acc ?? 0}%. Focus on: Telangana rivers (Godavari, Krishna projects), soil types (Black soil distribution), and irrigation projects (Kaleshwaram, Nagarjunasagar). These appear every exam.`;
  }

  if (lowerInput.includes("science") || lowerInput.includes("technology")) {
    const acc = subjectAccuracy["science"] ?? 0;
    return `Science & Tech at ${acc ?? 0}%. ISRO missions, BrahMos, and current IT developments are high-frequency. Don't study 9th/10th textbook science — focus on applications and current affairs only.`;
  }

  if (lowerInput.includes("cutoff") || lowerInput.includes("rank") || lowerInput.includes("score")) {
    if (performance.totalAttempted === 0) {
      return "No performance data yet. Start a practice session first. I cannot project your cutoff without data. Take 30 questions NOW.";
    }
    if (cutoffGap > 50) {
      return `REALITY CHECK: Based on your ${overallAccuracy}% accuracy, projected score: ~${estimatedScore}/600 marks. You are ~${cutoffGap} marks BELOW expected cutoff (300). Weak areas: ${weakSubjects.map(([s]) => s).join(", ") || "insufficient data"}. This is serious. Daily minimum: 50 questions.`;
    } else if (cutoffGap > 0) {
      return `You're close but not there. Projected: ~${estimatedScore}/600. Cutoff gap: ~${cutoffGap} marks. Strong areas: ${strongSubjects.map(([s]) => s).join(", ")}. Weak: ${weakSubjects.map(([s]) => s).join(", ")}. Tighten weak areas. 30 targeted questions daily.`;
    } else {
      return `Projected: ~${estimatedScore}/600. You're above estimated cutoff. Don't relax — maintain accuracy in ${strongSubjects.map(([s]) => s).join(", ")}. Identify any topic where you're guessing.`;
    }
  }

  if (lowerInput.includes("weak") || lowerInput.includes("problem") || lowerInput.includes("struggling")) {
    if (weakSubjects.length === 0 && performance.totalAttempted > 0) {
      return `No obvious weak subject detected (${overallAccuracy}% overall). BUT — high accuracy doesn't mean mastery. Check your time per question. Are you spending >90 seconds on any subject? That's a hidden weakness.`;
    }
    const top2Weak = weakSubjects.slice(0, 2);
    return `Current weak areas: ${top2Weak.map(([s, a]) => `${s} (${a}%)`).join(", ")}. Today's prescription: 20 PYQ questions on the weakest subject ONLY. No mixing subjects until this improves by 10%.`;
  }

  if (lowerInput.includes("plan") || lowerInput.includes("today") || lowerInput.includes("study") || lowerInput.includes("schedule")) {
    const today = new Date().toLocaleDateString('en-IN', { weekday: 'long' });
    if (weakSubjects.length > 0) {
      const weakest = weakSubjects[0];
      return `TODAY'S ORDERS (${today}):\n• 25 questions on ${weakest[0]} (weakest at ${weakest[1]}%)\n• 15 questions on Telangana schemes\n• Revise 5 questions you got wrong yesterday\n\nTime target: 45 min max. Unlock mock test only after completion.`;
    }
    return `TODAY'S ORDERS (${today}):\n• 20 Telangana Paper-IV questions\n• 15 Economy (Monetary policy + Schemes)\n• 10 Polity (Constitutional Bodies)\n\nTime target: 60 min. Focus on speed — aim for <60 sec per question.`;
  }

  if (lowerInput.includes("syllabus") || lowerInput.includes("topics") || lowerInput.includes("what to study")) {
    return `TSPSC Group-2 covers 4 main papers:\n• Paper-I: GS & General Abilities (150 marks)\n• Paper-II: History, Polity, Geography (150 marks)\n• Paper-III: Economy & Development (150 marks)\n• Paper-IV: Telangana Movement & State (150 marks)\n\nHIGHEST ROI: Telangana (Paper-IV) > Economy > Polity > History > Geography`;
  }

  if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("start") || lowerInput.includes("help")) {
    return `I am your TSPSC Group-2 exam strategy coach. No motivation. No comfort. Only data-driven decisions.\n\nI can help you with:\n• "Analyze my weak areas"\n• "What is my cutoff projection?"\n• "Give me today's study plan"\n• "How to improve in Economy?"\n• "What is the Telangana exam strategy?"\n\nStart by taking a practice quiz so I have your performance data.`;
  }

  return `Query understood. Based on your current performance (${overallAccuracy}% accuracy, ${performance.totalAttempted} questions attempted):\n\n${weakSubjects.length > 0 ? `⚠️ Weak areas: ${weakSubjects.map(([s, a]) => `${s} (${a}%)`).join(", ")}\n\n` : ""}Focus on what matters: Telangana Paper-IV, Economy schemes, and Constitutional Bodies. Ask me specifically about any subject, your cutoff, or today's plan.`;
}
