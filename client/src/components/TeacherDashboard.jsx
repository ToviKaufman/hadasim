import { useState } from "react";
import { getStudents } from "../services/studentService";
import { getTeachers } from "../services/teacherService";
import { getStudentsByClass } from "../services/studentService";
import UserList from "./UserList";
import "../App.css";

function TeacherDashboard({ className }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = async (value) => {
    setSelectedOption(value);

    let data = [];

    if (value === "allStudents") {
      data = await getStudents();
    } else if (value === "allTeachers") {
      data = await getTeachers();
    } else if (value === "classStudents") {
      data = await getStudentsByClass(className);
    }

    setUsers(data);
  };

  return (
    <div className="dashboard-container">
      <h3 className="title">בחירת רשימה להצגה</h3>

      <div className="radio-group">
        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value="allStudents"
            checked={selectedOption === "allStudents"}
            onChange={(e) => handleChange(e.target.value)}
          />
          כל התלמידים
        </label>

        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value="allTeachers"
            checked={selectedOption === "allTeachers"}
            onChange={(e) => handleChange(e.target.value)}
          />
          כל המורים
        </label>

        <label className="radio-item">
          <input
            type="radio"
            name="listType"
            value="classStudents"
            checked={selectedOption === "classStudents"}
            onChange={(e) => handleChange(e.target.value)}
          />
          תלמידים בכיתה שלי
        </label>
      </div>

      {users?.length > 0 && <UserList users={users} />}

    </div>
  );
}

export default TeacherDashboard;