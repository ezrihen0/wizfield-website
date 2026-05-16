import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log In",
  description: "WIZFIELD product login transition page.",
};

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden wf-section">
      <div className="wf-hero-ambient" />
      <div className="wf-container relative z-10">
        <div className="mx-auto max-w-4xl rounded-[var(--wf-radius-xl)] p-8 text-center wf-glass-strong md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--wf-indigo)]">Log In</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.045em] text-[var(--wf-text-primary)] md:text-6xl">
            Product login routing is being connected.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[var(--wf-text-secondary)]">
            This page is a safe transition route while the final WIZFIELD product app login destination is connected. It does not perform authentication.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/pricing" className="wf-cta-primary inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold">
              Start Trial
            </Link>
            <Link href="/contact" className="wf-cta-secondary inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
