import { NavLink } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition",
    isActive
      ? "bg-yellow-400 text-blue-950"
      : "text-white/80 hover:bg-yellow-400/20 hover:text-yellow-300",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-yellow-400 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-10 w-10 rounded-full border-2 border-yellow-400 bg-white object-contain"
          />
          <div>
            <p className="text-lg font-bold text-white">BulldogEx Shop</p>
            <p className="text-[11px] tracking-[0.24em] text-yellow-300 uppercase">
              Campus Marketplace
            </p>
          </div>
        </NavLink>

        {/* Nav Container */}
        <div className="hidden md:flex items-center gap-6">
          {/* Links Container */}
          <nav className="flex items-center gap-1 rounded-full border border-yellow-400/60 bg-white/10 p-1 backdrop-blur">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Create Account Button */}
          <NavLink
            to="/auth/signup"
            className="rounded-full bg-yellow-400 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-950 transition hover:bg-yellow-300"
          >
            Create Account
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
