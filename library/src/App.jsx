import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LogInPage } from './pages/loginPage';
import { ProfilePage } from './pages/ProfilePage';
import { ErrorPage } from './pages/ErrorPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { useState } from 'react';

export const App = () => {
  const [userName, setUserName] = useState('');

  const handleLogout = () => {
    setUserName('');
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen">
      <Header userName={userName} onLogout={handleLogout}></Header>
      <div className="bg-gradient-to-t from-orange via-alert-color to-purple ">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/login"
            element={<LogInPage setUserName={setUserName} />}
          />

          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/registrace" element={<RegistrationPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};
