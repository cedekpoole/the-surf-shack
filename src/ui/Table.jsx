import { createContext, useContext } from "react";
import PropTypes from "prop-types";

Table.propTypes = {
  children: PropTypes.node,
  gridCols: PropTypes.string,
};
Header.propTypes = {
  children: PropTypes.node,
};
Row.propTypes = {
  children: PropTypes.node,
};
Body.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func,
};
Footer.propTypes = {
  children: PropTypes.node,
};

const TableContext = createContext();

function Table({
  children,
  gridCols = "grid-cols-[0.8fr_1.8fr_2.2fr_1fr_1fr_1fr]",
}) {
  return (
    <TableContext.Provider value={{ gridCols }}>
      <div
        role="table"
        className="border border-[#374151] border-b-0 rounded-md overflow-hidden shadow-md"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
}
function Header({ children }) {
  const { gridCols } = useContext(TableContext);
  return (
    <header
      role="row"
      className={`bg-[#34434D] border-b-2 border-[#374151] grid ${gridCols} px-4 py-3 items-center font-semibold uppercase tracking-wide`}
    >
      {children}
    </header>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return <div className="text-center p-4">No data available</div>;

  return <section>{data.map(render)}</section>;
}

function Row({ children }) {
  const { gridCols } = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${gridCols} px-4 py-3 items-center border-b-[1px] border-[#374151]`}
    >
      {children}
    </div>
  );
}

function Footer({ children }) {
  return (
    <footer className="bg-[#34434D] p-5 flex justify-center border-t-2 border-[#374151] rounded-b-md overflow-hidden shadow-md">
      {children}
    </footer>
  );
}
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
