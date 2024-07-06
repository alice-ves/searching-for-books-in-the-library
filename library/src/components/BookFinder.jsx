import { useState } from 'react';
import { IconBar } from './IconBar';

const BookList = ({ books }) => {
  return (
    <>
      {books.length > 0 ? (
        <div className="flex flex-col items-center gap-2 ">
          {books.map((book) => {
            return (
              <div
                className="bg-light-orange rounded-md w-10/12 h-52 "
                key={book.id}
              >
                <p className="font-bold">{book.volumeInfo.authors}</p>
                <p>{book.volumeInfo.title}</p>
                <p>{book.volumeInfo.subtitle}</p>
                <div className="flex w-full justify-center items-center">
                  <div className="w-1/2">
                    <img
                      className="w-16 object-cover"
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt={book.volumeInfo.title}
                    ></img>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-center">
                    <button className=" bg-red-orange p-2">rezervovat</button>
                    <button className=" bg-red-orange p-2">na wishlist</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <p className="font-bold">Knihy nenalezeny</p>
          <ul>
            <li>Zkontroluj si nazev</li>
            <li>napis nam na wishlist</li>
          </ul>
        </>
      )}
    </>
  );
};

export const BookFinder = () => {
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const fetchBooks = async (author) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=inauthor:${author}`,
    );
    const data = await response.json();
    setBooks(data.items || []);
    console.log(books);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('author', author);
    fetchBooks(author);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center"
      >
        <IconBar></IconBar>
        <input
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="Zadej autora"
          className="p-2 rounded-lg"
        ></input>
        <button
          type="submit"
          className="bg-light-orange p-2 rounded-lg text-dark-purple font-bold"
        >
          HLEDEJ
        </button>
      </form>
      <BookList books={books} author={author} />
    </div>
  );
};
