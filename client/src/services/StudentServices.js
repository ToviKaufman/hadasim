import api from "./api";

export const getStudents = async () => {
  const res = await api.get("/students");

  return res?.data;
};

export const getStudentById = async (id) => {
  const res = await api.get(`/students/${id}`);

  return res?.data;
};
export const getStudentsByClass = async (className) => {
  const res = await api.get(`/students/class/${className}`);

 return res?.data;
};
export const addStudent = async (student) => {
  const res = await api.post("/students", student);

  return res.data;
};