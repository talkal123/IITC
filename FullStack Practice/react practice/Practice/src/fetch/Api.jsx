import React from 'react'
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // ה-URL של השרת שלך
});



export const getTasks = () => API.get("/tasks");
export const createTask = (data) => API.post("/tasks", data);
export const deleteTask = (id) => API.delete(`/task/${id}`, id);
export const updateTask = (id,updateValue ) => API.put(`/task/${id}`,  { task: updateValue  });
