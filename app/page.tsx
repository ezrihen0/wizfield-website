import type { Metadata } from "next";
import { PageRenderer } from "@/components/marketing";
import { homePage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Field-Service Operating System",
  description: homePage.description,
};

export default function Home() {
  return <PageRenderer page={homePage} />;
}
