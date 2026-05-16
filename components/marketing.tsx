"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import type { Cta, PageContent, Section, Visual } from "@/lib/site-content";
import { navItems, pages, primaryCta } from "@/lib/site-content";

const loginUrl = "https://app.wizfield.com";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--wf-border-faint)] bg-[rgba(248,250,252,0.82)] backdrop-blur-xl">
      <div className="wf-container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="WIZFIELD home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl wf-glass text-lg font-black text-[var(--wf-indigo)] shadow-[var(--wf-glow-cyan)]">
            W
          </span>
          <span className="text-lg font-black tracking-[0.18em] text-[var(--wf-text-primary)]">WIZFIELD</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[var(--wf-text-secondary)] transition hover:text-[var(--wf-indigo)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href={loginUrl} className="text-sm font-semibold text-[var(--wf-text-secondary)] transition hover:text-[var(--wf-indigo)]">
            Log In
          </Link>
          <CtaButton cta={primaryCta} />
        </div>
        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-[var(--wf-border-faint)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--wf-indigo)]">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 grid w-72 gap-2 rounded-3xl p-4 wf-glass-strong">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-3 py-2 font-semibold text-[var(--wf-text-primary)] hover:bg-white/70">
                {item.label}
              </Link>
            ))}
            <Link href={loginUrl} className="rounded-2xl px-3 py-2 font-semibold text-[var(--wf-text-primary)] hover:bg-white/70">
              Log In
            </Link>
            <CtaButton cta={primaryCta} className="w-full" />
          </div>
        </details>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  const groups = [
    {
      title: "Product",
      links: [
        ["Platform", "/platform"],
        ["AI", "/ai"],
        ["Growth Center", "/growth-center"],
        ["Language Store", "/language-store"],
        ["Multi-Business", "/multi-business"],
        ["Features", "/features"],
      ],
    },
    {
      title: "Company / Conversion",
      links: [
        ["Pricing", "/pricing"],
        ["Contact", "/contact"],
        ["Start Trial", "/pricing"],
        ["Log In", loginUrl],
      ],
    },
    {
      title: "Resources",
      links: [["Docs", "https://docs.wizfield.com"]],
    },
  ];

  return (
    <footer className="border-t border-[var(--wf-border-faint)] bg-white/40 py-14">
      <div className="wf-container grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl wf-glass text-base font-black text-[var(--wf-indigo)]">W</span>
            <span className="font-black tracking-[0.18em]">WIZFIELD</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-[var(--wf-text-secondary)]">
            The intelligent operating system for field-service businesses.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 text-sm font-bold text-[var(--wf-text-primary)]">{group.title}</h2>
              <ul className="grid gap-3">
                {group.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-[var(--wf-text-secondary)] transition hover:text-[var(--wf-indigo)]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="wf-container mt-10 border-t border-[var(--wf-border-faint)] pt-6 text-sm text-[var(--wf-text-muted)]">
        WIZFIELD marketing website implementation pass. Terms and Privacy destinations remain owner inputs.
      </div>
    </footer>
  );
}

export function CtaButton({ cta, className }: { cta: Cta; className?: string }) {
  const variant = cta.variant ?? "secondary";
  return (
    <Link
      href={cta.href}
      className={cx(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[rgba(99,102,241,0.22)]",
        variant === "primary" && "wf-cta-primary",
        variant === "secondary" && "wf-cta-secondary",
        variant === "text" && "text-[var(--wf-indigo)]",
        className,
      )}
    >
      {cta.label}
    </Link>
  );
}

export function PageRenderer({ page }: { page: PageContent }) {
  return (
    <>
      {page.sections.map((section, index) => (
        <MarketingSection key={`${page.slug}-${section.title}-${index}`} section={section} index={index} />
      ))}
    </>
  );
}

