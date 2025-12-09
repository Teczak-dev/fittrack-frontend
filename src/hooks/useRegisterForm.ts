import { useReducer } from 'react';
import { validateEmail, validatePassword, validateUsername, validatePasswordConfirm } from '../utils/validation';
import { registerReducer, initialRegisterState } from '../reducers/registerFormReducer';
import type { RegisterState } from '../reducers/registerFormReducer';

// Simple explicit union for fields — easier to read than `keyof Omit<...>`
type RegisterField = 'username' | 'email' | 'password' | 'confirmPassword';

type RegisterFn = (email: string, pass: string, username: string) => void;

export const useRegisterForm = (onRegister: RegisterFn) => {
  const [state, dispatch] = useReducer(registerReducer, initialRegisterState);

  const setField = (field: RegisterField, value: string) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  const handleEmailBlur = () => {
    const emailValidation = validateEmail(state.email);
    if (!emailValidation.isValid) {
      dispatch({ type: 'SET_ERROR', field: 'email', error: emailValidation.error || 'Podaj poprawny email' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'email', error: undefined });
    }
  };

  const handlePasswordBlur = () => {
    const passwordValidation = validatePassword(state.password);
    if (!passwordValidation.isValid) {
      dispatch({ type: 'SET_ERROR', field: 'password', error: passwordValidation.error || 'Hasło musi mieć minimum 6 znaków' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'password', error: undefined });
    }
  };

  const handleConfirmBlur = () => {
    const confirmValidation = validatePasswordConfirm(state.password, state.confirmPassword);
    if (!confirmValidation.isValid) {
      dispatch({ type: 'SET_ERROR', field: 'confirm', error: confirmValidation.error || 'Hasła nie są identyczne' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'confirm', error: undefined });
    }
  };

  const handleUsernameBlur = () => {
    const usernameValidation = validateUsername(state.username);
    if (!usernameValidation.isValid) {
      dispatch({ type: 'SET_ERROR', field: 'username', error: usernameValidation.error || 'Nazwa musi mieć minimum 3 znaki' });
    } else {
      dispatch({ type: 'SET_ERROR', field: 'username', error: undefined });
    }
  };

  const handleSubmit = () => {
    const emailValidation = validateEmail(state.email);
    const passwordValidation = validatePassword(state.password);
    const usernameValidation = validateUsername(state.username);
    const confirmValidation = validatePasswordConfirm(state.password, state.confirmPassword);

    const errors: RegisterState['errors'] = {};
    let hasErrors = false;
    if (!emailValidation.isValid) {
      errors.email = emailValidation.error || 'Podaj poprawny email';
      hasErrors = true;
    }
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.error || 'Hasło musi mieć minimum 6 znaków';
      hasErrors = true;
    }
    if (!usernameValidation.isValid) {
      errors.username = usernameValidation.error || 'Nazwa musi mieć minimum 3 znaki';
      hasErrors = true;
    }
    if (!confirmValidation.isValid) {
      errors.confirm = confirmValidation.error || 'Hasła nie są identyczne';
      hasErrors = true;
    }

    if (hasErrors) {
      dispatch({ type: 'SET_ERRORS', errors });
      return;
    }

    onRegister(state.email, state.password, state.username);
  };

  return {
    state,
    setField,
    handleEmailBlur,
    handlePasswordBlur,
    handleConfirmBlur,
    handleUsernameBlur,
    handleSubmit,
    reset: () => dispatch({ type: 'RESET' }),
  };
};
