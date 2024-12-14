import PropTypes from "prop-types";

Stats.propTypes = {
  bookings: PropTypes.array,
  confirmedStays: PropTypes.array,
};

function Stats({ bookings, confirmedStays }) {
  const numBookings = bookings.length;
  return <></>;
}

export default Stats;
