// src/components/DataTable.js

/**
 * DataTable Component
 * This component renders a data table using the Material-UI DataGrid component.
 * It allows for pagination with adjustable page size.
 */

import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

/**
 * DataTable functional component
 * @param {Object[]} rows - The rows of data to display in the table
 * @param {Object[]} columns - The column definitions for the table
 * @returns {JSX.Element} A data grid with pagination
 */
const DataTable = ({ rows, columns }) => {
  // State for managing the page size
  const [pageSize, setPageSize] = useState(5);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows} // Data rows to display
        columns={columns} // Column definitions
        pageSize={pageSize} // Number of rows per page
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)} // Handle page size change
        rowsPerPageOptions={[5, 10, 20]} // Options for page size
        pagination // Enable pagination
      />
    </div>
  );
};

export default DataTable;
