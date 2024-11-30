import { format } from "date-fns";
import { formatDistanceFromNow, formatCurrency } from "../../utils/helpers";
import { isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import DataItem from "../../ui/DataItem";
import PropTypes from "prop-types";

BookingDataBox.propTypes = {
  booking: PropTypes.shape({
    created_at: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    numNights: PropTypes.number,
    numGuests: PropTypes.number,
    cabinPrice: PropTypes.number,
    extraPrice: PropTypes.number,
    totalPrice: PropTypes.number,
    hasRented: PropTypes.bool,
    observations: PropTypes.string,
    isPaid: PropTypes.bool,
    guests: PropTypes.shape({
      fullName: PropTypes.string,
      email: PropTypes.string,
      country: PropTypes.string,
      countryFlag: PropTypes.string,
      nationalID: PropTypes.string,
    }),
    cabins: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
};

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extraPrice,
    totalPrice,
    hasRented,
    observations,
    isPaid,
    guests: { fullName: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <section className="rounded-lg overflow-hidden shadow-md border border-[#374151]">
      <header className="bg-primary-dark p-6 rounded-t-md text-lg font-medium flex items-center justify-between">
        <div className="flex items-center gap-4 font-semibold text-lg">
          <HiOutlineHomeModern className="text-3xl" />
          <p>
            {numNights} nights in Cabin{" "}
            <span className="font-display text-xl">{cabinName}</span>
          </p>
        </div>
        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </header>

      <section className="p-8 pb-4">
        <div className="flex items-center gap-3 mb-4">
          {countryFlag && (
            <img
              className="max-w-8 block rounded-sm border"
              src={countryFlag}
              alt={`Flag of ${country}`}
            />
          )}
          <p className="font-medium">
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span className="text-gray-400">&bull;</span>
          <p className="text-gray-400">{email}</p>
          <span className="text-gray-400">&bull;</span>
          <p className="text-gray-400">National ID {nationalID}</p>
        </div>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="Observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem
          icon={<HiOutlineCheckCircle />}
          label="Rental equipment included?"
        >
          {hasRented ? "Yes" : "No"}
        </DataItem>

        <div
          className={`flex items-center justify-between p-4 rounded-sm mt-6 ${
            isPaid
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(totalPrice)}

            {hasRented &&
              ` (${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extraPrice
              )} rental price)`}
          </DataItem>
          <p className="uppercase text-sm font-semibold">
            {isPaid ? "Paid" : "Will pay at property"}
          </p>
        </div>
      </section>

      <footer className="p-4 text-sm text-gray-400 text-right">
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </footer>
    </section>
  );
}

export default BookingDataBox;
