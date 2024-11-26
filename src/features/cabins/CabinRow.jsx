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
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

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
    <Table.Row>
      <img
        className="aspect-[3/2] rounded-r-sm w-[4.1rem] block object-cover object-center transform scale-150 translate-x-[-7px]"
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
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Menus.List id={cabinId}>
              <Menus.Button icon={<IoDuplicate />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>
              <Modal.Open opens="edit">
                <Menus.Button icon={<FaEdit />}>Edit</Menus.Button>
              </Modal.Open>
              <Modal.Open opens="delete">
                <Menus.Button
                  icon={<ImBin />}
                  onClick={() => deleteCabin(cabinId)}
                >
                  Delete
                </Menus.Button>
              </Modal.Open>
            </Menus.List>
            <Modal.Window name="edit">
              <CreateCabinForm cabin={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resource="cabin"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
