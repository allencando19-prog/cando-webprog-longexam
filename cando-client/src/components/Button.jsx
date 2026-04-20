import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition border-2";

const variantClasses = {
  primary:
    "bg-yellow-400 text-blue-950 border-yellow-400 hover:bg-yellow-300 hover:border-yellow-300",
  secondary:
    "bg-blue-900 text-white border-yellow-400 hover:bg-blue-800 hover:border-yellow-300",
  outline:
    "bg-transparent text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white",
};

const Button = ({
  children,
  to,
  type = "button",
  variant = "secondary",
  className = "",
}) => {
  const classes = `${base} ${variantClasses[variant] || variantClasses.secondary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
