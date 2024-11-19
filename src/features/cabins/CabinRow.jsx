import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

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
    <div className="bg-[#243037] grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-4 py-3 items-center">
      <img
        className="border-r-[1px] aspect-square w-12 block object-cover object-center transform scale-150 translate-x-[-7px]"
        src={image}
        alt="cabin image"
      />
      <div className="font-semibold text-lg tracking-wide">{name}</div>
      <div>Fits up to {maxCapacity} guests</div>
      <div>{formatCurrency(regularPrice)}</div>
      <div>{formatCurrency(discount)}</div>
    </div>
  );
}

export default CabinRow;
