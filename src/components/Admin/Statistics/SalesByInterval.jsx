import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Bar,
	BarChart,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import { useTotalSales } from "../../../hooks";
import { getPizzaSalesBy } from "../../../redux/actions/admin";
import MONTHS, { MONTHS_LIST } from "../../../utils/constants/months";
import SELECT_SALES_BY, {
	SELECT_SALES_BY_LIST,
} from "../../../utils/constants/sales";
import { MonthSelect, SelectPopup } from "../../ui";

const SalesByInterval = () => {
	const date = new Date();
	const currentMonth = date.getMonth() + 1;
	const currentYear = date.getFullYear();

	const dispatch = useDispatch();

	const [selectBy, setSelectBy] = useState(SELECT_SALES_BY.MONTH);

	const [month, setMonth] = useState(currentMonth);
	const [year, setYear] = useState();

	const { sales } = useSelector((state) => state.admin);
	//const totalSales = useTotalSales(sales);

	useEffect(() => {
		if (selectBy === SELECT_SALES_BY.MONTH) {
			dispatch(getPizzaSalesBy(selectBy, month));
		} else if (selectBy === SELECT_SALES_BY.YEAR) {
			dispatch(getPizzaSalesBy(selectBy, year));
		}
	}, [selectBy, month]);

	return (
		<div className="statistics__item">
			<h2 className="statistics__title">Sales by interval</h2>
			<div className="chart-container">
				<div className="chart__selects">
					<SelectPopup
						label="Select by"
						items={SELECT_SALES_BY_LIST}
						activeItem={selectBy}
						onSelectItem={setSelectBy}
					/>
					{selectBy === SELECT_SALES_BY.MONTH ? (
						<MonthSelect activeItem={month} onSelectItem={setMonth} />
					) : (
						""
					)}
				</div>
				<ResponsiveContainer width="100%" height={500}>
					<BarChart data={sales}>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="sales" fill="#d182ff" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default SalesByInterval;
