import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t-4 border-yellow-500 bg-blue-900 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
        {/* Brand Section */}
        <div>
          <p className="text-lg font-bold text-yellow-400">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-blue-100">
            Campus essentials, simple ordering.
          </p>
        </div>

        {/* Navigation Section */}
        <nav className="text-[11px] font-semibold uppercase tracking-[0.24em] text-yellow-300 flex items-center gap-3">
          <Link to="/products" className="hover:text-white transition">
            Products
          </Link>

          <span>|</span>

          <Link to="/about" className="hover:text-white transition">
            About
          </Link>

          <span>|</span>

          <Link to="/auth/signup" className="hover:text-white transition">
            Create Account
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
