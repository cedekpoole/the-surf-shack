import CabinTable from "../features/cabins/CabinTable";
import PageContainer from "../ui/PageContainer";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  return (
    <PageContainer header="All Cabins" operation={<CabinTableOperations />}>
      <CabinTable />
      <AddCabin />
    </PageContainer>
  );
}

export default Cabins;
