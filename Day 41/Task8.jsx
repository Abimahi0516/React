import { useState } from "react";

function Customer() {
  const [customers, setCustomers] = useState([
    "Abi",
    "Priya",
    "Arun"
  ]);

  const [name, setName] = useState("");

  function addCustomer() {
    if (name.trim() !== "") {
      setCustomers([...customers, name.trim()]);
      setName("");
    }
  }

  function deleteCustomer(index) {
    setCustomers(
      customers.filter((_, i) => i !== index)
    );
  }

  return (
    <div>
      <h2>Customer Management</h2>

      <input
        type="text"
        value={name}
        placeholder="Enter customer name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={addCustomer}>
        Add Customer
      </button>

      <ul>
        {customers.map((customer, index) => (
          <li key={index}>
            {customer}{" "}
            <button onClick={() => deleteCustomer(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customer;
