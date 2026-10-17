
import { useState } from "react";

function SubmitInput() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setResult(name);
  }

  return (
    <div>
      <h2>Submit User Input</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>

      <p>{result && `Your name is ${result}`}</p>
    </div>
  );
}

export default SubmitInput;
