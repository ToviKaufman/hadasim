import api from "./api";
import { Teacher } from "../models/Teacher";

export const getTeachers = async () => {
  const res = await api.get("/Teachers");

  return res?.data?.map?.(Teacher);
};
export const getTeachersById = async (id) => {
  const res = await api.get(`/Teachers/${id}`);

  return res?.data;
};
export const addTeacher = async (teacher) => {
  const res = await api.post("/Teachers", teacher);

  return Teacher(res.data);
};