export function Footer() {
  return (
    <footer className="bg-ink text-bone pt-10 pb-20 md:pb-12 px-4 border-t-2 border-bone/20">
      <div className="max-w-5xl mx-auto text-center space-y-5">
        {/* Brand logos row with authentic assets */}
        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 pb-4 border-b border-bone/10">
          {/* Wild Hai Bro graphic logo without redundant text */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-hai-bro-logo.jpg"
              alt="Wild Hai Bro"
              className="w-9 h-9 object-contain rounded-xs border border-bone/20"
            />
          </div>

          <span className="text-wild-orange font-black text-sm">×</span>

          {/* Wild Stone white logo */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/wild-stone-logo.avif"
              alt="Wild Stone"
              className="h-5 sm:h-6 w-auto object-contain brightness-110"
            />
          </div>

          <span className="text-wild-orange font-black text-sm">×</span>

          {/* Vigor Launchpad logo sized to match Wild Stone visual weight */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vigor-launchpad-logo.png"
              alt="Vigor Launchpad"
              className="h-5 sm:h-6 w-auto object-contain brightness-0 invert"
            />
          </div>

          <div className="h-4 w-px bg-bone/20 hidden sm:block mx-1" />

          {/* Clean Lexend social handles */}
          <div className="flex items-center gap-3 text-xs font-[family-name:var(--font-label)] font-bold">
            <a
              href="https://instagram.com/wildhaibro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/80 hover:text-wild-orange transition-colors"
            >
              @wildhaibro ↗
            </a>
            <span className="text-bone/30">•</span>
            <a
              href="https://instagram.com/wildstoneofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone/80 hover:text-wild-orange transition-colors"
            >
              @wildstoneofficial ↗
            </a>
          </div>
        </div>

        {/* Clean links with tight separators */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs font-[family-name:var(--font-label)] text-bone/60">
          <button className="hover:text-bone transition-colors">Terms &amp; Conditions</button>
          <span className="text-bone/30">•</span>
          <button className="hover:text-bone transition-colors">Privacy Notice</button>
          <span className="text-bone/30">•</span>
          <a href="mailto:pass@wildstone.vigorspace.co" className="hover:text-bone transition-colors">Contact Support</a>
        </div>

        {/* Responsible Notice without unverified legal claims */}
        <p className="text-[11px] font-[family-name:var(--font-body)] text-bone/50 max-w-xl mx-auto leading-relaxed">
          Wild Hai Bro is organized by Wild Stone in partnership with Vigor Launchpad for campus college activations.
          Participant information is collected strictly for event pass issuance, story verification, and prize distribution.
        </p>

        <div className="pt-3 border-t border-bone/10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-[family-name:var(--font-label)] text-bone/40 gap-2">
          <span>© {new Date().getFullYear()} WILD STONE × VIGOR LAUNCHPAD</span>
          <span className="text-wild-orange uppercase font-bold tracking-wider">
            RECOGNISING THE RAW, REPRESENTING THE WILD
          </span>
        </div>
      </div>
    </footer>
  );
}
