import { useState } from "react";
import { addTeacher } from "../services/teacherService";
import { addStudent } from "../services/studentService";
import TeacherDashboard from "./TeacherDashboard";


function UserForm({ user, id }) {
  const isNew = !user;

  const [name, setName] = useState(user?.fullName || "");
  const [className, setClassName] = useState(user?.className || "");
  const [errors, setErrors] = useState({});
  const [userType, setUserType] = useState(user?.type || "");
  const [createdUser, setCreatedUser] = useState(null);

  const handleSubmit = async () => {

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "שם הוא שדה חובה";
    }
    if (!className.trim()) {
      newErrors.className = "כיתה היא שדה חובה";
    }
    if (!userType) {
      newErrors.userType = "חובה לבחור תלמיד או מורה";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const data = {
      id,
      fullName: name,
      className: className,
    };

    try {
      if (userType === "teacher") {
        await addTeacher(data);
      } else {
        await addStudent(data);
      }
      setCreatedUser({ ...data, type: userType });
    } catch (err) {
      setCreatedUser(null);
      alert("השמירה נכשלה");
    }
  };

  return (
    <div>
      <h3>{isNew ? "רישום" : "פרטי משתמש"}</h3>

      <input value={id} disabled />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!isNew}
        required
        placeholder="שם מלא"
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      <input
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        disabled={!isNew}
        required
        placeholder="כיתה"
      />
      {errors.className && <p style={{ color: "red" }}>{errors.className}</p>}
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
      {errors.userType && <p style={{ color: "red" }}>{errors.userType}</p>}

      {isNew && !createdUser && (
        <button onClick={handleSubmit}>
          עדכון
        </button>
      )}
      {createdUser && (
        <p style={{ color: "green" }}> המשתמש נשמר בהצלחה </p>
      )}
      {(createdUser?.type === "teacher" || user?.type === "teacher") && (
        <TeacherDashboard className={createdUser?.className || user?.className} />
      )}
    </div>
  );
}

export default UserForm;