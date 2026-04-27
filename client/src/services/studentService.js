import api from "./api";
import { Student } from "../models/Student";

export const getStudents = async () => {
  const res = await api.get("/students");

  return res?.data?.map?.(Student);
};

export const getStudentsById = async (id) => {
  const res = await api.get(`/students/${id}`);

  return res?.data;
};
export const getStudentsByClass = async (className) => {
  const res = await api.get(`/students/class/${className}`);

 return res?.data?.map?.(Student);
};
export const addStudent = async (student) => {
  const res = await api.post("/students", student);

  return Student(res.data);
};