function MarketingSection({ section, index }: { section: Section; index: number }) {
  const isHero = section.variant === "hero";
  const isCta = section.variant === "cta";
  const split = isHero || section.variant === "split" || section.variant === "form";

  return (
    <section
      id={section.id ?? (index === 2 ? "platform-thesis" : undefined)}
      className={cx("relative overflow-hidden", isHero ? "wf-section" : isCta ? "py-20" : "wf-section-tight")}
    >
      {(isHero || isCta) && <div className="wf-hero-ambient" />}
      <div className={cx(isHero ? "wf-wide-container" : "wf-container", "relative z-10")}>
        <div className={cx(split ? "grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]" : "mx-auto max-w-5xl text-center")}>
          <div className={cx(!split && "mx-auto max-w-3xl")}>
            {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
            {isHero ? (
              <h1
                className={cx(
                  "mt-4 font-black tracking-[-0.045em] text-[var(--wf-text-primary)]",
                  "text-5xl leading-[0.98] md:text-7xl",
                )}
              >
                {section.title}
              </h1>
            ) : (
              <h2
                className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] text-[var(--wf-text-primary)] md:text-5xl"
              >
                {section.title}
              </h2>
            )}
            {section.body && <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--wf-text-secondary)]">{section.body}</p>}
            {section.bullets && <BulletList bullets={section.bullets} />}
            {section.flow && <FlowRail steps={section.flow} />}
            {section.ctas && (
              <div className={cx("mt-7 flex flex-col gap-3 sm:flex-row", !split && "justify-center")}>
                {section.ctas.map((cta) => (
                  <CtaButton key={`${cta.label}-${cta.href}`} cta={cta} />
                ))}
              </div>
            )}
          </div>

          {section.variant === "form" ? <ContactFormPanel /> : section.visual ? <AssetPlaceholder visual={section.visual} large={isHero} /> : null}
        </div>

        {section.items && section.variant !== "pricing" && <CardGrid items={section.items} />}
        {section.variant === "pricing" && <PricingCards />}
      </div>
    </section>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--wf-indigo)]">{children}</p>;
}

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="mt-6 grid gap-3 text-left">
      {bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3 text-[var(--wf-text-secondary)]">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--wf-cyan)] shadow-[var(--wf-glow-cyan)]" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function CardGrid({ items }: { items: NonNullable<Section["items"]> }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.title}-${item.body}`} className="rounded-[var(--wf-radius-lg)] p-6 wf-panel transition duration-200 hover:-translate-y-1">
          {item.meta && <p className="mb-3 inline-flex rounded-full bg-[rgba(99,102,241,0.08)] px-3 py-1 text-xs font-bold text-[var(--wf-indigo)]">{item.meta}</p>}
          <h3 className="text-xl font-extrabold tracking-tight text-[var(--wf-text-primary)]">{item.title}</h3>
          <p className="mt-3 leading-7 text-[var(--wf-text-secondary)]">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function FlowRail({ steps }: { steps: string[] }) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {steps.map((step, index) => (
        <div key={`${step}-${index}`} className="flex items-center gap-3">
          <span className="rounded-full border border-[var(--wf-border-faint)] bg-white/75 px-4 py-2 text-sm font-bold text-[var(--wf-text-primary)] shadow-sm">
            {step}
          </span>
          {index < steps.length - 1 && <span className="hidden h-px w-7 bg-[var(--wf-indigo)] opacity-25 sm:block" />}
        </div>
      ))}
    </div>
  );
}

function AssetPlaceholder({ visual, large = false }: { visual: Visual; large?: boolean }) {
  return (
    <div className={cx("relative rounded-[var(--wf-radius-xl)] p-5 wf-glass-strong", large ? "min-h-[430px]" : "min-h-[300px]")}>
      <div className="absolute inset-5 rounded-[calc(var(--wf-radius-xl)-8px)] border border-[var(--wf-border-faint)] bg-[var(--wf-gradient-soft)] opacity-60" />
      <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between rounded-[var(--wf-radius-lg)] border border-white/80 bg-white/70 p-5">
        <div>
          <p className="mb-3 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[var(--wf-indigo)]">
            Asset Placeholder
          </p>
          <h2 className="text-2xl font-black tracking-tight text-[var(--wf-text-primary)]">{visual.title}</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--wf-text-secondary)]">{visual.summary}</p>
        </div>
        <div className="mt-8 grid gap-3">
          <div className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 p-4">
            <code className="break-all text-xs font-bold text-[var(--wf-indigo)]">{visual.id}</code>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <span className="h-16 rounded-2xl bg-white/80 shadow-sm" />
            <span className="h-16 rounded-2xl bg-white/70 shadow-sm" />
            <span className="h-16 rounded-2xl bg-white/60 shadow-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCards() {
  const plans = [
    { title: "Starter", meta: "1 business", price: "[PRICE TBD — OWNER INPUT REQUIRED]", body: "For one service business getting organized in one operating system.", cta: "Start Trial" },
    { title: "Pro", meta: "Up to 3 businesses", price: "[PRICE TBD — OWNER INPUT REQUIRED]", body: "For growing operators who need more room, more capability, and up to three businesses.", cta: "Start Trial", featured: true },
    { title: "Business", meta: "Contact Sales", price: "Contact Sales", body: "For larger or more complex operators that need expanded structure and sales-assisted setup.", cta: "Contact Sales" },
  ];

  return (
    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.title}
          className={cx(
            "rounded-[var(--wf-radius-lg)] p-6 wf-panel",
            plan.featured && "ring-2 ring-[rgba(99,102,241,0.24)] shadow-[var(--wf-glow-cyan)]",
          )}
        >
          {plan.featured && <p className="mb-4 inline-flex rounded-full bg-[rgba(99,102,241,0.1)] px-3 py-1 text-xs font-black text-[var(--wf-indigo)]">Recommended for growing teams</p>}
          <h3 className="text-2xl font-black">{plan.title}</h3>
          <p className="mt-3 text-sm font-bold text-[var(--wf-indigo)]">{plan.meta}</p>
          <p className="mt-3 text-2xl font-black tracking-tight">{plan.price}</p>
          <p className="mt-4 leading-7 text-[var(--wf-text-secondary)]">{plan.body}</p>
          <CtaButton cta={{ label: plan.cta, href: plan.cta === "Contact Sales" ? "/contact" : "/pricing", variant: plan.cta === "Contact Sales" ? "secondary" : "primary" }} className="mt-6 w-full" />
        </article>
      ))}
    </div>
  );
}

function ContactFormPanel() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Form submission wiring will be connected before launch. No inquiry has been sent yet.");
  }

  return (
    <form className="rounded-[var(--wf-radius-xl)] p-6 wf-panel" onSubmit={handleSubmit}>
      <p id="contact-form-note" className="mb-4 text-sm font-bold text-[var(--wf-indigo)]">
        First-pass form UI. Backend destination remains an owner input, and this form will not send until wiring is connected.
      </p>
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Name
          <input className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="name" type="text" autoComplete="name" aria-describedby="contact-form-note" placeholder="Enter your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Work Email
          <input className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="email" type="email" autoComplete="email" placeholder="Enter your work email" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Company / Business Name
          <input className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="company" type="text" autoComplete="organization" placeholder="Enter your company or business name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Phone
          <input className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone number" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Inquiry Type
          <select className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="inquiryType" defaultValue="">
            <option value="" disabled>
              Select an inquiry type
            </option>
            <option>Business Plan Interest</option>
            <option>Multi-Business Operation</option>
            <option>Larger Team / Setup Question</option>
            <option>Partnership Inquiry</option>
            <option>Product Question</option>
            <option>Other Commercial Inquiry</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Number of Businesses / Workspaces
          <input className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="businessCount" type="text" placeholder="Enter number of businesses or workspaces" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Approximate Team Size
          <input className="rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="teamSize" type="text" placeholder="Enter approximate team size" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--wf-text-primary)]">
          Message
          <textarea className="min-h-32 rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 px-4 py-3 text-sm font-normal text-[var(--wf-text-primary)]" name="message" placeholder="Tell us what you are trying to evaluate or solve." />
        </label>
      </div>
      {status && (
        <p className="mt-5 rounded-2xl border border-[var(--wf-border-faint)] bg-white/80 p-4 text-sm font-semibold text-[var(--wf-text-secondary)]">
          {status}
        </p>
      )}
      <button type="submit" className="mt-6 w-full wf-cta-primary inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[rgba(99,102,241,0.22)]">
        Send Inquiry
      </button>
    </form>
  );
}

export function getPage(path: keyof typeof pages) {
  return pages[path];
}
