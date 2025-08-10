import "./styles.css";
import { useState } from "react";

export default function App({ maxRating = 5 }) {
  const [rating, setRating] = useState(1);
  const [temRating, setTemprating] = useState(0);

  function handleRating(r) {
    setRating(r);
  }

  return (
    <div className="App" style={starConstainer}>
      {Array.from({ length: maxRating }, (_, i) => (
        <span key={i}>
          <Star
            onRate={() => handleRating(i + 1)}
            full={temRating ? temRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTemprating(i + 1)}
            onHoverOut={() => setTemprating(0)}
          />
        </span>
      ))}
      <p>{temRating || ""}</p>
    </div>
  );
}

const starConstainer = { display: "flex", gap: "9px" };
const starstyle = {
  width: "48px",
  height: "48px",
  display: "block",
  cursor: "pointer",
};

function Star({ onRate, full, onHoverIn, onHoverOut }) {
  return (
    <span
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      role="button"
      style={starstyle}
      className={`star ${full ? "full" : "empty"}`}
    >
      {full ? (
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Star"
        >
          <polygon points="50,15 61,39 88,39 66,57 75,83 50,67 25,83 34,57 12,39 39,39" />
        </svg>
      ) : (
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Star outline"
        >
          <polygon
            points="50,15 61,39 88,39 66,57 75,83 50,67 25,83 34,57 12,39 39,39"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}
