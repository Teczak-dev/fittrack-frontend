export type RegisterState = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  errors: {
    username?: string;
    email?: string;
    password?: string;
    confirm?: string;
  };
};

// Define the fields that can be updated in the register form
export type RegisterField =
  | "username"
  | "email"
  | "password"
  | "confirmPassword";

// Define the actions that can be dispatched to the reducer
export type RegisterAction =
  | { type: "SET_FIELD"; field: RegisterField; value: string }
  | { type: "SET_ERROR"; field: keyof RegisterState["errors"]; error?: string }
  | { type: "SET_ERRORS"; errors: Partial<RegisterState["errors"]> }
  | { type: "RESET" };

export const initialRegisterState: RegisterState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: {},
};

// Simple, readable reducer — each case does a small, obvious state update.
export function registerReducer(
  state: RegisterState,
  action: RegisterAction,
): RegisterState {
  if (action.type === "SET_FIELD") {
    return { ...state, [action.field]: action.value } as RegisterState;
  }
  if (action.type === "SET_ERROR") {
    return {
      ...state,
      errors: { ...state.errors, [action.field]: action.error },
    };
  }
  if (action.type === "SET_ERRORS") {
    return { ...state, errors: { ...state.errors, ...action.errors } };
  }
  if (action.type === "RESET") {
    return initialRegisterState;
  }
  return state;
}
