import React from "react";

export default function Fallback({ error }) {
  return (
    <div>
      <p>Something went wrong: </p>
      <pre>{error.message}</pre>
    </div>
  );
}
