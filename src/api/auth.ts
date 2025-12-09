import type { User } from "../types/user";
import { safeParseJSON } from "../utils/safeParseJson";
const headers = { "Content-Type": "application/json" };

export const login = async (email: string, password: string): Promise<void> => {
    const response = await fetch("/api/users/login", {
	method: "POST",
	headers,
	body: JSON.stringify({ email, password }),
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || "Server error");
    if (data.token) localStorage.setItem("token", data.token);
    return data;
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
    return data;

}
export const resetPassword = async (newPassword: string, token: string): Promise<void> => {
    if (!token) throw new Error('Missing reset token');
    const response = await fetch(`/api/users/reset-password/${token}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ newPassword })
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || 'Server error');
    return data;
}

export const changePassword = async (oldPassword: string, newPassword: string): Promise<void> => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error('Not authenticated');
    const response = await fetch('/api/users/change-password', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${token}`,
        ...headers,
    },
    body: JSON.stringify({ oldPassword, newPassword })
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || 'Server error');
    return data;
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


// delete and resend email verification

export const resendVerificationEmail = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch('/api/users/resend-verification', {
	method: 'POST',
	headers: {
	    Authorization: `Bearer ${token}`,
	    ...headers,
	},
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || 'Server error');
    return data;
}

export const deleteAccount = async (password:string) => {
    const token = localStorage.getItem("token");
    const response = await fetch('/api/users/me',{
    	method: 'DELETE',
	headers: {
	    Authorization: `Bearer ${token}`,
	    ...headers,
	},
	body: JSON.stringify({ password }),
    });
    const data = await safeParseJSON(response);
    if (!response.ok) throw new Error(data.message || 'Server error');
    return data;
}
