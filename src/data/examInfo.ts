export const examInfo = {
  name: "TSPSC Group-2 (Services)",
  fullForm: "Telangana State Public Service Commission Group-2",
  notification: {
    year: "2024",
    notificationNo: "02/2024",
    releaseDate: "March 2024",
    applicationStart: "April 1, 2024",
    applicationEnd: "May 15, 2024",
  },
  exam: {
    prelims: {
      name: "Preliminary Examination",
      date: "To be notified",
      mode: "Offline (OMR-based)",
      duration: "2 hours",
      totalMarks: 150,
      questions: 150,
      negative: "No negative marking",
    },
    mains: {
      name: "Main Examination",
      date: "To be notified",
      mode: "Offline (OMR-based)",
      papers: [
        { paper: "Paper-I", subject: "General Studies & General Abilities", marks: 150, duration: "2.5 hours" },
        { paper: "Paper-II", subject: "History, Polity & Society", marks: 150, duration: "2.5 hours" },
        { paper: "Paper-III", subject: "Economy & Development", marks: 150, duration: "2.5 hours" },
        { paper: "Paper-IV", subject: "Telangana Movement & State Formation", marks: 150, duration: "2.5 hours" },
      ],
      totalMarks: 600,
    }
  },
  eligibility: {
    age: { min: 18, max: 44, relaxation: "SC/ST/BC: 5 years extra, Ex-servicemen: 3 years" },
    qualification: "Bachelor's Degree from a recognized university",
    nationality: "Indian",
    domicile: "Telangana State",
  },
  posts: [
    { name: "Municipal Commissioner Gr-III / Revenue Divisional Officer", scale: "27100-87140" },
    { name: "Senior Accountant / Junior Accountant", scale: "26600-86920" },
    { name: "Mandal Revenue Inspector", scale: "26600-86920" },
    { name: "Extension Officer (Co-op)", scale: "26600-86920" },
    { name: "Child Development Project Officer", scale: "35120-87130" },
    { name: "Assistant Audit Officer", scale: "35120-87130" },
  ],
  cutoff: {
    general: { prelims: "~65-70 marks", mains: "~320-340 marks" },
    obc: { prelims: "~60-65 marks", mains: "~300-320 marks" },
    sc: { prelims: "~55-60 marks", mains: "~280-300 marks" },
    st: { prelims: "~50-55 marks", mains: "~260-280 marks" },
    note: "Based on previous year trends. Actual cutoff varies by vacancies.",
  },
  importantLinks: [
    { label: "TSPSC Official Website", url: "https://tspsc.gov.in" },
    { label: "Notification PDF", url: "https://tspsc.gov.in/notifications" },
    { label: "Apply Online", url: "https://tspsc.gov.in/apply" },
    { label: "Syllabus PDF", url: "https://tspsc.gov.in/syllabus" },
  ]
};
