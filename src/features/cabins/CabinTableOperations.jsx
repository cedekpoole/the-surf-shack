import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={["All", "No Discount", "With Discount"]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
