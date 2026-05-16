"use client";

import { useState, type CSSProperties, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Cta, PageContent, Section, Visual } from "@/lib/site-content";
import { navItems, pages, primaryCta } from "@/lib/site-content";
import wizfieldLogo from "../wizfield.logo.png";

const loginUrl = "https://app.wizfield.com/login";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--wf-border-faint)] bg-[rgba(248,250,252,0.82)] backdrop-blur-xl">
      <div className="wf-container flex min-h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="WIZFIELD home">
          <BrandLogo variant="header" />
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
      links: [["Docs", "https://docs.wizfield.com/"]],
    },
  ];

  return (
    <footer className="border-t border-[var(--wf-border-faint)] bg-white/40 py-14">
      <div className="wf-container grid gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BrandLogo variant="footer" />
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

function BrandLogo({ variant }: { variant: "header" | "footer" }) {
  return (
    <span
      className={cx(
        "relative block overflow-hidden",
        variant === "header" ? "h-9 w-40 sm:h-10 sm:w-52" : "h-9 w-40",
      )}
    >
      <Image
        src={wizfieldLogo}
        alt="WIZFIELD"
        fill
        priority={variant === "header"}
        sizes={variant === "header" ? "(min-width: 640px) 208px, 160px" : "160px"}
        className="object-cover object-center"
      />
    </span>
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

  if (isCta && section.visual?.id === "wf-home-final-cta-w-motif") {
    return <HomeFinalCtaSection section={section} />;
  }

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
  const visualComponent = renderNativeVisual(visual, large);

  if (visualComponent) {
    return visualComponent;
  }

  return <UniversalVisual visual={visual} large={large} />;
}

function renderNativeVisual(visual: Visual, large: boolean) {
  switch (visual.id) {
    case "wf-home-hero-operating-system-composite":
      return <HeroOperatingSystemComposite large={large} />;
    case "wf-home-platform-system-map":
      return <PlatformSystemMapVisual />;
    case "wf-home-product-dashboard-preview":
      return <ProductDashboardPreview />;
    case "wf-home-ai-business-brain-preview-card":
      return <AiIntelligenceCardSet />;
    case "wf-home-growth-center-flow-visual":
      return <GrowthCenterFlowVisual />;
    case "wf-home-multibusiness-workspace-switcher":
      return <MultiBusinessSwitcherVisual />;
    case "wf-home-operational-journey-rail":
      return <OperationalJourneyRail />;
    default:
      return null;
  }
}

function NativeVisualShell({ children, className, label }: { children: ReactNode; className?: string; label: string }) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-[var(--wf-radius-xl)] border border-white/85 bg-white/72 p-4 shadow-[var(--wf-shadow-soft)] backdrop-blur-2xl",
        className,
      )}
      aria-label={label}
    >
      <div aria-hidden className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[rgba(0,240,255,0.2)] blur-3xl" />
      <div aria-hidden className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[rgba(112,0,255,0.16)] blur-3xl" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function MiniStatusDot({ tone = "cyan" }: { tone?: "cyan" | "violet" | "indigo" }) {
  const color =
    tone === "violet"
      ? "bg-[var(--wf-violet)] shadow-[var(--wf-glow-violet)]"
      : tone === "indigo"
        ? "bg-[var(--wf-indigo)]"
        : "bg-[var(--wf-cyan)] shadow-[var(--wf-glow-cyan)]";

  return <span aria-hidden className={cx("mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", color)} />;
}

