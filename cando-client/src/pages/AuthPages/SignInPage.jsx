import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-900 focus:ring-2 focus:ring-yellow-400 focus:bg-white";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-blue-950 px-4 py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl border-2 border-yellow-400/30 shadow-2xl">
        <div className="bg-white px-8 py-10 sm:px-10">
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              className="text-sm font-semibold text-blue-900 transition hover:text-yellow-500"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full w-full rounded-full bg-yellow-400" />
          </div>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">
            Log In
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Access your store account to review orders, saved items, and pickup
            details.
          </p>

          <form className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="signin-email"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500"
              >
                Email Address
              </label>
              <input
                id="signin-email"
                type="email"
                placeholder="student@email.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="signin-password"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500"
              >
                Password
              </label>
              <input
                id="signin-password"
                type="password"
                placeholder="Min. 8 characters"
                autoComplete="current-password"
                className={inputClasses}
              />
            </div>

            <div className="flex items-center justify-between gap-4 text-sm">
              <label className="flex items-center gap-2 text-zinc-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-zinc-300 accent-blue-900"
                />
                <span className="text-xs">Remember me</span>
              </label>
              <button
                type="button"
                className="text-xs font-semibold text-blue-900 transition hover:text-yellow-500"
              >
                Forgot Password?
              </button>
            </div>

            <Button
              type="submit"
              variant="primary"
              className={actionButtonClassName}
            >
              Log In
            </Button>

            <div className="relative flex items-center gap-3 py-1">
              <div className="h-px flex-1 bg-zinc-200" />
              <span className="text-xs text-zinc-400">or continue with</span>
              <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Button
                type="button"
                variant="secondary"
                className={actionButtonClassName}
              >
                Log In with Google
              </Button>
              <Button
                type="button"
                variant="secondary"
                className={actionButtonClassName}
              >
                Log In with Apple
              </Button>
            </div>
          </form>

          <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-sm text-zinc-500">
            No account yet?{" "}
            <Link
              to="/auth/signup"
              className="font-semibold text-blue-900 transition hover:text-yellow-500"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
