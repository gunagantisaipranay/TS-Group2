const http = require("http");
const fs = require("fs");
const path = require("path");
const { getCutoffAnalysis, getStudyRecommendations, getSkipSuggestions } = require("./src/coach");
const { getSubjects } = require("./src/subjects");

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

/**
 * Parse JSON body from an incoming request.
 */
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

/**
 * Send a JSON response.
 */
function sendJSON(res, statusCode, data) {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
}

const server = http.createServer(async (req, res) => {
  // API routes
  if (req.url === "/api/subjects" && req.method === "GET") {
    return sendJSON(res, 200, { subjects: getSubjects() });
  }

  if (req.url === "/api/analyze" && req.method === "POST") {
    try {
      const { scores, cutoff } = await parseBody(req);
      if (!scores || typeof scores !== "object") {
        return sendJSON(res, 400, { error: "scores object is required" });
      }
      const analysis = getCutoffAnalysis(scores, cutoff);
      const recommendations = getStudyRecommendations(scores);
      const skipSuggestions = getSkipSuggestions(scores);
      return sendJSON(res, 200, { analysis, recommendations, skipSuggestions });
    } catch (e) {
      return sendJSON(res, 400, { error: e.message });
    }
  }

  // Serve static files from public/
  let filePath = req.url === "/" ? "/index.html" : req.url;
  filePath = path.join(__dirname, "public", filePath);

  const ext = path.extname(filePath);
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`TS Group 2 AI Coach running at http://localhost:${PORT}`);
  });
}

module.exports = server;
