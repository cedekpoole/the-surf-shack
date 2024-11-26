import PropTypes from "prop-types";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";

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
    unconfirmed: "bg-blue-500",
    "checked-in": "bg-green-500",
    "checked-out": "bg-gray-300",
  };
  return (
    <Table.Row>
      <div className="font-lg font-medium">{cabinName}</div>
      <div className="flex flex-col gap-1">
        <span>{guestName}</span>
        <span>{email}</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}{" "}
          &rarr; {numNights} night stay
        </span>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>
    </Table.Row>
  );
}

export default BookingRow;
