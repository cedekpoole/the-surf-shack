import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import PageContainer from "../ui/PageContainer";
function Settings() {
  return (
    <PageContainer header="Update Hotel Settings" filter={false}>
      <UpdateSettingsForm />
    </PageContainer>
  );
}

export default Settings;
