import { useEffect } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import BookingDataBox from "../bookings/BookingDataBox";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSettings } from "../settings/useSettings";
import { useCheckout } from "./useCheckout";

function CheckinBooking() {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [addRental, setAddRental] = useState(false);
  const { booking, loading } = useBooking();

  useEffect(() => setConfirmPayment(!!booking?.isPaid), [booking]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useCheckin();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  if (loading || isLoadingSettings) return <Spinner />;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasRented,
    numNights,
  } = booking;

  const optionalRentalPrice = settings?.rentalPrice * numGuests * numNights;

  function handleCheckin() {
    if (!confirmPayment) return;
    if (addRental) {
      checkin({
        bookingId,
        rental: {
          hasRented: true,
          extraPrice: optionalRentalPrice,
          totalPrice: totalPrice + optionalRentalPrice,
        },
      });
    } else {
      checkin({ bookingId, rental: {} });
    }
  }

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
      {!hasRented && (
        <div className="px-10 py-8 shadow-md border border-[#374151] rounded-lg">
          <Checkbox
            checked={addRental}
            onChange={() => {
              setAddRental((rent) => !rent);
              setConfirmPayment(false);
            }}
            id="add-rental"
            disabled={isCheckingIn}
          >
            Want to rent equipment for an additional{" "}
            {formatCurrency(optionalRentalPrice)}?
          </Checkbox>
        </div>
      )}
      <div className="px-10 py-8 shadow-md border border-[#374151] rounded-lg">
        <Checkbox
          checked={confirmPayment}
          onChange={() => setConfirmPayment((confirm) => !confirm)}
          id="confirm-payment"
          disabled={confirmPayment || isCheckingIn}
        >
          I confirm that {guests.fullName} has paid the total amount of{" "}
          {!addRental
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalRentalPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalRentalPrice
              )})`}
          .
        </Checkbox>
      </div>
      <div className="flex gap-5 justify-end">
        <Button onClick={handleCheckin} disabled={!confirmPayment}>
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
