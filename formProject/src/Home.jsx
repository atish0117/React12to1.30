import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ✅ Fetch employees
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/employees");
      console.log("Fetched Data:", res.data);
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError("Failed to fetch employee data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Delete employee
  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`http://localhost:3000/employees/${id}`);
        alert("Employee deleted successfully!");
        fetchData(); // Refresh list after delete
      } catch (error) {
        console.error("Error deleting employee:", error);
        alert("Failed to delete employee. Please try again.");
      }
    }
  };

  // Navigate to update page
  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Loading and error states
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-900 text-2xl font-semibold">
        Loading employees...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-600 text-xl font-semibold">
        {error}
      </div>
    );
  }

  // ✅ Main UI
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Employee Identity Cards
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {items.length > 0 ? (
          items.map((emp) => (
            <div
              key={emp.id}
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
                <p><span className="font-semibold">Age:</span> {emp.empAge}</p>
                <p><span className="font-semibold">Address:</span> {emp.empAddress}</p>
                <p><span className="font-semibold">Designation:</span> {emp.empDesignation}</p>
                <p><span className="font-semibold">Department:</span> {emp.empDepartment}</p>
                <p>
                  <span className="font-semibold">Salary:</span> ₹
                  {emp.empSalary.toLocaleString("en-IN")}
                </p>
              </div>

              {/* Footer */}
              <div className="border-t border-blue-700 mt-3 pt-2 text-right text-xs italic text-gray-700">
                Signature of {emp.empName}
                <div className="mt-2">
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-rose-700 px-2 py-1 rounded-lg text-amber-50 ml-2 active:bg-gray-500 cursor-pointer"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(emp.id)}
                    className="bg-green-700 px-2 py-1 rounded-lg text-amber-50 ml-2 active:bg-gray-500 cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 text-lg font-medium">
            No employee data found.
          </p>
        )}
      </div>
    </div>
  );
};
