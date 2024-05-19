// src/pages/Reports.js

/**
 * Reports Page Component
 * This component renders the Reports page, which includes a DataTable.
 * The DataTable displays a list of reports with columns such as ID, Name, Age, and Address.
 */

import React from 'react';
import DataTable from '../components/Datatable';

// Column definitions for the DataTable
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Age', width: 110 },
  { field: 'address', headerName: 'Address', width: 160 },
];

// Row data for the DataTable
const rows = [
  { id: 1, name: 'John Doe', age: 35, address: '123 Main St' },
  { id: 2, name: 'Jane Smith', age: 42, address: '456 Maple Ave' },
  // More rows can be added here...
];

/**
 * Reports functional component
 * @returns {JSX.Element} The Reports page with a header and a DataTable
 */
const Reports = () => {
  return (
    <div>
      {/* Page header */}
      <h1>Reports</h1>
      
      {/* DataTable component to display the reports data */}
      <DataTable rows={rows} columns={columns} />
    </div>
  );
};

export default Reports;
