import React from "react";
import Card from "./Card";

const cardData = [
  { to: "assignment1", description: "Profile" },
  { to: "assignment2", description: "Background Changer" },
  { to: "assignment3", description: "Para Generator" },
  { to: "assignment4", description: "Github Info Card" },
];

const Landing = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {cardData.map((data, index) => (
          <Card key={index} link={data.to} description={data.description} />
        ))}
      </div>
    </div>
  );
};

export default Landing;
