import PropTypes from "prop-types";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../ui/Tag";

BookingRow.propTypes = {
  booking: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    numNights: PropTypes.number,
    numGuests: PropTypes.number,
    totalPrice: PropTypes.number,
    status: PropTypes.string,
    guests: PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
    }),
    cabins: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};
function BookingRow({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const statusToTagName = {
    unconfirmed: "bg-blue-200 text-blue-700",
    "checked-in": "bg-green-200 text-green-700",
    "checked-out": "bg-gray-200 text-gray-700",
  };
  return (
    <Table.Row>
      <div className="font-lg font-medium">{cabinName}</div>
      <div className="flex flex-col gap-1">
        <span className="font-medium">{guestName}</span>
        <span className="text-gray-300 text-sm">{email}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-medium">
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span className="text-gray-300 text-sm">
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>
      <Tag type={statusToTagName[status]}>{status}</Tag>
      <div className="font-medium">{formatCurrency(totalPrice)}</div>
    </Table.Row>
  );
}

export default BookingRow;
