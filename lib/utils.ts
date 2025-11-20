import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose className strings conditionally and resolve Tailwind conflicts.
 *
 * This combines:
 * - clsx: to conditionally include class names
 * - tailwind-merge: to deduplicate and resolve conflicting Tailwind utilities
 *
 * Example:
 *   cn("p-2", isActive && "bg-blue-500", "p-4") // => "bg-blue-500 p-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
