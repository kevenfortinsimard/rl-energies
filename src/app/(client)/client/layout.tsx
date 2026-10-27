import type { ReactNode } from "react";
import { requireRole } from "@/lib/auth";

// Espace client flotte — chaque client ne voit que son compte
export default async function ClientLayout({ children }: { children: ReactNode }) {
  await requireRole(["client_admin", "client_utilisateur"]);
  return <section>{children}</section>;
}
