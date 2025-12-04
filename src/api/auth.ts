import type { User } from "../types/user";
const headers = { "Content-Type": "application/json" };

export const safeParseJSON = async (response: Response) => {
    const text = await response.text();
    return text ? JSON.parse(text) : {};
};

export const login = async (email: string, password: string): Promise<void> => {
    const response = await fetch("/api/users/login", {
	method: "POST",
	headers,
	body: JSON.stringify({ email, password }),
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || "Server error");
    if (data.token) localStorage.setItem("token", data.token);
};

export const register = async (
    name: string,
    email: string,
    password: string,
): Promise<void> => {
    const response = await fetch("/api/users/register", {
	method: "POST",
	headers,
	body: JSON.stringify({ name, email, password }),
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || "Server error");
    return data.message;
};

export const forgotPassword = async (email: string): Promise<void> => {
    const response = await fetch('/api/users/forgot-password',{
	method: 'POST',
	headers,
	body: JSON.stringify({ email })
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || 'Server error');

}
export const resetPassword = async (token: string, newPassword: string): Promise<void> => {
    const response = await fetch(`/api/users/reset-password/${token}`, {
	method: 'POST',
	headers,
	body: JSON.stringify({ newPassword })
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || 'Server error');
}


export const getProfile = async (): Promise<User> => {
    const token = localStorage.getItem("token");
    const response = await fetch("/api/users/me", {
	headers: {
	Authorization: `Bearer ${token}`,
	...headers,
	},
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || "Server error");
    return data;
};

export const logout = (): void => {
    localStorage.removeItem("token");
};
