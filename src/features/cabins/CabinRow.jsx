import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    maxCapacity: PropTypes.number,
    name: PropTypes.string,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
  }),
};

function CabinRow({ cabin }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const {
    id: cabinId,
    image,
    maxCapacity,
    name,
    regularPrice,
    discount,
  } = cabin;

  return (
    <>
      <div className="grid grid-cols-[0.8fr_1.8fr_2.2fr_1fr_1fr_1fr] px-4 py-3 items-center border-b-[1px] border-[#374151]">
        <img
          className="border-r-[1px] border-[#374151] aspect-[3/2] w-16 block object-cover object-center transform scale-150 translate-x-[-7px]"
          src={image}
          alt="cabin image"
        />
        <div className="font-semibold text-lg tracking-wide">{name}</div>
        <div>Fits up to {maxCapacity} guests</div>
        <div>{formatCurrency(regularPrice)}</div>
        {discount ? (
          <div>{formatCurrency(discount)}</div>
        ) : (
          <span className="ml-2">&mdash;</span>
        )}
        <div className="flex justify-between">
          <button
            disabled={isDeleting}
            onClick={() => setShowForm(!showForm)}
            className="transition hover:scale-110"
          >
            <span className="text-accent-dark hover:text-accent-light text-lg">
              <FaEdit />
            </span>
          </button>
          <button
            disabled={isDeleting}
            onClick={() => deleteCabin(cabinId)}
            className="transition hover:scale-110"
          >
            <span className="text-accent-dark hover:text-accent-light text-lg">
              <ImBin />
            </span>
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabin={cabin} />}
    </>
  );
}

export default CabinRow;
