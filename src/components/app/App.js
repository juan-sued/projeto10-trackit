import '../../css/reset.css';
import '../../css/styles.css';
// imports css

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//imports react

import LoginPage from '../Login_Page/LoginPage';
import RegisterPage from '../Register_Page/RegisterPage';
import HabitsPage from '../Habits_Page/HabitsPage';
// import pages

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
