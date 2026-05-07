import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;

const distPath = path.join(__dirname, "user/client/dist");

// Serve static assets with long-lived cache headers
app.use(
  "/assets",
  express.static(path.join(distPath, "assets"), {
    maxAge: "1y",
    immutable: true,
  })
);

// Serve all other static files
app.use(express.static(distPath));

// SPA fallback — all routes return index.html
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`GMU Commerce Alumni running on port ${PORT}`);
});
