import Image from "next/image";
import Link from "next/link";
import { NAV, SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2">
        <div>
          <Image
            src="/logo.webp"
            alt="HYROX Toulouse"
            width={160}
            height={110}
            className="mb-4 h-14 w-auto bg-white p-1"
            sizes="160px"
          />
          <p className="text-sm text-white/70">{SITE_TAGLINE}</p>
          <p className="mt-3 text-sm text-white/70">Guide éditorial du HYROX à Toulouse.</p>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Pages</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm text-white/80 sm:block sm:space-y-2">
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
