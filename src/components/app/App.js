import '../../css/reset.css';
import '../../css/styles.css';
// imports css

import UserContext from '../../contexts/UserContext';
import PercentContext from '../../contexts/PercentContext';
//import context

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//imports react

import LoginPage from '../Login_Page/LoginPage';
import RegisterPage from '../Register_Page/RegisterPage';
import { TodayPage } from '../Today_Page/TodayPage';
import HabitsPage from '../Habits_Page/HabitsPage';
// import pages

export default function App() {
  const [percent, setPercent] = useState(0);
  const [objLoginResponse, setObjLoginResponse] = useState({});

  return (
    <PercentContext.Provider value={{ percent, setPercent }}>
      <UserContext.Provider value={{ objLoginResponse, setObjLoginResponse }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<RegisterPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </PercentContext.Provider>
  );
}
