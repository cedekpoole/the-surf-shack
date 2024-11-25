import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { ImBin } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import { IoDuplicate } from "react-icons/io5";
import { useCreateCabin } from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    maxCapacity: PropTypes.number,
    name: PropTypes.string,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
    description: PropTypes.string,
  }),
};

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();
  const {
    id: cabinId,
    image,
    maxCapacity,
    name,
    regularPrice,
    discount,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `${name}*`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  return (
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
          disabled={isCreating}
          onClick={handleDuplicate}
          className="transition hover:scale-110"
        >
          <span className="text-accent-dark hover:text-accent-light text-lg">
            <IoDuplicate />
          </span>
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button className="transition hover:scale-110">
              <span className="text-accent-dark hover:text-accent-light text-lg">
                <FaEdit />
              </span>
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateCabinForm cabin={cabin} />
          </Modal.Window>

          <Modal.Open opens="delete">
            <button
              disabled={isDeleting}
              onClick={() => deleteCabin(cabinId)}
              className="transition hover:scale-110"
            >
              <span className="text-accent-dark hover:text-accent-light text-lg">
                <ImBin />
              </span>
            </button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resource="cabin"
              disabled={isDeleting}
              onConfirm={() => deleteCabin(cabinId)}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default CabinRow;
