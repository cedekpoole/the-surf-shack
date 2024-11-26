import Menus from "../../ui/Menus";
import Table from "../../ui/Table";
import { useBookings } from "./useBookings";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";

function BookingsTable() {
  const { bookings, loading } = useBookings();

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
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
      </Table>
    </Menus>
  );
}

export default BookingsTable;
