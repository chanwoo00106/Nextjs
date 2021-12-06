import api from "./";

export const getAllTodo = async () => {
  try {
    const { data } = await api.get();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const toggle = async ({ id }) => {
  try {
    const res = await api.patch(`/toggle/${id}`);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};
