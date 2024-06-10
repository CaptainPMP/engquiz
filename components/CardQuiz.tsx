import React from 'react';

type CardQuizProps = {
    title: string | null;
    description: string | null;
    url: string | undefined;
    color: string |  undefined;
}

function CardQuiz({title, description, url, color} : CardQuizProps){
    return (
        <div className={'p-5 rounded-xl text-center w-48 mx-auto hover:shadow-lg transition duration-200 ease-in-out'}
        style={{ backgroundColor: color }}>
          <h1 className=" text-xl font-bold">{title}</h1>
          <p className="mt-2 text-gray-700">{description}</p>
          <a href={url}
            className="mt-4 inline-flex items-center bg-white text-pink-500 py-2 px-4 rounded-xl shadow hover:bg-gray-100"
          >
            Start Quiz
            <span className="ml-2">→</span>
          </a>
        </div>
      );
    };
export default CardQuiz