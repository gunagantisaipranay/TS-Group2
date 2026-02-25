/**
 * TS Group 2 exam subject data and syllabus configuration.
 *
 * Each subject includes:
 * - name: Subject name
 * - totalMarks: Maximum marks for the subject
 * - weight: Importance weight (1-5) for study prioritization
 * - topics: List of topics within the subject
 */

const subjects = [
  {
    id: "paper1",
    name: "General Studies & Mental Ability",
    totalMarks: 150,
    weight: 5,
    topics: [
      "Indian History",
      "Indian Geography",
      "Indian Economy",
      "Indian Polity & Constitution",
      "Physical Science",
      "Biological Science",
      "Disaster Management",
      "Mental Ability & Reasoning",
      "Current Affairs",
    ],
  },
  {
    id: "paper2",
    name: "History, Polity & Society",
    totalMarks: 150,
    weight: 4,
    topics: [
      "History of Modern India",
      "History of Telangana",
      "Indian National Movement",
      "Telangana Movement",
      "Indian Constitution",
      "Governance in India",
      "Social Structure",
      "Social Issues",
    ],
  },
  {
    id: "paper3",
    name: "Economy, Development & Planning",
    totalMarks: 150,
    weight: 4,
    topics: [
      "Indian Economy",
      "Telangana Economy",
      "Economic Development",
      "Planning in India",
      "Poverty & Unemployment",
      "Banking & Finance",
      "International Trade",
      "Sustainable Development",
    ],
  },
  {
    id: "paper4",
    name: "Telangana Movement & State Formation",
    totalMarks: 150,
    weight: 3,
    topics: [
      "Telangana History & Culture",
      "Telangana Movement Phases",
      "State Formation",
      "Telangana Society",
      "Telangana Economy",
      "Telangana Geography",
      "Telangana Governance",
    ],
  },
];

/**
 * Get all subjects.
 * @returns {Array} List of all subjects
 */
function getSubjects() {
  return subjects;
}

/**
 * Get a subject by its ID.
 * @param {string} id - Subject ID
 * @returns {object|undefined} Subject object or undefined if not found
 */
function getSubjectById(id) {
  return subjects.find((s) => s.id === id);
}

/**
 * Get the total maximum marks across all subjects.
 * @returns {number} Total marks
 */
function getTotalMarks() {
  return subjects.reduce((sum, s) => sum + s.totalMarks, 0);
}

module.exports = { getSubjects, getSubjectById, getTotalMarks };
