import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/HomePage';
import Login from './components/LoginPage';
import Police from './components/PolicePage';
import Station from './components/StationPage';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import CaseDetails from './components/CaseDetails';
import Profile from './components/Profile';
// import CaseDetails from './components/CaseDetails'
import AdminPage from './components/AdminPage';
import EachCaseData from './components/EachCaseData';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminPage />} />
          <Route path='/profile/23' element={<Profile/>}></Route>
          <Route path='case/R S BIRADAR/21' element={<EachCaseData/>}/>
          {/* <Route path="/station" element={<PrivateRoute allowedRoles={['officer']}><Station /></PrivateRoute>} /> */}
          <Route
            path="/personal-dashboard/:userid/cases" 
            element={<Station/>} 
          />
          {/* <Route
            path="/personal-dashboard/:userid/cases" 
            element={<PrivateRoute allowedRoles={['officer']}><Station /></PrivateRoute>} 
          /> */}
          <Route
            path="/personal-dashboard/:userid/cases/:caseId"
            element={<PrivateRoute allowedRoles={['officer']}><CaseDetails /></PrivateRoute>}
          />
          <Route path="/police" element={<PrivateRoute allowedRoles={['admin']}><Police /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;