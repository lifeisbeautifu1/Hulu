import FlipMove from 'react-flip-move';

import { IMovie } from '../types';
import { Thumbnail } from './';

interface ResultsProps {
  results: IMovie[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
