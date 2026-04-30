import api from "./api";

export const getTeachers = async () => {
  const res = await api.get("/teachers");

  return res?.data;
};
export const getTeacherById = async (id) => {
  const res = await api.get(`/teachers/${id}`);

  return res?.data;
};
export const addTeacher = async (teacher) => {
  const res = await api.post("/teachers", teacher);

  return res.data;
};