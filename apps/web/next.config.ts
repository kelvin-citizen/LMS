import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // The old Programmes page became the Learning section.
  redirects() {
    return [{ source: "/programmes", destination: "/learning", permanent: true }];
  },
  // Resolve from the monorepo root so workspace packages (e.g. @lms/types) are visible
  turbopack: {
    root: path.join(import.meta.dirname, "../.."),
  },
};

export default nextConfig;
