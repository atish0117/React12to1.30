import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/employees");
      console.log("Fetched Data:", res.data);
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Employee Identity Cards
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {items.map((emp, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-800 rounded-lg shadow-lg w-80 p-4 text-blue-900"
          >
            {/* Header */}
            <div className="flex items-center border-b border-blue-700 pb-2 mb-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/3/3b/Emblem_of_India.svg"
                alt="emblem"
                className="w-10 h-10 mr-3"
              />
              <div>
                <h2 className="text-lg font-semibold">Government of India</h2>
                <p className="text-xs text-blue-800 font-medium">
                  Employee Identity Card
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-1 text-sm">
              <h3 className="text-xl font-bold text-blue-900">{emp.empName}</h3>
              <p>
                <span className="font-semibold">Age:</span> {emp.empAge}
              </p>
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {emp.empAddress}
              </p>
              <p>
                <span className="font-semibold">Designation:</span>{" "}
                {emp.empDesignation}
              </p>
              <p>
                <span className="font-semibold">Department:</span>{" "}
                {emp.empDepartment}
              </p>
              <p>
                <span className="font-semibold">Salary:</span> ₹
                {emp.empSalary.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-blue-700 mt-3 pt-1 text-right text-xs italic text-gray-700">
              Signature of {emp.empName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
