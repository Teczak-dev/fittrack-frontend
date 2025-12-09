import { safeParseJSON } from "../utils/safeParseJson";

const headers = { "Content-Type": "application/json" };

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
}

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
}
