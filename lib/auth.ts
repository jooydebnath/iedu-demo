"use client";

/** Tiny client-side auth helper. Sets a cookie that the middleware reads. */
const COOKIE = "iedu_auth";
const STORAGE = "iedu_user";

export function login(user: { name?: string; phone?: string } = {}) {
  // 7-day cookie
  const days = 7;
  const expires = new Date(Date.now() + days * 86400 * 1000).toUTCString();
  document.cookie = `${COOKIE}=1; path=/; expires=${expires}; SameSite=Lax`;
  try {
    localStorage.setItem(STORAGE, JSON.stringify(user));
  } catch {}
}

export function logout() {
  document.cookie = `${COOKIE}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  try {
    localStorage.removeItem(STORAGE);
  } catch {}
}

export function isAuthed() {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${COOKIE}=1`));
}

export function getUser(): { name?: string; phone?: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
