import { useState } from "react";

function Employee() {
  const [empid] = useState(101);
  const [empname] = useState("Abi");
  const [salary] = useState(25000);
  const [desg] = useState(" Full Stack Developer");
  const [deptno] = useState(10);

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Employee ID: {empid}</p>
      <p>Employee Name: {empname}</p>
      <p>Salary: {salary}</p>
      <p>Designation: {desg}</p>
      <p>Department Number: {deptno}</p>
    </div>
  );
}

export default Employee;
