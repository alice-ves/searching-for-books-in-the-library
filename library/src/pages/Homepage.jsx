import { BookFinder } from '../components/BookFinder';
import { Quiz } from '../components/Quiz';
import { DayInfo } from '../components/DayInfo';

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-4 p-4">
      <BookFinder></BookFinder>
      <Quiz></Quiz>
      <DayInfo></DayInfo>
    </div>
  );
};
