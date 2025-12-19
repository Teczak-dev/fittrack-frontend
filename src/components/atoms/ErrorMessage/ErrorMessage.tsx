import React from "react";
import styles from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message?: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  className = "",
}) => {
  if (!message) return null;

  return <div className={`${styles.errorMessage} ${className}`}>{message}</div>;
};
