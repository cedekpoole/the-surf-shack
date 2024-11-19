import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

function CabinTable() {
  const {
    isPending: loading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });
  if (error) return <div>Error: {error.message}</div>;

  if (loading) return <Spinner />;
  return (
    <div
      role="table"
      className="border border-gray-200 rounded-md overflow-hidden"
    >
      <div
        role="row"
        className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-4 py-3 items-center font-semibold uppercase tracking-wide"
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
