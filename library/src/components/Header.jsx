import { Link } from 'react-router-dom';

export const Header = ({ userName, onLogout }) => {
  return (
    <div className="bg-light-orange flex justify-between p-5 text-font-color font-bold ">
      <Link to="/" className="font-serif">
        Knihovna xy
      </Link>
      {userName ? (
        <>
          <span> ctenar: {userName}</span>
          <Link onClick={onLogout} to="/">
            Odhlasit
          </Link>
        </>
      ) : (
        <Link to="/login">Přihlášení</Link>
      )}
    </div>
  );
};
