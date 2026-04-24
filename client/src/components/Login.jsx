import { useState } from "react";
import { getTeachersById } from "../services/teacherService";
import { getStudentsById } from "../services/studentService";
import UserForm from "./UserForm";


function Login() {
  const [id, setId] = useState("");
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [idError, setIdError] = useState("");

  const handleLogin = async () => {
    setLoading(true);

    try {
      const [teacher, student] = await Promise.all([
        getTeachersById(id),
        getStudentsById(id),
      ]);

      if (teacher) {
        setUser({ ...teacher, type: "teacher" });
      } else if (student) {
        setUser({ ...student, type: "student" });
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {user === undefined && (
        <>
          <input
            type="text"
            placeholder="תעודת זהות"
            value={id}
            onChange={(e) => {
              const value = e.target.value;
              if (!/^\d*$/.test(value)) {
                setIdError("תעודת זהות יכולה להכיל רק ספרות");
                return;
              }
              setId(value);
              if (value.length > 9) return;
              if (value.length > 0 && value.length < 9) {
                setIdError("תעודת זהות חייבת להכיל 9 ספרות");
              } else {
                setIdError("");
              }
            }}
          />
          <button
            onClick={handleLogin}
            disabled={id.length !== 9}
          >
            כניסה
          </button>
          {idError && <p style={{ color: "red" }}>{idError}</p>}
        </>
      )}

      {loading && <p>טוען...</p>}

      {user !== undefined && !loading && (
        <UserForm
          user={user}
          id={id}
        />
      )}
    </div>
  );
}
export default Login;