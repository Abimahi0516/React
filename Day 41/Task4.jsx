function MultipleEvents() {
  function handleClick() {
    alert("Button clicked!");
  }

  function handleMouseOver() {
    console.log("Mouse is over the heading");
  }

  function handleDoubleClick() {
    alert("Button double-clicked!");
  }

  return (
    <div>
      <h2 onMouseOver={handleMouseOver}>
        Multiple Events
      </h2>

      <button onClick={handleClick}>
        Click Me
      </button>

      <button onDoubleClick={handleDoubleClick}>
        Double Click Me
      </button>
    </div>
  );
}

export default MultipleEvents;
