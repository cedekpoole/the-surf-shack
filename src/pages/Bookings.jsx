import BookingTableOperations from "../features/bookings/BookingTableOperations";
import BookingsTable from "../features/bookings/BookingsTable";
import PageContainer from "../ui/PageContainer";

function Bookings() {
  return (
    <PageContainer header="Bookings" operation={<BookingTableOperations />}>
      <BookingsTable />
    </PageContainer>
  );
}

export default Bookings;
