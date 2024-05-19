// src/pages/Analytics.js

/**
 * Analytics Page Component
 * This component renders the Analytics page, which includes a LineChart.
 */

import React from 'react';
import LineChart from '../components/Linechart';

/**
 * Analytics functional component
 * @returns {JSX.Element} The Analytics page with a header and a LineChart
 */
const Analytics = () => {
  return (
    <div>
      {/* Page header */}
      <h1>Analytics</h1>
      
      {/* LineChart component to display analytics data */}
      <LineChart />
    </div>
  );
};

export default Analytics;
