import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "body" | "small";
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
  style,
}) => {
  const Component = variant.startsWith("h")
    ? (variant as "h1" | "h2" | "h3")
    : "p";

  return (
    <Component
      className={`${styles.typography} ${styles[variant]} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};
