import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import PageContainer from "../ui/PageContainer";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <PageContainer header="All Cabins">
      <CabinTable />
      <button onClick={() => setShowForm(!showForm)}>Add new cabin</button>
      {showForm && <CreateCabinForm />}
    </PageContainer>
  );
}

export default Cabins;
