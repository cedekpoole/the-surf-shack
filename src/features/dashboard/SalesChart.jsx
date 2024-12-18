import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

SalesChart.propTypes = {
  bookings: PropTypes.array,
  numDays: PropTypes.number,
};

function SalesChart({ bookings, numDays }) {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    return {
      label: format(date, "MMM dd"),
      totalSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, booking) => acc + booking.totalPrice, 0),
      extrasSales: bookings
        .filter((booking) => isSameDay(date, new Date(booking.created_at)))
        .reduce((acc, booking) => acc + booking.extraPrice, 0),
    };
  });

  return (
    <div className="col-span-full py-4 pr-3 pl-1 bg-[#34434D] rounded-md">
      <h1 className="text-2xl font-semibold mb-5 tracking-wide pl-4">Sales</h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: "#f1f1f1" }}
            tickLine={{ stroke: "#f1f1f1" }}
          />
          <YAxis
            unit="£"
            tick={{ fill: "#f1f1f1" }}
            tickLine={{ stroke: "#f1f1f1" }}
          />
          <CartesianGrid strokeDasharray="4" stroke="gray" />
          <Tooltip contentStyle={{ backgroundColor: "#34434D" }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            strokeWidth={2}
            name="Total Sales"
            unit="£"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            strokeWidth={2}
            name="Extras Sales"
            unit="£"
            fill="#F4BBAF"
            stroke="#EFAE9D"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
