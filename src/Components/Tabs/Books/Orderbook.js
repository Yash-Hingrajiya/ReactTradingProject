import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { useState, useRef, useEffect, useMemo } from "react";

import "ag-grid-enterprise";

function Orderbook() {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();

  const columnDefs = useMemo(() => {
    return [
      { field: "athlete" },
      { field: "age" },
      { field: "country" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
      { field: "athlete" },
      { field: "age" },
      { field: "country" },
      { field: "gold" },
      { field: "silver" },
      { field: "bronze" },
      { field: "total" },
    ];
  }, []);

  const defaultColDef = useMemo(() => ({
    resizable: true,
    sortable: true,
    width: 100,
  }));

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{ overflow: "auto", height: "275px" }}
    >
      <AgGridReact
        ref={gridRef}
        maintainColumnOrder={true}
        defaultColDef={defaultColDef}
        rowData={rowData}
        animateRows={true}
        columnDefs={columnDefs}
      />
    </div>
  );
}

export default Orderbook;
