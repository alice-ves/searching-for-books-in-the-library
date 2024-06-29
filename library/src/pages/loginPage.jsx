import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <p>
        pokud u nás ještě nemáte svůj účet, můžete se zaregistrovat{' '}
        <Link to="/registrace">ZDE</Link>
      </p>
    </div>
  );
};

export const LogInPage = ({ setUserName }) => {
  const [localUserName, setLocalUserName] = useState('');

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setUserName(localUserName);
  };

  return (
    <div className="text-light-orange flex flex-col items-center justify-evenly h-full">
      <form
        className="flex flex-col text-font-color w-2/3 gap-3"
        onSubmit={handleFormSubmit}
      >
        <input
          className="p-2 rounded-lg"
          type="text"
          placeholder="jmeno"
          value={localUserName}
          onChange={(evt) => setLocalUserName(evt.target.value)}
        ></input>
        <input
          className="p-2 rounded-lg"
          type="password"
          placeholder="nezadavej nic"
        ></input>
        <button
          onClick={handleFormSubmit}
          className="bg-light-orange p-2 rounded-lg text-dark-purple font-bold"
        >
          Přihlásit
        </button>
      </form>
      <Registration></Registration>
    </div>
  );
};
