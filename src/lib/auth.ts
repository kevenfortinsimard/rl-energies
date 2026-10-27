// Authentification et rôles.
// TODO: brancher le fournisseur d'authentification retenu (voir docs/roadmap.md, phase 0).

export type Role =
  | "admin"
  | "employe"
  | "dispatch"
  | "client_admin"
  | "client_utilisateur";

export type SessionUser = {
  id: string;
  role: Role;
  /** Compte client rattaché (null pour les employés RL) */
  compteId: string | null;
};

export async function getSessionUser(): Promise<SessionUser | null> {
  return null; // TODO
}

/** Vérifie que l'utilisateur courant a l'un des rôles donnés. */
export async function requireRole(roles: Role[]): Promise<SessionUser | null> {
  const user = await getSessionUser();
  // TODO: rediriger vers la connexion / refuser l'accès une fois l'auth en place
  if (user && !roles.includes(user.role)) {
    throw new Error("Accès refusé");
  }
  return user;
}
