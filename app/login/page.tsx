import { redirect } from "next/navigation";

const loginUrl = "https://app.wizfield.com";

export default function LoginPage() {
  redirect(loginUrl);
}
