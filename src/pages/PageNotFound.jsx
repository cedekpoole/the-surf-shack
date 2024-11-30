import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-9xl font-bold">404</h1>
          <p className="text-3xl font-semibold">Page Not Found</p>
          <div className="flex justify-center mt-4">
            <Button onClick={moveBack}>&larr; Go back</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
