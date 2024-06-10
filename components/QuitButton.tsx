import React from 'react';
import Link from 'next/link';

const QuitButton = () => {
  return (
    <div className="flex space-x-4">
  <Link href="/homepage">
    <button className="bg-custom-pink hover:bg-custom-footer text-white font-bold py-2 px-4 rounded mt-10 mb-10">
      Quit
    </button>
  </Link>
</div>
    );
    }


export default QuitButton;