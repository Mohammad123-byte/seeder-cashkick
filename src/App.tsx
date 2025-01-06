import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sidebar from './components/organisms/Sidebar';
import HomePage from './pages/HomePage/HomePage';
import CashAccelerationPage from './pages/CashAccelarationPage/CashAccelerationPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flexGrow: 1, padding: '20px' }}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/cashAcceleration'
              element={<CashAccelerationPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
