import { useState } from "react";

function CourseSelection() {
  const [course, setCourse] = useState("");

  return (
    <div>
      <h2>Course Selection</h2>

      <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">Select a Course</option>
        <option value="React">React</option>
        <option value=".NET">.NET</option>
        <option value="Java">Java</option>
      </select>

      <p>Selected Course: {course}</p>
    </div>
  );
}

export default CourseSelection;
