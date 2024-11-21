import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import PageContainer from "../ui/PageContainer";
import Button from "../ui/Button";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <PageContainer header="All Cabins">
      <CabinTable />
      <div className="flex justify-end">
        <Button onClick={() => setShowForm(!showForm)}> + Add new cabin</Button>
      </div>
      {showForm && <CreateCabinForm />}
    </PageContainer>
  );
}

export default Cabins;
