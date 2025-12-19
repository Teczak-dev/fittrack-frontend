import { safeParseJSON } from "../utils/safeParseJson";

// Common headers for JSON requests
const headers = { "Content-Type": "application/json" };

// Check streak function
// Sends a request to check and update the user's streak
export const checkStreak = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/streak/check-me", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
  const data = await safeParseJSON(response);
  if (!response.ok) throw new Error(data.message || "Server error");
  return data;
};

// Get streak function
// Retrieves the current user's streak from the server
export const getStreak = async (): Promise<number> => {
  checkStreak();
  const token = localStorage.getItem("token");
  const response = await fetch("/api/streak/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
  const data = await safeParseJSON(response);
  if (!response.ok) throw new Error(data.message || "Server error");
  return data.stored_streak;
};
