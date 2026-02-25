# TS Group 2 AI Coach

🎓 AI Coach that tells TSPSC Group 2 aspirants what to study, what to skip, and how far they are from the cutoff.

## Features

- **Cutoff Analysis** — Enter your scores and see how far you are from the cutoff
- **Study Recommendations** — Get prioritized recommendations on which subjects to focus on
- **Skip Suggestions** — Know which topics you can safely deprioritize
- **Topic Breakdown** — See the full list of must-study topics per subject

## Getting Started

```bash
# Clone the repository
git clone https://github.com/gunagantisaipranay/TS-Group2.git
cd TS-Group2

# Start the server
npm start

# Open http://localhost:3000 in your browser
```

## Running Tests

```bash
npm test
```

## Project Structure

```
├── server.js            # HTTP server with API routes
├── src/
│   ├── subjects.js      # TS Group 2 exam subject data & syllabus
│   └── coach.js         # AI Coach logic (cutoff, recommendations, skip suggestions)
├── public/
│   ├── index.html       # Web interface
│   ├── style.css        # Styling
│   └── app.js           # Frontend logic
└── test/
    ├── subjects.test.js # Subject data tests
    └── coach.test.js    # Coach logic tests
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/subjects` | Get all subjects with topics and marks |
| POST | `/api/analyze` | Analyze scores — returns cutoff analysis, recommendations, and skip suggestions |

## Tech Stack

- **Backend:** Node.js (built-in `http` module, zero dependencies)
- **Frontend:** Vanilla HTML, CSS, JavaScript
- **Testing:** Node.js built-in test runner
