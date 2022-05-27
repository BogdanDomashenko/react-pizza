import protectedApi from "./protectedApi";

export const fetchOrdersList = async (page, size) => {
  const response = await protectedApi.get(
    `order/list?page=${page}&&size=${size}`
  );

  return response.data;
};

export const updateOrderQuery = async (order) => {
  const response = await protectedApi.post("order/update", { order });
  return response.data;
};

export const fetchAdminPizzas = async (page, size) => {
  const response = await protectedApi.get(
    `pizza/list?page=${page}&&size=${size}`
  );
  return response.data;
};

export const updatePizzaQuery = async (pizza) => {
  const response = await protectedApi.post("pizza/update", { pizza });
  return response.data;
};

export const fetchAllStockPizzas = async (page, size) => {
  const response = await protectedApi.get(
    `stock/allPizzas?page=${page}&&size=${size}`
  );
  return response.data;
};

export const setPizzaAvailableQuery = async (id) => {
  const response = await protectedApi.get("stock/setPizzaAvailable/" + id);
  return response.data;
};

export const setPizzaNotAvailableQuery = async (id) => {
  const response = await protectedApi.get("stock/setPizzaNotAvailable/" + id);
  return response.data;
};

export const setPizzaTypeAvailableQuery = async (id, typeID, available) => {
  const response = await protectedApi.post("stock/setPizzaTypeAvailable", {
    id,
    typeID,
    available,
  });
  return response.data;
};

export const setPizzaSizeAvailableQuery = async (id, sizeID, available) => {
  const response = await protectedApi.post("stock/setPizzaSizeAvailable", {
    id,
    sizeID,
    available,
  });
  return response.data;
};
