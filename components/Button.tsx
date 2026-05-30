import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "solid" | "ghost";
}

/** Brutalist button — solid ink by default, outlined "ghost" variant. */
export default function Button({ children, variant = "solid", ...rest }: ButtonProps) {
  const cls = "btn" + (variant === "ghost" ? " btn--ghost" : "");
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
