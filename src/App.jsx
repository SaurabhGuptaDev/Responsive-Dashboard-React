// src/App.js

/**
 * App Component
 * This component sets up the main structure of the application, including routing and theming.
 * It uses Material-UI for theming and react-router-dom for routing.
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import theme from './theme';
import './App.css';

/**
 * App functional component
 * @returns {JSX.Element} The main application component with routing and theming
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          {/* Sidebar component for navigation */}
          <Sidebar />
          
          {/* Main content area */}
          <div className="main-content">
            <Routes>
              {/* Route for the Overview page */}
              <Route path="/" element={<Overview />} />
              
              {/* Route for the Reports page */}
              <Route path="/reports" element={<Reports />} />
              
              {/* Route for the Analytics page */}
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
