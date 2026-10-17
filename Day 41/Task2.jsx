import { useState } from "react";

function ButtonInput() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div>
      <h2>Display Input</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something"
      />

      <button onClick={() => setOutput(input)}>
        Show Input
      </button>

      <p>{output}</p>
    </div>
  );
}

export default ButtonInput;
