export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}