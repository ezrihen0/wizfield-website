import type { Metadata } from "next";
import { PageRenderer } from "@/components/marketing";
import { pages } from "@/lib/site-content";

const page = pages["/growth-center"];

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
};

export default function GrowthCenterPage() {
  return <PageRenderer page={page} />;
}
