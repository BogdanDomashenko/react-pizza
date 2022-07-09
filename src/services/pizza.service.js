import api from "./api";
import protectedApi from "./protectedApi";

export const fetchPizzaSizes = async () => {
    const response = await api.get("pizza/sizes");
    return response.data;
};

export const fetchPizzaTypes = async () => {
    const response = await api.get("pizza/types");
    return response.data;
};

export const addPizzaQuery = async (pizza) => {
    const response = await protectedApi.post("pizza/add", {...pizza});
    return response.data;
};

export const deletePizzaQuery = async (id) => {
    const response = await protectedApi.get("pizza/delete/" + id);
    return response.data;
};

export const fetchAviablePizzas = async (page, size, category) => {
    const response = await api.get(`stock/aviablePizzas?page=${page}&&size=${size}&&category=${category}`);
    return response.data;
}
