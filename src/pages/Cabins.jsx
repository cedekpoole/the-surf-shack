import CabinTable from "../features/cabins/CabinTable";

function Cabins() {
  return (
    <div className="p-3">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold tracking-wide">Cabins</h1>
        <button>Filter / Sort</button>
      </div>
      <CabinTable />
    </div>
  );
}

export default Cabins;
