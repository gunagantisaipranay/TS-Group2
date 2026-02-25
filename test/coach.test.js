const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const {
  getCutoffAnalysis,
  getStudyRecommendations,
  getSkipSuggestions,
  DEFAULT_CUTOFF,
} = require("../src/coach");

describe("getCutoffAnalysis", () => {
  it("should return 'below' when scores are below cutoff", () => {
    const scores = { paper1: 50, paper2: 50, paper3: 50, paper4: 50 };
    const result = getCutoffAnalysis(scores);
    assert.equal(result.totalScore, 200);
    assert.equal(result.status, "below");
    assert.ok(result.difference < 0);
  });

  it("should return 'safe' when scores are well above cutoff", () => {
    const scores = { paper1: 130, paper2: 130, paper3: 130, paper4: 130 };
    const result = getCutoffAnalysis(scores);
    assert.equal(result.totalScore, 520);
    assert.equal(result.status, "safe");
    assert.ok(result.difference >= 50);
  });

  it("should return 'borderline' when scores are just above cutoff", () => {
    const scores = { paper1: 90, paper2: 80, paper3: 80, paper4: 80 };
    const result = getCutoffAnalysis(scores);
    assert.equal(result.totalScore, 330);
    assert.equal(result.status, "borderline");
  });

  it("should use custom cutoff when provided", () => {
    const scores = { paper1: 100, paper2: 100, paper3: 100, paper4: 100 };
    const result = getCutoffAnalysis(scores, 500);
    assert.equal(result.cutoff, 500);
    assert.equal(result.status, "below");
  });

  it("should cap scores at subject max marks", () => {
    const scores = { paper1: 200, paper2: 200, paper3: 200, paper4: 200 };
    const result = getCutoffAnalysis(scores);
    assert.equal(result.totalScore, 600); // capped at 150 each
  });

  it("should handle missing scores as zero", () => {
    const scores = { paper1: 100 };
    const result = getCutoffAnalysis(scores);
    assert.equal(result.totalScore, 100);
  });

  it("should handle empty scores", () => {
    const result = getCutoffAnalysis({});
    assert.equal(result.totalScore, 0);
    assert.equal(result.status, "below");
  });
});

describe("getStudyRecommendations", () => {
  it("should return recommendations for all subjects", () => {
    const scores = { paper1: 50, paper2: 100, paper3: 30, paper4: 120 };
    const recs = getStudyRecommendations(scores);
    assert.equal(recs.length, 4);
  });

  it("should mark low-scoring subjects as 'focus'", () => {
    const scores = { paper1: 30, paper2: 30, paper3: 30, paper4: 30 };
    const recs = getStudyRecommendations(scores);
    for (const rec of recs) {
      assert.equal(rec.action, "focus");
    }
  });

  it("should mark high-scoring subjects as 'maintain'", () => {
    const scores = { paper1: 140, paper2: 140, paper3: 140, paper4: 140 };
    const recs = getStudyRecommendations(scores);
    for (const rec of recs) {
      assert.equal(rec.action, "maintain");
    }
  });

  it("should sort by priority descending", () => {
    const scores = { paper1: 50, paper2: 100, paper3: 30, paper4: 120 };
    const recs = getStudyRecommendations(scores);
    for (let i = 1; i < recs.length; i++) {
      assert.ok(recs[i - 1].priority >= recs[i].priority);
    }
  });
});

describe("getSkipSuggestions", () => {
  it("should put high-scoring subjects in canSkip", () => {
    const scores = { paper1: 140, paper2: 40, paper3: 40, paper4: 40 };
    const result = getSkipSuggestions(scores);
    assert.equal(result.canSkip.length, 1);
    assert.equal(result.canSkip[0].subjectId, "paper1");
  });

  it("should put low-scoring subjects in mustStudy", () => {
    const scores = { paper1: 40, paper2: 40, paper3: 40, paper4: 40 };
    const result = getSkipSuggestions(scores);
    assert.equal(result.canSkip.length, 0);
    assert.equal(result.mustStudy.length, 4);
  });

  it("should include topics in suggestions", () => {
    const scores = { paper1: 140, paper2: 140, paper3: 140, paper4: 140 };
    const result = getSkipSuggestions(scores);
    assert.equal(result.canSkip.length, 4);
    for (const skip of result.canSkip) {
      assert.ok(Array.isArray(skip.topics));
      assert.ok(skip.topics.length > 0);
    }
  });
});

describe("DEFAULT_CUTOFF", () => {
  it("should be a reasonable number", () => {
    assert.ok(typeof DEFAULT_CUTOFF === "number");
    assert.ok(DEFAULT_CUTOFF > 0);
    assert.ok(DEFAULT_CUTOFF <= 600);
  });
});
