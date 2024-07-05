export const BookFinder = () => {
  const BookCard = () => {
    return <>one book</>;
  };

  return (
    <div className="w-full">
      <form className="flex flex-col itens center-center gap-4">
        <div className="flex gap-4">icon cards</div>
        <input></input>
        <button></button>
      </form>
      <div>
        <BookCard></BookCard>
      </div>
    </div>
  );
};
