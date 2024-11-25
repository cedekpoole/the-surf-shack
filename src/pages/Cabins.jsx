import CabinTable from "../features/cabins/CabinTable";
import PageContainer from "../ui/PageContainer";
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  return (
    <PageContainer header="All Cabins">
      <CabinTable />
      <AddCabin />
    </PageContainer>
  );
}

export default Cabins;
