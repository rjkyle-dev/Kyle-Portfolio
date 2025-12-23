import { serve } from "bun";
import { file } from "bun";
import { join, extname } from "path";
import { existsSync, statSync, readFileSync } from "fs";

const rootDir = join(import.meta.dir, "..");
const indexFile = file(join(rootDir, "index.html"));

// MIME type mapping
const mimeTypes: Record<string, string> = {
  ".js": "application/javascript",
  ".jsx": "application/javascript",
  ".ts": "application/typescript",
  ".tsx": "application/typescript",
  ".json": "application/json",
  ".css": "text/css",
  ".html": "text/html",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
};

function getMimeType(filePath: string): string {
  const ext = extname(filePath).toLowerCase();
  return mimeTypes[ext] || "application/octet-stream";
}

const server = serve({
  async fetch(req) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    // Handle API routes
    if (pathname.startsWith("/api/hello")) {
      if (pathname === "/api/hello") {
        if (req.method === "GET" || req.method === "PUT") {
          return Response.json({
            message: "Hello, world!",
            method: req.method,
          });
        }
      } else if (pathname.startsWith("/api/hello/")) {
        const name = pathname.split("/api/hello/")[1];
        return Response.json({
          message: `Hello, ${name}!`,
        });
      }
    }

    // Serve index.html for root path
    if (pathname === "/") {
      return new Response(indexFile, {
        headers: { "Content-Type": "text/html" },
      });
    }

    // Try to serve static files from src/ or public/ directories
    const possiblePaths = [
      join(rootDir, pathname.slice(1)), // Remove leading slash (e.g., /src/main.jsx -> src/main.jsx)
      join(rootDir, "public", pathname.slice(1)), // Public assets
      join(rootDir, "src", pathname.replace(/^\/src\//, "")), // src files
    ];

    for (const filePath of possiblePaths) {
      if (existsSync(filePath)) {
        const stats = statSync(filePath);
        // Only serve if it's a file, not a directory
        if (stats.isFile()) {
          const mimeType = getMimeType(filePath);
          const fileContent = readFileSync(filePath);
          
          // For JSX/TSX files, Bun will automatically transform them
          // But we need to serve them with the correct MIME type
          return new Response(fileContent, {
            headers: {
              "Content-Type": mimeType,
            },
          });
        }
      }
    }

    // Fall back to index.html for SPA routing
    return new Response(indexFile, {
      headers: { "Content-Type": "text/html" },
    });
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
