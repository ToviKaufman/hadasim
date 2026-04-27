import api from "./api";
import { Teacher } from "../models/Teacher";

export const getTeachers = async () => {
  const res = await api.get("/teachers");

  return res?.data?.map?.(Teacher);
};
export const getTeachersById = async (id) => {
  const res = await api.get(`/teachers/${id}`);

  return res?.data;
};
export const addTeacher = async (teacher) => {
  const res = await api.post("/teachers", teacher);

  return Teacher(res.data);
};