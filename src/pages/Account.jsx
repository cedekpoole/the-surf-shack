import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import PageContainer from "../ui/PageContainer";

function Account() {
  return (
    <>
      <PageContainer header="Update your account">
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl">Update user data</h1>
          <UpdateUserDataForm />
          <h1 className="text-2xl">Update password</h1>
          <UpdatePasswordForm />
        </div>
      </PageContainer>
    </>
  );
}

export default Account;
