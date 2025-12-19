import type React from "react";
import styles from "./ListElement.module.css";

export const ListElement: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <li className={`${styles.ListElement} ${className}`}>{children}</li>;
};
