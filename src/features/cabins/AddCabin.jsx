import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <div className="flex justify-end">
        <Button onClick={() => setShowForm(!showForm)}> + Add new cabin</Button>
      </div>
      {showForm && <CreateCabinForm />};
    </>
  );
}

export default AddCabin;
