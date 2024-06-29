import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Homepage';

export const App = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 
        <Route path="/login" element={}/>
        <Route path="/profile" element={}/>*/}
      </Routes>
      <Footer></Footer>
    </div>
  );
};
