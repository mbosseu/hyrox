import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { pageSeo } from "@/lib/seo";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = pageSeo({
  title: "HYROX Toulouse",
  absoluteTitle: "HYROX Toulouse | Guide et entraînement",
  description: SITE_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
