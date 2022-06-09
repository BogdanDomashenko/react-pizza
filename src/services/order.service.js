import api from "./api";
import protectedApi from "./protectedApi";

export const checkoutOrder = async (number, orderList) => {
	const response = await api.post("order/checkout", { orderList, number });
	return response.data;
};

export const fetchOrder = async (id) => {
	const response = await api.get("order/info/" + id);
	return response.data;
};

export const fetchUserOrders = async (page, size) => {
	const response = await protectedApi.get(
		`order/list-by-user?page=${page}&&size=${size}`
	);

	return response.data;
};
