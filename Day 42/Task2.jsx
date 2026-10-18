import { useState } from "react";

function StudentDetails() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <div>
      <h2>Student Details</h2>

      <form>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </form>

      <h3>Student Information</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default StudentDetails;
