export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Local SEO Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find &amp; Fix Inconsistent<br />Business Citations Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Scan 50+ directories for NAP inconsistencies, get prioritized fix reports with direct contact info, and stop losing local rankings to bad data.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Fixing Citations – $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <p className="text-2xl font-bold text-white">50+</p>
            <p className="text-sm text-[#8b949e] mt-1">Directories scanned</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Fuzzy</p>
            <p className="text-sm text-[#8b949e] mt-1">NAP matching engine</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">Auto</p>
            <p className="text-sm text-[#8b949e] mt-1">Fix reports generated</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-10">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Enter Your Business", desc: "Provide your business name, address, and phone number to start a scan." },
            { step: "2", title: "We Crawl Directories", desc: "Our engine checks 50+ directories including Google, Yelp, Bing, and niche sites." },
            { step: "3", title: "Get Your Fix Report", desc: "Receive a prioritized list of inconsistencies with direct links and contact info to fix them." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] font-bold text-sm flex items-center justify-center mb-3">
                {item.step}
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#8b949e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Scan 50+ business directories",
              "Fuzzy NAP inconsistency detection",
              "Actionable fix reports with contact info",
              "Background re-scans every 30 days",
              "Up to 5 business locations",
              "Email alerts on new issues found"
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. Billed via Lemon Squeezy.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is a NAP inconsistency?",
              a: "NAP stands for Name, Address, Phone. When these details differ across directories (e.g., abbreviated street vs. full street name), search engines lose trust in your business, hurting local rankings."
            },
            {
              q: "Which directories do you scan?",
              a: "We scan 50+ directories including Google Business Profile, Yelp, Bing Places, Apple Maps, Foursquare, Yellow Pages, and dozens of niche and regional directories."
            },
            {
              q: "Do you fix the citations for me?",
              a: "We generate detailed fix reports with direct links and contact info for each directory. You make the fixes, or hand the report to your team — no black-box automation that can cause more problems."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        <p>&copy; {new Date().getFullYear()} Citation Audit Fixer. All rights reserved.</p>
      </footer>
    </main>
  );
}
