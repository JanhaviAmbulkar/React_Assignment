import type { CardProps } from "../../types";
import Button from "../elements/Button";

function Card({
  title,
  description,
  buttonText,
  onButtonClick,
}: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>

      <Button
        label={buttonText}
        onClick={onButtonClick}
      />
    </div>
  );
}

export default Card;