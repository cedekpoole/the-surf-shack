import PropTypes from 'prop-types';

ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
};

function ProtectedRoutes({ children }) {
  return children;
}

export default ProtectedRoutes;
