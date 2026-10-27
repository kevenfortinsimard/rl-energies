import type { ReactNode } from "react";
import { requireRole } from "@/lib/auth";

// Outil interne — réservé à l'équipe RL Énergies
export default async function InterneLayout({ children }: { children: ReactNode }) {
  await requireRole(["admin", "employe", "dispatch"]);
  return <section>{children}</section>;
}
