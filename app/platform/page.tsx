import type { Metadata } from "next";
import { PageRenderer } from "@/components/marketing";
import { pages } from "@/lib/site-content";

const page = pages["/platform"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function PlatformPage() {
  return <PageRenderer page={page} />;
}
