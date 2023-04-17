import React from "react";
import "../spinner.css";

export default function Loading() {
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <button>...LOADING...</button>
      </div>
    </div>
  );
}
