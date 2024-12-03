import PropTypes from "prop-types";
import Table from "../../ui/Table";
import { format, isToday } from "date-fns";
import { formatDistanceFromNow } from "../../utils/helpers";
import { formatCurrency } from "../../utils/helpers";
import Tag from "../../ui/Tag";
import Menus from "../../ui/Menus";
import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "../check-in-out/useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";
import { RiDeleteBin5Line } from "react-icons/ri";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

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
  const navigate = useNavigate();
  const { checkout, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "bg-blue-200 text-blue-700",
    "checked-in": "bg-green-200 text-green-700",
    "checked-out": "bg-gray-200 text-gray-700",
  };
  return (
    <Table.Row>
      <Modal>
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
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See Details
            </Menus.Button>
            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}
            {status === "checked-in" && (
              <Menus.Button
                icon={<HiArrowUpOnSquare />}
                onClick={() => checkout(bookingId)}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}
            {status === "checked-out" && (
              <Modal.Open opens="delete">
                <Menus.Button
                  icon={<RiDeleteBin5Line />}
                  onClick={() => deleteBooking(bookingId)}
                >
                  Delete
                </Menus.Button>
              </Modal.Open>
            )}
          </Menus.List>
          <Modal.Window name="delete">
            <ConfirmDelete
              resource="booking"
              disabled={isDeleting} 
              onConfirm={() => deleteBooking(bookingId)}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
