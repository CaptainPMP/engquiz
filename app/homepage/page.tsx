'use client'
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CardQuiz from '@/components/CardQuiz';
import LevelCard from '@/components/LevelCard';
interface Card {
  title: string | null;
  description: string | null;
  url: string | undefined;
  color: string | undefined;
}
interface SectionProps {
  title: string;
  cards: Card[];
}

export default function Homepage() {
  return (
    <>
      <NavBar />
      <LevelCard />

      <div className="flex flex-col items-center bg-custom-color min-h-screen py-10">
        <div className="w-full max-w-5xl">
          <Section title="Easy" cards={[
            { title: "E1", description: "test", url: "./doing-test", color: "#FFDEC2" },
            { title: "E2", description: "test", url: "./doing-test", color: "#FFCFD2" },
            { title: "E3", description: "test", url: "./doing-test", color: "#F1C0E8" },
            { title: "E4", description: "test", url: "./doing-test", color: "#CFBAF0" },
            { title: "E5", description: "test", url: "./doing-test", color: "#A6C7F6" }
          ]} />
          <Section title="Medium" cards={[
            { title: "M1", description: "test", url: "./doing-test", color: "#FBD0AD" },
            { title: "M2", description: "test", url: "./doing-test", color: "#FFBBBF" },
            { title: "M3", description: "test", url: "./doing-test", color: "#F5B1E9" },
            { title: "M4", description: "test", url: "./doing-test", color: "#CAAAFB" },
            { title: "M5", description: "test", url: "./doing-test", color: "#8FBDFF" }
          ]} />
          <Section title="Hard" cards={[
            { title: "H1", description: "test", url: "./doing-test", color: "#FFC28E" },
            { title: "H2", description: "test", url: "./doing-test", color: "#FD9EA4" },
            { title: "H3", description: "test", url: "./doing-test", color: "#FFA3EE" },
            { title: "H4", description: "test", url: "./doing-test", color: "#B687FF" },
            { title: "H5", description: "test", url: "./doing-test", color: "#60AAF6" }
          ]} />
        </div>
      </div>
      <Footer />
    </>
  );
}

const Section: React.FC<SectionProps> = ({ title, cards }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {cards.map((card, index) => (
          <CardQuiz
            key={index}
            title={card.title}
            description={card.description}
            url={card.url}
            color={card.color}
          />
        ))}
      </div>
    </div>
  );
}