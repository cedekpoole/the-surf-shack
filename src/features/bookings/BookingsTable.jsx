import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import { useSearchParams } from "react-router-dom";

function BookingsTable() {
  const { bookings, loading } = useBookings();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") || "all";

  let filteredBookings;
  if (filterValue === "all") filteredBookings = bookings;
  if (filterValue === "unconfirmed")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "unconfirmed"
    );
  if (filterValue === "checked-out")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "checked-out"
    );
  if (filterValue === "checked-in")
    filteredBookings = bookings.filter(
      (booking) => booking.status === "checked-in"
    );

  if (loading) return <Spinner />;
  return (
    <Menus>
      <Table gridCols="grid-cols-[0.6fr_2fr_2.4fr_1.4fr_1fr_3.2rem]">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingsTable;
