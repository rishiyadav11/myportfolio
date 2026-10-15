import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
}) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-4 sm:px-6 lg:px-8 ${className}`}>{children}</Tag>
  );
}
