import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import PageContainer from "../ui/PageContainer";

function Dashboard() {
  return (
    <PageContainer header="Dashboard" operation={<DashboardFilter />}>
      <DashboardLayout />
    </PageContainer>
  );
}

export default Dashboard;
