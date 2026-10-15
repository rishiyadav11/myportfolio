import type { MDXComponents } from "mdx/types";
import Link from "next/link";

// Required by @next/mdx. Article typography comes from the .prose wrapper.
const components: MDXComponents = {
  a: ({ href = "", ...props }) =>
    href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
