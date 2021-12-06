import api from "./";

export const getAllTodo = async () => {
  try {
    const { data } = await api.get();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const toggle = async ({ id, toggle }) => {
  try {
    await api.patch(`/toggle/${id}`, { toggle });
  } catch (e) {
    console.log(e);
  }
};

export const remove = async ({ id }) => {
  try {
    await api.delete(`/delete/${id}`);
  } catch (e) {
    console.log(e);
  }
};
