import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';
import { LogInPage } from './pages/loginPage';
import { ProfilePage } from './pages/ProfilePage';
import { ErrorPage } from './pages/ErrorPage';

export const App = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-screen">
      <Header></Header>
      <div className="bg-gradient-to-t from-orange via-alert-color to-purple ">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/login" element={<LogInPage />} />

          <Route path="/profil" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
};
