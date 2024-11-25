import Button from "./Button";
import PropTypes from "prop-types";

ConfirmDelete.propTypes = {
  resource: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onCloseModal: PropTypes.func,
};

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  function handleConfirmClick() {
    onConfirm();
  }

  return (
    <div className="w-[40rem] flex flex-col gap-4">
      <h3 className="text-2xl font-semibold">Delete {resource}</h3>
      <p className="text-gray-300 mb-4">
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div className="flex justify-end gap-4">
        <Button style="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button style="danger" onClick={handleConfirmClick} disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
