export const SITE_URL = "https://www.pureplatinum.co.in";

/** Vite asset imports resolve to relative paths; OG/Twitter tags need absolute URLs. */
export function abs(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
