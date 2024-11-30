function Pagination() {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-lg mr-5">
        Showing <span className="font-semibold">1</span> to{" "}
        <span className="font-semibold">10</span> of{" "}
        <span className="font-semibold">23</span> results
      </p>
    </div>
  );
}

export default Pagination;
