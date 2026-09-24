import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white">
      <div className="mx-auto flex w-full items-center justify-between px-5 py-4 lg:px-10">
        <Logo />
        <Navigation />
        <HeaderButtons />
        <MobileMenu />
      </div>
    </header>
  );
}

export default Header;