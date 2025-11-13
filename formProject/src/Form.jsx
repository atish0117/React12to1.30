import React from 'react'
import { useState } from "react";
import { Home } from "./Home";
import axios from "axios";
export const Form = () => {
const [form, setForm] = useState({
    empName: "",
    empAge: "",
    empDesignation: "",
    empSalary: "",
    empDepartment: "",
    empAddress: "",
  });
  const [errors, setErrors] = useState({});

  // 🔹 Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!form.empName.trim()) newErrors.empName = "Name is required";
    if (!form.empAge) newErrors.empAge = "Age is required";
    else if (form.empAge < 18 || form.empAge > 65)
      newErrors.empAge = "Age must be between 18 and 65";

    if (!form.empDesignation.trim())
      newErrors.empDesignation = "Designation is required";

    if (!form.empSalary) newErrors.empSalary = "Salary is required";
    else if (form.empSalary < 1000)
      newErrors.empSalary = "Salary must be greater than 1000";

    if (!form.empDepartment.trim())
      newErrors.empDepartment = "Department is required";

    if (!form.empAddress.trim()) newErrors.empAddress = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   const postdata=async()=>{
          try {
            const res = await axios.post("http://localhost:3000/employees",form);
            console.log("response from form data",res)
          } catch (error) {
            console.log(error)
            console.log(error.message)
          }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // stop submission if invalid
        postdata()
    console.log("Form submitted:", form);

    // reset form
    setForm({
      empName: "",
      empAge: "",
      empDesignation: "",
      empSalary: "",
      empDepartment: "",
      empAddress: "",
    });
    setErrors({});
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear field-specific error as user types
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Employee Registration
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="empName"
              value={form.empName}
              onChange={handleInput}
              placeholder="Enter employee name"
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.empName
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.empName && (
              <p className="text-red-500 text-sm mt-1">{errors.empName}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              name="empAge"
              value={form.empAge}
              onChange={handleInput}
              placeholder="Enter employee age"
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.empAge
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.empAge && (
              <p className="text-red-500 text-sm mt-1">{errors.empAge}</p>
            )}
          </div>

          {/* Designation */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Designation
            </label>
            <input
              type="text"
              name="empDesignation"
              value={form.empDesignation}
              onChange={handleInput}
              placeholder="Enter employee designation"
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.empDesignation
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.empDesignation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.empDesignation}
              </p>
            )}
          </div>

          {/* Salary */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="number"
              name="empSalary"
              value={form.empSalary}
              onChange={handleInput}
              placeholder="Enter salary"
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.empSalary
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.empSalary && (
              <p className="text-red-500 text-sm mt-1">{errors.empSalary}</p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Department
            </label>
            <input
              type="text"
              name="empDepartment"
              value={form.empDepartment}
              onChange={handleInput}
              placeholder="Enter department"
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.empDepartment
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.empDepartment && (
              <p className="text-red-500 text-sm mt-1">
                {errors.empDepartment}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              name="empAddress"
              value={form.empAddress}
              onChange={handleInput}
              placeholder="Enter address"
              className={`w-full border rounded-lg px-3 py-2 focus:ring-2 focus:outline-none ${
                errors.empAddress
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors.empAddress && (
              <p className="text-red-500 text-sm mt-1">{errors.empAddress}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Submit
          </button>
        </form>
      </div>

      <Home/>
    </div>
  );
}
