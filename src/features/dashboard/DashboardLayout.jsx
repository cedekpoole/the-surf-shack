import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";

function DashboardLayout() {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const { cabins, loading } = useCabins();
  const cabinCount = cabins?.length || 0;

  const {
    stays,
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();

  if (isLoading1 || isLoading2 || loading) return <Spinner />;

  return (
    <div className="grid grid-cols-4 grid-rows-[auto_15rem_auto] gap-4">
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabinCount}
      />
      <div>Today&apos;s activities</div>
      <div>Chart stay durations</div>
      <div>Chart revenue</div>
    </div>
  );
}

export default DashboardLayout;
