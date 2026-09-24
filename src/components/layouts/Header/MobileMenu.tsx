import { useState } from "react";
import NavItem from "./NavItems";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg border border-slate-200 px-3 py-2 text-slate-700"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-t border-slate-100 bg-white p-5 shadow-lg">
          <nav className="flex flex-col gap-5">
            {navLinks.map((item) => (
              <div key={item.label} onClick={() => setIsOpen(false)}>
                <NavItem label={item.label} href={item.href} />
              </div>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              className="rounded-lg border border-slate-200 px-4 py-2.5 font-semibold text-slate-700"
            >
              Login
            </button>

            <button
              type="button"
              className="rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;