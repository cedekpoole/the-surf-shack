import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function CabinTable() {
  const { loading, cabins, error } = useCabins();

  if (error) return <div>Error: {error.message}</div>;

  if (loading) return <Spinner />;
  return (
    <div
      role="table"
      className="border border-[#374151] border-b-0 rounded-md overflow-hidden shadow-md"
    >
      <div
        role="row"
        className="bg-[#34434D] border-b-2 border-[#374151] grid grid-cols-[0.8fr_1.8fr_2.2fr_1fr_1fr_1fr] px-4 py-3 items-center font-semibold uppercase tracking-wide"
      >
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </div>
      {cabins.map((cabin) => (
        <CabinRow key={cabin.id} cabin={cabin} />
      ))}
    </div>
  );
}

export default CabinTable;
