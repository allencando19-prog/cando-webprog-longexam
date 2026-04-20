import Button from "../components/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 px-4 py-10 text-white">
      {/* Main 404 Section */}
      <section className="w-full max-w-4xl rounded-2xl bg-white/95 p-8 text-center shadow-2xl backdrop-blur sm:p-12">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-900">
          Oops! Page Missing
        </p>

        <h1 className="text-7xl font-extrabold tracking-tight text-blue-900 sm:text-8xl">
          <span className="text-yellow-500">404</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-zinc-600">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable. Let’s get you back on track.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/">Back Home</Button>
          <Button to="/products" variant="secondary">
            View Products
          </Button>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="mt-10 grid w-full max-w-4xl gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-blue-900">Home</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Return to the homepage and continue browsing the store.
          </p>
          <div className="mt-4">
            <Button to="/">Go Home</Button>
          </div>
        </div>

        <div className="rounded-2xl border border-yellow-400 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-blue-900">Products</h3>
          <p className="mt-2 text-sm text-zinc-600">
            Explore available campus essentials and featured items.
          </p>
          <div className="mt-4">
            <Button to="/products" variant="secondary">
              Browse Products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Hint */}
      <p className="mt-10 text-xs tracking-wide text-blue-200">
        If you believe this is an error, please contact support or try again
        later.
      </p>
    </div>
  );
};

export default NotFoundPage;
