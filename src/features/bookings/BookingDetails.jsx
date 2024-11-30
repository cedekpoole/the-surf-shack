import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import BookingDataBox from "./BookingDataBox";

function BookingDetails() {
  const { booking, loading } = useBooking();
  const moveBack = useMoveBack();

  if (loading) return <Spinner />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "bg-blue-200 text-blue-700",
    "checked-in": "bg-green-200 text-green-700",
    "checked-out": "bg-gray-200 text-gray-700",
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-5 items-center">
          <h1 className="text-3xl font-semibold tracking-wide">
            Booking #{bookingId}
          </h1>
          <Tag type={statusToTagName[status]}>Unconfirmed</Tag>
        </div>
        <Button onClick={moveBack} style="secondary">
          &larr; Go Back
        </Button>
      </div>
      <BookingDataBox booking={booking} />
    </div>
  );
}

export default BookingDetails;
