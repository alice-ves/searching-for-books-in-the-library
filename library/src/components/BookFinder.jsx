import { IconBar } from './IconBar';

export const BookFinder = () => {
  const BookCard = () => {
    return <>one book</>;
  };

  return (
    <div>
      <form className="flex flex-col gap-4  items-center">
        <IconBar></IconBar>
        <input></input>
        <button></button>
      </form>
      <div>
        <BookCard></BookCard>
      </div>
    </div>
  );
};
