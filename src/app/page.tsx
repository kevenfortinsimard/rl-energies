import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>RL-Station</h1>
      <ul>
        <li><Link href="/client">Espace client</Link></li>
        <li><Link href="/interne">Outil interne</Link></li>
      </ul>
    </main>
  );
}
