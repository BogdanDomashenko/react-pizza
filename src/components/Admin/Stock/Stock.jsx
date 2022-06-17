import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination, usePizzaTypes } from "../../../hooks";
import { usePizzaSizes } from "../../../hooks/usePizzaSizes";
import { getAdminAllStockPizzas } from "../../../redux/actions/admin";
import { Pagination } from "../../";
import StockItem from "./StockItem";

const Stock = () => {
	const dispatch = useDispatch();

	const pizzaSizes = usePizzaSizes();
	const pizzaTypes = usePizzaTypes();
	const { list: stockPizzas, totalCount } = useSelector(
		(state) => state.admin.stockPizzas
	);

	const pagination = usePagination(totalCount, 5);

	useEffect(() => {
		dispatch(getAdminAllStockPizzas(pagination.page, pagination.rowsPerPage));
	}, [pagination.page]);

	return (
		<div className="stock">
			<div className="stock__content">
				<table className="table stock-table">
					<thead>
						<tr>
							<th>available</th>
							<th>id</th>
							<th>name</th>
							<th>available sizes</th>
							<th>available types</th>
						</tr>
					</thead>
					<tbody>
						{stockPizzas &&
							pizzaSizes &&
							pizzaSizes &&
							stockPizzas.map((pizza) => (
								<StockItem
									key={pizza.id}
									id={pizza.id}
									name={pizza.name}
									sizes={pizzaSizes}
									types={pizzaTypes}
									availableSizes={pizza.sizes}
									availableTypes={pizza.types}
								/>
							))}
					</tbody>
				</table>
				{totalCount ? <Pagination {...pagination} /> : ""}
			</div>
		</div>
	);
};

export default Stock;
