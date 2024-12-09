import SignupForm from "../features/authentication/SignupForm";
import PageContainer from "../ui/PageContainer";

function Users() {
  return (
    <PageContainer header="Create a new user">
      <SignupForm />
    </PageContainer>
  );
}

export default Users;
