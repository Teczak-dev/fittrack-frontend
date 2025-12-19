import type { User } from "../types/user";
import { safeParseJSON } from "../utils/safeParseJson";

// Common headers for JSON requests
const headers = { "Content-Type": "application/json" };

// Login function
// Sends email and password to the server and stores the returned token
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

// Register function
// Sends name, email, and password to the server to create a new user
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

// Forgot password function
// Sends email to the server to initiate password reset process
export const forgotPassword = async (email: string): Promise<void> => {
  const response = await fetch("/api/users/forgot-password", {
    method: "POST",
    headers,
    body: JSON.stringify({ email }),
  });
  const data = await safeParseJSON(response);
  if (!response.ok) throw new Error(data.message || "Server error");
  return data;
};

// Reset password function
// Sends new password and reset token to the server to update the password
export const resetPassword = async (
  newPassword: string,
  token: string,
): Promise<void> => {
  if (!token) throw new Error("Missing reset token");
  const response = await fetch(`/api/users/reset-password/${token}`, {
    method: "POST",
    headers,
    body: JSON.stringify({ newPassword }),
  });
  const data = await safeParseJSON(response);
  if (!response.ok) throw new Error(data.message || "Server error");
  return data;
};

// Change password function
// Sends old and new passwords to the server to update the password for authenticated user
export const changePassword = async (
  oldPassword: string,
  newPassword: string,
): Promise<void> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Not authenticated");
  const response = await fetch("/api/users/change-password", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify({ oldPassword, newPassword }),
  });
  const data = await safeParseJSON(response);
  if (!response.ok) throw new Error(data.message || "Server error");
  return data;
};

// Get profile function
// Retrieves the profile of the authenticated user
export const getProfile = async (): Promise<User> => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
  });
  const data = await safeParseJSON(response);
  if (!response.ok) {
    const err: any = new Error(data.message || "Server error");
    err.status = response.status;
    throw err;
  }
  return data as User;
};

// Logout function
export const logout = (): void => {
  localStorage.removeItem("token");
};

// Resend verification email function
// Sends a request to resend the verification email to the authenticated user
export const resendVerificationEmail = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/users/resend-verification", {
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

// Delete account function
// Sends password to the server to delete the authenticated user's account
export const deleteAccount = async (password: string) => {
  const token = localStorage.getItem("token");
  const response = await fetch("/api/users/me", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      ...headers,
    },
    body: JSON.stringify({ password }),
  });
  const data = await safeParseJSON(response);
  if (!response.ok) throw new Error(data.message || "Server error");
  return data;
};
