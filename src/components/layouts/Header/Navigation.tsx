import NavItem from "./NavItems";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          href={item.href}
        />
      ))}
    </nav>
  );
}

export default Navigation;