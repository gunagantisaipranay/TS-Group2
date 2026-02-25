const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { getSubjects, getSubjectById, getTotalMarks } = require("../src/subjects.cjs");

describe("subjects", () => {
  it("should return all subjects", () => {
    const subjects = getSubjects();
    assert.ok(Array.isArray(subjects));
    assert.equal(subjects.length, 4);
  });

  it("each subject should have required fields", () => {
    const subjects = getSubjects();
    for (const subject of subjects) {
      assert.ok(subject.id, "subject should have an id");
      assert.ok(subject.name, "subject should have a name");
      assert.ok(typeof subject.totalMarks === "number", "totalMarks should be a number");
      assert.ok(typeof subject.weight === "number", "weight should be a number");
      assert.ok(Array.isArray(subject.topics), "topics should be an array");
      assert.ok(subject.topics.length > 0, "topics should not be empty");
    }
  });

  it("should get a subject by ID", () => {
    const subject = getSubjectById("paper1");
    assert.ok(subject);
    assert.equal(subject.name, "General Studies & Mental Ability");
  });

  it("should return undefined for unknown ID", () => {
    const subject = getSubjectById("unknown");
    assert.equal(subject, undefined);
  });

  it("should calculate total marks correctly", () => {
    const total = getTotalMarks();
    assert.equal(total, 600); // 150 * 4
  });
});
