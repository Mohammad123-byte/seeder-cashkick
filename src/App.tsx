import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Sidebar from './components/organisms/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import CashAccelerationPage from './pages/CashAccelarationPage/CashAccelerationPage';

function App() {
  return (
    <Router>
      <Box display='flex'>
        <Sidebar />
        <Box component='main' flexGrow={1} padding='20px'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/cashAcceleration'
              element={<CashAccelerationPage />}
            />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
