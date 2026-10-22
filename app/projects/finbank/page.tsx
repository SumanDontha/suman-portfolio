import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CreditCard,
  Wallet,
  TrendingUp,
  ShoppingCart,
  BriefcaseBusiness,
  Car,
  Code2,
  Database,
  ShieldCheck
} from "lucide-react";

const transactions = [
  {
    name: "Monthly salary",
    category: "Income",
    date: "25 Oct 2026",
    amount: "+£2,450.00",
    positive: true,
    icon: BriefcaseBusiness
  },
  {
    name: "Groceries",
    category: "Shopping",
    date: "24 Oct 2026",
    amount: "-£42.80",
    positive: false,
    icon: ShoppingCart
  },
  {
    name: "Transport",
    category: "Travel",
    date: "23 Oct 2026",
    amount: "-£18.50",
    positive: false,
    icon: Car
  }
];

const features = [
  {
    number: "01",
    title: "Create transactions",
    description:
      "Add income and expenses through a clear, structured transaction form."
  },
  {
    number: "02",
    title: "Read account activity",
    description:
      "Review balances and recent transactions in an easy-to-scan dashboard."
  },
  {
    number: "03",
    title: "Update records",
    description:
      "Edit transaction details and keep financial records organized."
  },
  {
    number: "04",
    title: "Delete transactions",
    description: "Remove records with a clear, predictable interaction."
  }
];

export default function FinBankPage() {
  return (
    <main className="min-h-screen bg-[#F8F7FC] text-[#25233C]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#25233C]/10 bg-[#F8F7FC]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="text-xl font-bold tracking-tight">
            SD<span className="text-violet-600">.</span>
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-[#25233C]/10 px-4 py-2 text-sm font-medium transition hover:border-violet-500 hover:text-violet-700"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
          Full-stack development · Case study
        </p>

        <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.055em] sm:text-7xl">
          FinBank
          <span className="mt-2 block font-serif font-normal italic text-violet-600">
            Everyday banking, made clearer.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          A portfolio banking application exploring how a clean dashboard,
          transaction management and clear financial information can make
          everyday account activity easier to understand.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800">
            React
          </span>
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800">
            TypeScript
          </span>
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800">
            CRUD
          </span>
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-800">
            Testing
          </span>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Project type", "Banking dashboard"],
            ["Focus", "Frontend and CRUD"],
            ["Core experience", "Transactions"],
            ["Design goal", "Clarity and usability"]
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-[#25233C]/10 bg-white p-5"
            >
              <p className="text-sm text-slate-500">{label}</p>
              <p className="mt-2 font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#25233C]/10 bg-white shadow-xl shadow-violet-950/5">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-8">
            <div>
              <p className="font-semibold">FinBank dashboard</p>
              <p className="mt-1 text-xs text-slate-500">
                Illustrative portfolio preview
              </p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              Dashboard concept
            </span>
          </div>

          <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_1.5fr]">
            <div className="rounded-2xl bg-[#25233C] p-6 text-white sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Available balance</span>
                <Wallet size={21} className="text-violet-300" />
              </div>

              <p className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                £12,480.50
              </p>

              <p className="mt-2 text-sm text-white/60">Everyday account</p>

              <div className="mt-9 flex items-center justify-between border-t border-white/15 pt-5">
                <div>
                  <p className="text-xs text-white/60">Account holder</p>
                  <p className="mt-1 text-sm font-medium">Portfolio demo</p>
                </div>
                <CreditCard size={26} className="text-violet-300" />
              </div>
            </div>

            <div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">Income</p>
                    <TrendingUp size={18} className="text-emerald-600" />
                  </div>
                  <p className="mt-3 text-2xl font-semibold">£2,450.00</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Example monthly figure
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-500">Recent activity</p>
                    <CreditCard size={18} className="text-violet-600" />
                  </div>
                  <p className="mt-3 text-2xl font-semibold">03</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Example transactions
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="mb-3 font-semibold">Recent transactions</h3>

                <div className="divide-y divide-slate-100">
                  {transactions.map((transaction) => {
                    const Icon = transaction.icon;

                    return (
                      <div
                        key={transaction.name}
                        className="flex items-center gap-3 py-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                          <Icon size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {transaction.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {transaction.category} · {transaction.date}
                          </p>
                        </div>

                        <p
                          className={`shrink-0 text-sm font-semibold ${
                            transaction.positive
                              ? "text-emerald-700"
                              : "text-[#25233C]"
                          }`}
                        >
                          {transaction.amount}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
              The challenge
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Make account activity easy to understand.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-600">
            <p>
              Financial dashboards can become difficult to scan when balances,
              transaction details and account actions compete for attention.
            </p>
            <p>
              FinBank explores a more structured experience: a prominent
              balance, clear transaction summaries and consistent patterns for
              managing records.
            </p>
            <p>
              The interface is a portfolio project, not a live banking service.
              The figures shown here are illustrative demo data.
            </p>
          </div>
        </div>
      </section>

      {/* CRUD features */}
      <section className="bg-[#EEECF8] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-800">
            Core functionality
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            CRUD functionality with a clear user experience.
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-slate-600">
            The application is designed around the four core data operations:
            create, read, update and delete. The descriptions below outline the
            intended capabilities; only claim each operation as implemented once
            it has been verified in your application.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-2xl border border-violet-900/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
              >
                <p className="text-sm font-semibold text-violet-700">
                  {feature.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">
          Engineering and quality
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
          Built for maintainability, usability and future growth.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-[#25233C]/10 bg-white p-6">
            <Code2 className="text-violet-700" size={26} />
            <h3 className="mt-5 font-semibold">Component-based UI</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Keep the interface consistent by separating reusable UI elements
              from page-level composition.
            </p>
          </article>

          <article className="rounded-2xl border border-[#25233C]/10 bg-white p-6">
            <Database className="text-violet-700" size={26} />
            <h3 className="mt-5 font-semibold">Data management</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Structure transaction data so it can be validated, displayed and
              updated consistently.
            </p>
          </article>

          <article className="rounded-2xl border border-[#25233C]/10 bg-white p-6">
            <ShieldCheck className="text-violet-700" size={26} />
            <h3 className="mt-5 font-semibold">Quality and accessibility</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Plan for form validation, keyboard access, readable contrast and
              clear feedback for user actions.
            </p>
          </article>
        </div>

        {/* <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-900/10 bg-emerald-50 p-5">
          <CheckCircle2
            className="mt-0.5 shrink-0 text-emerald-700"
            size={20}
          />
          <p className="text-sm leading-7 text-emerald-950">
            Next step: connect the case study to the working FinBank app, verify
            the implemented CRUD operations and add genuine test results and
            screenshots before presenting them as completed work.
          </p>
        </div> */}
      </section>

      {/* Footer */}
      <footer className="border-t border-[#25233C]/10 bg-white px-5 py-12 text-center">
        <p className="text-sm font-medium text-violet-700">
          More from Suman Dontha
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">
          Let’s build something useful.
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-600">
          Explore the other projects or get in touch to discuss frontend,
          full-stack development and user-focused digital experiences.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full bg-[#25233C] px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700"
          >
            Back to portfolio <ArrowUpRight size={16} />
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#25233C]/15 px-6 py-3 text-sm font-medium transition hover:border-violet-500 hover:text-violet-700"
          >
            Contact me
          </Link>
        </div>
      </footer>
    </main>
  );
}
