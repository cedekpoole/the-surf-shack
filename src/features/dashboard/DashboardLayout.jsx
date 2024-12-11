import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

function DashboardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

  return (
    <div className="grid grid-cols-4 grid-rows-[auto_20rem_auto] gap-10">
      <div>Statistics</div>
      <div>Today&apos;s activities</div>
      <div>Chart stay durations</div>
      <div>Chart revenue</div>
    </div>
  );
}

export default DashboardLayout;
