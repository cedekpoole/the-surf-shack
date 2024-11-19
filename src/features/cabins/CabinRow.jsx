import PropTypes from "prop-types";

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    image: PropTypes.string,
    maxCapacity: PropTypes.number,
    name: PropTypes.string,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
  }),
};

function CabinRow({ cabin }) {
  const { image, maxCapacity, name, regularPrice, discount } = cabin;
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-4 py-3 items-center">
      <img
        className="aspect-square w-12 block rounded-r-md object-cover object-center transform scale-150 translate-x-[-7px]"
        src={image}
        alt="cabin image"
      />
      <div className="font-semibold text-lg tracking-wide">{name}</div>
      <div>Fits up to {maxCapacity} guests</div>
      <div>{regularPrice}</div>
      <div>{discount}</div>
    </div>
  );
}

export default CabinRow;
