import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bg-light-orange flex justify-between p-5 text-font-color font-bold ">
      <Link to="/" className="font-serif">
        Knihovna xy
      </Link>
      <Link to="/login">LOG IN</Link>
    </div>
  );
};
