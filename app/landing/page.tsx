'use client'
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LoginButton from '@/components/LoginButton';

function App() {
  return (
    <><NavBar />
    <div className="flex flex-col items-center justify-center bg-custom-bg w-full">
        <h1 className="text-4xl font-bold text-custom-footer pt-10 text-center">Welcome to Hi Quiz!</h1>
        <p className="text-xl text-gray-600 pt-4 text-center">Here, you'll find challenging English tests every day to improve your skills and knowledge</p>
        <p className="text-xl text-gray-600 pt-4 mb-10 text-center">Explore various level of tests we have prepared for you and start challenging yourself today!</p>
    </div>

    <div className="flex flex-col justify-center items-center bg-white w-full">
      <div className="text-center pb-8">
        <h1 className="text-4xl mt-10 font-bold text-custom-pink">What's inside</h1>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
      <div className="flex flex-col border-2 border-gray-300 p-4 rounded-md shadow-lg overflow-hidden w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-custom-footer mb-2">Category</h3>
          <p className="text-gray-600 text-sm">
          Choose your difficulty level: Easy, Medium, or Hard, and test your English skills accordingly.</p>
      </div>

      <div className="flex flex-col border-2 border-gray-300 p-4 rounded-md shadow-lg overflow-hidden w-full md:w-1/2">
          <h3 className="text-2xl font-bold text-custom-footer mb-2">Level Up!</h3>
          <p className="text-gray-600 text-sm">
            Challenge yourself to higher difficulty levels and enhance your English skills accordingly.
          </p>
        </div>

        <div className="flex flex-col border-2 border-gray-300 p-4 rounded-md shadow-lg overflow-hidden w-full md:w-1/2 mb-10">
        <h3 className="text-2xl font-bold text-custom-footer mb-2">A Performance</h3>
        <p className="text-gray-600 text-sm">
          Track your test results to see your progress and identify areas for improvement.
        </p>
      </div>
    </div>

    </div>

    <div className="flex flex-col items-center justify-center bg-custom-bg w-full">
    <div className="text-center pb-8">
        <h1 className="text-4xl mt-10 font-bold text-custom-pink">Hi Quiz! master your exams</h1>
        <br></br><LoginButton/>
    </div>
    </div>
          
    <Footer /></>
    );
}

export default App;