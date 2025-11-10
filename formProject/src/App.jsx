import { useState } from "react";
import "./App.css"; // import the styles

function App() {
  const [form, setForm] = useState({
    empName: "",
    empAge: "",
    empDesignation: "",
    empSalary: "",
    empDepartment: "",
    empAddress: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    setForm({   
    empName:"",
    empAge:"",
    empDesignation:"",
    empSalary:"",
    empDepartment:"",
    empAddress:"",
})

  };

  const handleInput = (e) => {

    // const Name=e.target.name
    // const Value=e.target.value
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    console.log(form)
  };

  return (
    <div className="container">
      <h1>Employee Registration</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="empName"
          value={form.empName}
          onChange={handleInput}
          placeholder="Enter employee name"
        />

        <label>Age</label>
        <input
          type="number"
          name="empAge"
          value={form.empAge}
          onChange={handleInput}
          placeholder="Enter employee age"
        />

        <label>Designation</label>
        <input
          type="text"
          name="empDesignation"
          value={form.empDesignation}
          onChange={handleInput}
          placeholder="Enter employee designation"
        />

        <label>Salary</label>
        <input
          type="number"
          name="empSalary"
          value={form.empSalary}
          onChange={handleInput}
          placeholder="Enter salary"
        />

        <label>Department</label>
        <input
          type="text"
          name="empDepartment"
          value={form.empDepartment}
          onChange={handleInput}
          placeholder="Enter department"
        />

        <label>Address</label>
        <input
          type="text"
          name="empAddress"
          value={form.empAddress}
          onChange={handleInput}
          placeholder="Enter address"
        />

        <button type="submit">Submit</button>
      </form>

      {/* <div className="output">
        <h2>Preview</h2>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div> */}

      
    </div>
  );
}

export default App;
