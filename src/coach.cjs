/**
 * AI Coach logic for TS Group 2 exam preparation.
 *
 * Provides study recommendations, skip suggestions, and cutoff analysis.
 */

const { getSubjects, getSubjectById, getTotalMarks } = require("./subjects.cjs");

/** Default previous-year cutoff marks (can be updated) */
const DEFAULT_CUTOFF = 320;

/**
 * Calculate the distance from cutoff based on user scores.
 *
 * @param {Object} scores - Map of subject ID to user's score
 * @param {number} [cutoff] - Target cutoff marks (default: DEFAULT_CUTOFF)
 * @returns {Object} Analysis with totalScore, cutoff, difference, and status
 */
function getCutoffAnalysis(scores, cutoff = DEFAULT_CUTOFF) {
  const subjects = getSubjects();
  let totalScore = 0;

  for (const subject of subjects) {
    const score = scores[subject.id];
    if (typeof score === "number" && score >= 0) {
      totalScore += Math.min(score, subject.totalMarks);
    }
  }

  const difference = totalScore - cutoff;
  let status;
  if (difference >= 50) {
    status = "safe";
  } else if (difference >= 0) {
    status = "borderline";
  } else {
    status = "below";
  }

  return {
    totalScore,
    cutoff,
    difference,
    status,
    totalPossible: getTotalMarks(),
  };
}

/**
 * Get study recommendations based on user scores.
 * Prioritizes subjects where the user has the most room for improvement,
 * weighted by the subject's importance.
 *
 * @param {Object} scores - Map of subject ID to user's score
 * @returns {Array} Ordered list of recommendations with subject info and priority
 */
function getStudyRecommendations(scores) {
  const subjects = getSubjects();
  const recommendations = [];

  for (const subject of subjects) {
    const score = typeof scores[subject.id] === "number" ? scores[subject.id] : 0;
    const maxMarks = subject.totalMarks;
    const percentage = (score / maxMarks) * 100;
    const gap = maxMarks - score;
    // Priority: higher weight subjects with larger gaps get higher priority
    const priority = gap * subject.weight;

    let action;
    if (percentage >= 80) {
      action = "maintain";
    } else if (percentage >= 50) {
      action = "improve";
    } else {
      action = "focus";
    }

    recommendations.push({
      subjectId: subject.id,
      subjectName: subject.name,
      currentScore: score,
      maxMarks,
      percentage: Math.round(percentage),
      gap,
      priority,
      action,
    });
  }

  // Sort by priority descending (highest gap * weight first)
  recommendations.sort((a, b) => b.priority - a.priority);
  return recommendations;
}

/**
 * Get topics that can be skipped or deprioritized.
 * Topics in subjects where the user already scores well can be skipped.
 *
 * @param {Object} scores - Map of subject ID to user's score
 * @returns {Object} Topics categorized as "canSkip" and "mustStudy"
 */
function getSkipSuggestions(scores) {
  const subjects = getSubjects();
  const canSkip = [];
  const mustStudy = [];

  for (const subject of subjects) {
    const score = typeof scores[subject.id] === "number" ? scores[subject.id] : 0;
    const percentage = (score / subject.totalMarks) * 100;

    if (percentage >= 80) {
      // These topics can be deprioritized
      canSkip.push({
        subjectId: subject.id,
        subjectName: subject.name,
        topics: subject.topics,
        reason: `Already scoring ${Math.round(percentage)}% - maintain with light revision`,
      });
    } else {
      mustStudy.push({
        subjectId: subject.id,
        subjectName: subject.name,
        topics: subject.topics,
        reason:
          percentage < 50
            ? `Only ${Math.round(percentage)}% - needs focused study`
            : `${Math.round(percentage)}% - room for improvement`,
      });
    }
  }

  return { canSkip, mustStudy };
}

module.exports = {
  getCutoffAnalysis,
  getStudyRecommendations,
  getSkipSuggestions,
  DEFAULT_CUTOFF,
};
