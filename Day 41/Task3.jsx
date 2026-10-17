function PassingValue() {
  function showMessage(value) {
    alert("Selected value: " + value);
  }

  return (
    <div>
      <h2>Passing a Value to an Event</h2>

      <button onClick={() => showMessage("React")}>
        React
      </button>

      <button onClick={() => showMessage("JavaScript")}>
        JavaScript
      </button>
    </div>
  );
}

export default PassingValue;
