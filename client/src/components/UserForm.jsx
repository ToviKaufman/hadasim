import { useState } from "react";
import { addTeacher } from "../services/teacherService";
import { addStudent } from "../services/studentService";

import TeacherDashboard from "./TeacherDashboard";




function UserForm({ user, id }) {
  const isNew = !user;

  const [name, setName] = useState(user?.fullName || "");
  const [className, setClassName] = useState(user?.className || "");

  const [userType, setUserType] = useState(user?.type || "");

  const handleSubmit = async () => {
    const data = {
      id,
      fullName:name,
      className: className,
    };


    if (userType === "teacher") {
        await addTeacher(data);
    } else if (userType === "student") {
        await addStudent(data);
    } else {
      alert("יש לבחור סוג משתמש");
      return;
    }

  };

  return (
    <div>
      <h3>{isNew ? "רישום" : "פרטי משתמש"}</h3>

      {/* ת"ז */}
      <input value={id} disabled />

      {/* שם */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isNew}
        placeholder="שם"
      />

      {/* כיתה */}
      <input
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        disabled={!isNew}
        placeholder="כיתה"
      />

      {/* סוג משתמש - רק ברישום */}
      {isNew && (
        <div>
          <label>
            <input
              type="radio"
                name="userType"

              value="student"
              checked={userType === "student"}
             onChange={(e) => {
  console.log(e.target.value);
  setUserType(e.target.value);
}}
            />
            תלמיד
          </label>

          <label>
            <input
              type="radio"
                name="userType"

              value="teacher"
              checked={userType === "teacher"}
              onChange={(e) => {
  console.log(e.target.value);
  setUserType(e.target.value);
}}
            />
            מורה
          </label>
        </div>
      )}

      {/* צ'קבוקס
      <label>
        <input
          type="checkbox"
          checked={isTrip}
          onChange={(e) => setIsTrip(e.target.checked)}
        />
        משתתף בטיול
      </label> */}

     {isNew && (
      <button onClick={handleSubmit}>
        עדכון
      </button>)}

     {userType === "teacher" && !isNew && (
  <TeacherDashboard className={user.className} />
)}
    </div>
  );
}

export default UserForm;