import { useEffect } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import BookingDataBox from "../bookings/BookingDataBox";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import Checkbox from "../../ui/Checkbox";

function CheckinBooking() {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const { booking, loading } = useBooking();

  useEffect(() => setConfirmPayment(booking?.isPaid), [booking]);

  const moveBack = useMoveBack();

  if (loading) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasRented,
    numNights,
  } = booking;

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-semibold tracking-wide">
          Check in booking #{bookingId}
        </h1>
        <Button onClick={moveBack} style="secondary">
          &larr; Go Back
        </Button>
      </div>
      <BookingDataBox booking={booking} />
      <div className="px-10 py-8 shadow-md border border-[#374151] rounded-lg">
        <Checkbox
          checked={confirmPayment}
          onChange={() => setConfirmPayment((confirm) => !confirm)}
          id="confirm-payment"
          disabled={confirmPayment}
        >
          I confirm that {guests.fullName} has paid the total amount
        </Checkbox>
      </div>
      <div className="flex gap-5 justify-end">
        <Button onClick={() => {}} disabled={!confirmPayment}>
          Check in booking #{bookingId}
        </Button>
        <Button style="secondary" onClick={moveBack}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default CheckinBooking;
