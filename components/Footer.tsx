import Image from "next/image";
import Link from "next/link";
import { NAV, SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2">
        <div>
          <Image src="/logo.png" alt="HYROX Toulouse" width={200} height={140} className="mb-4 h-16 w-auto bg-white p-1" />
          <p className="text-sm text-white/70">{SITE_TAGLINE}</p>
          <p className="mt-3 text-sm text-white/70">Guide éditorial du HYROX à Toulouse.</p>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Pages</h2>
          <ul className="space-y-2 text-sm text-white/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/programme-entrainement-hyrox" className="hover:text-white">
                Programme
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
