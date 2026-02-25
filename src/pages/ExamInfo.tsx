import { examInfo } from '../data/examInfo';

export default function ExamInfo() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>📅 Exam Information</h1>
        <p className="subtitle">{examInfo.fullForm}</p>
      </div>

      {/* Notification Details */}
      <div className="info-grid">
        <div className="info-card accent-card">
          <h3>📢 Notification Details</h3>
          <table className="info-table">
            <tbody>
              <tr><td>Notification No.</td><td><strong>{examInfo.notification.notificationNo}</strong></td></tr>
              <tr><td>Year</td><td><strong>{examInfo.notification.year}</strong></td></tr>
              <tr><td>Released</td><td><strong>{examInfo.notification.releaseDate}</strong></td></tr>
              <tr><td>Application Start</td><td><strong>{examInfo.notification.applicationStart}</strong></td></tr>
              <tr><td>Application End</td><td><strong>{examInfo.notification.applicationEnd}</strong></td></tr>
            </tbody>
          </table>
        </div>

        <div className="info-card">
          <h3>📝 Preliminary Exam</h3>
          <table className="info-table">
            <tbody>
              <tr><td>Date</td><td><strong>{examInfo.exam.prelims.date}</strong></td></tr>
              <tr><td>Mode</td><td><strong>{examInfo.exam.prelims.mode}</strong></td></tr>
              <tr><td>Duration</td><td><strong>{examInfo.exam.prelims.duration}</strong></td></tr>
              <tr><td>Total Marks</td><td><strong>{examInfo.exam.prelims.totalMarks}</strong></td></tr>
              <tr><td>Questions</td><td><strong>{examInfo.exam.prelims.questions}</strong></td></tr>
              <tr><td>Negative Marking</td><td><span className="badge-green">{examInfo.exam.prelims.negative}</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Main Exam Papers */}
      <h2 className="section-title">📄 Main Examination Papers</h2>
      <div className="papers-grid">
        {examInfo.exam.mains.papers.map((p, i) => (
          <div key={i} className="paper-card">
            <div className="paper-badge">{p.paper}</div>
            <h4>{p.subject}</h4>
            <div className="paper-meta">
              <span>🎯 {p.marks} marks</span>
              <span>⏱️ {p.duration}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="total-marks-banner">
        Total Mains Marks: <strong>{examInfo.exam.mains.totalMarks}</strong>
      </div>

      {/* Eligibility */}
      <h2 className="section-title">✅ Eligibility Criteria</h2>
      <div className="eligibility-grid">
        <div className="elig-card">
          <span className="elig-icon">🎂</span>
          <h4>Age</h4>
          <p>{examInfo.eligibility.age.min} – {examInfo.eligibility.age.max} years</p>
          <p className="note">{examInfo.eligibility.age.relaxation}</p>
        </div>
        <div className="elig-card">
          <span className="elig-icon">🎓</span>
          <h4>Qualification</h4>
          <p>{examInfo.eligibility.qualification}</p>
        </div>
        <div className="elig-card">
          <span className="elig-icon">🇮🇳</span>
          <h4>Nationality</h4>
          <p>{examInfo.eligibility.nationality}</p>
        </div>
        <div className="elig-card">
          <span className="elig-icon">📍</span>
          <h4>Domicile</h4>
          <p>{examInfo.eligibility.domicile}</p>
        </div>
      </div>

      {/* Posts */}
      <h2 className="section-title">💼 Available Posts</h2>
      <div className="posts-list">
        {examInfo.posts.map((post, i) => (
          <div key={i} className="post-item">
            <span className="post-num">{i + 1}</span>
            <div className="post-info">
              <span className="post-name">{post.name}</span>
              <span className="post-scale">Pay Scale: ₹{post.scale}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Cutoff */}
      <h2 className="section-title">📉 Expected Cutoff (Previous Year Trends)</h2>
      <div className="cutoff-table-wrap">
        <table className="cutoff-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Prelims (out of 150)</th>
              <th>Mains (out of 600)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>General</td><td>{examInfo.cutoff.general.prelims}</td><td>{examInfo.cutoff.general.mains}</td></tr>
            <tr><td>OBC/BC</td><td>{examInfo.cutoff.obc.prelims}</td><td>{examInfo.cutoff.obc.mains}</td></tr>
            <tr><td>SC</td><td>{examInfo.cutoff.sc.prelims}</td><td>{examInfo.cutoff.sc.mains}</td></tr>
            <tr><td>ST</td><td>{examInfo.cutoff.st.prelims}</td><td>{examInfo.cutoff.st.mains}</td></tr>
          </tbody>
        </table>
        <p className="note">{examInfo.cutoff.note}</p>
      </div>

      {/* Important Links */}
      <h2 className="section-title">🔗 Important Links</h2>
      <div className="links-grid">
        {examInfo.importantLinks.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="link-card">
            <span>🔗 {link.label}</span>
            <span className="link-arrow">→</span>
          </a>
        ))}
      </div>
    </div>
  );
}
