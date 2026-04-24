import { useState } from "react";
import { getTeachersById } from "../services/teacherService";
import { getStudentsById } from "../services/studentService";
import  UserForm  from "./UserForm";




function Login() {
  const [id, setId] = useState("");
  const [user, setUser] = useState(undefined); 
  const [loading, setLoading] = useState(false);

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
            onChange={(e) => setId(e.target.value)}
          />
          <button onClick={handleLogin}>כניסה</button>
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