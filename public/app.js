document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("score-form");
  const subjectFields = document.getElementById("subject-fields");
  const resultsSection = document.getElementById("results");

  // Load subjects and build form
  const subjectsRes = await fetch("/api/subjects");
  const { subjects } = await subjectsRes.json();

  for (const subject of subjects) {
    const row = document.createElement("div");
    row.className = "form-row";
    row.innerHTML = `
      <label for="${subject.id}">${subject.name} (max ${subject.totalMarks}):</label>
      <input type="number" id="${subject.id}" name="${subject.id}"
             placeholder="0" min="0" max="${subject.totalMarks}" />
    `;
    subjectFields.appendChild(row);
  }

  // Handle form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const scores = {};
    for (const subject of subjects) {
      const val = document.getElementById(subject.id).value;
      scores[subject.id] = val ? parseInt(val, 10) : 0;
    }

    const cutoffInput = document.getElementById("cutoff").value;
    const body = { scores };
    if (cutoffInput) body.cutoff = parseInt(cutoffInput, 10);

    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    renderResults(data);
  });

  function renderResults({ analysis, recommendations, skipSuggestions }) {
    resultsSection.classList.remove("hidden");

    // Cutoff analysis
    const cutoffDiv = document.getElementById("cutoff-result");
    cutoffDiv.className = `result-block status-${analysis.status}`;
    const statusMsg = {
      safe: "✅ You are above the cutoff! Keep it up!",
      borderline: "⚠️ You are close to the cutoff. Push a little harder!",
      below: "🔴 You are below the cutoff. Time to focus!",
    };
    cutoffDiv.innerHTML = `
      <h4>${statusMsg[analysis.status]}</h4>
      <p><strong>Your Total:</strong> ${analysis.totalScore} / ${analysis.totalPossible}</p>
      <p><strong>Cutoff:</strong> ${analysis.cutoff}</p>
      <p><strong>Difference:</strong> ${analysis.difference >= 0 ? "+" : ""}${analysis.difference} marks</p>
      <div class="progress-bar">
        <div class="fill" style="width: ${Math.min((analysis.totalScore / analysis.totalPossible) * 100, 100)}%; background: ${analysis.status === "safe" ? "#38a169" : analysis.status === "borderline" ? "#d69e2e" : "#e53e3e"}"></div>
      </div>
    `;

    // Recommendations
    const recsDiv = document.getElementById("recommendations");
    recsDiv.innerHTML = recommendations
      .map(
        (r) => `
      <div class="recommendation-item action-${r.action}">
        <h4>${r.action === "focus" ? "🔴" : r.action === "improve" ? "🟡" : "🟢"} ${r.subjectName}</h4>
        <p class="score-info">Score: ${r.currentScore}/${r.maxMarks} (${r.percentage}%) — ${r.action === "focus" ? "Needs focused study" : r.action === "improve" ? "Room for improvement" : "Maintain with revision"}</p>
        <div class="progress-bar">
          <div class="fill" style="width: ${r.percentage}%; background: ${r.action === "focus" ? "#e53e3e" : r.action === "improve" ? "#d69e2e" : "#38a169"}"></div>
        </div>
      </div>
    `
      )
      .join("");

    // Skip suggestions
    const skipDiv = document.getElementById("skip-suggestions");
    if (skipSuggestions.canSkip.length === 0) {
      skipDiv.innerHTML = '<p class="hint">No subjects to skip yet — keep studying all topics!</p>';
    } else {
      skipDiv.innerHTML = skipSuggestions.canSkip
        .map(
          (s) => `
        <div class="topic-list">
          <h4>✅ ${s.subjectName}</h4>
          <p class="reason">${s.reason}</p>
          <ul>${s.topics.map((t) => `<li>${t}</li>`).join("")}</ul>
        </div>
      `
        )
        .join("");
    }

    // Must study
    const mustDiv = document.getElementById("must-study");
    mustDiv.innerHTML = skipSuggestions.mustStudy
      .map(
        (s) => `
      <div class="topic-list">
        <h4>📖 ${s.subjectName}</h4>
        <p class="reason">${s.reason}</p>
        <ul>${s.topics.map((t) => `<li>${t}</li>`).join("")}</ul>
      </div>
    `
      )
      .join("");

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" });
  }
});
