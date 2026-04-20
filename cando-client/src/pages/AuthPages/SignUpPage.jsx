import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-xl border-2 border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-blue-900 focus:ring-2 focus:ring-yellow-400 focus:bg-white";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
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
            <span className="text-xs text-zinc-400">Step 1 of 1</span>
          </div>

          <div className="mb-2 h-1 w-full overflow-hidden rounded-full bg-zinc-100">
            <div className="h-full w-full rounded-full bg-yellow-400" />
          </div>

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-blue-900 sm:text-3xl">
            Create your account
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Join the BulldogEx Shop for faster checkout and order tracking.
          </p>

          <form className="mt-7 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500"
                >
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  placeholder="Juan"
                  autoComplete="given-name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500"
                >
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  placeholder="Dela Cruz"
                  autoComplete="family-name"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="signup-email"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500"
              >
                Email Address
              </label>
              <input
                id="signup-email"
                type="email"
                placeholder="student@email.com"
                autoComplete="email"
                className={inputClasses}
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500"
              >
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                placeholder="Min. 8 characters"
                autoComplete="new-password"
                className={inputClasses}
              />
              <p className="mt-2 text-xs text-zinc-400">
                Use at least 8 characters with letters, numbers, and symbols.
              </p>
            </div>

            <Button
              type="submit"
              variant="primary"
              className={actionButtonClassName}
            >
              Create Account
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
                Sign Up with Google
              </Button>
              <Button
                type="button"
                variant="secondary"
                className={actionButtonClassName}
              >
                Sign Up with Apple
              </Button>
            </div>
          </form>

          <div className="mt-8 border-t border-zinc-100 pt-6 text-center text-sm text-zinc-500">
            Already have an account?{" "}
            <Link
              to="/auth/signin"
              className="font-semibold text-blue-900 transition hover:text-yellow-500"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
