import { useState } from "react";

function FocusInput() {
  const [name, setName] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <h2>Input Blur Event</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={() => setOutput(name)}
      />

      <p>{output}</p>
    </div>
  );
}

export default FocusInput;
