// Vérification de santé (utilisée par l'hébergeur / la surveillance)
export function GET() {
  return Response.json({ status: "ok" });
}
