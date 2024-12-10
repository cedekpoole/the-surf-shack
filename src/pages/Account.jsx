import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import PageContainer from "../ui/PageContainer";

function Account() {
  return (
    <>
      <PageContainer header="Update your account">
        <h1 className="text-2xl">Update user data</h1>
        <div className="flex flex-col gap-8">
          <UpdateUserDataForm />
          <UpdatePasswordForm />
        </div>
      </PageContainer>
    </>
  );
}

export default Account;
