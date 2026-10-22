import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  Wallet,
  Users,
  Accessibility
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Housing support",
    description:
      "Help people discover housing advice, local services and practical support."
  },
  {
    icon: Wallet,
    title: "Money and bills",
    description:
      "Make financial guidance and support options easier to understand."
  },
  {
    icon: Users,
    title: "Family support",
    description: "Help families find relevant community services and resources."
  }
];

export default function CivicFlowPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#20211F]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SD<span className="text-emerald-700">.</span>
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-emerald-700"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          UI/UX Design · Case Study
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl">
          CivicFlow
          <span className="block font-serif font-normal italic text-emerald-700">
            Public services, made simpler.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
          CivicFlow explores how people can discover essential local services
          through a clearer, more accessible and user-centred digital
          experience.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Project", "Service discovery experience"],
            ["Focus", "Research, UI/UX and accessibility"],
            ["Build", "Responsive Next.js interface"]
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-black/5 bg-white p-5"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#E7EDE5] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-800">
              The concept
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              How can we help?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              A simple starting point helps visitors explore the support they
              need without navigating complicated service directories.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-emerald-800">
                  Explore service <ArrowUpRight size={16} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
              Design approach
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Designed around people.
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              The concept brings related services together in clear,
              understandable categories, reducing the effort required to find
              relevant information.
            </p>
            <p>
              Accessibility, readable content, responsive layouts and
              predictable navigation guide the design decisions.
            </p>
            <div className="flex items-start gap-3 rounded-xl bg-[#E7EDE5] p-4">
              <Accessibility className="mt-1 shrink-0 text-emerald-800" />
              <p className="text-sm leading-6">
                Accessibility is a design consideration throughout the
                experience, including clear labels and keyboard-friendly
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-5 py-10 text-center">
        <h2 className="text-2xl font-semibold">Want to explore more?</h2>
        <p className="mt-3 text-slate-600">
          Discover more projects in my portfolio.
        </p>
        <Link
          href="/#work"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#20211F] px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-800"
        >
          Back to portfolio <ArrowUpRight size={16} />
        </Link>
      </footer>
    </main>
  );
}
