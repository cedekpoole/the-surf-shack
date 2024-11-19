import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";

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
  return <div>Cabin Table</div>;
}

export default CabinTable;
