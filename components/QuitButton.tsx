import React from 'react';
import Link from 'next/link';

const QuitButton = () => {
  return (
    <Link href="/homepage">
      <button className="bg-custom-pink hover:bg-custom-footer text-white font-bold py-2 px-4 rounded justify-right">
        quit
      </button>
    </Link>
  );
};

export default QuitButton;