// src/pages/Overview.js

/**
 * Overview Page Component
 * This component renders the Overview page, which includes a LineChart.
 */

import React from 'react';
import LineChart from '../components/Linechart';

/**
 * Overview functional component
 * @returns {JSX.Element} The Overview page with a header and a LineChart
 */
const Overview = () => {
  return (
    <div>
      {/* Page header */}
      <h1>Overview</h1>
      
      {/* LineChart component to display overview data */}
      <LineChart />
    </div>
  );
};

export default Overview;
