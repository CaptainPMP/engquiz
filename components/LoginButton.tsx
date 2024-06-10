import React from 'react';
import Link from 'next/link';

const LoginButton = () => {
  return (
    <Link href="/login">
      <button className="bg-custom-pink hover:bg-custom-footer text-white font-bold py-2 px-4 rounded">
        LOGIN
      </button>
    </Link>
  );
};

export default LoginButton;
