import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

CabinRow.propTypes = {
  cabin: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    maxCapacity: PropTypes.number,
    name: PropTypes.string,
    regularPrice: PropTypes.number,
    discount: PropTypes.number,
  }),
};

function CabinRow({ cabin }) {
  const {
    id: cabinId,
    image,
    maxCapacity,
    name,
    regularPrice,
    discount,
  } = cabin;

  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate } = useMutation({
    mutationFn: (id) => deleteCabin(id),
    onSuccess: () => {
      toast.success("Cabin deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] px-4 py-3 items-center border-b-[1px] border-[#374151]">
      <img
        className="border-r-[1px] border-[#374151] aspect-square w-12 block object-cover object-center transform scale-150 translate-x-[-7px]"
        src={image}
        alt="cabin image"
      />
      <div className="font-semibold text-lg tracking-wide">{name}</div>
      <div>Fits up to {maxCapacity} guests</div>
      <div>{formatCurrency(regularPrice)}</div>
      <div>{formatCurrency(discount)}</div>
      <button
        className="text-accent-dark hover:text-accent-light hover:scale-105"
        disabled={isDeleting}
        onClick={() => mutate(cabinId)}
      >
        Delete
      </button>
    </div>
  );
}

export default CabinRow;
