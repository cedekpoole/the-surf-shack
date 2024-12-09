import PropTypes from "prop-types";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

ProtectedRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, loading, isFetching } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !loading && !isFetching) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, loading, isFetching]);

  if (loading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
