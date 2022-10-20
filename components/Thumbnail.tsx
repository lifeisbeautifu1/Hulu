import Image from 'next/image';
import { forwardRef } from 'react';

import { ThumbUpIcon } from '@heroicons/react/outline';
import { IMovie } from '../types';

const Thumbnail: React.FC<{ result: IMovie }> = forwardRef(
  ({ result }, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    return (
      <div
        ref={ref}
        className='group cursor-pointer p-2 transition ease-in duration-200 sm:hover:scale-105 z-50'
      >
        <Image
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          layout='responsive'
          height={1080}
          width={1920}
        />
        <div className='p-2 '>
          <p className='max-w-md truncate'>{result.overview}</p>
          <h2 className='mt-1 text-white text-2xl transition-all ease-in-out duration-100 group-hover:font-bold'>
            {result.title || result.original_name}
          </h2>
          <p className='flex items-center opacity-0 group-hover:opacity-100'>
            {result.media_type && `${result.media_type}  •`}{' '}
            {result.release_date || result.first_air_date} •
            <ThumbUpIcon className='h-6 mx-2' /> {result.vote_count}
          </p>
        </div>
      </div>
    );
  }
);

export default Thumbnail;
