import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      {/* Filter */}
      <Filter
        filterField="status"
        options={["All", "Unconfirmed", "Checked out", "Checked in"]}
      />
      {/* SortBy */}
    </TableOperations>
  );
}

export default BookingTableOperations;