function ProductShell({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  const nav = ["Home", "Customers", "Jobs", "Estimates", "Invoices", "Calls", "Marketing"];

  return (
    <div className="rounded-[calc(var(--wf-radius-xl)-6px)] border border-[var(--wf-border-faint)] bg-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <div className="flex items-center justify-between gap-3 border-b border-[var(--wf-border-faint)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[rgba(255,0,122,0.58)]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[rgba(99,102,241,0.5)]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[rgba(0,240,255,0.65)]" aria-hidden />
        </div>
        <p className="rounded-full border border-[var(--wf-border-faint)] bg-white/78 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[var(--wf-indigo)]">
          WIZFIELD
        </p>
      </div>
      <div className={cx("grid", compact ? "gap-3 p-3" : "gap-4 p-4 sm:grid-cols-[0.34fr_1fr]")}>
        <div className={cx("rounded-3xl border border-[var(--wf-border-faint)] bg-[rgba(248,250,252,0.78)] p-3", compact && "hidden sm:block")}>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-text-muted)]">Navigation</p>
          <div className="grid gap-2">
            {nav.map((item, index) => (
              <span
                key={item}
                className={cx(
                  "rounded-2xl px-3 py-2 text-xs font-bold",
                  index === 0 ? "bg-white text-[var(--wf-indigo)] shadow-sm" : "text-[var(--wf-text-secondary)]",
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

function HeroOperatingSystemComposite({ large }: { large: boolean }) {
  const cards = [
    ["Today's Jobs", "Route and job context visible"],
    ["Recent Calls", "Lead and customer signal attached"],
    ["Estimates Awaiting Review", "Operator review queue"],
    ["Unpaid Invoice Follow-up", "Verify before acting"],
  ];

  return (
    <NativeVisualShell label="Homepage hero operating system composite" className={cx("min-h-[430px]", large && "lg:min-h-[520px]")}>
      <div aria-hidden className="absolute left-8 top-10 hidden h-[78%] w-[84%] rounded-[2rem] border border-[rgba(0,240,255,0.22)] lg:block" />
      <div aria-hidden className="absolute right-10 top-16 hidden h-px w-24 bg-[var(--wf-gradient-core)] lg:block" />
      <ProductShell>
        <div className="grid gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--wf-indigo)]">Home</p>
              <h3 className="mt-1 text-xl font-black tracking-tight text-[var(--wf-text-primary)]">Operating Dashboard</h3>
            </div>
            <div className="rounded-2xl border border-[rgba(0,240,255,0.22)] bg-white/82 px-3 py-2 text-xs font-bold text-[var(--wf-text-secondary)] shadow-sm">
              Active workspace: North Ridge Services
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {cards.map(([title, body], index) => (
              <div key={title} className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <MiniStatusDot tone={index % 2 ? "violet" : "cyan"} />
                  <div>
                    <p className="text-sm font-black text-[var(--wf-text-primary)]">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-[var(--wf-text-secondary)]">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProductShell>
      <div className="mt-4 grid gap-3 lg:-mt-10 lg:grid-cols-4">
        {[
          ["Business Brain", "3 operating signals need review"],
          ["Operator Copilot", "Draft ready for review"],
          ["Growth Center", "Opportunity → Draft"],
          ["Workspace cue", "Active organization switcher"],
        ].map(([title, body], index) => (
          <div key={title} className="rounded-3xl border border-white/80 bg-white/78 p-4 shadow-[var(--wf-shadow-card)] backdrop-blur-xl">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">{title}</p>
            <p className="mt-2 text-sm font-bold leading-5 text-[var(--wf-text-primary)]">{body}</p>
            <div className="mt-3 h-1.5 rounded-full bg-[rgba(99,102,241,0.12)]">
              <span className={cx("block h-full rounded-full bg-[var(--wf-gradient-core)]", index === 3 ? "w-2/3" : "w-4/5")} />
            </div>
          </div>
        ))}
      </div>
    </NativeVisualShell>
  );
}

function PlatformSystemMapVisual() {
  const modules = ["Calls & Intake", "Customers & Leads", "Jobs", "Estimates & Invoices", "Messaging", "Reports", "Portal", "Growth Center", "Workspace Control"];

  return (
    <NativeVisualShell label="Homepage platform system map" className="min-h-[360px]">
      <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr_1fr] lg:items-center">
        <div className="grid gap-3">
          {modules.slice(0, 4).map((module) => (
            <SystemMapNode key={module}>{module}</SystemMapNode>
          ))}
        </div>
        <div className="relative mx-auto grid h-44 w-44 place-items-center rounded-full border border-[rgba(0,240,255,0.28)] bg-white/86 shadow-[var(--wf-glow-cyan)]">
          <div aria-hidden className="absolute inset-5 rounded-full border border-[rgba(112,0,255,0.18)]" />
          <div aria-hidden className="absolute -left-12 top-1/2 hidden h-px w-12 bg-[var(--wf-gradient-core)] lg:block" />
          <div aria-hidden className="absolute -right-12 top-1/2 hidden h-px w-12 bg-[var(--wf-gradient-core)] lg:block" />
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">WIZFIELD</p>
            <p className="mt-2 text-lg font-black tracking-tight text-[var(--wf-text-primary)]">Operating Hub</p>
          </div>
        </div>
        <div className="grid gap-3">
          {modules.slice(4).map((module) => (
            <SystemMapNode key={module}>{module}</SystemMapNode>
          ))}
        </div>
      </div>
    </NativeVisualShell>
  );
}

function SystemMapNode({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-3xl border border-[var(--wf-border-faint)] bg-white/82 p-3 text-left shadow-sm">
      <MiniStatusDot />
      <span className="text-sm font-bold text-[var(--wf-text-primary)]">{children}</span>
    </div>
  );
}

function ProductDashboardPreview() {
  return (
    <NativeVisualShell label="Homepage product dashboard preview" className="min-h-[360px]">
      <ProductShell>
        <div className="grid gap-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--wf-indigo)]">Today</p>
              <h3 className="mt-1 text-xl font-black tracking-tight text-[var(--wf-text-primary)]">Customer Context</h3>
            </div>
            <p className="rounded-full bg-[rgba(0,240,255,0.12)] px-3 py-1 text-xs font-bold text-[var(--wf-indigo)]">Next action visible</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Jobs", "Field work and schedule context"],
              ["Recent Calls", "Call notes stay attached"],
              ["Estimate Follow-up", "Review before customer action"],
              ["Unpaid Invoice", "Workspace-scoped attention"],
            ].map(([title, body]) => (
              <div key={title} className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm">
                <p className="text-sm font-black text-[var(--wf-text-primary)]">{title}</p>
                <p className="mt-2 text-xs leading-5 text-[var(--wf-text-secondary)]">{body}</p>
                <div className="mt-4 h-2 rounded-full bg-[rgba(99,102,241,0.1)]">
                  <span className="block h-full w-3/5 rounded-full bg-[var(--wf-gradient-core)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProductShell>
    </NativeVisualShell>
  );
}

function AiIntelligenceCardSet() {
  return (
    <NativeVisualShell label="Homepage AI intelligence card set" className="min-h-[320px]">
      <div className="grid gap-4 lg:grid-cols-3">
        <BusinessBrainPreviewCard />
        <OperatorCopilotDraftCard />
        <VoicePilotCapsule />
      </div>
    </NativeVisualShell>
  );
}

function BusinessBrainPreviewCard() {
  return (
    <article data-asset-id="wf-home-ai-business-brain-preview-card" className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">Business Brain</p>
      <h3 className="mt-2 text-xl font-black tracking-tight text-[var(--wf-text-primary)]">3 operating signals need review</h3>
      <div className="mt-4 grid gap-3">
        {["Unpaid invoice focus", "Stale estimate", "Follow-up reminder"].map((signal) => (
          <div key={signal} className="flex items-center gap-3 rounded-2xl bg-[rgba(248,250,252,0.85)] p-3">
            <MiniStatusDot />
            <span className="text-sm font-semibold text-[var(--wf-text-secondary)]">{signal}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 rounded-full bg-[rgba(99,102,241,0.1)] px-3 py-2 text-center text-xs font-black text-[var(--wf-indigo)]">Verify before acting</p>
    </article>
  );
}

function OperatorCopilotDraftCard() {
  return (
    <article data-asset-id="wf-home-ai-operator-copilot-draft-card" className="rounded-3xl border border-[rgba(0,240,255,0.22)] bg-white/84 p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">Operator Copilot</p>
      <h3 className="mt-2 text-xl font-black tracking-tight text-[var(--wf-text-primary)]">Draft ready for review</h3>
      <div className="mt-4 rounded-3xl border border-[var(--wf-border-faint)] bg-[rgba(248,250,252,0.86)] p-4">
        <p className="text-xs font-bold text-[var(--wf-text-muted)]">SMS draft</p>
        <p className="mt-2 text-sm leading-6 text-[var(--wf-text-primary)]">Hi, this is a follow-up on your service request. Please review and edit before sending.</p>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-[var(--wf-text-secondary)]">Human review required</span>
        <span className="rounded-full border border-[var(--wf-border-faint)] bg-white px-3 py-1.5 text-xs font-black text-[var(--wf-indigo)]">Review draft</span>
      </div>
    </article>
  );
}

function VoicePilotCapsule() {
  return (
    <article data-asset-id="wf-home-voice-intake-pilot-capsule" className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">Voice Intake Intelligence — Pilot</p>
      <div className="mt-4 rounded-full border border-[rgba(0,240,255,0.22)] bg-[rgba(0,240,255,0.08)] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-black text-[var(--wf-text-primary)]">Inbound call capsule</span>
          <span aria-hidden className="h-3 w-3 rounded-full bg-[var(--wf-cyan)] shadow-[var(--wf-glow-cyan)]" />
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        {["Script-bound handling", "Escalate to human"].map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-[rgba(248,250,252,0.86)] p-3">
            <MiniStatusDot tone="violet" />
            <span className="text-sm font-semibold text-[var(--wf-text-secondary)]">{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function GrowthCenterFlowVisual() {
  return (
    <NativeVisualShell label="Homepage Growth Center flow visual" className="min-h-[320px]">
      <FlowVisual
        steps={["Signal", "Opportunity", "Draft", "Campaign", "Publish Job", "Internal Analytics"]}
        footnote="Publishing is explicit. Analytics are internal funnel signals, not ad ROI."
      />
    </NativeVisualShell>
  );
}

function OperationalJourneyRail() {
  return (
    <NativeVisualShell label="Homepage operational journey rail" className="mx-auto mt-10 min-h-[260px] max-w-6xl">
      <FlowVisual steps={["Call / Lead", "Customer", "Job", "Estimate", "Approval", "Invoice", "Follow-up", "Growth Opportunity"]} />
    </NativeVisualShell>
  );
}

function FlowVisual({ steps, footnote }: { steps: string[]; footnote?: string }) {
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-[repeat(var(--step-count),minmax(0,1fr))]" style={{ "--step-count": steps.length } as CSSProperties}>
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm">
            {index < steps.length - 1 && <span aria-hidden className="absolute left-full top-1/2 hidden h-px w-3 bg-[var(--wf-gradient-core)] md:block" />}
            <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-text-muted)]">Step {index + 1}</p>
            <p className="mt-2 text-sm font-black text-[var(--wf-text-primary)]">{step}</p>
          </div>
        ))}
      </div>
      {footnote && <p className="mt-5 rounded-2xl bg-white/72 px-4 py-3 text-sm font-semibold text-[var(--wf-text-secondary)]">{footnote}</p>}
    </div>
  );
}

function MultiBusinessSwitcherVisual() {
  return (
    <NativeVisualShell label="Homepage multi-business workspace switcher" className="min-h-[340px]">
      <div className="grid gap-4 lg:grid-cols-[0.45fr_1fr]">
        <div className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">Active workspace</p>
          <div className="mt-4 grid gap-3">
            {["North Ridge Services", "Eastside HVAC", "Summit Field Co."].map((workspace, index) => (
              <div
                key={workspace}
                className={cx(
                  "rounded-2xl border p-3 text-sm font-bold",
                  index === 0 ? "border-[rgba(0,240,255,0.3)] bg-[rgba(0,240,255,0.1)] text-[var(--wf-text-primary)]" : "border-[var(--wf-border-faint)] bg-white/72 text-[var(--wf-text-secondary)]",
                )}
              >
                {workspace}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs font-semibold leading-5 text-[var(--wf-text-muted)]">Switching is explicit. Business records stay separated.</p>
        </div>
        <div className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">North Ridge Services</p>
              <h3 className="mt-1 text-xl font-black tracking-tight text-[var(--wf-text-primary)]">Workspace dashboard</h3>
            </div>
            <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[var(--wf-indigo)]">Context refreshed</span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Customers", "Jobs", "Invoices"].map((label) => (
              <div key={label} className="rounded-2xl border border-[var(--wf-border-faint)] bg-[rgba(248,250,252,0.84)] p-3">
                <p className="text-sm font-black text-[var(--wf-text-primary)]">{label}</p>
                <p className="mt-2 text-xs leading-5 text-[var(--wf-text-secondary)]">Active workspace only</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </NativeVisualShell>
  );
}

function HomeFinalCtaSection({ section }: { section: Section }) {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="wf-hero-ambient" />
      <div className="wf-container relative z-10">
        <div className="relative overflow-hidden rounded-[var(--wf-radius-xl)] border border-white/85 bg-white/78 px-6 py-14 text-center shadow-[var(--wf-shadow-soft)] backdrop-blur-2xl md:px-12">
          <FinalCtaWizfieldMotif />
          <div className="relative z-10 mx-auto max-w-3xl">
            {section.eyebrow && <SectionEyebrow>{section.eyebrow}</SectionEyebrow>}
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.045em] text-[var(--wf-text-primary)] md:text-5xl">{section.title}</h2>
            {section.body && <p className="mt-5 text-lg leading-8 text-[var(--wf-text-secondary)]">{section.body}</p>}
            {section.ctas && (
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                {section.ctas.map((cta) => (
                  <CtaButton key={`${cta.label}-${cta.href}`} cta={cta} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaWizfieldMotif() {
  const nodes = [
    ["12%", "22%"],
    ["25%", "66%"],
    ["40%", "34%"],
    ["52%", "68%"],
    ["66%", "34%"],
    ["78%", "66%"],
    ["90%", "22%"],
  ];

  return (
    <div data-asset-id="wf-home-final-cta-w-motif" className="absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.18),transparent_35%),radial-gradient(circle_at_72%_24%,rgba(112,0,255,0.14),transparent_34%)]" />
      <svg className="absolute inset-x-0 top-1/2 h-52 w-full -translate-y-1/2 opacity-70" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polyline points="12,22 25,66 40,34 52,68 66,34 78,66 90,22" fill="none" stroke="url(#homeWGradient)" strokeWidth="1.1" />
        <defs>
          <linearGradient id="homeWGradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(0,240,255,0.65)" />
            <stop offset="52%" stopColor="rgba(99,102,241,0.48)" />
            <stop offset="100%" stopColor="rgba(112,0,255,0.6)" />
          </linearGradient>
        </defs>
      </svg>
      {nodes.map(([left, top], index) => (
        <span
          key={`${left}-${top}`}
          className={cx(
            "absolute h-3 w-3 rounded-full border border-white bg-[var(--wf-cyan)] shadow-[var(--wf-glow-cyan)]",
            index % 2 === 0 && "bg-[var(--wf-violet)] shadow-[var(--wf-glow-violet)]",
          )}
          style={{ left, top }}
        />
      ))}
    </div>
  );
}

function UniversalVisual({ visual, large = false }: { visual: Visual; large?: boolean }) {
  const id = visual.id;
  const category = getVisualCategory(id);

  if (id.includes("final-cta") || visual.kind === "motif") {
    return <UniversalMotifVisual visual={visual} />;
  }

  if (visual.kind === "flow" || id.includes("flow") || id.includes("rail") || id.includes("diagram") || id.includes("map")) {
    return <UniversalFlowVisual visual={visual} large={large} category={category} />;
  }

  if (visual.kind === "mockup") {
    return <UniversalMockupVisual visual={visual} large={large} category={category} />;
  }

  if (visual.kind === "cards" || visual.kind === "trust") {
    return <UniversalCardVisual visual={visual} large={large} category={category} />;
  }

  return <UniversalCardVisual visual={visual} large={large} category={category} />;
}

function getVisualCategory(id: string) {
  if (id.includes("ai")) return "ai";
  if (id.includes("growth")) return "growth";
  if (id.includes("language")) return "language";
  if (id.includes("multibusiness")) return "multi-business";
  if (id.includes("pricing")) return "pricing";
  if (id.includes("features")) return "features";
  if (id.includes("contact")) return "contact";
  if (id.includes("platform")) return "platform";
  if (id.includes("docs")) return "docs";
  return "home";
}

function UniversalVisualHeader({ visual, eyebrow }: { visual: Visual; eyebrow: string }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--wf-indigo)]">{eyebrow}</p>
      <h3 className="mt-2 text-xl font-black tracking-tight text-[var(--wf-text-primary)]">{visual.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--wf-text-secondary)]">{visual.summary}</p>
    </div>
  );
}

function UniversalFlowVisual({ visual, large, category }: { visual: Visual; large: boolean; category: string }) {
  const steps = getFlowSteps(visual.id, category);
  const footnote = getTruthFootnote(visual.id, category);

  return (
    <NativeVisualShell label={visual.title} className={cx("min-h-[300px]", large && "min-h-[430px]")} >
      <div data-asset-id={visual.id} className="grid gap-6">
        <UniversalVisualHeader visual={visual} eyebrow={getCategoryEyebrow(category)} />
        {visual.id.includes("system-map") || visual.id.includes("central-system") || visual.id.includes("capability-map") ? (
          <HubVisual center={getHubLabel(category)} nodes={steps} />
        ) : visual.id.includes("fragmentation") ? (
          <FragmentationVisual />
        ) : (
          <FlowVisual steps={steps} footnote={footnote} />
        )}
      </div>
    </NativeVisualShell>
  );
}

function UniversalMockupVisual({ visual, large, category }: { visual: Visual; large: boolean; category: string }) {
  const cards = getMockupCards(visual.id, category);

  return (
    <NativeVisualShell label={visual.title} className={cx("min-h-[320px]", large && "min-h-[430px]")}>
      <div data-asset-id={visual.id} className="grid gap-5">
        <UniversalVisualHeader visual={visual} eyebrow={getCategoryEyebrow(category)} />
        <ProductShell compact={!large}>
          <div className="grid gap-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">{getMockupContext(category)}</p>
                <h4 className="mt-1 text-lg font-black tracking-tight text-[var(--wf-text-primary)]">{getMockupTitle(visual.id, category)}</h4>
              </div>
              <span className="rounded-full border border-[var(--wf-border-faint)] bg-white/80 px-3 py-1.5 text-xs font-bold text-[var(--wf-indigo)]">
                {getStatusLabel(visual.id, category)}
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {cards.map(([title, body], index) => (
                <div key={`${visual.id}-${title}`} className="rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm">
                  <div className="flex items-start gap-3">
                    <MiniStatusDot tone={index % 3 === 0 ? "cyan" : index % 3 === 1 ? "indigo" : "violet"} />
                    <div>
                      <p className="text-sm font-black text-[var(--wf-text-primary)]">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-[var(--wf-text-secondary)]">{body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ProductShell>
      </div>
    </NativeVisualShell>
  );
}

function UniversalCardVisual({ visual, large, category }: { visual: Visual; large: boolean; category: string }) {
  const cards = getCardItems(visual.id, category);
  const footnote = getTruthFootnote(visual.id, category);

  return (
    <NativeVisualShell label={visual.title} className={cx("min-h-[300px]", large && "min-h-[430px]")}>
      <div data-asset-id={visual.id} className="grid gap-5">
        <UniversalVisualHeader visual={visual} eyebrow={getCategoryEyebrow(category)} />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(([title, body, meta], index) => (
            <article
              key={`${visual.id}-${title}`}
              className={cx(
                "rounded-3xl border border-[var(--wf-border-faint)] bg-white/84 p-4 shadow-sm",
                meta === "Recommended" && "ring-2 ring-[rgba(0,240,255,0.22)]",
              )}
            >
              <div className="flex items-start gap-3">
                <MiniStatusDot tone={meta === "Attention" ? "violet" : index % 2 ? "indigo" : "cyan"} />
                <div>
                  {meta && <p className="mb-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--wf-indigo)]">{meta}</p>}
                  <h4 className="text-sm font-black text-[var(--wf-text-primary)]">{title}</h4>
                  <p className="mt-2 text-xs leading-5 text-[var(--wf-text-secondary)]">{body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        {footnote && <p className="rounded-2xl bg-white/72 px-4 py-3 text-sm font-semibold text-[var(--wf-text-secondary)]">{footnote}</p>}
      </div>
    </NativeVisualShell>
  );
}

function UniversalMotifVisual({ visual }: { visual: Visual }) {
  return (
    <NativeVisualShell label={visual.title} className="min-h-[260px]">
      <div data-asset-id={visual.id} className="relative overflow-hidden rounded-[calc(var(--wf-radius-xl)-8px)] border border-[var(--wf-border-faint)] bg-white/76 p-6">
        <FinalCtaWizfieldMotif />
        <div className="relative z-10 max-w-xl">
          <UniversalVisualHeader visual={visual} eyebrow="Brand motif" />
          <p className="mt-5 rounded-full bg-white/82 px-4 py-2 text-sm font-bold text-[var(--wf-indigo)]">Connected W intelligence motif</p>
        </div>
      </div>
    </NativeVisualShell>
  );
}

function HubVisual({ center, nodes }: { center: string; nodes: string[] }) {
  const left = nodes.slice(0, Math.ceil(nodes.length / 2));
  const right = nodes.slice(Math.ceil(nodes.length / 2));

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.76fr_1fr] lg:items-center">
      <div className="grid gap-3">{left.map((node) => <SystemMapNode key={node}>{node}</SystemMapNode>)}</div>
      <div className="relative mx-auto grid h-40 w-40 place-items-center rounded-full border border-[rgba(0,240,255,0.28)] bg-white/86 shadow-[var(--wf-glow-cyan)]">
        <div aria-hidden className="absolute inset-5 rounded-full border border-[rgba(112,0,255,0.18)]" />
        <p className="max-w-28 text-center text-sm font-black tracking-tight text-[var(--wf-text-primary)]">{center}</p>
      </div>
      <div className="grid gap-3">{right.map((node) => <SystemMapNode key={node}>{node}</SystemMapNode>)}</div>
    </div>
  );
}

function FragmentationVisual() {
  const fragments = ["Calls", "Jobs", "Estimates", "Invoices", "Follow-up", "Marketing"];

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.35fr_1fr] lg:items-center">
      <div className="grid grid-cols-2 gap-3">
        {fragments.map((fragment, index) => (
          <div key={fragment} className={cx("rounded-3xl border border-[var(--wf-border-faint)] bg-white/78 p-4 shadow-sm", index % 2 === 1 && "lg:translate-y-4")}>
            <p className="text-sm font-black text-[var(--wf-text-primary)]">{fragment}</p>
            <p className="mt-1 text-xs text-[var(--wf-text-secondary)]">Separate tool context</p>
          </div>
        ))}
      </div>
      <div className="grid place-items-center">
        <span aria-hidden className="h-px w-full bg-[var(--wf-gradient-core)] lg:h-28 lg:w-px" />
      </div>
      <div className="rounded-[var(--wf-radius-lg)] border border-[rgba(0,240,255,0.24)] bg-white/86 p-6 text-center shadow-[var(--wf-glow-cyan)]">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[var(--wf-indigo)]">WIZFIELD</p>
        <h4 className="mt-3 text-2xl font-black tracking-tight text-[var(--wf-text-primary)]">One operating core</h4>
        <p className="mt-3 text-sm leading-6 text-[var(--wf-text-secondary)]">Records, workflow, follow-up, and growth context stay connected.</p>
      </div>
    </div>
  );
}

function getCategoryEyebrow(category: string) {
  const labels: Record<string, string> = {
    ai: "Bounded intelligence",
    growth: "Growth workflow",
    language: "Language Store",
    "multi-business": "Workspace control",
    pricing: "Plan structure",
    features: "Capability surface",
    contact: "Contact path",
    platform: "Operating system",
    docs: "Documentation confidence",
    home: "Homepage visual",
  };

  return labels[category] ?? "WIZFIELD visual";
}

function getHubLabel(category: string) {
  if (category === "features") return "Capability Map";
  if (category === "growth") return "Growth Center";
  if (category === "platform") return "WIZFIELD Core";
  return "WIZFIELD";
}

function getFlowSteps(id: string, category: string) {
  if (id.includes("language") || category === "language") return ["Worker source text", "English draft", "Review", "Final chosen English"];
  if (id.includes("growth") || category === "growth") return ["Signal", "Opportunity", "Draft", "Campaign", "Publish Job", "Internal Analytics"];
  if (id.includes("guarded-send")) return ["Draft", "Review", "Edit or dismiss", "Confirm send", "Sent message anchor"];
  if (id.includes("reply-observation")) return ["Sent message", "Same thread", "Inbound reply observed", "Read-only outcome"];
  if (id.includes("switcher")) return ["Current workspace", "Choose workspace", "Session context changes", "Operating view refreshes"];
  if (id.includes("billing")) return ["Billing account", "Covered organization", "Business records", "CRM invoices separate"];
  if (id.includes("multibusiness") || category === "multi-business") return ["Identity", "Workspace A", "Workspace B", "Separated records", "Shared billing"];
  if (id.includes("pricing")) return ["Starter", "Pro", "Business", "Add-ons", "Billing relationship"];
  if (id.includes("ai") || category === "ai") return ["Workspace records", "Bounded AI surface", "Human review", "Explicit action"];
  if (id.includes("features")) return ["Operations", "Communication", "Financial workflows", "AI", "Growth", "Workspace control"];
  if (id.includes("platform") || category === "platform") return ["Calls & Intake", "Customers & Leads", "Jobs", "Estimates & Invoices", "Messaging", "Reports", "Portal", "Growth Center", "Workspace Control"];
  return ["Call / Lead", "Customer", "Job", "Estimate", "Approval", "Invoice", "Follow-up", "Growth Opportunity"];
}

function getMockupCards(id: string, category: string): Array<[string, string]> {
  if (category === "growth") return [["Marketing Profile", "Organization context"], ["Draft Variants", "GBP, Facebook, Instagram seed"], ["Campaign Board", "Slots and draft attachment"], ["Publish Jobs", "Explicit publish state"]];
  if (category === "language") return [["Enabled Languages", "Organization-level setting"], ["Line Item Text", "Estimate and invoice scope"], ["English Draft", "Generated for review"], ["Snapshot Marker", "Approved output stays stable"]];
  if (category === "multi-business") return [["Active Workspace", "North Ridge Services"], ["Customers", "Workspace scoped"], ["Jobs", "Workspace scoped"], ["Invoices", "Workspace scoped"]];
  if (category === "features") return [["Customers & Leads", "Connected records"], ["Calls & Messaging", "Organization-scoped"], ["Estimates & Invoices", "Financial workflow"], ["Documents", "Stable context"]];
  if (category === "contact") return [["Business Interest", "Sales-assisted path"], ["Starter / Pro", "Self-serve trial path"], ["Owner Input", "Backend destination pending"], ["No SLA Claim", "Response timing not promised"]];
  if (category === "ai") return [["Business Brain", "Signals to review"], ["Copilot Draft", "Human review"], ["Guarded Send", "Explicit action"], ["Voice Pilot", "Escalation path"]];
  if (category === "pricing") return [["Starter", "1 business"], ["Pro", "Up to 3 businesses"], ["Business", "Contact Sales"], ["Billing", "Separate from CRM invoices"]];
  return [["Today", "Operating context"], ["Recent Calls", "Lead signal"], ["Estimate Follow-up", "Review queue"], ["Unpaid Invoice", "Verify before acting"]];
}

function getCardItems(id: string, category: string): Array<[string, string, string?]> {
  if (id.includes("pricing") || category === "pricing") return [["Starter", "1 business with owner-approved price pending."], ["Pro", "Up to 3 businesses with recommendation treatment.", "Recommended"], ["Business", "Sales-assisted structure with Contact Sales."]];
  if (id.includes("docs")) return [["Product documentation", "Structured product behavior and boundaries."], ["Operating boundaries", "Serious buyer confidence without fake API detail."], ["Docs destination", "External docs surface remains the source."]];
  if (category === "ai") return [["Business Brain", "Workspace-scoped signals for review."], ["Operator Copilot", "Draft support with human control."], ["Voice Intake Intelligence — Pilot", "Script-bound handling and escalation."]];
  if (category === "growth") return [["Opportunity", "CRM-derived signal to review."], ["Draft", "Publisher role develops content."], ["Publish Job", "Explicit publish-now or scheduled job."], ["Internal Analytics", "Bounded funnel signal, not ad ROI."]];
  if (category === "language") return [["Worker language", "Organization-enabled preferences."], ["English draft", "Generated for review."], ["Final chosen English", "Saved after human review."], ["Snapshot-safe history", "Approved output does not rewrite later."]];
  if (category === "multi-business") return [["Workspace A", "Separated business records."], ["Workspace B", "Separate active context."], ["Shared billing", "Commercial layer separate from CRM invoices."]];
  if (category === "contact") return [["Business Plan Interest", "Sales-assisted path."], ["Multi-Business Operation", "Complex workspace fit."], ["Self-serve trial", "Starter and Pro remain visible."]];
  if (category === "features") return [["Core Operations", "Customers, jobs, estimates, invoices."], ["Communication Context", "Calls and messaging tied to work."], ["Differentiators", "AI, Growth, Language, Multi-Business."]];
  return [["Calls", "First signal captured."], ["Jobs", "Context moves forward."], ["Invoices", "Follow-up remains visible."]];
}

function getTruthFootnote(id: string, category: string) {
  if (category === "ai") return "Human review stays in control. No silent outbound, self-learning, or autonomous dispatch is implied.";
  if (category === "growth") return "Publishing is explicit. Analytics are internal and bounded, not ad ROI or guaranteed lead claims.";
  if (category === "language") return "Language Store stays scoped to worker preferences and reviewed English output for supported estimate and invoice line flows.";
  if (category === "multi-business") return "Workspaces remain separated. This visual does not imply blended records or cross-business intelligence.";
  if (category === "pricing") return "No invented prices or trial duration. Business remains Contact Sales.";
  if (category === "contact") return "The contact path remains honest: backend destination and response timing are owner inputs.";
  if (id.includes("portal")) return "Customer access remains scoped and does not expose internal records.";
  return undefined;
}

function getMockupContext(category: string) {
  if (category === "growth") return "Marketing workspace";
  if (category === "language") return "Language settings";
  if (category === "multi-business") return "Active organization";
  if (category === "contact") return "Commercial inquiry";
  if (category === "pricing") return "Plan model";
  if (category === "ai") return "AI support";
  return "Product surface";
}

function getMockupTitle(id: string, category: string) {
  if (id.includes("hero")) return "Hero product surface";
  if (category === "growth") return "Growth Center workspace";
  if (category === "language") return "Reviewed English workflow";
  if (category === "multi-business") return "Separated workspace state";
  if (category === "contact") return "Sales-fit surface";
  if (category === "pricing") return "Plan structure";
  if (category === "ai") return "Review-controlled intelligence";
  return "Operational preview";
}

function getStatusLabel(id: string, category: string) {
  if (category === "growth") return "Explicit publish";
  if (category === "language") return "Review required";
  if (category === "multi-business") return "Separated context";
  if (category === "contact") return "No backend claim";
  if (category === "pricing") return "Owner prices pending";
  if (category === "ai") return "Human control";
  return id.includes("hero") ? "Operating core" : "Product-led";
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
