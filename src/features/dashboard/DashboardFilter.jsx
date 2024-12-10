import Filter from "../../ui/Filter";

function DashboardFilter() {
  return (
    <Filter filterField="last" options={["7 days", "30 days", "90 days"]} />
  );
}

export default DashboardFilter;
