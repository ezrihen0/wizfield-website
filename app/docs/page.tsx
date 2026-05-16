import { redirect } from "next/navigation";

const docsUrl = "https://docs.wizfield.com";

export default function DocsPage() {
  redirect(docsUrl);
}
