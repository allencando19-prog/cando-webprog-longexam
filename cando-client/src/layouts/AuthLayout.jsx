import { Outlet } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        {/* Left Branding Panel */}
        <div className="relative flex items-center justify-center overflow-hidden border-b-2 border-yellow-400/40 bg-blue-950 p-8 sm:p-10 lg:border-b-0 lg:border-r-2 lg:border-yellow-400/40 lg:p-16">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex w-full max-w-md flex-col items-center justify-center text-center">
            {/* Logo */}
            <img
              src={logo}
              alt="NU BDExchange"
              className="h-28 w-28 rounded-full border-4 border-yellow-400 bg-white object-contain shadow-lg"
            />

            {/* Brand Text */}
            <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              BulldogEx Shop
            </h1>
            <p className="mt-2 text-sm tracking-[0.28em] text-yellow-300 uppercase">
              Campus Marketplace System
            </p>

            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400" />
          </div>
        </div>

        {/* Right Form Panel */}
        <main className="flex items-center bg-yellow-500 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
