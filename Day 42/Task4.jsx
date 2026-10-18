import { useState } from "react";

function TermsConditions() {
  const [accepted, setAccepted] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Submitted successfully!");
  }

  return (
    <div>
      <h2>Terms and Conditions</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              setMessage("");
            }}
          />
          I accept the terms and conditions
        </label>

        <br /><br />

        <button type="submit" disabled={!accepted}>
          Submit
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default TermsConditions;
