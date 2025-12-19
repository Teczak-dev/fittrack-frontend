import { useState } from "react";
import { validatePassword } from "../utils/validation";

export function useResetPasswordForm(handleReset: (password: string) => void) {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordBlur = () => {
    const validation = validatePassword(password);
    if (!validation.isValid)
      setPasswordError(validation.error || "Hasło musi mieć minimum 6 znaków");
    else setPasswordError("");
  };

  const handleSecondPasswordBlur = () => {
    const validation = validatePassword(password2);
    if (!validation.isValid)
      setPasswordError(validation.error || "Hasło musi mieć minimum 6 znaków");
    else setPasswordError("");
  };

  const handleSubmit = () => {
    const v1 = validatePassword(password);
    const v2 = validatePassword(password2);
    if (!v1.isValid || !v2.isValid || password !== password2) {
      setPasswordError(
        v1.error || "Hasła muszą być identyczne i mieć minimum 6 znaków",
      );
      return;
    }
    handleReset(password);
  };

  return {
    password,
    password2,
    passwordError,
    setPassword,
    setPassword2,
    handlePasswordBlur,
    handleSecondPasswordBlur,
    handleSubmit,
  };
}
