"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV, OFFICIAL_HYROX_URL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="container-page flex items-center justify-between gap-4 py-2">
        <Link href="/hyrox-toulouse" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="HYROX Toulouse"
            width={220}
            height={150}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={OFFICIAL_HYROX_URL}
          className="hidden rounded-sm bg-brand px-3 py-2 text-xs font-extrabold uppercase tracking-wide text-white hover:bg-red-700 lg:inline-flex"
        >
          S&apos;entraîner au club
        </a>
        <button
          type="button"
          className="rounded-sm border border-black px-3 py-2 text-xs font-bold uppercase lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-bold uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={OFFICIAL_HYROX_URL}
              className="mt-2 rounded-sm bg-brand px-3 py-3 text-center text-sm font-extrabold uppercase text-white"
            >
              S&apos;entraîner au club
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
