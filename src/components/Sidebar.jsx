// src/components/Sidebar.js

/**
 * Sidebar Component
 * This component renders the sidebar navigation menu for the dashboard.
 * It includes links to different sections such as Overview, Reports, and Analytics.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

/**
 * Sidebar functional component
 * @returns {JSX.Element} A sidebar with navigation links
 */
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar header */}
      <h2>Dashboard</h2>
      
      {/* Navigation menu */}
      <ul>
        {/* Link to Overview page */}
        <li>
          <Link to="/">Overview</Link>
        </li>
        
        {/* Link to Reports page */}
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        
        {/* Link to Analytics page */}
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
