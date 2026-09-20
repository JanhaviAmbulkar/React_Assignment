import type { ButtonProps } from "../../types";

function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;